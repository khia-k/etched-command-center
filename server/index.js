import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import pkg from '@slack/bolt';
const { App, ExpressReceiver } = pkg;
import { programsData } from './programsData.js';
import { updatesStore } from './updatesStore.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3001;
const SLACK_ENABLED = process.env.SLACK_BOT_TOKEN && process.env.SLACK_BOT_TOKEN !== 'placeholder' && process.env.SLACK_SIGNING_SECRET && process.env.SLACK_SIGNING_SECRET !== 'placeholder';

let app;
let slackApp;

if (SLACK_ENABLED) {
  // Create Express receiver for Slack
  const receiver = new ExpressReceiver({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    endpoints: '/slack/events'
  });

  // Initialize Slack app
  slackApp = new App({
    token: process.env.SLACK_BOT_TOKEN,
    receiver
  });

  app = receiver.app;
} else {
  console.log('Slack credentials not configured - running in web-only mode');
  app = express();
}

// Enable CORS for frontend
app.use(cors());
app.use(express.json());

// Store for tracking threads awaiting program selection
const pendingThreads = new Map();

// ===================
// Slack Event Handlers
// ===================

if (SLACK_ENABLED) {
// Handle app mentions - when someone @mentions the bot
slackApp.event('app_mention', async ({ event, client, say }) => {
  try {
    const threadTs = event.thread_ts || event.ts;
    const channelId = event.channel;
    const userId = event.user;

    // Get user info for the author name
    const userInfo = await client.users.info({ user: userId });
    const authorName = userInfo.user?.real_name || userInfo.user?.name || 'Unknown';

    // Store the initial message
    const threadKey = `${channelId}-${threadTs}`;

    if (!pendingThreads.has(threadKey)) {
      // This is a new update thread - prompt for program selection
      pendingThreads.set(threadKey, {
        channelId,
        threadTs,
        authorName,
        authorId: userId,
        messages: [{
          text: event.text.replace(/<@[A-Z0-9]+>/g, '').trim(), // Remove bot mention
          timestamp: event.ts,
          author: authorName
        }],
        createdAt: new Date().toISOString()
      });

      // Send program selection dropdown
      await client.chat.postMessage({
        channel: channelId,
        thread_ts: threadTs,
        text: 'Please select a program for this update:',
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: '📋 *Select a program for this update:*'
            }
          },
          {
            type: 'actions',
            block_id: 'program_select_block',
            elements: [
              {
                type: 'static_select',
                action_id: 'program_select',
                placeholder: {
                  type: 'plain_text',
                  text: 'Choose a program...'
                },
                options: programsData.map(program => ({
                  text: {
                    type: 'plain_text',
                    text: `${program.teamName}: ${program.name}`.substring(0, 75)
                  },
                  value: program.id
                }))
              }
            ]
          }
        ]
      });
    }
  } catch (error) {
    console.error('Error handling app_mention:', error);
  }
});

// Handle messages in threads (to capture follow-up messages)
slackApp.event('message', async ({ event, client }) => {
  try {
    // Only handle threaded messages (not the parent)
    if (!event.thread_ts || event.thread_ts === event.ts) return;

    // Ignore bot messages
    if (event.bot_id) return;

    const threadKey = `${event.channel}-${event.thread_ts}`;
    const pendingThread = pendingThreads.get(threadKey);

    if (pendingThread) {
      // Get user info
      const userInfo = await client.users.info({ user: event.user });
      const authorName = userInfo.user?.real_name || userInfo.user?.name || 'Unknown';

      // Add message to pending thread
      pendingThread.messages.push({
        text: event.text,
        timestamp: event.ts,
        author: authorName
      });

      // If program already selected, also add to the stored update
      if (pendingThread.programId) {
        updatesStore.addMessageToUpdate(
          pendingThread.programId,
          pendingThread.threadTs,
          {
            text: event.text,
            timestamp: event.ts,
            author: authorName
          }
        );
      }
    }
  } catch (error) {
    console.error('Error handling thread message:', error);
  }
});

// Handle program selection from dropdown
slackApp.action('program_select', async ({ action, body, ack, client }) => {
  await ack();

  try {
    const programId = action.selected_option.value;
    const channelId = body.channel.id;
    const threadTs = body.message.thread_ts;
    const threadKey = `${channelId}-${threadTs}`;

    const pendingThread = pendingThreads.get(threadKey);

    if (pendingThread) {
      // Find the program details
      const program = programsData.find(p => p.id === programId);

      if (program) {
        // Store the program selection
        pendingThread.programId = programId;

        // Create the update in our store
        updatesStore.createUpdate({
          programId,
          threadTs,
          channelId,
          authorName: pendingThread.authorName,
          authorId: pendingThread.authorId,
          messages: pendingThread.messages,
          createdAt: pendingThread.createdAt
        });

        // Confirm the selection
        await client.chat.postMessage({
          channel: channelId,
          thread_ts: threadTs,
          text: `✅ Update linked to *${program.teamName}: ${program.name}*\n\nAny additional messages in this thread will be automatically added to this update.`
        });

        // Update the original message to show selection was made
        await client.chat.update({
          channel: channelId,
          ts: body.message.ts,
          text: `Program selected: ${program.teamName}: ${program.name}`,
          blocks: [
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `✅ *Program selected:* ${program.teamName}: ${program.name}`
              }
            }
          ]
        });
      }
    }
  } catch (error) {
    console.error('Error handling program selection:', error);
  }
});
} // End SLACK_ENABLED block

// ===================
// REST API Endpoints
// ===================

// Get all updates for a program
app.get('/api/updates/:programId', (req, res) => {
  const { programId } = req.params;
  const updates = updatesStore.getUpdatesByProgram(programId);
  res.json(updates);
});

// Get all updates (for admin/debug)
app.get('/api/updates', (req, res) => {
  const updates = updatesStore.getAllUpdates();
  res.json(updates);
});

// Get available programs list
app.get('/api/programs', (req, res) => {
  res.json(programsData);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ===================
// Serve Frontend
// ===================

// Serve static files from the dist folder
app.use(express.static(path.join(__dirname, '../dist')));

// Handle client-side routing - serve index.html for all non-API routes
app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// ===================
// Start Server
// ===================

(async () => {
  if (SLACK_ENABLED) {
    await slackApp.start(PORT);
    console.log(`⚡️ Slack bot server is running on port ${PORT}`);
    console.log(`📡 Slack events endpoint: http://localhost:${PORT}/slack/events`);
  } else {
    app.listen(PORT, () => {
      console.log(`🌐 Web server is running on port ${PORT}`);
    });
  }
  console.log(`🔗 API endpoint: http://localhost:${PORT}/api`);
})();

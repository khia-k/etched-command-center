# Slack App Setup Instructions

This guide walks you through setting up the Slack bot for the Etched Command Center to automatically capture program updates.

## How the Bot Works

1. Someone @mentions the bot in any channel with their update
2. The bot responds with a dropdown to select which program the update belongs to
3. Once a program is selected, the update is linked and stored
4. Any follow-up messages in that thread are automatically added to the update
5. The frontend dashboard can then display these updates

---

## Step 1: Create a Slack App

1. Go to [https://api.slack.com/apps](https://api.slack.com/apps)
2. Click **"Create New App"**
3. Choose **"From scratch"**
4. Enter an App Name (e.g., "Etched Updates Bot")
5. Select your workspace
6. Click **"Create App"**

---

## Step 2: Configure Bot Permissions (OAuth Scopes)

1. In the left sidebar, click **"OAuth & Permissions"**
2. Scroll down to **"Scopes"** section
3. Under **"Bot Token Scopes"**, add these scopes:

| Scope | Purpose |
|-------|---------|
| `app_mentions:read` | Detect when someone @mentions the bot |
| `channels:history` | Read messages in public channels |
| `chat:write` | Send messages and respond to users |
| `users:read` | Get user profile info (names) for updates |

Click **"Add an OAuth Scope"** for each one.

---

## Step 3: Enable Event Subscriptions

1. In the left sidebar, click **"Event Subscriptions"**
2. Toggle **"Enable Events"** to **On**
3. For **"Request URL"**, you'll need a publicly accessible URL. Options:

   **Option A: Using ngrok (recommended for development)**
   ```bash
   # Install ngrok if you don't have it
   brew install ngrok

   # Start ngrok to tunnel to your local server
   ngrok http 3001
   ```
   Copy the HTTPS URL (e.g., `https://abc123.ngrok.io`) and add `/slack/events`:
   ```
   https://abc123.ngrok.io/slack/events
   ```

   **Option B: Deploy to a server**
   Use your server's URL with `/slack/events` path.

4. Once the URL is verified (shows green checkmark), scroll down to **"Subscribe to bot events"**

5. Click **"Add Bot User Event"** and add:
   - `app_mention` - When someone mentions the bot
   - `message.channels` - Messages in public channels (for thread replies)

6. Click **"Save Changes"**

---

## Step 4: Get Your Credentials

### Bot Token
1. Go to **"OAuth & Permissions"** in the sidebar
2. Click **"Install to Workspace"** (or "Reinstall" if already installed)
3. Authorize the app
4. Copy the **"Bot User OAuth Token"** (starts with `xoxb-`)

### Signing Secret
1. Go to **"Basic Information"** in the sidebar
2. Scroll to **"App Credentials"**
3. Copy the **"Signing Secret"**

---

## Step 5: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp server/.env.example server/.env
   ```

2. Edit `server/.env` with your credentials:
   ```
   SLACK_BOT_TOKEN=xoxb-your-actual-bot-token
   SLACK_SIGNING_SECRET=your-actual-signing-secret
   PORT=3001
   ```

---

## Step 6: Install Dependencies & Start Server

```bash
# Install dependencies (if not already done)
npm install

# Start the Slack bot server
npm run server

# Or run both frontend and server together
npm run dev:all
```

You should see:
```
⚡️ Slack bot server is running on port 3001
📡 Slack events endpoint: http://localhost:3001/slack/events
🔗 API endpoint: http://localhost:3001/api
```

---

## Step 7: Invite the Bot to Channels

1. Go to any Slack channel where you want to post updates
2. Type `/invite @Etched Updates Bot` (or whatever you named your app)
3. The bot is now listening in that channel

---

## Testing the Bot

1. In a channel where the bot is invited, post a message mentioning the bot:
   ```
   @Etched Updates Bot Here's my weekly update for the Growth Ops program...
   ```

2. The bot should respond with a dropdown to select a program

3. Select a program from the dropdown

4. The bot confirms the update is linked

5. Any follow-up messages in the thread are automatically captured

---

## API Endpoints

The server exposes these REST endpoints for the frontend:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/programs` | GET | List all programs |
| `/api/updates` | GET | Get all updates |
| `/api/updates/:programId` | GET | Get updates for a specific program |
| `/api/health` | GET | Health check |

---

## Troubleshooting

### "url_verification" error
Make sure your server is running and accessible at the Request URL before saving Event Subscriptions.

### Bot doesn't respond to mentions
1. Verify the bot is invited to the channel
2. Check that `app_mention` event is subscribed
3. Check server logs for errors

### "invalid_auth" error
Your `SLACK_BOT_TOKEN` is incorrect or the app needs to be reinstalled.

### "request_time_failure" error
The signing secret doesn't match. Double-check `SLACK_SIGNING_SECRET`.

---

## Production Deployment Notes

For production, you'll want to:

1. **Use a persistent database** instead of in-memory storage (e.g., PostgreSQL, MongoDB)
2. **Deploy to a server** with a permanent URL (Heroku, Railway, AWS, etc.)
3. **Update the Request URL** in Slack app settings to your production URL
4. **Enable Socket Mode** (optional) to avoid needing a public URL

---

## Next Steps

Once the Slack bot is working, the next integration is connecting the frontend to display real updates from the API instead of mock data.

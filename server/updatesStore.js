// In-memory store for updates (replace with database in production)
// Updates are stored by program ID, with each program having an array of updates

const updates = new Map();

export const updatesStore = {
  // Create a new update for a program
  createUpdate({ programId, threadTs, channelId, authorName, authorId, messages, createdAt }) {
    if (!updates.has(programId)) {
      updates.set(programId, []);
    }

    const programUpdates = updates.get(programId);

    // Check if update for this thread already exists
    const existingIndex = programUpdates.findIndex(u => u.threadTs === threadTs);

    const update = {
      id: `${programId}-${threadTs}`,
      programId,
      threadTs,
      channelId,
      authorName,
      authorId,
      messages: messages || [],
      createdAt: createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    if (existingIndex >= 0) {
      // Update existing
      programUpdates[existingIndex] = update;
    } else {
      // Add new update at the beginning (newest first)
      programUpdates.unshift(update);
    }

    return update;
  },

  // Add a message to an existing update
  addMessageToUpdate(programId, threadTs, message) {
    const programUpdates = updates.get(programId);
    if (!programUpdates) return null;

    const update = programUpdates.find(u => u.threadTs === threadTs);
    if (!update) return null;

    update.messages.push(message);
    update.updatedAt = new Date().toISOString();

    return update;
  },

  // Get all updates for a program (newest first)
  getUpdatesByProgram(programId) {
    const programUpdates = updates.get(programId) || [];

    // Format updates for the frontend
    return programUpdates.map(update => ({
      id: update.id,
      programId: update.programId,
      timestamp: update.createdAt,
      author: update.authorName,
      content: this.formatMessagesAsContent(update.messages),
      messages: update.messages
    }));
  },

  // Get all updates across all programs
  getAllUpdates() {
    const allUpdates = [];
    for (const [programId, programUpdates] of updates) {
      allUpdates.push(...programUpdates.map(update => ({
        ...update,
        content: this.formatMessagesAsContent(update.messages)
      })));
    }
    // Sort by created date, newest first
    return allUpdates.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  },

  // Format messages array into a single content string
  formatMessagesAsContent(messages) {
    if (!messages || messages.length === 0) return '';

    if (messages.length === 1) {
      return messages[0].text;
    }

    // Combine messages, showing author for follow-up messages
    return messages.map((msg, index) => {
      if (index === 0) {
        return msg.text;
      }
      return `\n---\n*${msg.author}:* ${msg.text}`;
    }).join('\n');
  },

  // Get update dates for a program (for the date toggle)
  getUpdateDatesForProgram(programId) {
    const programUpdates = updates.get(programId) || [];
    return programUpdates.map(u => u.createdAt);
  },

  // Get a specific update by program and date
  getUpdateByDate(programId, date) {
    const programUpdates = updates.get(programId) || [];
    return programUpdates.find(u => u.createdAt === date);
  },

  // Clear all updates (for testing)
  clear() {
    updates.clear();
  },

  // Seed with sample data (for testing)
  seedSampleData(programId, sampleUpdates) {
    updates.set(programId, sampleUpdates);
  }
};

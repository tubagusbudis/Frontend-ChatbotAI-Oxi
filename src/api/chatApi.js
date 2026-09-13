/**
 * Mock API abstraction layer for the chat functionality.
 * This simulates network delay and returns a dummy response.
 * Replace this with actual fetch calls once the backend API is ready.
 */
export const chatApi = {
  async sendMessage(prompt, conversationId) {
    // Simulate network latency (1-2 seconds)
    const delay = Math.random() * 1000 + 1000;
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate a small chance of API error
        if (Math.random() < 0.05) {
          reject(new Error("Simulated API Error. The AI service is temporarily unavailable."));
          return;
        }

        resolve({
          conversationId: conversationId || "conv_" + Math.random().toString(36).substring(7),
          message: {
            id: "msg_" + Math.random().toString(36).substring(7),
            role: "assistant",
            content: `This is a simulated response to: "${prompt}".\n\nWhen the real API is connected, this will contain the actual AI generated answer. React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".`,
            createdAt: new Date().toISOString(),
          },
        });
      }, delay);
    });
  },
};

/**
 * Mock API abstraction layer for the chat functionality.
 * This simulates network delay and returns a dummy response.
 * Replace this with actual fetch calls once the backend API is ready.
 */
export const chatApi = {
  async sendMessage(prompt, conversationId) {
    // Simulate network latency (1-2 seconds)
    const delay = Math.floor(Math.random() * 1500) + 2000;
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate a small chance of API error
        if (Math.random() < 0.05) {
          reject(new Error("Simulated API Error. The AI service is temporarily unavailable."));
          return;
        }

        resolve({
          conversationId:
            conversationId || "conv_" + Math.random().toString(36).substring(7),
          message: {
            id: "msg_" + Math.random().toString(36).substring(7),
            role: "assistant",
            content: `Ini adalah respon dummy dari Oxiox untuk pertanyaan lo: "${prompt}". Kalau API backend aslinya udah jadi, teks ini bakal diganti sama jawaban AI beneran.`,
            createdAt: new Date().toISOString(),
          },
        });
      }, delay);
    });
  },
};

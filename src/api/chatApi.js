export const chatApi = {
  async sendMessage(prompt, conversationId) {
    const apiUrl = "https://n8n.oxiox.my.id/webhook/2f5b14ba-d8f2-49d4-aac0-4c218783c312";
    const currentConversationId = conversationId || "MABA-" + Math.floor(Math.random() * 10000);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: currentConversationId,
          text: prompt,
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      // Try parsing JSON, fallback to text if it's not JSON
      let responseText = "";
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        // Handle common N8N webhook response formats
        if (data.reply) {
          responseText = data.reply;
        } else if (data.output) {
          responseText = data.output;
        } else if (data.text) {
          responseText = data.text;
        } else if (data.message) {
          responseText = data.message;
        } else {
          // If structure is unknown, stringify the whole object
          responseText = typeof data === "string" ? data : JSON.stringify(data);
        }
      } else {
        responseText = await response.text();
      }

      return {
        conversationId: currentConversationId,
        message: {
          id: "msg_" + Math.random().toString(36).substring(7),
          role: "assistant",
          content: responseText,
          createdAt: new Date().toISOString(),
        },
      };
    } catch (error) {
      throw new Error(error.message || "Failed to communicate with AI service.");
    }
  },
};

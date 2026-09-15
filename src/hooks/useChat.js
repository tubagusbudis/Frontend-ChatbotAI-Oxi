import { useState, useCallback } from "react";
import { chatApi } from "../api/chatApi.js";

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [conversationId, setConversationId] = useState(() => {
    const saved = localStorage.getItem("oxiox_chat_id");
    if (saved) return saved;
    const newId = "MABA-" + Math.floor(Math.random() * 10000);
    localStorage.setItem("oxiox_chat_id", newId);
    return newId;
  });

  const sendMessage = useCallback(
    async (content) => {
      // Validasi biar tidak duble hit saat sedang menunggu respon atau sedang loading
      if (!content.trim() || status === "sending" || status === "streaming") return;

      const userMessage = {
        id: "msg_" + Date.now(),
        role: "user",
        content,
        createdAt: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setStatus("sending");
      setError(null);

      try {
        const response = await chatApi.sendMessage(content, conversationId);
        
        if (response.conversationId && !conversationId) {
          setConversationId(response.conversationId);
        }

        const assistantMessage = {
          id: response.message.id || "msg_" + Date.now(),
          role: "assistant",
          content: response.message.content,
          createdAt: response.message.createdAt || new Date().toISOString(),
        };

        setMessages((prev) => [...prev, assistantMessage]);
        setStatus("success");
      } catch (err) {
        setError(err.message || "Your request could not be processed.");
        setStatus("error");
      }
    },
    [conversationId, status]
  );

  const retryMessage = useCallback(() => {
    // Find the last user message
    const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");
    if (lastUserMessage) {
      sendMessage(lastUserMessage.content);
    }
  }, [messages, sendMessage]);

  const clearConversation = useCallback(() => {
    setMessages([]);
    setConversationId(undefined);
    setStatus("idle");
    setError(null);
  }, []);

  return {
    messages,
    status,
    error,
    sendMessage,
    retryMessage,
    clearConversation,
  };
}

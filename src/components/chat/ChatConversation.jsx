import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage.jsx";
import { TypingIndicator } from "./TypingIndicator.jsx";

export function ChatConversation({ messages, isTyping }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 w-full max-w-3xl mx-auto overflow-y-auto scrollbar-hide py-4 px-2">
      {messages.map((msg) => (
        <ChatMessage key={msg.id} message={msg} />
      ))}
      {isTyping && <TypingIndicator />}
      <div ref={bottomRef} className="h-4" />
    </div>
  );
}

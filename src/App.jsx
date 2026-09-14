import { AppShell } from "./components/layout/AppShell.jsx";
import { AssistantGreeting } from "./components/chat/AssistantGreeting.jsx";
import { ChatConversation } from "./components/chat/ChatConversation.jsx";
import { ChatComposer } from "./components/chat/ChatComposer.jsx";
import { useChat } from "./hooks/useChat.js";

function App() {
  const { messages, status, error, sendMessage, retryMessage } = useChat();

  const isTyping = status === "sending" || status === "streaming";
  const isEmpty = messages.length === 0;

  return (
    <AppShell showBack={!isEmpty}>
      {/* Error Banner */}
      {error && (
        <div className="w-full max-w-3xl mx-auto mb-4 bg-red-500/20 border border-red-500/50 text-red-100 px-4 py-3 rounded-xl flex items-center justify-between">
          <span className="text-sm">{error}</span>
          <button 
            onClick={retryMessage}
            className="text-xs font-semibold uppercase tracking-wide bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded transition-colors"
          >
            Retry
          </button>
        </div>
      )}

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col justify-end min-h-0 w-full relative">
        {isEmpty ? (
          <AssistantGreeting />
        ) : (
          <ChatConversation messages={messages} isTyping={isTyping} />
        )}
      </div>

      {/* Composer Area */}
      <div className="w-full mt-4 flex-shrink-0">
        <ChatComposer onSend={sendMessage} status={status} />
      </div>
    </AppShell>
  );
}

export default App;

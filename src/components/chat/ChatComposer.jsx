import { useState } from "react";
import { Paperclip, AudioLines, ArrowUp } from "lucide-react";
import { PromptTextarea } from "./PromptTextarea.jsx";
import { IconButton } from "../common/IconButton.jsx";

export function ChatComposer({ onSend, status }) {
  const [prompt, setPrompt] = useState("");
  const isSending = status === "sending" || status === "streaming";
  const disabled = isSending;

  const handleSend = () => {
    if (prompt.trim() && !disabled) {
      onSend(prompt);
      setPrompt(""); // reset composer
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-4 animate-[fadeIn_0.5s_ease-out_0.2s_forwards] opacity-0">
      <div className="bg-[#1877d7]/80 backdrop-blur-lg border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.15)] rounded-[2rem] p-3 flex flex-col transition-all duration-300">
        
        {/* Input Area */}
        <div className="flex px-2 pt-2 min-h-[70px]">
          <PromptTextarea
            value={prompt}
            onChange={setPrompt}
            onSend={handleSend}
            disabled={disabled}
          />
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between mt-2 px-1 pb-1">
          <div className="flex items-center gap-2">
            <button 
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              disabled={disabled}
              title="Attach file"
            >
              <Paperclip size={16} className="rotate-45" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button 
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              disabled={disabled}
              title="Voice input"
            >
              <AudioLines size={16} />
            </button>
            
            <button 
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-lg ${
                prompt.trim() ? "bg-[#4ADE80] hover:bg-[#38c868] text-black" : "bg-[#4ADE80]/80 text-black/80"
              }`}
              onClick={handleSend}
              disabled={disabled || !prompt.trim()}
              title="Send message"
            >
              <ArrowUp size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Text below the composer */}
      <div className="flex items-center justify-center gap-6 mt-4 text-white/50 text-xs pointer-events-none">
         <span className="flex items-center gap-2">
           <span className="bg-white/10 px-2 py-1 rounded text-white/70 text-[10px] font-semibold tracking-wide border border-white/5 shadow-sm">Enter</span> 
           to send
         </span>
         <span className="flex items-center gap-2">
           <span className="bg-white/10 px-2 py-1 rounded text-white/70 text-[10px] font-semibold tracking-wide border border-white/5 shadow-sm">Shift + Enter</span> 
           for new line
         </span>
      </div>
    </div>
  );
}

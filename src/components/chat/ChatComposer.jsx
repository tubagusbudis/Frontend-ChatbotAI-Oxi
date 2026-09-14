import { useState } from "react";
import { ArrowUp } from "lucide-react";
import { PromptTextarea } from "./PromptTextarea.jsx";

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
    <div className="w-full relative z-50 transition-all duration-300">
      {/* Wrapper group */}
      <div className="relative group">
        {/* Layer Efek Ambient Bias Cahaya (Glow halus warna putih/abu di belakang kaca) */}
        <div className="absolute -inset-[1px] bg-white/5 rounded-[2.2rem] blur-xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>

        {/* CONTAINER UTAMA - EFEK LIQUID GLASS */}
        {/* bg-black/40 & backdrop-blur-xl adalah kunci utama efek kacanya */}
        {/* shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] bikin efek pantulan cahaya di bibir atas */}
        <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.1)] rounded-[2rem] p-2 flex flex-col transition-all duration-300">
          {/* Input Area */}
          <div className="flex px-3 pt-2 min-h-[55px]">
            <PromptTextarea
              value={prompt}
              onChange={setPrompt}
              onSend={handleSend}
              disabled={disabled}
            />
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-end mt-1 px-1 pb-1">
            {/* Tombol Send - Diubah jadi Glassy Theme */}
            <button
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                prompt.trim()
                  ? "bg-white/20 hover:bg-white/30 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  : "bg-white/5 text-white/30"
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

      {/* Footer Text */}
      <div className="flex items-center justify-center gap-6 mt-4 text-white/40 text-xs pointer-events-none">
        <span className="flex items-center gap-2">
          <span className="bg-black/30 px-2 py-1 rounded text-white/50 text-[10px] font-semibold tracking-wide border border-white/5 shadow-sm backdrop-blur-sm">
            Enter
          </span>
          to send
        </span>
        <span className="flex items-center gap-2">
          <span className="bg-black/30 px-2 py-1 rounded text-white/50 text-[10px] font-semibold tracking-wide border border-white/5 shadow-sm backdrop-blur-sm">
            Shift + Enter
          </span>
          for new line
        </span>
      </div>
    </div>
  );
}

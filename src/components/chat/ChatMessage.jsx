import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function ChatMessage({ message }) {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex w-full mb-6 animate-[fadeIn_0.3s_ease-out_forwards]", isUser ? "justify-end" : "justify-start")}>
      <div 
        className={cn(
          "max-w-[85%] sm:max-w-[75%] px-5 py-4 rounded-2xl leading-relaxed text-[15px]",
          isUser 
            ? "bg-white/10 text-white rounded-tr-sm" 
            : "frosted-glass text-white/90 rounded-tl-sm"
        )}
      >
        {!isUser && (
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded bg-gradient-to-br from-brand-cyan to-blue-600 flex items-center justify-center font-bold text-white text-[10px] shadow-sm">
              O
            </div>
            <span className="text-xs font-semibold text-brand-cyan/90 uppercase tracking-wider">Oxigen</span>
          </div>
        )}
        
        <div className="whitespace-pre-wrap font-sans">
          {message.content}
        </div>
      </div>
    </div>
  );
}

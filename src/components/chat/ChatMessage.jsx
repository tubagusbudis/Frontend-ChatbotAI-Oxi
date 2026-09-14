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
            ? "bg-white/10 text-white rounded-tr-sm shadow-lg shadow-black/20" 
            : "frosted-glass text-white/90 rounded-tl-sm shadow-lg"
        )}
      >
        {!isUser && (
          <div className="flex items-center gap-2 mb-2">
            <img
              src="/public/images/icon.png"
              alt="Oxigen Logo"
              className="bg-white w-5 h-5 object-contain rounded-sm shadow-sm"
            />
            <span className="text-xs font-semibold text-brand-cyan/90 uppercase tracking-wider">Oxiox</span>
          </div>
        )}
        
        <div className="whitespace-pre-wrap font-sans">
          {message.content}
        </div>
      </div>
    </div>
  );
}

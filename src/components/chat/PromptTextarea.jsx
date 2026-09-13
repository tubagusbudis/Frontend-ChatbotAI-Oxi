import { useEffect, useRef } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function PromptTextarea({ value, onChange, onSend, disabled }) {
  const textareaRef = useRef(null);

  // Auto-grow
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [value]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      placeholder="Ask anything..."
      rows={1}
      className={cn(
        "flex-1 w-full bg-transparent border-none outline-none resize-none",
        "text-white placeholder:text-white/40 text-[15px] sm:text-base leading-relaxed",
        "py-3 px-1 max-h-[200px] scrollbar-hide",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    />
  );
}

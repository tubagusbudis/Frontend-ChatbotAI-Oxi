export function TypingIndicator() {
  return (
    <div className="flex w-full mb-6 justify-start animate-[fadeIn_0.3s_ease-out_forwards]">
      <div className="max-w-[85%] px-5 py-4 rounded-2xl rounded-tl-sm frosted-glass flex items-center gap-2">
        <img
          src="/public/images/icon.png"
          alt="Oxigen Logo"
          className="bg-white w-5 h-5 object-contain rounded-sm shadow-sm"
        />
        
        <div className="flex gap-1.5 items-center h-4">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan/60 animate-[bounce_1.4s_infinite_ease-in-out_both]" style={{ animationDelay: '-0.32s' }}></div>
          <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan/60 animate-[bounce_1.4s_infinite_ease-in-out_both]" style={{ animationDelay: '-0.16s' }}></div>
          <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan/60 animate-[bounce_1.4s_infinite_ease-in-out_both]"></div>
        </div>
      </div>
    </div>
  );
}

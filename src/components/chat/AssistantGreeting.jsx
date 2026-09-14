export function AssistantGreeting() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full opacity-0 animate-[fadeIn_0.5s_ease-out_forwards] translate-y-4">
      <div className="mb-6 flex items-center justify-center">
        <div className="bg-white/80 rounded-[2rem] w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center shadow-lg drop-shadow-2xl p-1">
          <img
            src="/images/icon.png"
            alt="Oxigen Logo"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2 text-center">
        Hi, I'm Oxiox AI.
      </h1>

      <p className="text-base sm:text-lg text-blue-200/80 text-center max-w-md">
        How can I help you today?
      </p>

      <style>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

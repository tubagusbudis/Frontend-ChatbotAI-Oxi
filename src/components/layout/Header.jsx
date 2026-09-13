import { History } from "lucide-react";
import { IconButton } from "../common/IconButton.jsx";

export function Header() {
  return (
    <header className="flex items-center justify-start py-6">
      <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-white/80 text-sm font-medium">
        History
      </button>
    </header>
  );
}

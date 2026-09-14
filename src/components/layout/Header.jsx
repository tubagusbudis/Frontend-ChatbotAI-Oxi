import { History } from "lucide-react";
import { IconButton } from "../common/IconButton.jsx";

export function Header({ showBack = false}) {
  // Ubah justify-start jadi justify-between, dan tambahin w-full biar ngelebar
  return (
    <header className="flex items-center justify-between w-full py-6">
      {/* 1. Tombol Back dipindah ke atas biar muncul di sebelah Kiri */}
      <div className="flex item-center">
        {showBack && (
          <button
            onClick={() => (window.location.href = "/")}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white text-sm font-medium rounded-full backdrop-blur-md transition-all shadow-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back
          </button>
        )}
      </div>

      {/* 2. Tombol History dipindah ke bawah biar muncul di sebelah Kanan */}
      {/* <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-white/80 text-sm font-medium shadow-sm">
        History
      </button> */}
    </header>
  );
}
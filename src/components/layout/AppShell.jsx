import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";

export function AppShell({ children }) {
  return (
    <>
      <div className="ambient-glow" />
      <div className="flex flex-col min-h-screen relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6">
        <Header />
        <main className="flex-1 flex flex-col pt-8 pb-4">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

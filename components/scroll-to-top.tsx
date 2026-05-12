"use client";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className={`
        fixed bottom-6 right-5 z-50
        w-11 h-11 rounded-full
        bg-[#1b2d4f] text-[#f2ede4]
        flex items-center justify-center shadow-lg
        transition-all duration-300 ease-in-out
        hover:bg-[#2f5d8c] hover:scale-110 hover:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-[#2f5d8c] focus:ring-offset-2
        ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

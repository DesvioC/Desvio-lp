"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navLinks = [
  { href: "#produtos", label: "Produtos" },
  { href: "#inspiracao", label: "Inspire-se" },
  { href: "#decoracoes", label: "Decorações" },
  { href: "#personalizados", label: "Personalizados" },
];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f2ede4]/95 backdrop-blur-md border-b border-[#d4c9ae] shadow-sm"
          : "bg-[#f2ede4]/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logodesvio__-AOvjlZ1qgnDC7PkyrXeG2hAWlIXKwE.png"
              alt="DESVIO"
              width={200}
              height={60}
              className="h-10 md:h-14 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-[#2f5d8c] hover:text-[#1b2d4f] transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link href="#contato">
              <Button className="bg-[#1b2d4f] text-[#f2ede4] hover:bg-[#2f5d8c] transition-colors">
                Fale Conosco
              </Button>
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-[#1b2d4f] rounded-md hover:bg-[#e8e0d0] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 top-16 bg-black/20 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="md:hidden relative z-50 bg-[#f2ede4] border-t border-[#d4c9ae] shadow-lg">
            <nav className="flex flex-col px-6 py-6 gap-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-base font-medium text-[#2f5d8c] hover:text-[#1b2d4f] hover:bg-[#e8e0d0] transition-colors py-3 px-2 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-3">
                <Link href="#contato" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-[#1b2d4f] text-[#f2ede4] hover:bg-[#2f5d8c] transition-colors py-3 text-base">
                    Fale Conosco
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}

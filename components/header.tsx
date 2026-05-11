"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f2ede4]/95 backdrop-blur-md border-b border-[#d4c9ae]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logodesvio__-AOvjlZ1qgnDC7PkyrXeG2hAWlIXKwE.png"
              alt="DESVIO"
              width={200}
              height={60}
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#produtos" className="text-sm font-medium text-[#2f5d8c] hover:text-[#1b2d4f] transition-colors">
              Produtos
            </Link>
            <Link href="#aromas" className="text-sm font-medium text-[#2f5d8c] hover:text-[#1b2d4f] transition-colors">
              Aromas
            </Link>
            <Link href="#decoracoes" className="text-sm font-medium text-[#2f5d8c] hover:text-[#1b2d4f] transition-colors">
              Decorações
            </Link>
            <Link href="#personalizados" className="text-sm font-medium text-[#2f5d8c] hover:text-[#1b2d4f] transition-colors">
              Personalizados
            </Link>
            <Link href="#contato">
              <Button className="bg-[#1b2d4f] text-[#f2ede4] hover:bg-[#2f5d8c]">
                Fale Conosco
              </Button>
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-[#1b2d4f]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#f2ede4] border-t border-[#d4c9ae]">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <Link 
              href="#produtos" 
              className="text-sm font-medium text-[#2f5d8c] hover:text-[#1b2d4f] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Produtos
            </Link>
            <Link 
              href="#aromas" 
              className="text-sm font-medium text-[#2f5d8c] hover:text-[#1b2d4f] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Aromas
            </Link>
            <Link 
              href="#decoracoes" 
              className="text-sm font-medium text-[#2f5d8c] hover:text-[#1b2d4f] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Decorações
            </Link>
            <Link 
              href="#personalizados" 
              className="text-sm font-medium text-[#2f5d8c] hover:text-[#1b2d4f] transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Personalizados
            </Link>
            <Link href="#contato" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-[#1b2d4f] text-[#f2ede4] hover:bg-[#2f5d8c]">
                Fale Conosco
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

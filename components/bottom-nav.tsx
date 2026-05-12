"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Sparkles, Gift, MessageCircle } from "lucide-react";

const links = [
  { href: "#produtos", label: "Produtos", icon: ShoppingBag },
  { href: "#personalizados", label: "Criar", icon: Gift },
  { href: "#inspiracao", label: "Inspire-se", icon: Sparkles },
  { href: "#contato", label: "Contato", icon: MessageCircle },
];

export function BottomNav() {
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);

     const sections = links.map((l) => l.href.replace("#", ""));

for (const id of sections) {
  const el = document.getElementById(id);
  if (el) {
    const rect = el.getBoundingClientRect();

    if (rect.top <= 150 && rect.bottom >= 150) {
      setActive(`#${id}`);
      break;
    }
  }
}
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <nav
      className={`
        md:hidden fixed bottom-0 left-0 right-0 z-50
        bg-[#1b2d4f] border-t border-[#2f5d8c]/40
        pb-safe
        transition-all duration-300
        ${visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
      `}
    >
      <div className="flex items-stretch justify-around">
        {links.map(({ href, label, icon: Icon }) => {
          const isActive = active === href;

          return (
            <Link
              key={href}
              href={href}
              onClick={(e) => {
                e.preventDefault();

                const el = document.querySelector(href);
                if (el) {
                  const y =
                    el.getBoundingClientRect().top +
                    window.scrollY -
                    80;

                  window.scrollTo({
                    top: y,
                    behavior: "smooth",
                  });
                }
              }}
              className={`
                relative
                flex flex-col items-center justify-center gap-1
                py-3 px-2 flex-1 text-center
                transition-colors duration-200
                ${
                  isActive
                    ? "text-[#f2ede4]"
                    : "text-[#f2ede4]/50"
                }
              `}
            >
              <Icon
                className={`w-5 h-5 transition-transform duration-200 ${
                  isActive ? "scale-110" : ""
                }`}
              />

              <span className="text-[10px] font-medium leading-none">
                {label}
              </span>

              {isActive && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-[#f2ede4]" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

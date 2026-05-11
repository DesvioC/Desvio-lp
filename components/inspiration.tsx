"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const inspirations = [
  {
    title: "Girls Candle Club",
    description: "Perfeita para encontros entre amigas",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/girls%20candle%20club-KZoTYm1YePW5kQNBJpL8ghvJBBDfGi.jpeg",
    position: "center 40%",
  },
  {
    title: "Morango com Chantilly",
    description: "Doçura irresistível em forma de vela",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/morango-Lh2CLGalKxGDBiXnlhLVAXnapGrmiD.png",
    position: "center 0%",
  },
  {
    title: "Dia das Mães - Flor de Cerejeira",
    description: "Presente especial para quem mais ama",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dia%20das%20maes%20flor%20cerejeira-YAxizw2UohH9SYcALToCmLnorerbo3.jpeg",
    position: "center 35%",
  },
  {
    title: "Para sua Banda Preferida",
    description: "Homenageie quem você ama em forma de vela",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bandapreferida-vTbeUByBOEcqfBtCOeH1veDTOH5EKB.jpeg",
    position: "center 30%",
  },
  {
    title: "Para Leitoras",
    description: "Uma leitora vive mil vidas antes de morrer",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/leitora-RpKM656cV8ZPcTr5YoI2ZNPo4i4gDx.jpeg",
    position: "center 45%",
  },
  {
    title: "Para o Amor da sua Vida",
    description: "Tudo que você toca vira amor",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vira%20amor-rVpKYZ82KEabdL4KD694frWyfoj2pv.jpeg",
    position: "center 35%",
  },
  {
    title: "Dia das Mães - Coco e Baunilha",
    description: "Combinação clássica e irresistível",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dia%20das%20maes%20coco%20e%20baunilha-lhK7t9l3M73Tk8BCb1x6MCqhDiiEAT.jpeg",
    position: "center 40%",
  },
  {
    title: "Chantilly Chocolate",
    description: "Doçura em forma de aroma",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chocolate-i7X2b99ZYB6PL30rVcFAzEWS3fkK9X.png",
    position: "center 30%",
  },
  {
    title: "BTS World Tour",
    description: "Edição especial para fãs",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BTS%20ARIRANG-3wBIHjFmM71ZrTESNaXGCgGMgYvC54.png",
    position: "center 35%",
  },
];

// Watermark component
function Watermark() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SIMBOLO%20MARCA-B3yJptOB1aAJxEUB1GfHhhNBIzLPfG.png"
        alt=""
        width={60}
        height={60}
        className="opacity-25"
      />
    </div>
  );
}

export function Inspiration() {
  return (
    <section className="py-24 bg-[#d4c9ae]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[#2a7a72] font-medium mb-4">
            Para se Inspirar
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b2d4f] mb-6 text-balance">
            Ideias que já criamos
          </h2>
          <p className="text-[#2f5d8c] max-w-2xl mx-auto text-pretty">
            Confira algumas das nossas criações mais queridas. Cada vela conta uma história e desperta emoções únicas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {inspirations.map((item) => (
            <Card
              key={item.title}
              className="group overflow-hidden border-[#d4c9ae] hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden bg-[#f2ede4]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  style={{ objectPosition: item.position }}
                />
                <Watermark />
              </div>
              <CardContent className="p-4 bg-white">
                <h3 className="font-serif text-base font-bold text-[#1b2d4f] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#2f5d8c]">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

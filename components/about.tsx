import Image from "next/image";

// Whale tail SVG component based on brand symbol
function WhaleTail({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" className={className} fill="currentColor">
      <path d="M50 0C35 0 25 15 20 30C15 45 5 55 0 60L50 45L100 60C95 55 85 45 80 30C75 15 65 0 50 0Z" />
    </svg>
  );
}

export function About() {
  return (
    <section id="sobre" className="py-24 bg-white relative overflow-hidden">
      {/* Light rays decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          background: 'conic-gradient(from 180deg at 50% 50%, transparent 0deg, #2a7a72 30deg, transparent 60deg, #2a7a72 90deg, transparent 120deg, #2a7a72 150deg, transparent 180deg, #2a7a72 210deg, transparent 240deg, #2a7a72 270deg, transparent 300deg, #2a7a72 330deg, transparent 360deg)'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl relative h-[550px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/produ%C3%A7%C3%A3o-WpL9zsHqNKIljKiblO16oXsAnGlZIX.jpeg"
                alt="Produção artesanal de velas DESVIO"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 15%' }}
              />
              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SIMBOLO%20MARCA-B3yJptOB1aAJxEUB1GfHhhNBIzLPfG.png"
                  alt=""
                  width={120}
                  height={120}
                  className="opacity-30"
                />
              </div>
            </div>
            
            {/* Decorative whale tail */}
            <div className="absolute -bottom-4 -left-4 hidden md:block">
              <WhaleTail className="w-16 h-10 text-[#2a7a72]/20" />
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#2a7a72] font-medium mb-4">
              Nossa Essência
            </p>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1b2d4f] mb-6 text-balance">
              Desvio não é fuga.<br />
              <span className="text-[#2a7a72]">É reconexão.</span>
            </h2>
            
            <div className="space-y-4 text-[#2f5d8c]">
              <p className="text-lg text-pretty leading-relaxed">
                Cada vela é um convite para sair do automático e voltar pra si. O aroma te transporta para um lugar, uma memória, uma sensação. Mas o destino final é sempre você.
              </p>
              
              <p className="italic text-[#1b2d4f] font-serif text-lg border-l-4 border-[#2a7a72] pl-4">
                {'"'}No fim, todo caminho importante é de dentro pra fora.{'"'}
              </p>
            </div>

            {/* Material specs */}
            <div className="mt-8 p-6 bg-[#f2ede4] rounded-xl">
              <p className="text-sm text-[#1b2d4f] font-medium mb-3">Feito com presença:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-white rounded-full text-xs text-[#2f5d8c] border border-[#d4c9ae]">
                  Cera de coco 100% vegetal
                </span>
                <span className="px-3 py-1.5 bg-white rounded-full text-xs text-[#2f5d8c] border border-[#d4c9ae]">
                  Pavios de algodão ou madeira
                </span>
                <span className="px-3 py-1.5 bg-white rounded-full text-xs text-[#2f5d8c] border border-[#d4c9ae]">
                  Livre de parafinas
                </span>
                <span className="px-3 py-1.5 bg-white rounded-full text-xs text-[#2f5d8c] border border-[#d4c9ae]">
                  Sem substâncias tóxicas
                </span>
                <span className="px-3 py-1.5 bg-white rounded-full text-xs text-[#2f5d8c] border border-[#d4c9ae]">
                  Aromas premium
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-[#d4c9ae]">
              <div className="text-center">
                <p className="font-serif text-2xl font-bold text-[#1b2d4f]">12+</p>
                <p className="text-sm text-[#2f5d8c]">Aromas</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-2xl font-bold text-[#1b2d4f]">5</p>
                <p className="text-sm text-[#2f5d8c]">Tamanhos</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-2xl font-bold text-[#1b2d4f]">7</p>
                <p className="text-sm text-[#2f5d8c]">Decorações</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

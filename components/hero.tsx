import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 md:pt-32 overflow-hidden bg-[#f2ede4]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-[#2a7a72] font-medium mb-6">
              Velas Aromáticas Artesanais
            </p>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#1b2d4f] leading-tight text-balance mb-8">
              Chegue diferente, mesmo que no mesmo lugar
            </h1>
            
            <p className="text-lg md:text-xl text-[#2f5d8c] max-w-xl mx-auto lg:mx-0 mb-12 text-pretty">
              Velas artesanais feitas com amor e dedicação para transformar seus momentos em experiências sensoriais únicas.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="#produtos">
                <Button size="lg" className="bg-[#1b2d4f] text-[#f2ede4] hover:bg-[#2f5d8c] px-8 py-6 text-base">
                  Ver Produtos
                </Button>
              </Link>
              <Link href="#aromas">
                <Button size="lg" variant="outline" className="border-[#1b2d4f] text-[#1b2d4f] hover:bg-[#1b2d4f]/10 px-8 py-6 text-base">
                  Explorar Aromas
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl relative aspect-square">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DESVIO%20P-mPZzaKd6FxBPHRbyvrE1kQ20o0zDc1.png"
                    alt="Vela DESVIO P com flor de margarida"
                    fill
                    className="object-cover object-top"
                    style={{ objectPosition: 'center 15%' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SIMBOLO%20MARCA-B3yJptOB1aAJxEUB1GfHhhNBIzLPfG.png" alt="" width={50} height={50} className="opacity-25" />
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl relative aspect-square">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DESVIO%20G-tJgAwEymmmovOB6aVNwNsob6Qs3a6I.png"
                    alt="Vela DESVIO G com efeito marmorizado azul"
                    fill
                    className="object-cover object-top"
                    style={{ objectPosition: 'center 15%' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SIMBOLO%20MARCA-B3yJptOB1aAJxEUB1GfHhhNBIzLPfG.png" alt="" width={50} height={50} className="opacity-25" />
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-xl relative aspect-square">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DESVIO%20M-yCPsfu7w1w6pFojaHtDLPY4gTvRg1h.png"
                    alt="Velas DESVIO M com decoração floral"
                    fill
                    className="object-cover object-top"
                    style={{ objectPosition: 'center 15%' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SIMBOLO%20MARCA-B3yJptOB1aAJxEUB1GfHhhNBIzLPfG.png" alt="" width={50} height={50} className="opacity-25" />
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl relative aspect-square">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chocolate-i7X2b99ZYB6PL30rVcFAzEWS3fkK9X.png"
                    alt="Vela de chocolate com chantilly"
                    fill
                    className="object-cover object-top"
                    style={{ objectPosition: 'center 15%' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SIMBOLO%20MARCA-B3yJptOB1aAJxEUB1GfHhhNBIzLPfG.png" alt="" width={50} height={50} className="opacity-25" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <Link href="#produtos">
            <ArrowDown className="w-6 h-6 text-[#2f5d8c]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

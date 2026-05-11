import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Users, Briefcase, Heart, Calendar, Star } from "lucide-react";

const useCases = [
  {
    title: "Lembrancinhas",
    description: "Casamentos, aniversários, chás de bebê e mais.",
    icon: Gift,
  },
  {
    title: "Eventos Corporativos",
    description: "Brindes personalizados com a sua marca.",
    icon: Briefcase,
  },
  {
    title: "Confraternizações",
    description: "Presentes únicos para sua equipe ou amigos.",
    icon: Users,
  },
  {
    title: "Dia das Mães",
    description: "Surpreenda quem você ama com algo especial.",
    icon: Heart,
  },
  {
    title: "Datas Especiais",
    description: "Natal, Páscoa, Dia dos Namorados e muito mais.",
    icon: Calendar,
  },
  {
    title: "Edições Limitadas",
    description: "Criações exclusivas para momentos únicos.",
    icon: Star,
  },
];

const personalizedImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Personalizados%201-L47gRKRTNHAfZCHe7aD3LOqxLWi80C.jpg",
    alt: "Lembrancinhas de casamento Bruna e Diego",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/personalizados%202-I1TV2hNMfOLHA06knrV8NC07GAoXju.jpg",
    alt: "Velas personalizadas para festa de aniversário",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/personalizados%203-eodbBHCxsacOdtBcX5FdRgeEBOVtj1.jpg",
    alt: "Produção de velas personalizadas em latas",
  },
];

export function Personalized() {
  return (
    <section id="personalizados" className="py-24 bg-[#f2ede4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[#2a7a72] font-medium mb-4">
            Personalizados
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b2d4f] mb-6 text-balance">
            Velas em latas para eventos e brindes
          </h2>
          <p className="text-[#2f5d8c] max-w-2xl mx-auto text-pretty">
            Velas personalizadas com sua arte ou logo, perfeitas para eventos, brindes corporativos e lembrancinhas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <div>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {personalizedImages.map((img, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-lg aspect-[3/4] relative">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 30%' }}
                  />
                  {/* Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SIMBOLO%20MARCA-B3yJptOB1aAJxEUB1GfHhhNBIzLPfG.png"
                      alt=""
                      width={40}
                      height={40}
                      className="opacity-25"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#2a7a72]" />
                <span className="text-[#1b2d4f]">Personalização completa com sua arte ou logo</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#2a7a72]" />
                <span className="text-[#1b2d4f]">Escolha o tamanho, aroma e decoração</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#2a7a72]" />
                <span className="text-[#1b2d4f]">Prazo mínimo de produção: 15 dias</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#2a7a72]" />
                <span className="text-[#1b2d4f]">Valores a consultar dependendo do projeto</span>
              </div>
            </div>

            <div className="p-6 bg-[#a898c0]/20 rounded-xl border border-[#a898c0]/30">
              <p className="text-sm text-[#1b2d4f]">
                <span className="font-semibold">Dica:</span> Para pedidos personalizados, entre em contato com antecedência para garantir a disponibilidade na data desejada.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {useCases.map((useCase) => (
              <Card
                key={useCase.title}
                className="group bg-white border-[#d4c9ae] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-5">
                  <div className="w-12 h-12 mb-4 rounded-full bg-[#2a7a72]/10 flex items-center justify-center group-hover:bg-[#2a7a72]/20 transition-colors">
                    <useCase.icon className="w-6 h-6 text-[#2a7a72]" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#1b2d4f] mb-1">
                    {useCase.title}
                  </h3>
                  <p className="text-xs text-[#2f5d8c] text-pretty">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

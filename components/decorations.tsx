import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, Shell, Gem, Leaf, Palette, Flower } from "lucide-react";
import { decoracoes } from "@/data/options";
const iconMap = {
  sparkles: Sparkles,
  palette: Palette,
  gem: Gem,
  shell: Shell,
  leaf: Leaf,
  heart: Heart,
  flower: Flower,
};

export function Decorations() {
  return (
    <section id="decoracoes" className="py-24 bg-[#d4c9ae]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[#2a7a72] font-medium mb-4">
            Personalize sua Vela
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b2d4f] mb-6 text-balance">
            Tipos de Decoração
          </h2>
          <p className="text-[#2f5d8c] max-w-2xl mx-auto text-pretty">
            Escolha entre diversos estilos de decoração para tornar sua vela ainda mais especial.
            Decoração personalizada disponível sob consulta.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {decorations.map((decoration) => (
            <Card
              key={decoration.name}
              className="group bg-white border-[#d4c9ae] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#2a7a72]/10 flex items-center justify-center group-hover:bg-[#2a7a72]/20 transition-colors">
                  <decoration.icon className="w-7 h-7 text-[#2a7a72]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1b2d4f] mb-2">
                  {decoration.name}
                </h3>
                <p className="text-sm text-[#2f5d8c] text-pretty">
                  {decoration.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[#2f5d8c]">
            * Algumas decorações especiais podem ter valores adicionais. Consulte-nos!
          </p>
        </div>
      </div>
    </section>
  );
}

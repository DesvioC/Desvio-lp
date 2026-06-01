"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { aromas } from "@/data/options";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Flower, Waves, Flame, Sparkles } from "lucide-react";

const iconMap = {
  leaf: Leaf,
  flower: Flower,
  waves: Waves,
  flame: Flame,
  sparkles: Sparkles,
};

const categories = [
  { name: "Todos", color: "bg-[#1b2d4f]", hoverColor: "hover:bg-[#1b2d4f]/80", textColor: "text-white" },
  { name: "Herbal", color: "bg-[#2a7a72]", hoverColor: "hover:bg-[#2a7a72]/80", textColor: "text-white" },
  { name: "Floral", color: "bg-[#a898c0]", hoverColor: "hover:bg-[#a898c0]/80", textColor: "text-white" },
  { name: "Adocicado", color: "bg-[#6b1d2c]", hoverColor: "hover:bg-[#6b1d2c]/80", textColor: "text-white" },
  { name: "Marinho", color: "bg-[#2f5d8c]", hoverColor: "hover:bg-[#2f5d8c]/80", textColor: "text-white" },
];

export function Aromas() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredAromas = aromas.filter(
    (aroma) =>
      activeCategory === "Todos" ||
      aroma.categories.some((cat) => cat.includes(activeCategory))
  );

  const getCategoryColor = (categoryName: string) => {
    const cat = categories.find(c => c.name === categoryName);
    return cat || categories[0];
  };

  return (
    <section id="aromas" className="py-24 bg-[#f2ede4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-[#2a7a72] font-medium mb-4">
            Aromas Disponíveis
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b2d4f] mb-6 text-balance">
            Escolha sua fragrância favorita
          </h2>
          <p className="text-[#2f5d8c] max-w-2xl mx-auto mb-8 text-pretty">
            Temos uma variedade de aromas para todos os gostos. Caso queira sugerir outro aroma, podemos providenciar!
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const isActive = activeCategory === category.name;
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm",
                    isActive
                      ? `${category.color} ${category.textColor}`
                      : `bg-white border-2 text-[#1b2d4f] ${category.hoverColor.replace('hover:bg', 'hover:border')}`
                  )}
                  style={!isActive ? { borderColor: category.color.replace('bg-[', '').replace(']', '') } : undefined}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:overflow-visible">
         {filteredAromas.map((aroma) => {
  const Icon = iconMap[aroma.icon as keyof typeof iconMap];

  return (
            <Card
              key={aroma.name}
              className="group bg-white border-[#d4c9ae] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 snap-start shrink-0 w-[75vw] sm:w-auto"
            >
              <CardContent className="p-6">
                <div
                  className={cn(
                    "w-16 h-16 rounded-full mb-4 flex items-center justify-center",
                    aroma.color
                  )}
                >
                <Icon className={cn("w-8 h-8", aroma.iconColor)} />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1b2d4f] mb-2">
                  {aroma.name}
                </h3>
                <p className="text-sm text-[#2f5d8c] mb-4 text-pretty">
                  {aroma.description}
                </p>

<div className="flex flex-wrap gap-1">
  {aroma.categories.map((cat) => {
    const catData = getCategoryColor(cat.split(" ")[0]);

    return (
      <Badge
        key={cat}
        variant="outline"
        className="text-xs"
        style={{
          borderColor: catData.color.replace("bg-[", "").replace("]", ""),
          color: catData.color.replace("bg-[", "").replace("]", ""),
        }}
      >
        {cat}
      </Badge>
    );
  })}
</div>
                
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

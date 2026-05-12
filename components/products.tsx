"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ChevronRight } from "lucide-react";

const products = [
  {
    name: "DESVIO P",
    weight: "80g",
    originalPrice: 45,
    price: 39,
    category: "Essenciais",
    productionTime: "7 dias",
    description: "Perfeita para pequenos ambientes e momentos de relaxamento.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DESVIO%20P-mPZzaKd6FxBPHRbyvrE1kQ20o0zDc1.png",
  },
  {
    name: "DESVIO M",
    weight: "150g",
    originalPrice: 65,
    price: 59,
    category: "Essenciais",
    productionTime: "7 dias",
    description: "Tamanho ideal para salas e quartos de tamanho médio.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DESVIO%20M-yCPsfu7w1w6pFojaHtDLPY4gTvRg1h.png",
  },
  {
    name: "DESVIO G",
    weight: "200g",
    originalPrice: 79,
    price: 65,
    category: "Essenciais",
    productionTime: "7 dias",
    description: "Nossa vela clássica para espaços maiores e durabilidade estendida.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DESVIO%20G-tJgAwEymmmovOB6aVNwNsob6Qs3a6I.png",
  },
  {
    name: "DESVIO Quadrada",
    weight: "200g",
    originalPrice: null,
    price: 89,
    category: "Especiais",
    productionTime: "10 dias",
    description: "Design elegante com tampa de madeira artesanal.",
    highlight: "Tampa de madeira",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DESVIO%20QUADRADA-R9ZlXma7e2i0DkkuUFbQOt4VjthXSV.jpeg",
  },
  {
    name: "DESVIO Redonda",
    weight: "280g",
    originalPrice: null,
    price: 96,
    category: "Especiais",
    productionTime: "10 dias",
    description: "Nossa vela premium com design sofisticado e acabamento especial.",
    highlight: "Premium",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DESVIO%20REDONDA-9sxYKDuJfcRUwSasnTTrOocyCtVSQS.jpeg",
  },
];

export function Products() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [aroma, setAroma] = useState("");
  const [decoracao, setDecoracao] = useState("");

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.offsetWidth * 0.8;
    setActiveIndex(Math.round(scrollLeft / cardWidth));
  };

  return (
    <section id="produtos" className="py-24 bg-[#d4c9ae]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[#2a7a72] font-medium mb-4">
            Nossa Coleção
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1b2d4f] mb-6 text-balance">
            Encontre a vela perfeita para você
          </h2>
        </div>

        <div className="flex items-center gap-2 text-[#2f5d8c] text-sm mb-3 md:hidden">
          <span>Deslize para ver mais</span>
          <ChevronRight className="w-4 h-4 animate-bounce-x" />
        </div>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible scrollbar-hide"
        >
          {products.map((product) => (
            <Card key={product.name} className="group bg-white border-[#d4c9ae] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden snap-start shrink-0 w-[80vw] sm:w-auto">
              
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

<CardContent className="p-6">
  <div className="flex items-start justify-between mb-3">
    <div>
      <h3 className="font-serif text-xl font-bold text-[#1b2d4f]">
        {product.name}
      </h3>
      <p className="text-sm text-[#2f5d8c]">{product.weight}</p>
    </div>

    <div className="text-right">
      {product.originalPrice && (
        <p className="text-sm text-[#2f5d8c] line-through">
          R$ {product.originalPrice}
        </p>
      )}
      <p className="text-2xl font-bold text-[#2a7a72]">
        R$ {product.price}
      </p>
    </div>
  </div>

  <p className="text-sm text-[#2f5d8c] mb-4">
    {product.description}
  </p>

  {product.highlight && (
    <Badge variant="outline" className="mb-4 border-[#a898c0] text-[#a898c0]">
      {product.highlight}
    </Badge>
  )}

  {/* BOTÃO */}
  <button
    onClick={() => {
      setSelectedProduct(product);
      setAroma("");
      setDecoracao("");
    }}
    className="mt-4 w-full text-sm font-medium bg-[#1b2d4f] text-[#f2ede4] py-2 rounded-full hover:bg-[#2f5d8c] transition-colors"
  >
    Quero pedir
  </button>

  {/* PRAZO */}
  <div className="flex items-center gap-2 text-xs text-[#2f5d8c] mt-3">
    <Clock className="w-4 h-4" />
    <span>Prazo de produção: {product.productionTime}</span>
  </div>
</CardContent>
              
            </Card>
          ))}
        </div>

        {/* Indicadores mobile */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {products.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === activeIndex ? "bg-[#1b2d4f] w-4" : "bg-[#d4c9ae]"
              }`}
            />
          ))}
        </div>
{selectedProduct && (
  <div
  className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
  onClick={() => setSelectedProduct(null)}
>

    <div
  className="bg-white w-[90%] max-w-sm rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
  onClick={(e) => e.stopPropagation()}
>

      <h3 className="font-serif text-xl font-bold text-[#1b2d4f] mb-2 text-center">
        {selectedProduct.name}
      </h3>

      <p className="text-xs text-[#2f5d8c] text-center mb-5">
        Personalize sua vela
      </p>

      <div className="mb-3">
        <label className="text-xs text-[#2f5d8c] mb-1 block">Aroma</label>
        <select
          value={aroma}
          onChange={(e) => setAroma(e.target.value)}
          className="w-full border border-[#d4c9ae] rounded-lg px-3 py-2 text-sm"
        >
          <option value="">Selecione um aroma</option>
          <option>Madeira Negra</option>
          <option>Flor de Cerejeira</option>
          <option>Baunilha</option>
        </select>
      </div>

      <div className="mb-5">
        <label className="text-xs text-[#2f5d8c] mb-1 block">Decoração</label>
        <select
          value={decoracao}
          onChange={(e) => setDecoracao(e.target.value)}
          className="w-full border border-[#d4c9ae] rounded-lg px-3 py-2 text-sm"
        >
          <option value="">Selecione a decoração</option>
          <option>Com cristais</option>
          <option>Minimalista</option>
          <option>Personalizada</option>
        </select>
      </div>

     <a
  href={`https://wa.me/5519981338845?text=${encodeURIComponent(
    `Oi! Quero pedir:\nProduto: ${selectedProduct.name}\nAroma: ${aroma || "não definido"}\nDecoração: ${decoracao || "não definida"}`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className={`block text-center py-2.5 rounded-full font-medium transition-colors ${
    aroma && decoracao
      ? "bg-[#1b2d4f] text-[#f2ede4] hover:bg-[#2f5d8c]"
      : "bg-gray-300 text-gray-500 pointer-events-none"
  }`}
>
  Confirmar pedido
</a>

      <button
        onClick={() => setSelectedProduct(null)}
        className="mt-3 text-xs text-[#2f5d8c] w-full text-center"
      >
        Cancelar
      </button>

    </div>
  </div>
)}
      </div>
    </section>
  );
}

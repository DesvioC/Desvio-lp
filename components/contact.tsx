"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Phone, MessageCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = encodeURIComponent(
      `Olá! Meu nome é ${formData.name}.\n\n${formData.message}\n\nTelefone: ${formData.phone}`
    );
    
    window.open(
      `https://wa.me/5519981338845?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <section id="contato" className="py-24 bg-[#1b2d4f] text-[#f2ede4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#2a7a72] font-medium mb-4">
              Fale Conosco
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
              Vamos criar um Desvio para você
            </h2>
            <p className="text-[#f2ede4]/80 mb-8 text-pretty">
              Escolha seu tamanho, aroma e decoração e manda uma mensagem! 
              Vai ser um prazer criar algo especial para você.
            </p>

            <div className="space-y-6">
              <a
                href="https://instagram.com/DESVIO_C"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-full bg-[#f2ede4]/10 flex items-center justify-center group-hover:bg-[#f2ede4]/20 transition-colors">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium">Instagram</p>
                  <p className="text-[#f2ede4]/70">@DESVIO_C</p>
                </div>
              </a>

              <a
                href="https://wa.me/5519981338845"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-full bg-[#f2ede4]/10 flex items-center justify-center group-hover:bg-[#f2ede4]/20 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-[#f2ede4]/70">(19) 98133-8845</p>
                </div>
              </a>
            </div>
          </div>

          <Card className="bg-[#f2ede4] text-[#1b2d4f]">
            <CardContent className="p-6 md:p-8">
              <h3 className="font-serif text-xl font-bold mb-6">
                Envie sua mensagem
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block text-[#1b2d4f]">
                    Seu nome
                  </label>
                  <Input
                    id="name"
                    placeholder="Como podemos te chamar?"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-white border-[#d4c9ae] text-[#1b2d4f] placeholder:text-[#2f5d8c]/50"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium mb-2 block text-[#1b2d4f]">
                    WhatsApp
                  </label>
                  <Input
                    id="phone"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="bg-white border-[#d4c9ae] text-[#1b2d4f] placeholder:text-[#2f5d8c]/50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block text-[#1b2d4f]">
                    Sua mensagem
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Conta pra gente o que você precisa! Qual tamanho, aroma, decoração..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={4}
                    className="bg-white border-[#d4c9ae] text-[#1b2d4f] placeholder:text-[#2f5d8c]/50 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#2a7a72] text-white hover:bg-[#2a7a72]/90"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

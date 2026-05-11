import Link from "next/link";
import Image from "next/image";
import { Instagram, Phone, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1b2d4f] text-[#f2ede4] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SIMBOLO%20MARCA%20%282%29-NVuzcTi1kF3JOso6qhpAqYP0auvYJk.png"
                alt="DESVIO"
                width={60}
                height={60}
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-[#f2ede4]/70 max-w-md text-pretty">
              Velas aromáticas para chegar diferente, mesmo que no mesmo lugar. 
              Feitas à mão com amor e dedicação em cada detalhe.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#produtos" className="text-[#f2ede4]/70 hover:text-[#f2ede4] transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link href="#aromas" className="text-[#f2ede4]/70 hover:text-[#f2ede4] transition-colors">
                  Aromas
                </Link>
              </li>
              <li>
                <Link href="#decoracoes" className="text-[#f2ede4]/70 hover:text-[#f2ede4] transition-colors">
                  Decorações
                </Link>
              </li>
              <li>
                <Link href="#personalizados" className="text-[#f2ede4]/70 hover:text-[#f2ede4] transition-colors">
                  Personalizados
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-[#f2ede4]/70 hover:text-[#f2ede4] transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com/DESVIO_C"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#f2ede4]/70 hover:text-[#f2ede4] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  @DESVIO_C
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5519981338845"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#f2ede4]/70 hover:text-[#f2ede4] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (19) 98133-8845
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#f2ede4]/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#f2ede4]/60">
            © {new Date().getFullYear()} DESVIO. Todos os direitos reservados.
          </p>
          <p className="text-sm text-[#f2ede4]/60 flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-[#6b1d2c] fill-[#6b1d2c]" /> no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}

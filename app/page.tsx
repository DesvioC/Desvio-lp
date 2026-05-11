import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Products } from "@/components/products";
import { Aromas } from "@/components/aromas";
import { Decorations } from "@/components/decorations";
import { Personalized } from "@/components/personalized";
import { Inspiration } from "@/components/inspiration";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Aromas />
      <Decorations />
      <Personalized />
      <Inspiration />
      <Contact />
      <Footer />
    </main>
  );
}

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import CtaFinal from "./components/CtaFinal";
import Footer from "./components/Footer";
import WhatsAppFloating from "./components/WhatsAppFloating";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-brand-gold selection:text-white">
      {/* Premium Navigation Header */}
      <Header />

      {/* Main Core Sections in EXACT absolute order for highest conversion */}
      <main className="flex-grow">
        {/* HERO */}
        <Hero />

        {/* SERVIÇOS + BENEFÍCIOS */}
        <Services />

        {/* QUEM SOMOS + COMO FUNCIONA + DEPOIMENTOS + FAQ */}
        <AboutUs />

        {/* CTA FINAL */}
        <CtaFinal />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* Floating dynamic WhatsApp contact badge */}
      <WhatsAppFloating />
    </div>
  );
}

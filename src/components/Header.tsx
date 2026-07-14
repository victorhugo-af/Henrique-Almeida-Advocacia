import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import DynamicIcon from "./DynamicIcon";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Serviços", href: "#servicos" },
    { name: "Sobre", href: "#sobre" },
    { name: "FAQ", href: "#faq" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-blue-dark/95 backdrop-blur-md border-b border-brand-gold/20 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            className="flex flex-col items-start group"
            aria-label="Henrique Almeida Advocacia"
          >
            <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-white flex items-center gap-1.5">
              HENRIQUE <span className="text-brand-gold">ALMEIDA</span>
            </span>
            <span className="font-sans text-[10px] tracking-[0.25em] text-brand-gold-light uppercase font-medium leading-none mt-0.5">
              Advocacia Previdenciária
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" aria-label="Navegação Principal">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-gray-200 hover:text-brand-gold transition-colors duration-200 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:1633714620"
              className="text-white hover:text-brand-gold text-sm font-medium flex items-center gap-1.5 transition-colors"
              aria-label="Ligar para o escritório"
            >
              <DynamicIcon name="Phone" size={16} className="text-brand-gold" />
              <span>(16) 3371-4620</span>
            </a>
            <a
              href="https://wa.me/5516998325521"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gold hover:bg-brand-gold-dark text-brand-blue-dark font-sans font-semibold text-xs py-2 px-4 rounded-md tracking-wider uppercase transition-all duration-300 hover:shadow-[0_4px_15px_rgba(197,160,89,0.3)] flex items-center gap-1.5"
              aria-label="Falar com advogado no WhatsApp"
            >
              <DynamicIcon name="MessageCircle" size={14} />
              <span>Consulta Online</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="https://wa.me/5516998325521"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gold text-brand-blue-dark p-2 rounded-md hover:bg-brand-gold-dark transition-colors"
              aria-label="WhatsApp"
            >
              <DynamicIcon name="MessageCircle" size={16} />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 focus:outline-none focus:ring-1 focus:ring-brand-gold rounded"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <DynamicIcon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-brand-blue-dark border-t border-brand-gold/15 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-200 hover:text-brand-gold hover:bg-brand-blue/30 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-brand-gold/10 flex flex-col gap-3 px-3">
                <a
                  href="tel:1633714620"
                  className="text-gray-200 hover:text-brand-gold text-sm font-medium flex items-center gap-2.5 py-2"
                >
                  <DynamicIcon name="Phone" size={18} className="text-brand-gold" />
                  <span>(16) 3371-4620</span>
                </a>
                <a
                  href="mailto:contato@henriqueadv.com.br"
                  className="text-gray-200 hover:text-brand-gold text-sm font-medium flex items-center gap-2.5 py-2"
                >
                  <DynamicIcon name="Mail" size={18} className="text-brand-gold" />
                  <span>contato@henriqueadv.com.br</span>
                </a>
                <a
                  href="https://wa.me/5516998325521"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-gold hover:bg-brand-gold-dark text-brand-blue-dark font-sans font-bold text-center py-3 px-4 rounded-md tracking-widest uppercase transition-all flex items-center justify-center gap-2 mt-2 shadow-lg"
                >
                  <DynamicIcon name="MessageCircle" size={18} />
                  <span>Falar com Especialista</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

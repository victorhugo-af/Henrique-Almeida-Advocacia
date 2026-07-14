import DynamicIcon from "./DynamicIcon";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-brand-blue-dark text-gray-400 border-t border-brand-gold/15 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-tr-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Column 1: Brand details (Grid span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#" className="flex flex-col items-start group">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white flex items-center gap-1.5">
                HENRIQUE <span className="text-brand-gold">ALMEIDA</span>
              </span>
              <span className="font-sans text-[10px] tracking-[0.25em] text-brand-gold-light uppercase font-medium leading-none mt-1">
                Advocacia Previdenciária
              </span>
            </a>
            
            <p className="font-sans text-xs sm:text-sm font-light leading-relaxed text-gray-400">
              Escritório de advocacia de alta performance focado exclusivamente na concessão e revisão de benefícios do INSS. Protegendo seu direito com transparência, agilidade e excelência jurídica.
            </p>

            {/* Social Media links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#footer-linkedin"
                className="w-9 h-9 bg-white/5 border border-white/10 hover:border-brand-gold hover:text-brand-gold rounded-full flex items-center justify-center text-gray-300 transition-colors"
                aria-label="LinkedIn Henrique Almeida"
              >
                {/* Visual SVG mock or simple initials since we are restricting customized SVGs to dynamic icons */}
                <span className="font-sans font-bold text-xs">in</span>
              </a>
              <a
                href="#footer-instagram"
                className="w-9 h-9 bg-white/5 border border-white/10 hover:border-brand-gold hover:text-brand-gold rounded-full flex items-center justify-center text-gray-300 transition-colors"
                aria-label="Instagram Henrique Almeida"
              >
                <span className="font-sans font-bold text-xs">ig</span>
              </a>
              <a
                href="#footer-facebook"
                className="w-9 h-9 bg-white/5 border border-white/10 hover:border-brand-gold hover:text-brand-gold rounded-full flex items-center justify-center text-gray-300 transition-colors"
                aria-label="Facebook Henrique Almeida"
              >
                <span className="font-sans font-bold text-xs">fb</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links (Grid span 3) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-serif text-sm font-bold tracking-widest text-white uppercase border-b border-brand-gold/20 pb-2.5">
              Navegação Rápida
            </h4>
            <ul className="space-y-3 font-sans text-sm font-light">
              <li>
                <a href="#inicio" className="hover:text-brand-gold transition-colors block py-0.5">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-brand-gold transition-colors block py-0.5">
                  Serviços + Benefícios
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-brand-gold transition-colors block py-0.5">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-gold transition-colors block py-0.5">
                  Perguntas Frequentes (FAQ)
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-brand-gold transition-colors block py-0.5">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact quick information (Grid span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="font-serif text-sm font-bold tracking-widest text-white uppercase border-b border-brand-gold/20 pb-2.5">
              Contatos Rápidos
            </h4>
            <ul className="space-y-4 font-sans text-xs sm:text-sm font-light">
              <li className="flex items-start gap-3">
                <DynamicIcon name="Phone" size={16} className="text-brand-gold mt-0.5" />
                <div>
                  <span className="text-[10px] text-gray-500 uppercase block leading-none">Telefone Fixo</span>
                  <a href="tel:1633714620" className="text-gray-200 hover:text-brand-gold transition-colors mt-1 block">
                    (16) 3371-4620
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <DynamicIcon name="MessageCircle" size={16} className="text-emerald-400 mt-0.5" />
                <div>
                  <span className="text-[10px] text-gray-500 uppercase block leading-none">WhatsApp</span>
                  <a href="https://wa.me/5516998325521" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-emerald-400 transition-colors mt-1 block">
                    (16) 99832-5521
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <DynamicIcon name="Mail" size={16} className="text-brand-gold mt-0.5" />
                <div>
                  <span className="text-[10px] text-gray-500 uppercase block leading-none">E-mail Administrativo</span>
                  <a href="mailto:contato@henriqueadv.com.br" className="text-gray-200 hover:text-brand-gold transition-colors mt-1 block break-all">
                    contato@henriqueadv.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <DynamicIcon name="MapPin" size={16} className="text-brand-gold mt-0.5" />
                <div>
                  <span className="text-[10px] text-gray-500 uppercase block leading-none">Endereço Sede</span>
                  <p className="text-gray-300 mt-1 leading-normal">
                    Rua Episcopal, 1500 - Centro, São Carlos - SP, CEP 13560-049
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider and Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-gray-500">
          <div>
            <p>© {currentYear} Henrique Almeida Advocacia. Todos os direitos reservados.</p>
            <p className="mt-1 text-[10px] text-gray-600">Desenvolvido com padrão de alta acessibilidade jurídica.</p>
          </div>
          <div className="flex gap-6">
            <a href="#politica-privacidade" className="hover:text-brand-gold transition-colors">
              Política de Privacidade
            </a>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <span className="text-[10px] uppercase text-brand-gold/70 font-semibold tracking-wider">
              OAB/SP nº 312.450
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

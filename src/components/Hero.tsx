import { motion } from "motion/react";
import DynamicIcon from "./DynamicIcon";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[95vh] flex items-center pt-28 pb-16 bg-brand-blue-dark overflow-hidden"
    >
      {/* Decorative Premium Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] rounded-full bg-brand-gold/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[70%] rounded-full bg-brand-blue-light/35 blur-[150px]" />
        
        {/* Architectural lines to represent law & structure */}
        <svg
          className="absolute right-0 bottom-0 opacity-15 text-brand-gold w-auto h-[60%] max-w-full hidden lg:block"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 350 L350 350 M100 350 L100 150 M150 350 L150 120 M200 350 L200 100 M250 350 L250 120 M300 350 L300 150 M75 150 L125 150 M125 120 L175 120 M175 100 L225 100 M225 120 L275 120 M275 150 L325 150"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M50 100 L200 20 L350 100"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </svg>

        {/* Elegant Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#C5A059_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Google Rating Tag */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/30 rounded-full py-1.5 px-4 mb-6"
            >
              <div className="flex text-brand-gold">
                <DynamicIcon name="Star" size={14} className="fill-current" />
                <DynamicIcon name="Star" size={14} className="fill-current" />
                <DynamicIcon name="Star" size={14} className="fill-current" />
                <DynamicIcon name="Star" size={14} className="fill-current" />
                <DynamicIcon name="Star" size={14} className="fill-current" />
              </div>
              <span className="text-white text-xs font-semibold tracking-wider uppercase font-sans">
                ★ 5.0 GOOGLE ({271} AVALIAÇÕES)
              </span>
            </motion.div>

            {/* Main H1 Title */}
            <motion.h1
              variants={itemVariants}
              className="text-3.5xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white mb-5 leading-[1.15] font-serif"
            >
              Teve o Benefício Negado pelo INSS ou Quer se Aposentar com Segurança?
            </motion.h1>

            {/* Slogan & Description (Explicitly answering: Who, What, Problem solved, How to connect) */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-300 font-sans font-light mb-8 max-w-2xl leading-relaxed"
            >
              Somos a <strong className="text-brand-gold-light font-semibold text-white">Henrique Almeida Advocacia</strong>, escritório especializado exclusivamente em <strong className="text-brand-gold font-semibold">Direito Previdenciário</strong>. Lutamos contra as injustiças e negativas do INSS para garantir a sua aposentadoria ou benefício de forma rápida, segura e sem burocracia. Fale conosco online agora mesmo.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="https://wa.me/5516998325521"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-gold hover:bg-brand-gold-dark text-brand-blue-dark font-sans font-bold text-center py-4 px-8 rounded-lg tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_4px_25px_rgba(197,160,89,0.45)] flex items-center justify-center gap-3"
                aria-label="Falar com Especialista no WhatsApp"
              >
                <DynamicIcon name="MessageCircle" size={22} className="animate-bounce" />
                <span>Falar com Especialista</span>
              </a>
              <a
                href="#servicos"
                className="border border-white/20 hover:border-brand-gold/60 text-white hover:text-brand-gold font-sans font-semibold text-center py-4 px-8 rounded-lg tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2"
                aria-label="Ver nossos serviços previdenciários"
              >
                <span>Conhecer Serviços</span>
                <DynamicIcon name="ArrowRight" size={16} />
              </a>
            </motion.div>

            {/* 4 Quick Differentials - Absolute Must for High Conversion */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10 w-full"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-brand-gold/15 rounded text-brand-gold flex-shrink-0">
                  <DynamicIcon name="ShieldCheck" size={16} />
                </div>
                <span className="text-xs sm:text-sm text-gray-300 font-medium font-sans">Atendimento Online & Seguro</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-brand-gold/15 rounded text-brand-gold flex-shrink-0">
                  <DynamicIcon name="FileSearch" size={16} />
                </div>
                <span className="text-xs sm:text-sm text-gray-300 font-medium font-sans">Análise Técnica Completa</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-brand-gold/15 rounded text-brand-gold flex-shrink-0">
                  <DynamicIcon name="Award" size={16} />
                </div>
                <span className="text-xs sm:text-sm text-gray-300 font-medium font-sans">+12 Anos de Experiência</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-brand-gold/15 rounded text-brand-gold flex-shrink-0">
                  <DynamicIcon name="UserCheck" size={16} />
                </div>
                <span className="text-xs sm:text-sm text-gray-300 font-medium font-sans">Especialista Exclusivo</span>
              </div>
            </motion.div>

            {/* Quick trust metrics */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 sm:gap-8 mt-8 pt-6 border-t border-white/10 w-full"
            >
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold-light">12+</div>
                <div className="font-sans text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest mt-1">Anos de Experiência</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold-light">100%</div>
                <div className="font-sans text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest mt-1">Especializado</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-brand-gold-light">270+</div>
                <div className="font-sans text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest mt-1">Famílias Felizes</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Right Visual Column */}
          <motion.div
            className="lg:col-span-5 relative flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Elegant Shield Representation & Contact info glass card */}
            <div className="relative w-full max-w-[380px] sm:max-w-[400px]">
              
              {/* Golden Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/20 to-transparent rounded-2xl blur-2xl" />

              {/* Main Premium Card representing legal stability */}
              <div className="relative glass-panel-dark rounded-2xl p-6 sm:p-8 border border-brand-gold/30 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 rounded-bl-full" />
                
                {/* Scale of justice outline representation */}
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-brand-gold/10 p-3.5 rounded-xl border border-brand-gold/30">
                    <DynamicIcon name="Scale" size={32} className="text-brand-gold" />
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-2xl font-bold text-white tracking-widest block leading-none">HA</span>
                    <span className="text-[9px] uppercase tracking-wider text-brand-gold">Henrique Almeida</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-white mb-2 tracking-wide">
                  Compromisso com o seu Benefício
                </h3>
                <p className="font-sans text-sm text-gray-300 font-light mb-6 leading-relaxed">
                  Oferecemos um acompanhamento completo para garantir o maior benefício que você tem direito na Previdência Social.
                </p>

                {/* Info List */}
                <ul className="space-y-3.5 mb-6">
                  <li className="flex items-start gap-3 text-xs text-gray-200">
                    <span className="p-0.5 bg-brand-gold/25 rounded text-brand-gold mt-0.5">
                      <DynamicIcon name="Check" size={12} />
                    </span>
                    <span>Análise retroativa de todas as carteiras e salários</span>
                  </li>
                  <li className="flex items-start gap-3 text-xs text-gray-200">
                    <span className="p-0.5 bg-brand-gold/25 rounded text-brand-gold mt-0.5">
                      <DynamicIcon name="Check" size={12} />
                    </span>
                    <span>Preparo prévio detalhado para as perícias</span>
                  </li>
                  <li className="flex items-start gap-3 text-xs text-gray-200">
                    <span className="p-0.5 bg-brand-gold/25 rounded text-brand-gold mt-0.5">
                      <DynamicIcon name="Check" size={12} />
                    </span>
                    <span>Atendimento online seguro com assinatura digital</span>
                  </li>
                </ul>

                {/* Trust Footer */}
                <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
                    <span className="text-[11px] text-gray-400 font-medium">Advogado Online Agora</span>
                  </div>
                  <a
                    href="https://wa.me/5516998325521"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brand-gold font-bold hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Iniciar Consulta</span>
                    <DynamicIcon name="ChevronRight" size={14} />
                  </a>
                </div>
              </div>
              
              {/* Backing decorative absolute elements */}
              <div className="absolute -bottom-4 -left-4 bg-brand-blue border border-brand-gold/10 px-4 py-3 rounded-lg shadow-xl hidden sm:flex items-center gap-3">
                <div className="bg-brand-gold/20 p-2 rounded-full">
                  <DynamicIcon name="MonitorCheck" size={18} className="text-brand-gold" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white">Atendimento Digital</div>
                  <div className="text-[10px] text-gray-400 leading-none">Para todo o Brasil</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

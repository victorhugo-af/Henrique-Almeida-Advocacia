import { motion } from "motion/react";
import { SERVICES } from "../data";
import DynamicIcon from "./DynamicIcon";

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // 4 Core Corporate Benefits (merged from Differentials)
  const corporateBenefits = [
    {
      title: "Atendimento 100% Online ou Presencial",
      description: "Você escolhe: atendimento prático por WhatsApp/Videochamada no conforto da sua casa para todo o Brasil, ou presencial em nosso escritório em São Carlos - SP.",
      iconName: "MonitorCheck"
    },
    {
      title: "Especialização Exclusiva em Previdenciário",
      description: "Não fazemos de tudo um pouco. Somos focados de forma única na Previdência Social, o que nos garante máxima profundidade técnica para reverter as injustiças do INSS.",
      iconName: "Award"
    },
    {
      title: "Linguagem Descomplicada e Transparente",
      description: "Esqueça o 'juridiquês' difícil. Explicamos cada etapa do seu processo de forma simples, humanizada e direta para que você entenda e confie no andamento.",
      iconName: "MessageCircleHeart"
    },
    {
      title: "Acompanhamento de Ponta a Ponta",
      description: "Atuamos desde o planejamento inicial e organização das carteiras (CNIS), passando pela preparação das perícias, até o momento em que o dinheiro cai na sua conta.",
      iconName: "Workflow"
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-brand-blue-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[45%] h-[40%] rounded-full bg-brand-gold/5 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[35%] rounded-full bg-brand-blue-light/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold mb-3 block font-sans">
            Soluções para o seu Direito
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-serif tracking-tight">
            Como Podemos Ajudar Você Hoje?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base font-sans font-light leading-relaxed">
            Selecione o serviço previdenciário que você precisa. Nossos especialistas estão prontos para analisar o seu caso de forma ágil e segura.
          </p>
        </div>

        {/* THE 7 SERVICES GRID - Optimized for direct scanning */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SERVICES.map((service) => {
            const encodedMsg = encodeURIComponent(
              `Olá, Dr. Henrique. Gostaria de uma consulta especializada sobre meu caso de: ${service.title}.`
            );
            const waLink = `https://wa.me/5516998325521?text=${encodedMsg}`;

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative glass-panel-dark rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-brand-gold/45 hover:shadow-[0_12px_40px_rgba(197,160,89,0.12)] transition-all duration-300 flex flex-col justify-between h-full overflow-hidden"
              >
                {/* Visual hover background glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-gold/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  {/* Service Header: Icon + Title */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-blue-dark transition-all duration-300 flex-shrink-0">
                      <DynamicIcon name={service.iconName} size={22} />
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-brand-gold transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </div>

                  {/* Pain Point Highlighted - Crucial for user identification */}
                  {service.painSubTitle && (
                    <div className="mb-4 p-3 bg-brand-gold/10 border-l-2 border-brand-gold rounded-r-lg">
                      <p className="font-sans text-xs text-brand-gold-light italic font-medium leading-relaxed">
                        "{service.painSubTitle}"
                      </p>
                    </div>
                  )}

                  {/* Service Descriptions */}
                  <p className="font-sans text-xs sm:text-sm text-gray-300 font-light leading-relaxed mb-6">
                    {service.fullDescription}
                  </p>

                  {/* 3-4 Bullets / Action items */}
                  <div className="space-y-2.5 mb-8">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <span className="p-0.5 bg-brand-gold/20 rounded text-brand-gold mt-0.5 flex-shrink-0">
                          <DynamicIcon name="Check" size={10} />
                        </span>
                        <span className="leading-tight">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Customized Direct WhatsApp CTA per Service */}
                <div className="mt-auto pt-4 border-t border-white/10">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-brand-gold/10 hover:bg-brand-gold text-brand-gold hover:text-brand-blue-dark font-sans font-bold text-center py-3 px-4 rounded-xl text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 border border-brand-gold/35 group-hover:border-brand-gold"
                    aria-label={service.ctaText || "Iniciar consulta no WhatsApp"}
                  >
                    <DynamicIcon name="MessageCircle" size={16} />
                    <span>{service.ctaText || "Falar com Especialista"}</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>


        {/* CORPORATE BENEFITS SUB-SECTION (Diferenciais integrados) */}
        <div id="beneficios" className="pt-16 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold mb-2 block font-sans">
              Diferenciais que Protegem Você
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif tracking-tight">
              Por que escolher Henrique Almeida Advocacia?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {corporateBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex gap-4 sm:gap-5 items-start p-6 rounded-2xl bg-brand-blue-light/20 border border-white/5 hover:border-brand-gold/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold flex-shrink-0">
                  <DynamicIcon name={benefit.iconName} size={22} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white mb-2 tracking-wide">
                    {benefit.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

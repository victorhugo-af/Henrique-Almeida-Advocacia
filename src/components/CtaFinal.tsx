import { motion } from "motion/react";
import DynamicIcon from "./DynamicIcon";

export default function CtaFinal() {
  return (
    <section id="contato" className="py-24 bg-brand-blue-dark relative overflow-hidden text-white">
      {/* Decorative premium vector glows */}
      <div className="absolute inset-0 bg-radial-gradient from-brand-gold/15 via-transparent to-transparent opacity-60 pointer-events-none" />
      <div className="absolute top-[-30%] right-[-20%] w-[60%] h-[70%] rounded-full bg-brand-gold/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-35%] left-[-20%] w-[60%] h-[70%] rounded-full bg-brand-blue-light/25 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/35 rounded-full py-2 px-5 mb-8"
        >
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
          <span className="text-brand-gold-light text-xs font-bold tracking-wider uppercase font-sans">
            Análise Gratuita e Sem Compromisso
          </span>
        </motion.div>

        {/* Persuasive Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-serif mb-6 leading-tight max-w-4xl mx-auto"
        >
          Não Deixe o Seu Direito Expirar ou Ser Negado pelo INSS
        </motion.h2>

        {/* Reassuring Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-gray-300 font-sans font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A análise inicial do seu histórico de trabalho e do seu benefício é rápida, gratuita e <strong className="text-white font-semibold">100% livre de compromissos ou taxas iniciais</strong>. Deixe nossa equipe de especialistas apontar o caminho seguro para sua aposentadoria hoje.
        </motion.p>

        {/* CTA Button Block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/5516998325521"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-brand-gold hover:bg-brand-gold-dark text-brand-blue-dark font-sans font-extrabold py-5 px-10 rounded-xl text-sm tracking-wider uppercase transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_4px_30px_rgba(197,160,89,0.5)] flex items-center justify-center gap-3"
            aria-label="Falar com Especialista agora no WhatsApp"
          >
            <DynamicIcon name="MessageCircle" size={22} className="animate-pulse" />
            <span>Chamar no WhatsApp Agora</span>
          </a>
          
          <span className="text-[11px] text-gray-400 uppercase tracking-widest font-sans mt-2">
            Tempo estimado de resposta: menos de 5 minutos
          </span>
        </motion.div>

        {/* Security & Quick Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/10 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="p-2 bg-white/5 rounded-lg text-brand-gold">
              <DynamicIcon name="ShieldCheck" size={20} />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold font-serif">Dados Protegidos</div>
              <div className="text-[10px] text-gray-400 font-sans">Sigilo total garantido pela OAB</div>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <div className="p-2 bg-white/5 rounded-lg text-brand-gold">
              <DynamicIcon name="Zap" size={20} />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold font-serif">Análise Ágil</div>
              <div className="text-[10px] text-gray-400 font-sans">Retorno claro em poucas horas</div>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center sm:justify-end">
            <div className="p-2 bg-white/5 rounded-lg text-brand-gold">
              <DynamicIcon name="Heart" size={20} />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold font-serif">Sem Custo Inicial</div>
              <div className="text-[10px] text-gray-400 font-sans">Você só nos paga se ganhar</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

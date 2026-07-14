import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import DynamicIcon from "./DynamicIcon";

export default function WhatsAppFloating() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 5 seconds of screen load
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-none">
      
      {/* Tooltip text bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-brand-blue border border-brand-gold/30 text-white p-3.5 rounded-xl shadow-2xl text-xs max-w-[250px] pointer-events-auto flex flex-col items-start gap-1.5 font-sans relative"
          >
            {/* Close tooltip button */}
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-1.5 right-1.5 text-gray-400 hover:text-white"
              aria-label="Fechar aviso"
            >
              <DynamicIcon name="X" size={12} />
            </button>
            
            <div className="flex items-center gap-1 text-brand-gold font-bold uppercase tracking-wider text-[10px]">
              <DynamicIcon name="Sparkle" size={10} />
              <span>Dúvidas do INSS?</span>
            </div>
            
            <p className="text-gray-200 leading-normal font-light">
              Fale diretamente com o Dr. Henrique Almeida no WhatsApp para esclarecer seus direitos.
            </p>
            
            <a
              href="https://wa.me/5516998325521"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowTooltip(false)}
              className="text-[11px] font-bold text-brand-gold hover:text-brand-gold-light mt-1 flex items-center gap-1.5"
            >
              <span>Consultar Direito Agora</span>
              <DynamicIcon name="ChevronRight" size={12} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button wrapper */}
      <motion.div
        className="pointer-events-auto relative group"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 1 }}
      >
        {/* Pulsing Backing ring animation */}
        <span className="absolute inset-0 bg-emerald-500/30 rounded-full animate-ping pointer-events-none" />
        
        {/* Main Floating Button */}
        <a
          href="https://wa.me/5516998325521"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setShowTooltip(false)}
          className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-[0_8px_30px_rgba(16,185,129,0.4)] hover:shadow-[0_8px_35px_rgba(16,185,129,0.55)] transition-all duration-300 transform hover:scale-105"
          aria-label="Falar conosco via WhatsApp"
        >
          <DynamicIcon name="MessageCircle" size={28} className="fill-current animate-pulse" />
        </a>
        
        {/* Quick tooltip count indicator */}
        <span className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-red-500 rounded-full border border-white flex items-center justify-center text-[9px] text-white font-bold animate-bounce select-none pointer-events-none">
          1
        </span>
      </motion.div>

    </div>
  );
}

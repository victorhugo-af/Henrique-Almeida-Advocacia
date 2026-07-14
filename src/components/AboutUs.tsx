import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS } from "../data";
import DynamicIcon from "./DynamicIcon";

export default function AboutUs() {
  // FAQ Active State
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // The 4 Step-by-Step "Como Funciona" items
  const steps = [
    {
      num: "01",
      title: "Contato Rápido no WhatsApp",
      description: "Clique em qualquer botão de consulta em nossa página para iniciar um bate-papo seguro com a nossa equipe de especialistas pelo WhatsApp."
    },
    {
      num: "02",
      title: "Análise Técnica Inicial",
      description: "Ouvimos sua necessidade, entendemos sua dor e solicitamos seus documentos básicos para avaliar se você preenche os requisitos do benefício desejado."
    },
    {
      num: "03",
      title: "Caminho Transparente",
      description: "Apresentamos a melhor estratégia jurídica disponível para o seu caso de forma clara e direta (sem juridiquês complicado), explicando os custos e prazos."
    },
    {
      num: "04",
      title: "Acompanhamento Digital",
      description: "Cuidamos de tudo no INSS ou na Justiça. Você assina os documentos pelo celular de forma digital e acompanha o andamento do seu processo sem sair de casa."
    }
  ];

  // The 6 FAQ Items as requested
  const faqItems = [
    {
      question: "O atendimento online é seguro? Como ele funciona?",
      answer: "Sim, é totalmente seguro e reconhecido por lei. Nós atendemos todo o Brasil utilizando ferramentas modernas de videochamada e assinatura digital aceitas legalmente pelo INSS e pelo Poder Judiciário. Você contrata e acompanha o andamento do seu processo diretamente do seu celular ou computador, com toda a segurança jurídica, sem precisar gastar dinheiro com transporte ou perder tempo em salas de espera."
    },
    {
      question: "Quais são os documentos necessários para começar a análise?",
      answer: "Os documentos fundamentais são: seu documento de identidade com foto (RG ou CNH), comprovante de residência atualizado, suas Carteiras de Trabalho (física ou digital) e o extrato do seu CNIS (que você baixa direto no aplicativo ou site do Meu INSS). Para benefícios por incapacidade ou auxílios de saúde, também precisaremos de laudos médicos detalhados, exames e atestados recentes."
    },
    {
      question: "Preciso pagar alguma taxa inicial ou honorários adiantados?",
      answer: "Na grande maioria dos casos de concessão e reativação de benefícios, nós trabalhamos sob o regime de 'taxa de sucesso' (êxito): isso significa que você só paga os nossos honorários quando o seu benefício for concedido e liberado, sendo cobrada uma porcentagem dos valores retroativos (atrasados) que você receber. Não exigimos taxas iniciais absurdas, de forma que você tenha amparo jurídico completo sem pesar no seu orçamento familiar."
    },
    {
      question: "Quanto tempo demora para o INSS liberar o meu benefício?",
      answer: "O tempo exato varia de acordo com o tipo de benefício e o canal (se o pedido será resolvido de forma administrativa diretamente no INSS ou se precisará ir à Justiça). Benefícios como Auxílio-Doença e BPC/LOAS costumam ter análises mais céleres (em poucas semanas administrativamente), enquanto aposentadorias complexas ou revisões judiciais podem levar alguns meses. Nossa equipe realiza o monitoramento diário para forçar a máxima agilidade possível."
    },
    {
      question: "Posso pagar contribuições que ficaram para trás para me aposentar mais rápido?",
      answer: "Depende muito do seu caso. Em certas situações é possível sim indenizar ou pagar o INSS retroativo, contudo, o INSS possui regras rígidas e nem todo pagamento em atraso conta como tempo de carência ou de contribuição para as novas regras de aposentadoria. Recomendamos fortemente fazer um Planejamento Previdenciário com nosso escritório antes de efetuar qualquer recolhimento em atraso, para evitar perda definitiva de dinheiro."
    },
    {
      question: "Como sei se tenho direito de revisar o valor da minha aposentadoria?",
      answer: "Se você começou a receber sua aposentadoria ou pensão nos últimos 10 anos e suspeita que o INSS calculou o valor errado, desconsiderou salários altos, omitiu períodos trabalhados na roça durante a infância, ou não considerou períodos com insalubridade, você pode ter direito a uma revisão. Nós realizamos um estudo matemático completo da sua Carta de Concessão e do processo administrativo original para identificar se há margem para aumentar o seu ganho mensal e receber o retroativo acumulado."
    }
  ];

  return (
    <div id="sobre">
      
      {/* 1. QUEM SOMOS (Apresentação, Autoridade e Credibilidade) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Visual Mockup for Team / Values */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                {/* Golden border frame */}
                <div className="absolute -top-3 -left-3 -bottom-3 -right-3 border border-brand-gold/30 rounded-2xl hidden sm:block" />
                
                {/* Elegant card representing executive visual mockup */}
                <div className="relative bg-brand-blue-dark text-white p-8 sm:p-10 rounded-2xl shadow-2xl overflow-hidden border border-brand-gold/20">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-xl" />
                  
                  {/* Visual quote indicator */}
                  <div className="font-serif text-brand-gold text-6xl leading-none h-8 select-none">“</div>
                  
                  <p className="font-sans text-base sm:text-lg text-gray-200 italic font-light mb-8 leading-relaxed">
                    Trabalhamos para garantir que a sua dedicação de uma vida inteira seja respeitada e recompensada pela Previdência Social. O Direito Previdenciário não é apenas sobre números, é sobre dignidade e o futuro de famílias inteiras.
                  </p>

                  <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                    {/* Avatar Initials Mockup */}
                    <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-blue-dark font-serif font-bold text-lg shadow-lg flex-shrink-0">
                      HA
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-bold text-white leading-none">Henrique Almeida</h4>
                      <span className="font-sans text-xs text-brand-gold uppercase tracking-wider font-semibold block mt-1.5">
                        Fundador & Advogado Principal
                      </span>
                      <span className="font-sans text-[10px] text-gray-400 block mt-0.5">
                        Inscrição OAB/SP sob nº 312.450
                      </span>
                    </div>
                  </div>
                </div>

                {/* Float certification card */}
                <div className="absolute -bottom-6 -right-6 bg-white border border-brand-gold/25 p-4 rounded-xl shadow-xl flex items-center gap-3">
                  <div className="p-2 bg-brand-gold/15 rounded-md text-brand-gold">
                    <DynamicIcon name="Award" size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-brand-blue-dark leading-tight">OAB Ativa</div>
                    <div className="text-[10px] text-gray-500 leading-none">Inscrição em São Paulo</div>
                  </div>
                </div>

              </motion.div>
            </div>

            {/* Right Column: Narrative of Quem Somos */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold mb-3 block font-sans">
                  CONHEÇA NOSSO ESCRITÓRIO
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue-dark mb-6 font-serif tracking-tight leading-tight">
                  Henrique Almeida Advocacia
                </h2>
                
                <div className="space-y-6 text-sm sm:text-base text-gray-600 font-sans font-light leading-relaxed">
                  <p>
                    Somos especializados exclusivamente em <strong className="text-brand-blue-dark font-semibold">Direito Previdenciário</strong>. Atuamos com atendimento humanizado, análise detalhada de cada caso e acompanhamento completo em todas as etapas do processo, buscando garantir que nossos clientes conquistem o benefício a que têm direito com segurança e tranquilidade.
                  </p>
                  <p>
                    Entendemos que o caminho para conseguir uma aposentadoria justa, restabelecer um auxílio incapacitante ou obter o amparo de um benefício assistencial é complexo e repleto de entraves burocráticos promovidos pelo INSS. Por isso, oferecemos uma consultoria especializada para apontar soluções viáveis e lutar ativamente pelos seus direitos.
                  </p>
                  <p>
                    Sediados em <strong className="text-brand-blue-dark font-semibold">São Carlos - SP</strong>, unimos a proximidade e o acolhimento do atendimento presencial à agilidade e ao alcance do atendimento online. Dessa forma, conseguimos representar nossos clientes com a mesma excelência em todo o território nacional através de processos totalmente digitais de forma descomplicada.
                  </p>
                </div>

                {/* Office Badges/Pillars for Authority */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 border-t border-gray-100 pt-8">
                  <div className="flex items-start gap-3">
                    <span className="text-brand-gold mt-1">
                      <DynamicIcon name="Sparkles" size={16} />
                    </span>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-brand-blue-dark">Foco Único</h4>
                      <p className="text-xs text-gray-500 mt-1">Dedicados 100% à Previdência Social.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-brand-gold mt-1">
                      <DynamicIcon name="Sparkles" size={16} />
                    </span>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-brand-blue-dark">Atendimento Humano</h4>
                      <p className="text-xs text-gray-500 mt-1">Acolhimento de verdade em cada ligação.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-brand-gold mt-1">
                      <DynamicIcon name="Sparkles" size={16} />
                    </span>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-brand-blue-dark">Mais de 12 Anos</h4>
                      <p className="text-xs text-gray-500 mt-1">Trajetória sólida revertendo negativas.</p>
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. COMO FUNCIONA (Passo a passo didático de quebra de objeções) */}
      <section className="py-24 bg-[#FAFAF9] border-t border-b border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold mb-3 block font-sans">
              Sem Complicação
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue-dark mb-4 font-serif tracking-tight">
              Como Funciona o Atendimento?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-sans font-light leading-relaxed">
              Você não precisa se preocupar com burocracias. Organizamos um fluxo simples e transparente para cuidar do seu caso pelo celular ou de forma presencial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="relative bg-white border border-gray-200/60 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
              >
                {/* Background Large Number as decorative watermark */}
                <div className="absolute top-4 right-6 font-serif text-5xl font-extrabold text-brand-gold/10 select-none">
                  {step.num}
                </div>
                
                <div className="w-10 h-10 rounded-lg bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold mb-5 font-bold font-sans text-sm">
                  {step.num}
                </div>

                <h3 className="font-serif text-base sm:text-lg font-bold text-brand-blue-dark mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-gray-500 font-light leading-relaxed mt-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Prompt to contact inside the flow */}
          <div className="text-center mt-12">
            <a
              href="https://wa.me/5516998325521"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-blue-dark hover:bg-brand-gold border border-brand-gold font-sans font-bold text-xs uppercase tracking-wider py-3.5 px-8 rounded-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <DynamicIcon name="MessageCircle" size={16} />
              <span>Quero Iniciar Meu Atendimento</span>
            </a>
          </div>

        </div>
      </section>

      {/* 3. DEPOIMENTOS (Prova social real) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold mb-3 block font-sans">
              QUEM CONTRATA, RECOMENDA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue-dark mb-4 font-serif tracking-tight">
              O que dizem os nossos clientes
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-sans font-light leading-relaxed">
              Temos orgulho de transformar vidas garantindo direitos justos na previdência. Veja a opinião de quem já passou pelo atendimento conosco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-[#FAFAF9] border border-gray-200/50 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex text-brand-gold mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <DynamicIcon key={i} name="Star" size={16} className="fill-current" />
                    ))}
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-gray-600 font-light leading-relaxed italic mb-6">
                    "{testimonial.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 border-t border-gray-100 pt-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/15 flex items-center justify-center text-brand-blue-dark font-serif font-bold text-sm">
                    {testimonial.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-brand-blue-dark leading-none">
                      {testimonial.name}
                    </h4>
                    <span className="font-sans text-[11px] text-gray-400 block mt-1">
                      {testimonial.location} • {testimonial.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Banner Google Reviews */}
          <div className="mt-14 p-6 rounded-2xl bg-brand-blue-dark text-white text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 border border-brand-gold/25">
            <div className="text-left">
              <div className="flex items-center gap-1.5 text-brand-gold mb-1">
                {[...Array(5)].map((_, i) => (
                  <DynamicIcon key={i} name="Star" size={14} className="fill-current" />
                ))}
                <span className="text-white text-xs font-bold font-sans ml-1">5,0 / 5,0</span>
              </div>
              <p className="font-serif text-lg font-bold leading-tight">Henrique Almeida Advocacia no Google</p>
              <p className="font-sans text-xs text-gray-300 font-light mt-1">Mais de 270 avaliações com nota máxima dos nossos clientes de São Carlos e região.</p>
            </div>
            <a
              href="https://wa.me/5516998325521"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gold hover:bg-brand-gold-dark text-brand-blue-dark font-sans font-bold text-xs uppercase py-3.5 px-6 rounded-xl transition-colors shrink-0 w-full sm:w-auto"
            >
              Falar Conosco Agora
            </a>
          </div>

        </div>
      </section>

      {/* 4. FAQ (Resolução detalhada de dúvidas comuns) */}
      <section id="faq" className="py-24 bg-[#FAFAF9] border-t border-gray-100 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold mb-3 block font-sans">
              Dúvidas Respondidas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue-dark mb-4 font-serif tracking-tight">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-600 text-sm sm:text-base font-sans font-light leading-relaxed">
              Consulte as respostas para as maiores dúvidas que nossos clientes trazem ao escritório sobre aposentadoria e benefícios do INSS.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index} 
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-200"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left font-serif text-sm sm:text-base font-bold text-brand-blue-dark hover:text-brand-gold transition-colors"
                  >
                    <span>{item.question}</span>
                    <span className={`p-1 rounded-full bg-gray-50 text-gray-400 group-hover:text-brand-gold transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                      <DynamicIcon name="ChevronDown" size={18} />
                    </span>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="p-5 pt-0 border-t border-gray-100 font-sans text-xs sm:text-sm text-gray-500 font-light leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* CTA post FAQ */}
          <div className="mt-14 text-center bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
            <p className="font-serif text-base sm:text-lg font-bold text-brand-blue-dark mb-2">Ainda tem alguma dúvida específica sobre o seu caso?</p>
            <p className="font-sans text-xs sm:text-sm text-gray-500 font-light mb-6">Não se preocupe, nós analisamos de forma individualizada. Toque no botão abaixo e fale conosco diretamente.</p>
            <a
              href="https://wa.me/5516998325521"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gold hover:bg-brand-gold-dark text-brand-blue-dark font-sans font-bold text-xs uppercase tracking-wider py-3.5 px-8 rounded-xl transition-all duration-300 hover:scale-[1.02] inline-flex items-center gap-2"
            >
              <DynamicIcon name="MessageCircle" size={16} />
              <span>Chamar Advogado Principal</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}

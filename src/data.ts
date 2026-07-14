import { Service, Testimonial, CaseStudy, Differential, Recognition } from "./types";

export const SERVICES: Service[] = [
  {
    id: "aposentadoria-idade",
    title: "Aposentadoria por Idade",
    shortDescription: "Garantia do benefício ao atingir a idade mínima legal com segurança jurídica.",
    fullDescription: "Acompanhamos todo o processo para obtenção da sua aposentadoria (urbana, rural ou híbrida). Analisamos o seu tempo de carência e aplicamos a regra de transição mais benéfica para que você receba o valor máximo de direito.",
    iconName: "UserCheck",
    painSubTitle: "Quer garantir a aposentadoria certa sem sofrer com as filas e negativas do INSS?",
    ctaText: "Consultar Aposentadoria por Idade",
    details: [
      "Análise completa de carência mínima exigida (180 meses)",
      "Regras de transição pós-Reforma aplicadas ao seu caso",
      "Aposentadoria Rural, Urbana e Híbrida sem complicação",
      "Cálculo exato da sua Renda Mensal Inicial"
    ]
  },
  {
    id: "aposentadoria-tempo",
    title: "Aposentadoria por Tempo de Contribuição",
    shortDescription: "Análise completa das regras de transição para quem contribuiu antes da reforma.",
    fullDescription: "Para quem já trabalhava antes da Reforma de 2019, realizamos uma varredura nas regras de pedágio (50% e 100%), idade mínima progressiva e pontos para identificar a regra ideal. Não perca dinheiro aceitando a primeira proposta do INSS.",
    iconName: "Clock",
    painSubTitle: "Com as novas regras da Reforma, você sabe exatamente qual é o seu momento ideal de parar?",
    ctaText: "Analisar Meu Tempo de Contribuição",
    details: [
      "Cálculo estratégico de pedágio de 50% e 100%",
      "Regra de Pontos (análise progressiva personalizada)",
      "Conversão de tempo especial (insalubridade e periculosidade)",
      "Simulação matemática dos cenários mais vantajosos"
    ]
  },
  {
    id: "planejamento-previdenciario",
    title: "Planejamento Previdenciário",
    shortDescription: "Estudo estratégico para descobrir quando se aposentar e qual valor receber.",
    fullDescription: "Um raio-x matemático completo do seu histórico de trabalho. Descubra furos nas suas contribuições (CNIS), períodos não computados e projete seus pagamentos futuros para obter o maior benefício investindo o mínimo necessário.",
    iconName: "TrendingUp",
    painSubTitle: "Não jogue dinheiro fora contribuindo errado. Descubra a data e o valor exato da sua aposentadoria ideal.",
    ctaText: "Fazer Planejamento Previdenciário",
    details: [
      "Análise profunda do CNIS e carteiras de trabalho",
      "Simulações de contribuições e valores futuros de renda",
      "Cálculo de retorno sobre o investimento (ROI previdenciário)",
      "Relatório escrito com plano de ação passo a passo"
    ]
  },
  {
    id: "revisao-beneficios",
    title: "Revisão de Benefícios",
    shortDescription: "Correção de erros do INSS no cálculo inicial da sua aposentadoria ou pensão.",
    fullDescription: "Analisamos detalhadamente a sua Carta de Concessão e o Processo Administrativo para verificar se o INSS errou no cálculo, deixou de incluir salários altos, tempo especial, sentenças trabalhistas ou teses favoráveis aprovadas nos tribunais.",
    iconName: "FileCheck",
    painSubTitle: "Sente que o valor que você recebe hoje é menor do que o que realmente tem direito?",
    ctaText: "Solicitar Revisão do Meu Benefício",
    details: [
      "Identificação de erros clássicos de cálculo do INSS",
      "Inclusão de períodos especiais, rurais e militares",
      "Ajuste de salários com base em ações trabalhistas ganhas",
      "Revisões de fato e de direito pós-concessão"
    ]
  },
  {
    id: "auxilio-doenca",
    title: "Auxílio-Doença",
    shortDescription: "Suporte especializado para benefícios por incapacidade temporária ou permanente.",
    fullDescription: "Se você está incapacitado para o trabalho por doença ou acidente, nós o ajudamos a preparar todos os laudos, exames e documentos para a perícia do INSS. Atuamos fortemente na reversão de altas médicas indevidas ou negativas injustas.",
    iconName: "Activity",
    painSubTitle: "Teve o seu auxílio cortado ou a perícia negada pelo INSS mesmo sem ter condições de trabalhar?",
    ctaText: "Recuperar Meu Auxílio-Doença",
    details: [
      "Análise prévia minuciosa de laudos e atestados médicos",
      "Recursos administrativos robustos contra alta médica precoce",
      "Ação judicial rápida para restabelecimento do benefício",
      "Aposentadoria por invalidez e adicional de 25% para cuidadores"
    ]
  },
  {
    id: "bpc-loas",
    title: "BPC LOAS",
    shortDescription: "Benefício assistencial de um salário mínimo para idosos e pessoas com deficiência.",
    fullDescription: "Garantimos o amparo financeiro de um salário mínimo mensal para idosos acima de 65 anos ou pessoas com deficiência de qualquer idade que não possuem renda ou meios de prover o próprio sustento. Cuidamos de todo o processo burocrático.",
    iconName: "Heart",
    painSubTitle: "Tem um idoso ou pessoa com deficiência na família em situação de vulnerabilidade sem renda?",
    ctaText: "Garantir Amparo BPC LOAS",
    details: [
      "BPC para Idosos acima de 65 anos sem contribuição",
      "BPC para pessoas com deficiência física ou mental",
      "Cálculo real de renda per capita com exclusões permitidas",
      "Acompanhamento especializado na perícia social e médica"
    ]
  },
  {
    id: "pensao-morte",
    title: "Pensão por Morte",
    shortDescription: "Garantia de amparo financeiro para os dependentes do segurado falecido.",
    fullDescription: "Protegemos financeiramente a sua família no momento de perda de um ente querido. Assessoramos cônjuges, companheiros, filhos e dependentes econômicos na liberação rápida da pensão por morte, desatando as travas administrativas do INSS.",
    iconName: "ShieldAlert",
    painSubTitle: "Está enfrentando burocracias e negativas do INSS para liberar a pensão de quem você amava?",
    ctaText: "Garantir Pensão por Morte",
    details: [
      "Comprovação jurídica de união estável de forma robusta",
      "Pensão para filhos menores, inválidos ou universitários",
      "Cálculo do valor sob as novas regras da Reforma",
      "Defesa de direitos contra divisão injusta de cotas"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Maria Aparecida Souza",
    location: "São Carlos - SP",
    comment: "Fui muito bem atendida desde o primeiro contato. Consegui minha aposentadoria muito mais rápido do que imaginava. Recomendo.",
    rating: 5,
    date: "10 de Junho de 2026"
  },
  {
    id: "2",
    name: "José Carlos Ferreira",
    location: "São Carlos - SP",
    comment: "Excelente advogado. Explicou todo o processo de forma simples e sempre respondeu minhas dúvidas.",
    rating: 5,
    date: "28 de Maio de 2026"
  },
  {
    id: "3",
    name: "Ana Paula Mendes",
    location: "São Carlos - SP",
    comment: "Consegui a revisão do meu benefício graças ao excelente trabalho da equipe. Atendimento impecável.",
    rating: 5,
    date: "14 de Abril de 2026"
  },
  {
    id: "4",
    name: "Roberto Lima",
    location: "Araraquara - SP",
    comment: "Profissional extremamente competente e transparente. Me acompanhou durante todo o processo.",
    rating: 5,
    date: "03 de Fevereiro de 2026"
  },
  {
    id: "5",
    name: "Luciana Martins",
    location: "São Carlos - SP",
    comment: "Atendimento rápido, muito educado e sempre disponível para esclarecer qualquer dúvida. Super recomendo.",
    rating: 5,
    date: "18 de Dezembro de 2025"
  },
  {
    id: "6",
    name: "Carlos Eduardo Oliveira",
    location: "São Carlos - SP",
    comment: "Recuperei um benefício que havia sido negado pelo INSS. Excelente experiência do início ao fim.",
    rating: 5,
    date: "05 de Novembro de 2025"
  }
];

export const DIFFERENTIALS: Differential[] = [
  {
    id: "online-presencial",
    title: "Atendimento Online e Presencial",
    description: "Você escolhe como quer ser atendido: no nosso confortável escritório físico em São Carlos - SP ou de forma 100% digital em qualquer lugar do Brasil com segurança digital.",
    iconName: "MonitorCheck"
  },
  {
    id: "especializacao",
    title: "Especialização em Direito Previdenciário",
    description: "Atuamos de forma focada e exclusiva na área da Previdência Social. Isso nos garante profundidade técnica e acompanhamento diário das mudanças nas leis.",
    iconName: "Award"
  },
  {
    id: "acompanhamento",
    title: "Acompanhamento Completo do Processo",
    description: "Do planejamento inicial até o saque do primeiro pagamento com os valores atrasados. Você recebe relatórios periódicos em linguagem acessível sobre cada andamento.",
    iconName: "Workflow"
  },
  {
    id: "linguagem-clara",
    title: "Linguagem Clara e Transparente",
    description: "Sem juridiquês complicado. Explicamos seus direitos de forma simples e direta, para que você tome decisões seguras sobre o seu futuro financeiro.",
    iconName: "MessageCircleHeart"
  },
  {
    id: "experiencia",
    title: "Mais de 12 anos de experiência",
    description: "Uma trajetória sólida ajudando centenas de famílias a obterem seus benefícios de forma justa, lidando estrategicamente com as burocracias e negativas do INSS.",
    iconName: "CalendarDays"
  },
  {
    id: "personalizado",
    title: "Atendimento Personalizado",
    description: "Aqui seu caso não é apenas mais um número. Analisamos cada detalhe da sua história laboral com a dedicação humana e o cuidado técnico que você merece.",
    iconName: "Users"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    category: "Aposentadoria Especial",
    title: "Reconhecimento de Período Especial (Insalubre)",
    result: "Aposentadoria concedida em tempo recorde com aumento de 32% no valor final",
    description: "Cliente trabalhou 22 anos exposto a agentes químicos sem Equipamento de Proteção Individual adequado. O INSS desconsiderou o tempo especial. Realizamos a retificação do PPP e a conversão de período, garantindo o benefício com aplicação de regra favorável de transição.",
    badge: "Insalubridade"
  },
  {
    id: "case-2",
    category: "BPC LOAS",
    title: "Concessão de Benefício Assistencial Negado",
    result: "Reversão de indeferimento do INSS por renda familiar per capita",
    description: "Criança autista de baixa renda teve o BPC negado pelo INSS sob alegação de renda familiar acima do teto de 1/4 de salário mínimo. Provamos judicialmente que as despesas mensais contínuas com remédios e terapias anulavam o excedente, conquistando o benefício retroativo completo.",
    badge: "LOAS Revertido"
  },
  {
    id: "case-3",
    category: "Planejamento Previdenciário",
    title: "Economia Contributiva Estratégica",
    result: "Redução de contribuições futuras e aumento de R$ 1.800/mês na renda futura",
    description: "Empresária de 52 anos estava contribuindo sobre o teto do INSS desnecessariamente. Através do Planejamento Previdenciário, ajustamos as alíquotas futuras e identificamos que ela atingirá o teto acumulado ideal em 4 anos, economizando mais de R$ 45.000 em contribuições.",
    badge: "Planejamento Eficiente"
  },
  {
    id: "case-4",
    category: "Revisão de Benefício",
    title: "Inclusão de Período de Trabalho Rural",
    result: "Revisão concedida e acréscimo de parcelas retroativas substanciais",
    description: "Aposentado obteve benefício em 2021 sem o cômputo dos 8 anos que trabalhou no campo na infância/juventude com a família. Reunimos provas documentais históricas (certidões de casamento dos pais, registro de terras) e garantimos o recálculo retroativo.",
    badge: "Rural Reconhecido"
  }
];

export const RECOGNITIONS: Recognition[] = [
  {
    id: "rec-1",
    title: "Escritório de Destaque",
    institution: "Selo de Excelência Jurídica Previdenciária",
    year: "2025",
    iconName: "Scale"
  },
  {
    id: "rec-2",
    title: "Advocacia 5 Estrelas",
    institution: "Líder de Satisfação de Clientes em São Carlos - SP",
    year: "2024 / 2025",
    iconName: "Star"
  },
  {
    id: "rec-3",
    title: "Membro Efetivo",
    institution: "Instituto Brasileiro de Direito Previdenciário (IBDP)",
    year: "Desde 2014",
    iconName: "Shield"
  }
];

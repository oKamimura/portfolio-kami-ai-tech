export type Category = "sites" | "apps" | "ecommerce" | "automacoes";

export interface Project {
  id: string;
  title: string;
  category: Category;
  kicker: string;
  description: string;
  url?: string;
  badge?: string;
  tags: string[];
}

export const categories: { id: Category; label: string }[] = [
  { id: "sites", label: "Sites" },
  { id: "apps", label: "Produtos & Apps" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "automacoes", label: "Automações & IA" },
];

export const projects: Project[] = [
  {
    id: "vitri",
    title: "VITRI",
    category: "sites",
    kicker: "Landing page de produto",
    description:
      "Estúdio de conteúdo visual com IA para lojistas de moda — transforma fotos simples de produto em foto com modelo, vídeo para Reels e criativo para anúncio.",
    url: "https://www.estudiovitri.com",
    tags: ["Next.js", "SaaS", "IA"],
  },
  {
    id: "toca-o-hino",
    title: "Toca o Hino",
    category: "sites",
    kicker: "Landing page + Quiz",
    description:
      "Produto de música personalizada com IA: o cliente conta a história em um bate-papo de 2 minutos e recebe uma prévia grátis antes de comprar.",
    url: "https://www.tocaohino.com.br",
    tags: ["Landing page", "Quiz/Chat", "IA generativa"],
  },
  {
    id: "kitclaude",
    title: "KitClaude",
    category: "sites",
    kicker: "Landing page de produto digital",
    description:
      "Página de vendas para um kit de skills prontas para o Claude — sistema completo com depoimentos, FAQ e checkout direto.",
    url: "https://www.kitclaude-skills.com.br",
    tags: ["Landing page", "Produto digital"],
  },
  {
    id: "visu-ai",
    title: "Visu.AI",
    category: "apps",
    kicker: "App de IA",
    description:
      "Transforma foto de produto em foto com modelo usando IA — upload simples, resultado em minutos, sem ensaio fotográfico.",
    badge: "Em breve",
    tags: ["IA generativa", "Ferramenta web"],
  },
  {
    id: "thibets",
    title: "ThiBETS",
    category: "apps",
    kicker: "App de análise",
    description:
      "Analisador de apostas esportivas com IA: cruza odds e estatísticas para apontar valor em tempo real.",
    badge: "Em breve",
    tags: ["IA", "Dados em tempo real"],
  },
  {
    id: "ecommerce-proto",
    title: "Loja virtual com IA",
    category: "ecommerce",
    kicker: "Protótipo",
    description:
      "Vitrine de e-commerce com recomendação de produtos e atendimento assistido por IA — protótipo em construção.",
    badge: "Em breve",
    tags: ["E-commerce", "IA"],
  },
  {
    id: "auto-whatsapp",
    title: "Atendimento com IA no WhatsApp",
    category: "automacoes",
    kicker: "Automação",
    description:
      "Agente de IA que responde, qualifica e agenda automaticamente pelo WhatsApp, com transferência para humano quando necessário.",
    badge: "Sob demanda",
    tags: ["IA conversacional", "WhatsApp"],
  },
  {
    id: "auto-n8n",
    title: "Workflows com n8n + IA",
    category: "automacoes",
    kicker: "Automação",
    description:
      "Automações self-hosted que conectam APIs, planilhas, CRMs e IA generativa sem depender de ferramentas fechadas.",
    badge: "Sob demanda",
    tags: ["n8n", "Integrações"],
  },
  {
    id: "auto-dashboard",
    title: "Dashboards e rotinas internas",
    category: "automacoes",
    kicker: "Automação",
    description:
      "Painéis e automações que conectam dados de times comerciais e operacionais, cortando trabalho manual repetitivo.",
    badge: "Sob demanda",
    tags: ["Dashboards", "Automação interna"],
  },
];

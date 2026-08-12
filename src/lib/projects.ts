export type Category = "sites" | "ecommerce" | "automacoes";

export interface Project {
  id: string;
  title: string;
  category: Category;
  kicker: string;
  description: string;
  url?: string;
  badge?: string;
  image?: string;
  /** Looping muted preview clip — used instead of `image` when present. */
  video?: string;
  /** Render `image` full-bleed without the browser-window mockup (for illustrations, not site screenshots). */
  flat?: boolean;
  /** Solid card background color (hex) — the site's own brand tone. */
  bg: string;
  /** Label text color, chosen for contrast against `bg`. */
  label: string;
  tags: string[];
}

export const categories: { id: Category; label: string }[] = [
  { id: "sites", label: "Sites" },
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
    image: "/shots/vitri.jpg",
    video: "/videos/vitri.mp4",
    bg: "#0e1b2e",
    label: "#a9c5e8",
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
    image: "/shots/toca-o-hino.jpg",
    video: "/videos/toca-o-hino.mp4",
    bg: "#3a1220",
    label: "#f0c4d3",
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
    image: "/shots/kitclaude.jpg",
    video: "/videos/kitclaude.mp4",
    bg: "#ece1cb",
    label: "#3a2f1c",
    tags: ["Landing page", "Produto digital"],
  },
  {
    id: "ayam",
    title: "AYAM.CO",
    category: "ecommerce",
    kicker: "E-commerce",
    description:
      "Loja virtual de skincare — vitrine de produtos, carrinho e identidade de marca completa, do zero ao protótipo navegável.",
    url: "https://ayam-company.vercel.app",
    image: "/shots/ayam.jpg",
    video: "/videos/ayam.mp4",
    bg: "#e3c6ae",
    label: "#5a3a24",
    tags: ["E-commerce", "Next.js"],
  },
  {
    id: "auto-whatsapp",
    title: "Atendimento com IA no WhatsApp",
    category: "automacoes",
    kicker: "Automação",
    description:
      "Agente de IA que responde, qualifica e agenda automaticamente pelo WhatsApp, com transferência para humano quando necessário.",
    badge: "Sob demanda",
    image: "/shots/auto-whatsapp.jpg",
    flat: true,
    bg: "#161009",
    label: "#c9a98a",
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
    image: "/shots/auto-n8n.jpg",
    flat: true,
    bg: "#161009",
    label: "#c9a98a",
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
    image: "/shots/auto-dashboard.jpg",
    flat: true,
    bg: "#161009",
    label: "#c9a98a",
    tags: ["Dashboards", "Automação interna"],
  },
];

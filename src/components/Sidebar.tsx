import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";

// TODO: confirmar número de WhatsApp real antes de enviar pro cliente
const WHATSAPP_NUMBER = "5511999999999";

const STACK = ["Next.js", "n8n", "Supabase", "Claude Code"];

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Sidebar() {
  return (
    <aside className="flex flex-col justify-between gap-10 px-6 py-10 lg:sticky lg:top-0 lg:relative lg:h-screen lg:justify-center lg:px-12 lg:py-16">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
            <Image
              src="/yago.jpg"
              alt="Yago Kamimura"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="font-display text-lg font-medium tracking-tight text-foreground">
              Kami AI TECH
            </p>
            <p className="text-sm text-muted-foreground">Yago Kamimura</p>
          </div>
        </div>

        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          Sites, e-commerce e automações com IA.
          <br />
          Feitos para vender e aparecer no Google.
        </p>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent-strong"
        >
          <MessageCircle size={16} />
          Vamos conversar
        </a>

        <div className="flex gap-3">
          <a
            href="mailto:yagokami@gmail.com"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:border-accent-border hover:text-accent-strong"
            aria-label="Enviar e-mail"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://instagram.com/kamimura.ia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:border-accent-border hover:text-accent-strong"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>

        <p className="text-xs text-muted-foreground/70">{STACK.join(" · ")}</p>
      </div>

      <p className="hidden text-xs text-muted-foreground/60 lg:block lg:absolute lg:bottom-16">
        Portfólio — {new Date().getFullYear()}
      </p>
    </aside>
  );
}

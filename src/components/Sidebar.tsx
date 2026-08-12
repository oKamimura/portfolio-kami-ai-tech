import Image from "next/image";
import { Mail } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between gap-10 px-6 py-10 lg:px-12 lg:py-16">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-accent/40">
            <Image
              src="/yago.jpg"
              alt="Yago Kamimura"
              fill
              sizes="56px"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="font-display text-lg font-semibold tracking-tight text-foreground">
              Kami AI TECH
            </p>
            <p className="text-sm text-muted-foreground">Yago Kamimura</p>
          </div>
        </div>

        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          Desenvolvimento de sites e produtos digitais com{" "}
          <span className="text-foreground">IA aplicada de ponta a ponta</span> —
          da landing page à automação que roda por trás dela.
        </p>

        <div className="flex gap-3">
          <a
            href="mailto:yagokami@gmail.com"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:border-accent-border hover:text-accent-strong"
            aria-label="Enviar e-mail"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      <p className="hidden text-xs text-muted-foreground/70 lg:block">
        Portfólio — {new Date().getFullYear()}
      </p>
    </aside>
  );
}

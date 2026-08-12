import Image from "next/image";

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
          Sites e produtos digitais com IA aplicada de ponta a ponta.
        </p>

        <a
          href="mailto:yagokami@gmail.com"
          className="w-fit text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent-strong"
        >
          yagokami@gmail.com
        </a>
      </div>

      <p className="hidden text-xs text-muted-foreground/60 lg:block lg:absolute lg:bottom-16">
        Portfólio — {new Date().getFullYear()}
      </p>
    </aside>
  );
}

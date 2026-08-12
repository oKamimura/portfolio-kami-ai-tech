"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories, projects, type Category } from "@/lib/projects";

export default function ProjectExplorer() {
  const [active, setActive] = useState<Category>("sites");
  const filtered = projects.filter((p) => p.category === active);

  return (
    <div className="flex flex-col gap-10 px-6 py-10 lg:px-4 lg:py-24">
      <nav className="flex flex-wrap gap-x-6 gap-y-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`text-sm transition-colors ${
              active === cat.id
                ? "text-accent-strong"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      <div className="flex flex-col gap-10 pb-32">
        {filtered.map((project, i) => {
          const card = project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <ProjectCard project={project} />
            </a>
          ) : (
            <div className="group block cursor-default">
              <ProjectCard project={project} />
            </div>
          );

          return (
            <article
              key={project.id}
              style={{ top: `${1.5 + i * 0.75}rem` }}
              className="sticky bg-background"
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {card}
              </motion.div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover:-translate-y-1">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-background">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground">
              {project.badge}
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
        <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-white/70">
              {project.kicker}
            </p>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {project.title}
            </h3>
          </div>
          {project.url && (
            <span className="mb-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors group-hover:bg-accent group-hover:text-background">
              <ArrowUpRight size={16} />
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3 p-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-background/60 px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

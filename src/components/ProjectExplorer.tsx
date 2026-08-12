"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { categories, projects, type Category } from "@/lib/projects";

export default function ProjectExplorer() {
  const [active, setActive] = useState<Category>("sites");
  const filtered = projects.filter((p) => p.category === active);

  return (
    <div className="flex flex-col gap-8 px-6 py-10 lg:px-4 lg:py-16">
      <nav className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === cat.id
                ? "border-accent-border bg-accent-soft text-accent-strong"
                : "border-border bg-surface text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      <div className="flex flex-col gap-6 pb-24">
        {filtered.map((project, i) => (
          <article
            key={project.id}
            style={{ top: `${1.5 + i * 0.9}rem` }}
            className="sticky rounded-3xl border border-border bg-surface p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] transition-colors hover:bg-surface-hover sm:p-10"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <p className="text-xs font-medium uppercase tracking-wider text-accent-strong">
                  {project.kicker}
                </p>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-accent-border bg-accent-soft px-3 py-1 text-xs font-medium text-accent-strong transition-colors hover:bg-accent hover:text-background"
                  >
                    Ver projeto
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                    {project.badge}
                  </span>
                )}
              </div>

              <h3 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {project.title}
              </h3>

              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
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
          </article>
        ))}
      </div>
    </div>
  );
}

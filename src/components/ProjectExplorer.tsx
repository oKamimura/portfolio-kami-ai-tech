"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories, projects, type Category, type Project } from "@/lib/projects";

export default function ProjectExplorer() {
  const [active, setActive] = useState<Category>("sites");
  const filtered = projects.filter((p) => p.category === active);
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="flex flex-col gap-8 px-6 py-10 lg:px-4 lg:py-24">
      <nav className="scrollbar-none -mx-6 flex snap-x gap-x-7 overflow-x-auto px-6 lg:mx-0 lg:px-0">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`shrink-0 snap-start text-sm transition-colors ${
              active === cat.id
                ? "text-accent-strong"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      <div className="relative" style={{ perspective: 1400 }}>
        <div ref={listRef} className="flex flex-col gap-3 pb-[30vh]">
          {filtered.map((project, i) => (
            <StackItem
              key={project.id}
              project={project}
              index={i}
              total={filtered.length}
              progress={scrollYProgress}
            />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="sticky top-0 flex h-screen flex-col items-end justify-center gap-2.5 pr-1">
            {filtered.map((_, i) => (
              <Dot key={i} index={i} total={filtered.length} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Dot({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const scale = useTransform(progress, [start, (start + end) / 2, end], [1, 1.8, 1]);
  const opacity = useTransform(progress, [start, (start + end) / 2, end], [0.3, 1, 0.3]);

  return (
    <motion.span
      style={{ scale, opacity }}
      className="h-1.5 w-1.5 rounded-full bg-accent-strong"
    />
  );
}

function StackItem({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = start + (1 / total) * 0.4;
  const scale = useTransform(progress, [start, end], [index === 0 ? 1 : 0.94, 1]);
  const rotateX = useTransform(progress, [start, end], [index === 0 ? 0 : 6, 0]);

  return (
    <article className="sticky bg-background" style={{ top: `${4 + index * 1.15}rem` }}>
      <motion.div
        style={{ scale, rotateX, transformOrigin: "top center" }}
        className="will-change-transform"
      >
        <Card project={project} />
      </motion.div>
    </article>
  );
}

function Card({ project }: { project: Project }) {
  const body = (
    <div
      className="relative flex h-[380px] flex-col overflow-hidden rounded-[28px] sm:h-[440px]"
      style={{ backgroundColor: project.bg }}
    >
      {project.url && (
        <span className="absolute top-6 right-6 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-current opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight size={16} style={{ color: project.label }} />
        </span>
      )}

      <div className="flex flex-1 items-center justify-center px-8 pt-8">
        {project.video || project.image ? (
          <div className="w-full max-w-[86%] overflow-hidden rounded-xl bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out group-hover:-translate-y-1.5">
            <div className="flex h-6 items-center gap-1.5 border-b border-black/5 bg-white px-3">
              <span className="h-1.5 w-1.5 rounded-full bg-black/10" />
              <span className="h-1.5 w-1.5 rounded-full bg-black/10" />
              <span className="h-1.5 w-1.5 rounded-full bg-black/10" />
            </div>
            <div className="relative aspect-[16/10] w-full">
              {project.video ? (
                <video
                  src={project.video}
                  poster={project.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-cover object-left-top"
                />
              ) : (
                <Image
                  src={project.image!}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 560px, 90vw"
                  className="object-cover object-left-top"
                />
              )}
            </div>
          </div>
        ) : (
          <span
            className="rounded-full border px-4 py-1.5 text-xs font-medium"
            style={{ borderColor: `${project.label}40`, color: project.label }}
          >
            {project.badge}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1 px-8 pb-8">
        <p
          className="text-xs font-medium tracking-wide uppercase opacity-60"
          style={{ color: project.label }}
        >
          {project.kicker}
        </p>
        <h3
          className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
          style={{ color: project.label }}
        >
          {project.title}
        </h3>
        <p
          className="max-w-md text-sm leading-relaxed opacity-70"
          style={{ color: project.label }}
        >
          {project.description}
        </p>
      </div>
    </div>
  );

  if (!project.url) {
    return <div className="group block cursor-default">{body}</div>;
  }

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      {body}
    </a>
  );
}

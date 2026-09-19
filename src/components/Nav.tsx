"use client";

import { motion } from "motion/react";

const links = ["Work", "Creatives", "Services", "Studio", "Contact"];

export default function Nav({ visible }: { visible: boolean }) {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-12"
      initial={{ y: -80, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      style={{ mixBlendMode: "difference" }}
    >
      <a href="#" className="font-display text-base tracking-tight text-[#eef0ff]">
        DUMMY<span className="text-[#5a4bff]">.</span>
        <span className="ml-1 hidden text-[10px] font-normal tracking-[0.2em] text-[rgba(238,240,255,0.6)] sm:inline">
          PORTFOLIO
        </span>
      </a>
      <nav className="flex items-center gap-7">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="group relative text-[11px] uppercase tracking-[0.25em] text-[#eef0ff]"
          >
            {l}
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#5a4bff] transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
        <a
          href="#contact"
          className="hidden rounded-full border border-[#eef0ff] px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-[#eef0ff] transition-colors duration-300 hover:border-[#5a4bff] hover:bg-[#5a4bff] md:block"
        >
          Let&apos;s Talk
        </a>
      </nav>
    </motion.header>
  );
}

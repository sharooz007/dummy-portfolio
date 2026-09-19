"use client";

import { motion } from "motion/react";
import Marquee from "./Marquee";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-[rgba(238,240,255,0.12)]">
      <div className="blob bottom-[-30%] left-[20%] h-[50vh] w-[50vw] bg-[#1423bb] opacity-30" />

      <a href="mailto:hello@dummyportfolio.com" data-cursor="link" className="relative block py-20 md:py-28">
        <Marquee duration={16}>
          <span className="mx-8 inline-flex items-center gap-8">
            <span className="font-display text-[16vw] leading-none text-[#eef0ff] transition-colors hover:text-[#5a4bff] md:text-[9vw]">
              LET&apos;S BUILD
            </span>
            <span className="font-display text-[16vw] leading-none text-[#5a4bff] md:text-[9vw]">✦</span>
            <span className="text-outline-indigo font-display text-[16vw] leading-none md:text-[9vw]">
              SOMETHING
            </span>
            <span className="font-display text-[16vw] leading-none text-[#5a4bff] md:text-[9vw]">✦</span>
          </span>
        </Marquee>
      </a>

      <div className="relative flex flex-col items-start justify-between gap-8 border-t border-[rgba(238,240,255,0.12)] px-6 py-10 md:flex-row md:items-center md:px-12">
        <motion.span
          className="font-display text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          DUMMY<span className="text-[#5a4bff]">.</span>
        </motion.span>

        <div className="flex flex-wrap gap-x-10 gap-y-3 text-[11px] uppercase tracking-[0.25em] text-[rgba(238,240,255,0.55)]">
          <a href="#" className="transition-colors hover:text-[#8b7bff]">Instagram</a>
          <a href="#" className="transition-colors hover:text-[#8b7bff]">Facebook</a>
          <a href="#" className="transition-colors hover:text-[#8b7bff]">Behance</a>
          <a href="mailto:hello@dummyportfolio.com" className="transition-colors hover:text-[#8b7bff]">
            hello@dummyportfolio.com
          </a>
        </div>

        <span className="text-[11px] uppercase tracking-[0.25em] text-[rgba(238,240,255,0.35)]">
          © {new Date().getFullYear()} Dummy Portfolio
        </span>
      </div>
    </footer>
  );
}

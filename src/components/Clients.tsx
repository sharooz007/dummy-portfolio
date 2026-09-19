"use client";

import { motion } from "motion/react";
import Marquee from "./Marquee";
import { clients } from "@/data/works";

export default function Clients() {
  return (
    <section className="relative border-y border-[rgba(238,240,255,0.12)] py-16 md:py-20">
      <motion.p
        className="mb-10 text-center text-[11px] uppercase tracking-[0.3em] text-[rgba(238,240,255,0.45)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Trusted by brands we&apos;ve built for
      </motion.p>
      <Marquee duration={26}>
        {clients.map((c) => (
          <span key={c} className="mx-10 inline-flex items-center gap-10">
            <span className="font-display text-2xl text-[rgba(238,240,255,0.7)] transition-colors hover:text-[#8b7bff] md:text-4xl">
              {c}
            </span>
            <span className="text-[#5a4bff]">·</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}

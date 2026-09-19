"use client";

import { motion } from "motion/react";
import { creativeImages } from "@/data/creatives";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Creative Wall — every creative as a uniform, image-dense grid.
 * Replaces the full-screen horizontal gallery.
 */
export default function CreativesGrid() {
  return (
    <section id="creatives" className="relative px-6 py-28 md:px-12 md:py-40">
      <div className="blob right-[5%] top-[5%] h-[40vh] w-[35vw] bg-[#1423bb] opacity-20" />

      {/* heading */}
      <div className="relative mb-16 flex items-end justify-between md:mb-20">
        <div className="overflow-hidden">
          <motion.h2
            className="font-display text-[13vw] leading-[0.85] md:text-[7.5vw]"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease }}
          >
            THE
            <br />
            <span className="text-outline-indigo">CREATIVES</span>
          </motion.h2>
        </div>
        <motion.span
          className="font-display hidden text-2xl text-[rgba(238,240,255,0.4)] md:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          ({creativeImages.length})
        </motion.span>
      </div>

      {/* uniform grid */}
      <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {creativeImages.map((src, i) => (
          <motion.div
            key={src}
            data-cursor="view"
            className="group relative aspect-square overflow-hidden rounded-md bg-[#0b0b16]"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-4%" }}
            transition={{ duration: 0.6, ease, delay: (i % 4) * 0.05 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Creative ${i + 1}`}
              loading="lazy"
              className="card-img h-full w-full object-cover"
            />
            {/* hover veil */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06060c]/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.25em] text-white/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {String(i + 1).padStart(2, "0")}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

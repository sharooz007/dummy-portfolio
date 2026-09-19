"use client";

import { motion } from "motion/react";
import { works, USE_REAL_IMAGES } from "@/data/works";
import Placeholder from "./Placeholder";

const ease = [0.16, 1, 0.3, 1] as const;

const layout = [
  "md:col-span-1 lg:col-span-3 aspect-[4/5]",
  "md:col-span-1 lg:col-span-3 aspect-[4/5] lg:mt-40",
  "md:col-span-1 lg:col-span-2 aspect-square",
  "md:col-span-1 lg:col-span-2 aspect-square lg:mt-24",
  "md:col-span-2 lg:col-span-2 aspect-square lg:-mt-10",
  "md:col-span-1 lg:col-span-4 aspect-[16/10]",
  "md:col-span-1 lg:col-span-2 aspect-[4/5] lg:mt-32",
  "md:col-span-2 lg:col-span-3 aspect-[4/5]",
  "md:col-span-1 lg:col-span-3 aspect-[4/5] lg:mt-20",
  "md:col-span-1 lg:col-span-2 aspect-square",
  "md:col-span-1 lg:col-span-2 aspect-square lg:mt-28",
  "md:col-span-2 lg:col-span-2 aspect-square",
];

export default function WorkGrid() {
  return (
    <section id="work" className="relative px-6 py-28 md:px-12 md:py-40">
      <div className="mb-16 flex items-end justify-between md:mb-24">
        <div className="overflow-hidden">
          <motion.h2
            className="font-display text-[14vw] leading-[0.85] md:text-[8vw]"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease }}
          >
            SELECTED
            <br />
            <span className="text-outline-indigo">WORK</span>
          </motion.h2>
        </div>
        <motion.span
          className="font-display hidden text-2xl text-[rgba(238,240,255,0.4)] md:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          ({String(works.length).padStart(2, "0")})
        </motion.span>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-6">
        {works.map((w, i) => (
          <motion.a
            key={w.id}
            href={w.url ?? "#work"}
            {...(w.url ? { target: "_blank", rel: "noreferrer" } : {})}
            data-cursor="view"
            className={`group block ${layout[i % layout.length]}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.9, ease, delay: (i % 3) * 0.08 }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-lg">
              {USE_REAL_IMAGES ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={w.image}
                  alt={w.title}
                  loading="lazy"
                  className="card-img h-full w-full object-cover"
                />
              ) : (
                <div className="card-img h-full w-full">
                  <Placeholder label={w.client} index={i} className="h-full w-full" />
                </div>
              )}
              <div className="absolute inset-0 bg-[#06060c]/0 transition-colors duration-500 group-hover:bg-[#06060c]/20" />
            </div>
            <div className="mt-4 flex items-baseline justify-between border-t border-[rgba(238,240,255,0.12)] pt-3">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#8b7bff]">
                  {String(w.id).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-1 text-xl leading-none md:text-2xl">{w.client}</h3>
                <p className="mt-1 text-[11px] text-[rgba(238,240,255,0.55)]">{w.title}</p>
              </div>
              <div className="text-right">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[rgba(238,240,255,0.55)]">
                  {w.category}
                </p>
                <p className="text-[11px] text-[rgba(238,240,255,0.35)]">{w.year}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

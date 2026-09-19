"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { services } from "@/data/services";
import Placeholder from "./Placeholder";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="relative px-6 py-28 md:px-12 md:py-40">
      <div className="mb-16 md:mb-24">
        <span className="mb-6 block text-[11px] uppercase tracking-[0.3em] text-[#8b7bff]">
          What we do
        </span>
        <div className="overflow-hidden">
          <motion.h2
            className="font-display text-[13vw] leading-[0.85] md:text-[7.5vw]"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease }}
          >
            EVERYTHING
            <br />
            <span className="text-outline-indigo">ON A SCREEN</span>
          </motion.h2>
        </div>
        <motion.p
          className="mt-8 max-w-xl text-sm leading-relaxed text-[rgba(238,240,255,0.6)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Four disciplines, one accountable team. Whatever your business needs
          on a digital screen — software, marketing, content or a storefront —
          we design it, build it and run it under one roof.
        </motion.p>
      </div>

      <div className="relative flex gap-12">
        <div className="flex-1">
          {services.map((s, i) => (
            <motion.div
              key={s.no}
              onMouseEnter={() => setActive(i)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.8, ease, delay: 0.05 * i }}
              className={`group border-t border-[rgba(238,240,255,0.12)] py-10 md:py-14 ${
                i === services.length - 1 ? "border-b border-[rgba(238,240,255,0.12)]" : ""
              }`}
            >
              <div className="flex items-baseline gap-6 md:gap-10">
                <span
                  className={`font-display text-sm md:text-base transition-colors duration-300 ${
                    active === i ? "text-[#8b7bff]" : "text-[rgba(238,240,255,0.35)]"
                  }`}
                >
                  {s.no}
                </span>
                <h3 className="font-display text-[8vw] leading-[0.9] transition-transform duration-500 group-hover:translate-x-3 md:text-[3.2vw]">
                  {s.title}
                </h3>
              </div>

              <div className="mt-6 md:ml-[4.5rem]">
                <p className="font-display text-lg text-[#8b7bff] md:text-xl">{s.tagline}</p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[rgba(238,240,255,0.6)]">
                  {s.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.capabilities.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-[rgba(238,240,255,0.18)] px-4 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[rgba(238,240,255,0.65)] transition-colors duration-300 hover:border-[#5a4bff] hover:text-[#eef0ff]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="sticky top-32 hidden h-[440px] w-[26%] shrink-0 self-start overflow-hidden rounded-lg lg:block">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={active}
              className="absolute inset-0"
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              exit={{ clipPath: "inset(0 0 100% 0)" }}
              transition={{ duration: 0.6, ease }}
            >
              <Placeholder
                label={services[active].title}
                index={active}
                className="h-full w-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

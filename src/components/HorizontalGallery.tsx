"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { featuredWorks, USE_REAL_IMAGES } from "@/data/works";
import Placeholder from "./Placeholder";

export default function HorizontalGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-72%"]);

  const items = featuredWorks;

  return (
    <section ref={ref} className="relative h-[320vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="blob right-[10%] top-[20%] h-[40vh] w-[35vw] bg-[#1423bb] opacity-25" />
        <div className="relative mb-10 flex items-baseline justify-between px-6 md:px-12">
          <h2 className="font-display text-[10vw] leading-none md:text-[5vw]">
            FEATURED <span className="text-gradient">WORK</span>
          </h2>
          <span className="text-[11px] uppercase tracking-[0.3em] text-[rgba(238,240,255,0.55)]">
            Keep scrolling
          </span>
        </div>

        <motion.div style={{ x }} className="flex gap-6 pl-6 md:pl-12">
          {items.map((w, i) => (
            <div
              key={w.id}
              data-cursor="view"
              className={`group relative shrink-0 ${i % 3 === 1 ? "mt-16" : i % 3 === 2 ? "mt-8" : ""}`}
            >
              <div className="relative h-[52vh] w-[78vw] overflow-hidden rounded-lg md:h-[62vh] md:w-[30vw]">
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
                    <Placeholder label={w.client} index={i + 1} className="h-full w-full" />
                  </div>
                )}
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-display text-lg">{w.client}</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[rgba(238,240,255,0.5)]">
                  {w.category}
                </span>
              </div>
            </div>
          ))}

          <div className="flex h-[52vh] w-[70vw] shrink-0 items-center justify-center md:h-[62vh] md:w-[24vw]">
            <a
              href="#contact"
              className="font-display text-center text-[10vw] leading-[0.85] text-[#eef0ff] transition-colors hover:text-[#5a4bff] md:text-[3.5vw]"
            >
              START
              <br />A PROJECT →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

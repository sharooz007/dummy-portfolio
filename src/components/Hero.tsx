"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Marquee from "./Marquee";

const ease = [0.16, 1, 0.3, 1] as const;
const line = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: 0,
    transition: { duration: 0.9, ease, delay: 0.15 + i * 0.09 },
  }),
};

export default function Hero({ started }: { started: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yCard = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] flex-col justify-between overflow-hidden px-6 pb-8 pt-24 md:px-12"
    >
      {/* ambient gradient blobs */}
      <div className="blob left-[-10%] top-[-15%] h-[55vh] w-[45vw] bg-[#1423bb] opacity-40" />
      <div className="blob right-[-5%] top-[10%] h-[50vh] w-[38vw] bg-[#5a4bff] opacity-25" />
      <div className="blob bottom-[-20%] left-[30%] h-[45vh] w-[40vw] bg-[#2a1b6e] opacity-35" />

      {/* floating creative card */}
      <motion.div
        style={{ y: yCard }}
        className="pointer-events-none absolute right-[6%] top-[15%] z-0 hidden w-[24vw] max-w-[320px] rotate-6 md:block"
      >
        <motion.div
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={started ? { clipPath: "inset(0% 0 0 0)" } : {}}
          transition={{ duration: 1, ease, delay: 0.9 }}
          className="aspect-[4/5] overflow-hidden rounded-lg shadow-[0_30px_80px_rgba(20,35,187,0.45)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/creatives/creative-27.jpeg"
            alt="Featured creative"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* top meta */}
      <motion.div
        className="relative z-10 flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-[rgba(238,240,255,0.55)]"
        initial={{ opacity: 0 }}
        animate={started ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <span>End-to-End Digital Partner</span>
        <span className="hidden md:inline">Software · Marketing · Content</span>
        <span>Scroll ↓</span>
      </motion.div>

      {/* title */}
      <motion.div style={{ y: yTitle, opacity }} className="relative z-10">
        <h1 className="font-display text-[15.5vw] leading-[0.84] md:text-[13vw]">
          <span className="block overflow-hidden">
            <motion.span className="block" custom={0} variants={line} initial="hidden" animate={started ? "show" : "hidden"}>
              DUMMY
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="text-outline block"
              custom={1}
              variants={line}
              initial="hidden"
              animate={started ? "show" : "hidden"}
            >
              PORT<span className="text-gradient" style={{ WebkitTextStroke: "0" }}>FOLIO</span>
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="mt-6 max-w-xl text-sm leading-relaxed text-[rgba(238,240,255,0.65)]"
          initial={{ opacity: 0, y: 20 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Your end-to-end digital partner. We build custom software, run
          full-funnel marketing and produce content — everything your brand
          needs on a screen, engineered around your business.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={started ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.15 }}
        >
          <a
            href="#work"
            className="rounded-full bg-gradient-to-r from-[#5a4bff] to-[#3d5bff] px-7 py-3 text-[11px] uppercase tracking-[0.25em] text-white transition-transform duration-300 hover:scale-105"
          >
            See the work
          </a>
          <a
            href="#services"
            className="rounded-full border border-[rgba(238,240,255,0.25)] px-7 py-3 text-[11px] uppercase tracking-[0.25em] text-[#eef0ff] transition-colors duration-300 hover:border-[#5a4bff]"
          >
            What we do
          </a>
        </motion.div>
      </motion.div>

      {/* bottom marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={started ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="relative z-10 -mx-6 border-y border-[rgba(238,240,255,0.12)] py-3 md:-mx-12"
      >
        <Marquee duration={22}>
          {["Custom Software", "Digital Marketing", "Video Production", "Web & eCommerce", "ERP · CRM · POS", "Brand Design"].map(
            (t) => (
              <span key={t} className="mx-6 inline-flex items-center gap-6">
                <span className="font-display text-xl text-[#eef0ff] md:text-2xl">{t}</span>
                <span className="text-[#5a4bff]">✦</span>
              </span>
            )
          )}
        </Marquee>
      </motion.div>
    </section>
  );
}

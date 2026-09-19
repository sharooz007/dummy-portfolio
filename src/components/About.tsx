"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";

const statement =
  "Dummy Portfolio is your end-to-end digital partner. We don't hand you software and expect you to adapt — we learn how your business runs, then build every system, campaign and asset to fit it. Software that adapts to you. Marketing that performs. Content that carries it all.";

const stats = [
  { value: "4", label: "Disciplines in-house" },
  { value: "60+", label: "Projects delivered" },
  { value: "0", label: "Hand-offs to vendors" },
];

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.28em] inline-block">
      {word}
    </motion.span>
  );
}

export default function About() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.35"],
  });
  const words = statement.split(" ");

  return (
    <section id="studio" className="relative px-6 py-28 md:px-12 md:py-44">
      <div className="blob left-[10%] top-[10%] h-[40vh] w-[35vw] bg-[#2a1b6e] opacity-30" />
      <div className="relative mx-auto max-w-5xl">
        <span className="mb-10 block text-[11px] uppercase tracking-[0.3em] text-[#8b7bff]">
          The Studio
        </span>
        <p ref={ref} className="font-display text-[7vw] leading-[1.04] md:text-[3.2vw]">
          {words.map((word, i) => (
            <Word
              key={i}
              word={word}
              progress={scrollYProgress}
              range={[i / words.length, (i + 1) / words.length]}
            />
          ))}
        </p>

        <div className="mt-24 grid grid-cols-3 gap-6 border-t border-[rgba(238,240,255,0.12)] pt-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="font-display text-gradient text-5xl md:text-7xl">{s.value}</div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-[rgba(238,240,255,0.55)]">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

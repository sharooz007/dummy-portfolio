"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const words = ["BUILD", "DESIGN", "MARKET", "FILM", "LAUNCH", "DUMMY"];

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const wordTimer = setInterval(() => {
      setIndex((i) => {
        if (i >= words.length - 1) {
          clearInterval(wordTimer);
          return i;
        }
        return i + 1;
      });
    }, 120);

    const endTimer = setTimeout(() => {
      setShow(false);
      setTimeout(onDone, 700);
    }, words.length * 120 + 500);

    return () => {
      clearInterval(wordTimer);
      clearTimeout(endTimer);
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-[#06060c]"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="blob h-[50vh] w-[50vw] bg-[#1423bb] opacity-30" />
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                className="font-display block text-[16vw] leading-none text-[#eef0ff] md:text-[10vw]"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {words[index]}
                {index === words.length - 1 && (
                  <span className="text-gradient">.</span>
                )}
              </motion.span>
            </AnimatePresence>
          </div>
          <div className="absolute bottom-10 left-1/2 h-px w-40 -translate-x-1/2 bg-[rgba(238,240,255,0.15)]">
            <motion.div
              className="h-full bg-gradient-to-r from-[#5a4bff] to-[#8b7bff]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: words.length * 0.12 + 0.4, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

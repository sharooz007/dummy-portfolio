"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<"default" | "view" | "link">("default");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 40, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 400, damping: 40, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-none-fine");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      if (t.closest("[data-cursor='view']")) setVariant("view");
      else if (t.closest("a, button, [data-cursor='link']")) setVariant("link");
      else setVariant("default");
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("cursor-none-fine");
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = variant === "view" ? 92 : variant === "link" ? 46 : 14;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: size,
        height: size,
        backgroundColor:
          variant === "view" ? "#5a4bff" : variant === "link" ? "#eef0ff" : "#eef0ff",
        mixBlendMode: variant === "view" ? "normal" : "difference",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      {variant === "view" && (
        <span className="font-display text-[13px] tracking-widest text-white">VIEW</span>
      )}
    </motion.div>
  );
}

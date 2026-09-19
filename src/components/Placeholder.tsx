import { CSSProperties } from "react";

/**
 * Brand-gradient placeholder used in place of real imagery for now.
 * Renders a soft blue/violet Dummy Portfolio gradient with a subtle mark.
 * Variants change the blend so each card feels distinct.
 */
export default function Placeholder({
  label,
  index = 0,
  className = "",
}: {
  label: string;
  index?: number;
  className?: string;
}) {
  const variants: CSSProperties[] = [
    { background: "radial-gradient(120% 120% at 20% 10%, #2a1b6e 0%, #141a7a 35%, #5a4bff 70%, #0a0a12 100%)" },
    { background: "radial-gradient(130% 130% at 80% 20%, #3b1d8f 0%, #241a6e 40%, #1423bb 75%, #08070f 100%)" },
    { background: "radial-gradient(120% 140% at 30% 80%, #1a1450 0%, #4a3bff 45%, #2a1b6e 80%, #0a0a12 100%)" },
    { background: "conic-gradient(from 210deg at 50% 40%, #141a7a, #5a4bff, #241a6e, #1423bb, #141a7a)" },
  ];
  const style = variants[index % variants.length];

  return (
    <div
      className={`relative flex h-full w-full items-center justify-center overflow-hidden ${className}`}
      style={style}
      aria-label={label}
      role="img"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-overlay [background:radial-gradient(60%_60%_at_50%_40%,rgba(255,255,255,0.5),transparent_70%)]" />
      <span className="font-display px-4 text-center text-lg uppercase tracking-[0.2em] text-white/70">
        {label}
      </span>
      <span className="absolute bottom-3 right-4 text-[9px] uppercase tracking-[0.3em] text-white/40">
        Dummy Portfolio
      </span>
    </div>
  );
}

"use client";

import { ReactNode } from "react";

export default function Marquee({
  children,
  duration = 30,
  className = "",
}: {
  children: ReactNode;
  duration?: number;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div
        className="animate-marquee inline-flex will-change-transform"
        style={{ ["--marquee-duration" as string]: `${duration}s` }}
      >
        <span className="inline-flex items-center">{children}</span>
        <span className="inline-flex items-center" aria-hidden="true">
          {children}
        </span>
      </div>
    </div>
  );
}

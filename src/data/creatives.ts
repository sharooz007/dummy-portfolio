/**
 * Full creative wall — every asset in /public/creatives, displayed as a grid.
 */
export const creativeImages: string[] = Array.from(
  { length: 64 },
  (_, i) => `/creatives/creative-${String(i + 1).padStart(2, "0")}.jpeg`
);

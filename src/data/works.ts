export type Work = {
  id: number;
  title: string;
  client: string;
  category: string;
  year: string;
  image: string;
  services: string[];
  featured?: boolean;
  url?: string;
};

/**
 * Selected Work index — labels AI-read directly from the referenced image files.
 * Imagery lives in /public/creatives and renders when USE_REAL_IMAGES is true.
 */
export const USE_REAL_IMAGES = true;

export const works: Work[] = [
  { id: 0, title: "TINDI & CO — Brand Website", client: "TINDI & CO", category: "Website Design & Development", year: "2026", image: "/creatives/tindiandco.jpg", services: ["Web Design", "Development", "eCommerce"], featured: true, url: "https://tindiandco.com/" },
  { id: 1, title: "Veg Fried Rice", client: "Honcho × Diamond Dine", category: "Regional Food Campaign", year: "2024", image: "/creatives/creative-02.jpeg", services: ["Food Styling", "Regional Ad", "Social"], featured: true },
  { id: 2, title: "Surprise Chocolate Hampers", client: "Honcho", category: "Gifting Campaign", year: "2024", image: "/creatives/creative-03.jpeg", services: ["Campaign", "Lifestyle Shoot"], featured: true },
  { id: 3, title: "Sweet Gifts & Chocolate Bouquets", client: "Honcho Bakes", category: "Gifting & Packaging", year: "2024", image: "/creatives/creative-05.jpeg", services: ["Packaging", "Key Visual"], featured: true },
  { id: 4, title: "Pykin For The Rescue", client: "Pykin", category: "App Launch Campaign", year: "2024", image: "/creatives/creative-07.jpeg", services: ["App Marketing", "Key Visual"], featured: true },
  { id: 5, title: "Vishappinte Oru Vili", client: "Pykin", category: "App Campaign", year: "2024", image: "/creatives/creative-08.jpeg", services: ["Illustration", "Regional Ad"], featured: true },
  { id: 6, title: "Delivery Round The Clock", client: "Pykin", category: "App Campaign", year: "2024", image: "/creatives/creative-09.jpeg", services: ["Key Visual", "Social"], featured: true },
  { id: 7, title: "The Only +4 We Never Say No To", client: "Wok & Fork", category: "Social Campaign", year: "2024", image: "/creatives/creative-10.jpeg", services: ["Social", "Ad Creative"] },
  { id: 8, title: "Lime Mint", client: "Bamboo Restaurant", category: "Beverage Campaign", year: "2024", image: "/creatives/creative-12.jpeg", services: ["Photography", "Social"] },
  { id: 9, title: "Ye Le Noodles Khaa", client: "Wok & Fork", category: "Brand Mascot Campaign", year: "2024", image: "/creatives/creative-14.jpeg", services: ["Illustration", "Campaign"] },
  { id: 10, title: "Open Till 3AM", client: "Big Fat Roll", category: "Late-Night Campaign", year: "2024", image: "/creatives/creative-27.jpeg", services: ["Campaign", "Ad Creative"] },
  { id: 11, title: "Newly Launching Sandwich", client: "Big Fat Roll", category: "Product Launch", year: "2024", image: "/creatives/creative-33.jpeg", services: ["Launch", "Art Direction"] },
  { id: 12, title: "The Crunch Champion", client: "Honcho × Diamond Dine", category: "Food Campaign", year: "2024", image: "/creatives/creative-39.jpeg", services: ["Key Visual", "Social"] },
];

export const clients = [
  "TINDI & CO",
  "Big Fat Roll",
  "Bamboo Restaurant",
  "Wok & Fork",
  "Honcho",
  "Honcho Bakes",
  "Pykin",
  "Zestivo",
  "Zestiva Dates & Nuts",
  "Yafco Food & Beverages",
  "Diamond Dine",
];

export const featuredWorks = works.filter((w) => w.featured);

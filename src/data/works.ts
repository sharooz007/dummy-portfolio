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
 * Work index — labels derived from the real creatives (AI-read) plus
 * shipped website projects (e.g. TINDI & CO). Imagery lives in
 * /public/creatives and renders when USE_REAL_IMAGES is true.
 */
export const USE_REAL_IMAGES = true;

const y = (i: number) => String(2023 + (i % 3));

export const works: Work[] = [
  { id: 0, title: "TINDI & CO — Brand Website", client: "TINDI & CO", category: "Website Design & Development", year: "2026", image: "/creatives/tindiandco.jpg", services: ["Web Design", "Development", "eCommerce"], featured: true, url: "https://tindiandco.com/" },
  { id: 1, title: "Loaded Fries Launch", client: "Big Fat Roll", category: "Campaign & Key Visual", year: y(0), image: "/creatives/creative-08.jpeg", services: ["Campaign", "Key Visual", "Social"], featured: true },
  { id: 2, title: "Crispy Chicken — Newly Launching", client: "Big Fat Roll", category: "Product Launch", year: y(1), image: "/creatives/creative-02.jpeg", services: ["Launch", "Art Direction"], featured: true },
  { id: 3, title: "Crossowitch", client: "Big Fat Roll", category: "Key Visual", year: y(2), image: "/creatives/creative-05.jpeg", services: ["Key Visual", "Social"], featured: true },
  { id: 4, title: "The Legend — Bamboo Biryani", client: "Bamboo Restaurant", category: "Food Campaign", year: y(0), image: "/creatives/creative-03.jpeg", services: ["Food Styling", "Campaign"], featured: true },
  { id: 5, title: "Butter Chicken", client: "Bamboo Restaurant", category: "Food Campaign", year: y(1), image: "/creatives/creative-07.jpeg", services: ["Photography", "Social"], featured: true },
  { id: 6, title: "Open Till 3AM", client: "Wok & Fork", category: "Social Campaign", year: y(2), image: "/creatives/creative-12.jpeg", services: ["Social", "Ad Creative"], featured: true },
  { id: 7, title: "Oru Wok & Fork — Drishyam 3", client: "Wok & Fork × Yafco", category: "Brand Collaboration", year: y(0), image: "/creatives/creative-27.jpeg", services: ["Collaboration", "Lifestyle Shoot"] },
  { id: 8, title: "Coconut Milk Powder", client: "Zestivo", category: "Packaging & Regional Campaign", year: y(1), image: "/creatives/creative-10.jpeg", services: ["Packaging", "Regional Ad"] },
  { id: 9, title: "Baby Nutrition Range", client: "Zestivo", category: "Packaging Design", year: y(2), image: "/creatives/creative-14.jpeg", services: ["Packaging", "Key Visual"] },
  { id: 10, title: "Ghee Cookies", client: "Honcho Bakes", category: "Product Campaign", year: y(0), image: "/creatives/creative-09.jpeg", services: ["Product Shoot", "Social"] },
  { id: 11, title: "Nature's Perfect Snack", client: "Zestiva Dates & Nuts", category: "Packaging", year: y(1), image: "/creatives/creative-33.jpeg", services: ["Packaging", "Art Direction"] },
  { id: 12, title: "Kannankaya Powder", client: "Zestivo", category: "Regional Campaign", year: y(2), image: "/creatives/creative-39.jpeg", services: ["Regional Ad", "Lifestyle"] },
];

export const clients = [
  "TINDI & CO",
  "Big Fat Roll",
  "Bamboo Restaurant",
  "Wok & Fork",
  "Zestivo",
  "Honcho Bakes",
  "Zestiva Dates & Nuts",
  "Yafco Food & Beverages",
];

export const featuredWorks = works.filter((w) => w.featured);

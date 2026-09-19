export type Service = {
  no: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    no: "01",
    title: "Software & Platforms",
    tagline: "Systems shaped to your business — never the reverse.",
    description:
      "Off-the-shelf software forces your team to adapt. We do the opposite: we study how your business runs, then engineer the platform around it. Software your team slips into — not software it has to wrestle with.",
    capabilities: [
      "Custom ERP",
      "CRM Platforms",
      "Point-of-Sale (POS)",
      "eCommerce + Admin Control",
      "Business Dashboards",
      "Web Applications",
      "Video Production for Product",
    ],
  },
  {
    no: "02",
    title: "Marketing & Growth",
    tagline: "Full-funnel marketing, managed end to end.",
    description:
      "Strategy, spend and reporting under one roof. We run complete marketing operations for restaurants, retailers and growing brands — structured packages, clear deliverables, measurable outcomes.",
    capabilities: [
      "Meta & Facebook Ads",
      "SEO",
      "Campaign Strategy & Packages",
      "Social Media Marketing",
      "Performance Marketing",
      "Local Business Growth",
    ],
  },
  {
    no: "03",
    title: "Content & Production",
    tagline: "Everything the screen demands, produced in-house.",
    description:
      "Concept to final cut, our production arm builds the assets your brand runs on. Real-world shoots, video, photography and design — one seamless pipeline, one accountable team.",
    capabilities: [
      "Video Production",
      "Photo Shoots",
      "Poster & Key Visual Design",
      "Brand Identity",
      "Social-First Creatives",
      "Campaign Assets",
    ],
  },
  {
    no: "04",
    title: "Websites & eCommerce",
    tagline: "Digital storefronts with complete control.",
    description:
      "From brand sites to full eCommerce, we build fast, conversion-focused web experiences — and hand you the keys. Every build ships with an admin panel so you own your content, products and orders.",
    capabilities: [
      "Business Websites",
      "eCommerce Stores",
      "Admin Panels",
      "Landing Pages",
      "CMS & Content Control",
      "Web Maintenance",
    ],
  },
];

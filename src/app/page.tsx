"use client";

import { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WorkGrid from "@/components/WorkGrid";
import CreativesGrid from "@/components/CreativesGrid";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  const [started, setStarted] = useState(false);

  return (
    <SmoothScroll>
      <Cursor />
      <Preloader onDone={() => setStarted(true)} />
      <Nav visible={started} />
      <main>
        <Hero started={started} />
        <Clients />
        <Services />
        <WorkGrid />
        <CreativesGrid />
        <About />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

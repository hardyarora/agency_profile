import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Timeline from "../components/Timeline";
import Portfolio from "../components/Portfolio";
import { FEATURES } from "../config/features";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Team from "../components/Team";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        {FEATURES.SHOW_PORTFOLIO && <Portfolio />}
        <Features />
        <Timeline />
        <Pricing />
        <Team />
        <Contact />
      </main>
    </div>
  );
}

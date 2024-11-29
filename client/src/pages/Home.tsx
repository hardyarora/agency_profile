import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
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
        <Portfolio />
        <Features />
        <Pricing />
        <Team />
        <Contact />
      </main>
    </div>
  );
}

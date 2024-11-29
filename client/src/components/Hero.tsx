import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
          alt="Modern office space"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            We Create Digital
            <span className="text-primary"> Experiences</span>
          </h1>
          <p className="text-xl mb-8 text-muted-foreground">
            Transform your brand with cutting-edge web solutions that drive results
            and engage your audience.
          </p>
          <div className="flex gap-4">
            <Button size="lg" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Get Started
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}>
              View Our Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

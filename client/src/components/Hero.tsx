import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            We Create Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80"> Experiences</span>
          </h1>
          <p className="text-xl mb-8 text-muted-foreground">
            Transform your brand with cutting-edge web solutions that drive results
            and engage your audience.
          </p>
          <div className="flex gap-4">
            <Button 
              size="lg" 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary/90 hover:bg-primary transition-colors rounded-full px-8"
            >
              Get Started
            </Button>
            {/* <Button 
              size="lg" 
              variant="outline" 
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="border-primary/50 hover:bg-primary/10 rounded-full px-8"
            >
              View Our Work
            </Button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

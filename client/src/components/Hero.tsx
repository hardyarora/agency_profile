import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  return (
    <section ref={ref} className="relative min-h-screen pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 md:px-8 pt-32">
        <motion.div
            style={{ opacity, scale }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ 
            duration: 1,
            type: "spring",
            damping: 15,
            stiffness: 100
          }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff7e5f] to-[#845ec2]">
              Your Dream Product,
              <br />
              Now a Reality
            </span>
          </h1>
          <p className="text-xl mb-8 text-muted-foreground mx-auto max-w-2xl">
            From concept to launch, we transform your ideas into powerful,
            user-centric solutions quickly and efficiently.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              size="lg" 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary/90 hover:bg-primary transition-colors rounded-full px-8"
            >
              Get Started
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

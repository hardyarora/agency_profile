import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const portfolioItems = [
  {
    title: "E-commerce Platform",
    description: "Modern online shopping experience with AI-powered recommendations",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
  },
  {
    title: "Healthcare App",
    description: "Patient management system with real-time analytics",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
  },
  {
    title: "Finance Dashboard",
    description: "Real-time financial data visualization platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    title: "Mobile Application",
    description: "Cross-platform mobile app with seamless user experience",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
  hover: {
    scale: 1.03,
    y: -8,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  return (
    <section ref={ref} id="portfolio" className="py-24 relative overflow-hidden">
      <motion.div style={{ opacity }} className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <motion.div style={{ opacity }} className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <motion.div style={{ opacity }} className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Our Portfolio
          </h2>
          <p className="text-muted-foreground">Showcasing our best work</p>
        </motion.div>
        
        <motion.div 
          style={{ scale, y: translateY }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
            >
              <Card className="overflow-hidden group cursor-pointer border-border/50 bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm transition-colors duration-300 hover:border-primary/50">
                <CardContent className="p-0">
                  <div className="relative">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-video object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 300, damping: 25 }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 p-6 flex flex-col justify-end backdrop-blur-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.h3 
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-white font-bold text-xl"
                      >
                        {item.title}
                      </motion.h3>
                      <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="text-white/90"
                      >
                        {item.description}
                      </motion.p>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

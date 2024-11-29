import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "Modern E-commerce Platform",
    description: "Full-stack development for a luxury brand",
    image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4",
  },
  {
    title: "Financial Dashboard",
    description: "Interactive analytics platform",
    image: "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be",
  },
  {
    title: "Lifestyle Blog",
    description: "Content-focused web platform",
    image: "https://images.unsplash.com/photo-1487700160041-babef9c3cb55",
  },
  {
    title: "Tech Startup Website",
    description: "Modern landing page design",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Our Portfolio
          </h2>
          <p className="text-muted-foreground">Showcasing our best work</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer border-border/50 bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary/50">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-video object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 flex flex-col justify-end backdrop-blur-sm">
                      <h3 className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-white font-bold text-xl">{item.title}</h3>
                      <p className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 text-white/90">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

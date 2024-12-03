import { motion } from "framer-motion";
import { MessageSquare, Image, Layout, Zap, Bot, Database } from "lucide-react";

const features = [
  {
    title: "Advanced Communication",
    description: "Enhance user interactions through AI-powered messaging channels and responsive notifications.",
    icon: MessageSquare,
  },
  {
    title: "Premium Assets",
    description: "Access exclusive high-quality resources and pre-made templates without any attribution requirements.",
    icon: Image,
  },
  {
    title: "Customizable Design",
    description: "Responsive, user-friendly designs that align with your brand identity.",
    icon: Layout,
  },
  {
    title: "Performance-Driven",
    description: "Optimized for user experience and retention",
    icon: Zap,
  },
  {
    title: "AI-Powered Features",
    description: "Chatbots, AI-driven recommendations to enhance user engagement.",
    icon: Bot,
  },
  {
    title: "Scalable Architecture",
    description: "Automated workflows, such as lead capturing and email follow-ups.",
    icon: Database,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
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
    scale: 1.05,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};

export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ff7e5f] to-[#845ec2]">
            Transform Your Vision
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions tailored to your unique business needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group p-6 rounded-xl border border-border/50 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm hover:bg-black/50 transition-colors duration-300 hover:border-[#ff7e5f]/50 hover:shadow-lg hover:shadow-[#845ec2]/10"
            >
              <div className="mb-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <feature.icon className="w-10 h-10 text-primary/80 group-hover:text-primary transition-all relative" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

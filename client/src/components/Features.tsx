import { motion } from "framer-motion";
import { MessageSquare, Image, Users, Cable, LineChart, Settings } from "lucide-react";

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
    title: "Acquire New Customers",
    description: "Attract new clientele through integrated lead generation and long-term loyalty programs.",
    icon: Users,
  },
  {
    title: "Seamless Integrations",
    description: "Easily connect your tools and preferred services to streamline data entry and enhance efficiency.",
    icon: Cable,
  },
  {
    title: "Real-time Analytics",
    description: "Stay informed with instant status updates that allow you to make proactive decisions and optimize your business strategies on the go.",
    icon: LineChart,
  },
  {
    title: "Customizable Workflows",
    description: "Adapt your task management process with flexible workflows that suit your team's unique needs, ensuring maximum productivity.",
    icon: Settings,
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
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
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Transform Your Task Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This might involve personally identifying the user, suggesting tailored form suggestions, or recalling prior replies
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
              className="group p-6 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors"
            >
              <div className="mb-4">
                <feature.icon className="w-10 h-10 text-primary/80 group-hover:text-primary transition-colors" />
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
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "MVP Development Package",
    price: "2497",
    badge: "Most Popular",
    type: "One time",
    features: [
      "Complete MVP development in 3-4 weeks",
      "Web application/ Mobile App",
      "Modern, scalable tech stack",
      "Seamless integrations (payments, auth, etc.)",
      "30 days of free maintenance",
      "Personalized, founder-led development",
      "Regular updates and transparent process"
    ],
  },
  {
    name: "Growth Retainer Package",
    price: "2997",
    badge: "Monthly Retainer",
    type: "per month",
    features: [
      "60 hours of development time per month",
      "Flexible hours allocation",
      "Weekly strategy calls",
      "Priority feature development",
      "Continuous maintenance & optimization",
      "Same-day emergency support"
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Ignite Your Idea?</h2>
          <p className="text-xl text-muted-foreground">
            Choose the perfect package for your project and get started today
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 border-border/50">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {plan.badge && (
                  <Badge className="absolute top-4 right-4 bg-primary/90" variant="default">
                    {plan.badge}
                  </Badge>
                )}
                <CardHeader>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{plan.type}</p>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                  </div>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    {plan.type === "per month" && (
                      <span className="ml-1 text-muted-foreground">/month</span>
                    )}
                  </div>
                  {plan.type === "per month" && (
                    <p className="text-sm text-muted-foreground">No commitment, cancel anytime</p>
                  )}
                  {plan.type === "One time" && (
                    <p className="text-sm text-red-500">Special rates for waitlist members.</p>
                  )}
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="text-primary h-5 w-5 mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="w-full bg-primary/90 hover:bg-primary group relative overflow-hidden rounded-full transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Join The Waitlist
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

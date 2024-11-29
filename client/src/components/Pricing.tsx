import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "2,999",
    features: [
      "Custom Website Design",
      "Mobile Responsive",
      "5 Pages",
      "Basic SEO",
    ],
  },
  {
    name: "Professional",
    price: "5,999",
    features: [
      "Everything in Starter",
      "E-commerce Integration",
      "10 Pages",
      "Advanced SEO",
      "Content Management System",
    ],
  },
  {
    name: "Enterprise",
    price: "9,999+",
    features: [
      "Everything in Professional",
      "Custom Functionality",
      "Unlimited Pages",
      "Priority Support",
      "Analytics Dashboard",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-muted-foreground">Choose the perfect plan for your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`${index === 1 ? 'border-primary' : ''}`}>
              <CardHeader>
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="text-primary h-5 w-5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

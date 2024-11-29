import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const team = [
  {
    name: "John Smith",
    role: "Founder & Lead Developer",
    image: "https://images.unsplash.com/photo-1576558656222-ba66febe3dec",
    bio: [
      "With over 15 years of experience in software development and digital innovation, John Smith has been at the forefront of transforming how businesses approach their digital presence. His journey began in Silicon Valley, where he worked with industry giants to develop scalable solutions that serve millions of users worldwide.",
      "As the founder of our agency, John brings his extensive expertise in full-stack development, cloud architecture, and AI integration to every project. His vision of creating user-centric, performance-driven applications has shaped our company's core philosophy and approach to digital solutions.",
      "John is passionate about leveraging cutting-edge technologies while maintaining a focus on practical, business-driven results. His leadership has been instrumental in developing our innovative approach to project delivery, combining rapid development with enterprise-grade reliability."
    ]
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Meet Our Founder
          </h2>
          <p className="text-muted-foreground">The visionary behind our success</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="group">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-40 h-40 mx-auto md:mx-0 shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1 space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                        <p className="text-primary/90">{member.role}</p>
                      </div>
                      <div className="space-y-4">
                        {member.bio.map((paragraph, i) => (
                          <p key={i} className="text-muted-foreground leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
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

import { motion } from "framer-motion";

const team = [
  {
    name: "John Smith",
    role: "Founder & Lead Developer",
    image: "/IMG_2364.jpeg",
    bio: [
      "With over 10 years of experience in software development and digital innovation, Hardy Arora has been at the forefront of transforming how businesses approach their digital presence. He did his masters at Northeastern university in computer science and has worked as lead engineer in a reputable company in USA.",
      "As the founder of our agency, Hardy brings his extensive expertise in full-stack development, cloud architecture, and AI integration to every project. His vision of creating user-centric, performance-driven applications has shaped our company's core philosophy and approach to digital solutions.",
      "Its his promise to deliver exceptional digital experiences that drive business growth and customer satisfaction."
    ]
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 relative overflow-hidden">
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
              <div className="group bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors rounded-xl border border-border/50 p-8">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

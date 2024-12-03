'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"

const timelineSteps = [
  {
    title: "Initial Call",
    description: "In this initial stage, we engage in a comprehensive discussion to understand your project goals, user needs, and unique requirements. Our collaborative approach ensures a clear vision for the MVP, setting the foundation for a successful project journey."
  },
  {
    title: "Scope Call",
    description: "We define project scope, technical requirements, and create a detailed roadmap for development."
  },
  {
    title: "Contract",
    description: "Finalize project terms, timeline, and deliverables with a clear agreement that protects both parties."
  },
  {
    title: "MVP Build",
    description: "Our team begins development, with regular updates and milestones to ensure transparency."
  },
  {
    title: "Delivery",
    description: "Final testing, deployment, and handover of your project, complete with documentation."
  }
]

export function AnimatedTimeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const gradientProgress = useTransform(scrollYProgress, [0, 0.95], ["0%", "100%"])

  return (
    <section ref={containerRef} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-6xl font-bold mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Timeline
        </motion.h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <motion.div 
            className="absolute top-0 left-[20px] md:left-1/2 w-[2px] h-full bg-gray-800 transform -translate-x-1/2"
            style={{ 
              backgroundImage: "linear-gradient(to bottom, #8B5CF6, #EC4899, #EAB308)",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0 0",
              maskImage: `linear-gradient(to bottom, black ${gradientProgress}, transparent 0)`,
              WebkitMaskImage: `linear-gradient(to bottom, black ${gradientProgress}, transparent 0)`
            }}
          />
          
          {/* Timeline Steps */}
          {timelineSteps.map((step, index) => {
            const stepProgress = useTransform(
              scrollYProgress,
              [index / timelineSteps.length, (index + 1) / timelineSteps.length],
              [0, 1],
              { clamp: false }
            )
            
            return (
              <motion.div
                key={index}
                className="relative mb-12 md:mb-24 grid md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline Point */}
                <motion.div 
                  className="absolute left-[20px] md:left-1/2 w-10 h-10 rounded-full border-2 border-gray-700 transform -translate-x-1/2"
                  style={{
                    background: useTransform(
                      stepProgress,
                      [0, 0.5],
                      ["black", "linear-gradient(to right, #8B5CF6, #EC4899, #EAB308)"]
                    )
                  }}
                />
                
                {/* Content */}
                <motion.div 
                  className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:pl-16 md:col-start-2'}`}
                  style={{
                    color: useTransform(
                      stepProgress,
                      [0, 0.5],
                      ["#9CA3AF", "#fff"]
                    )
                  }}
                >
                  <h3 className="text-2xl font-bold mb-4">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AnimatedTimeline;
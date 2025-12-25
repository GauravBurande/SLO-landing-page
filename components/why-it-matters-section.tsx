"use client"

import { motion } from "framer-motion"

const points = [
  {
    title: "AI should be composable",
    description:
      "Just like DeFi primitives compose into complex protocols, AI inference should be a building block any program can use.",
  },
  {
    title: "APIs break decentralization",
    description: "External API calls introduce single points of failure, trust assumptions, and censorship vectors.",
  },
  {
    title: "On-chain AI unlocks new design space",
    description:
      "Applications that were impossible before — autonomous agents, AI-reactive protocols, intelligent smart contracts.",
  },
  {
    title: "Solana's speed makes this possible",
    description: "Only Solana's performance characteristics enable practical on-chain AI inference at scale.",
  },
]

export function WhyItMattersSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Vision</span>
            <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mt-4 mb-6">Why this matters</h2>
          </motion.div>

          <div className="space-y-12">
            {points.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-border hover:border-accent/50 transition-colors"
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-background border-2 border-accent" />
                <h3 className="text-xl font-medium mb-3">{point.title}</h3>
                <p className="text-muted-foreground text-lg">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Puzzle, Server } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "No API Keys",
    description: "Direct on-chain execution without external API dependencies or key management.",
  },
  {
    icon: Shield,
    title: "No Centralized Trust",
    description: "Eliminate off-chain trust assumptions. Everything is verifiable on Solana.",
  },
  {
    icon: Puzzle,
    title: "Fully Composable",
    description: "Native integration with existing Solana programs and DeFi protocols.",
  },
  {
    icon: Server,
    title: "Oracle-Powered",
    description: "LLM inference delivered through a decentralized oracle network.",
  },
]

export function WhatIsSection() {
  return (
    <section id="what-is-slo" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider">What is SLO</span>
            <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mt-4 mb-6 text-balance">
              AI as a native on-chain primitive
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Solana LLM Oracle is an oracle that enables LLM inference from within Solana programs. Not a SaaS wrapper
              — real infrastructure for the next generation of on-chain applications.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-muted-foreground">Live on Devnet</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <span className="text-muted-foreground">Open Source</span>
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-card rounded-xl border border-border hover:border-accent/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <feature.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

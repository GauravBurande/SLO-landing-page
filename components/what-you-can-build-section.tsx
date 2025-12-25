"use client";

import { motion } from "framer-motion";
import { Layers, Coins, Brain, Gamepad2, GitBranch } from "lucide-react";

const buildOptions = [
  {
    icon: Layers,
    title: "AI-Driven Eligibility Engines",
    description: "Gate protocol access based on intelligent wallet analysis.",
  },
  {
    icon: Coins,
    title: "Agent-Based Token Minters",
    description: "Create tokens with AI-determined parameters and rules.",
  },
  {
    icon: Brain,
    title: "On-Chain Decision Systems",
    description: "Build autonomous systems that make verifiable decisions.",
  },
  {
    icon: Gamepad2,
    title: "AI-Reactive Games",
    description: "Games that adapt and respond using on-chain AI logic.",
  },
  {
    icon: GitBranch,
    title: "Composable AI Logic",
    description: "AI primitives that integrate across protocols seamlessly.",
  },
];

export function WhatYouCanBuildSection() {
  return (
    <section id="use-cases" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Possibilities
          </span>
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mt-4 mb-6">
            What you can build with SLO
          </h2>
          <p className="text-lg text-muted-foreground">
            Unlock new design spaces for Solana applications with native AI
            capabilities.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {buildOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group p-8 rounded-xl border border-border bg-card hover:bg-muted/50 transition-all hover:shadow-lg hover:shadow-accent/5 ${
                index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <option.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-medium mb-3">{option.title}</h3>
              <p className="text-muted-foreground">{option.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

const capabilities = [
  {
    title: "Create AI Agents",
    description: "Define agents with system prompts directly inside your Solana program.",
  },
  {
    title: "Start Persistent Chats",
    description: "Maintain conversation context on-chain across multiple interactions.",
  },
  {
    title: "Execute Inferences",
    description: "Run AI inferences that are fully composable with program logic.",
  },
  {
    title: "Program-First Design",
    description: "Everything executes from within your Solana program — no external calls.",
  },
]

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">v0.1 Capabilities</span>
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mt-4 mb-6">What exists today</h2>
          <p className="text-lg text-muted-foreground">
            This is not simulation — these capabilities are live and working on Solana devnet right now.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-lg hover:shadow-accent/5 transition-all"
            >
              <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium mb-2">{capability.title}</h3>
                <p className="text-sm text-muted-foreground">{capability.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
          <div className="relative max-w-4xl mx-auto p-8 rounded-2xl border border-border bg-card/50">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="px-4 py-2 rounded-full bg-muted text-sm font-mono">Agent.create()</div>
              <div className="text-muted-foreground">→</div>
              <div className="px-4 py-2 rounded-full bg-muted text-sm font-mono">Chat.start()</div>
              <div className="text-muted-foreground">→</div>
              <div className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-mono">
                Inference.execute()
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

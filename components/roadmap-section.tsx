"use client"

import { motion } from "framer-motion"
import { Circle, CheckCircle2 } from "lucide-react"

const roadmapItems = [
  {
    version: "v0.1",
    status: "complete",
    title: "Foundation",
    items: [
      "Agent creation from programs",
      "Persistent chat contexts",
      "Basic inference execution",
      "DeFi Score example",
    ],
  },
  {
    version: "v0.2",
    status: "upcoming",
    title: "Native Integration",
    items: [
      "Native AI calls inside Solana programs",
      "Chat UI powered by SLO",
      "JavaScript / TypeScript SDK",
      "Enhanced developer tooling",
    ],
  },
  {
    version: "v0.3",
    status: "planned",
    title: "Advanced Execution",
    items: [
      "MagicBlock ephemeral layer integration",
      "TEE-based oracle execution",
      "Trustless, verifiable AI inference",
      "Production-grade security",
    ],
  },
]

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-wider">Roadmap</span>
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mt-4 mb-6">{"What's coming"}</h2>
          <p className="text-lg text-muted-foreground">
            A clear path toward trustless, verifiable AI execution on Solana.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={item.version}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-xl border bg-card ${
                item.status === "complete" ? "border-accent/50" : "border-border"
              }`}
            >
              {/* Status indicator */}
              <div className="flex items-center gap-2 mb-6">
                <span
                  className={`text-sm font-mono px-3 py-1 rounded-full ${
                    item.status === "complete"
                      ? "bg-accent/10 text-accent"
                      : item.status === "upcoming"
                        ? "bg-muted text-foreground"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {item.version}
                </span>
                {item.status === "complete" && <span className="text-xs text-accent">Live</span>}
              </div>

              <h3 className="text-xl font-medium mb-4">{item.title}</h3>

              <ul className="space-y-3">
                {item.items.map((listItem) => (
                  <li key={listItem} className="flex items-start gap-3">
                    {item.status === "complete" ? (
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                    )}
                    <span
                      className={`text-sm ${item.status === "complete" ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      {listItem}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

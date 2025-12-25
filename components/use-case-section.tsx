"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Shield, Cpu, Lock } from "lucide-react";

const benefits = [
  {
    icon: Cpu,
    label: "Dynamic AI-driven logic",
  },
  {
    icon: Shield,
    label: "Deterministic program behavior",
  },
  {
    icon: Lock,
    label: "No trusted backend required",
  },
];

export function UseCaseSection() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent/10 via-transparent to-muted/30 rounded-2xl blur-2xl" />
            <div className="relative bg-card border border-border rounded-xl overflow-hidden">
              <div className="p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-bold">D</span>
                  </div>
                  <div>
                    <h4 className="font-medium">DeFi Score Program</h4>
                    <p className="text-sm text-muted-foreground">
                      Live on GitHub
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm text-muted-foreground">
                    Wallet Analysis
                  </span>
                  <span className="text-sm font-mono text-accent">Active</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm text-muted-foreground">
                    X Activity Signal
                  </span>
                  <span className="text-sm font-mono text-accent">
                    Integrated
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm text-muted-foreground">
                    Risk Score Output
                  </span>
                  <span className="text-sm font-mono">0.00 - 1.00</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              Real Use Case
            </span>
            <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mt-4 mb-6 text-balance">
              DeFi Score Program
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              A live example that evaluates wallets using off-chain signals like
              X activity. Protocols can use this score to gate access, determine
              eligibility, or power AI-driven allowlists.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <benefit.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-muted-foreground">{benefit.label}</span>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="rounded-full bg-transparent"
              variant="outline"
            >
              <a
                href="https://github.com/gauravburande/solana-llm-oracle"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Example on GitHub
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

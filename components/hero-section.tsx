"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/subtle-geometric-grid-pattern-light-minimal.jpg')] bg-cover bg-center opacity-[0.02] dark:opacity-[0.05]" />
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-muted/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-8">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">
                Now live with DeFi Score example
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-balance leading-[1.1] mb-6"
          >
            AI inference, inside{" "}
            <span className="text-accent">Solana programs.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
          >
            Solana LLM Oracle lets programs create agents, chats, and AI
            inferences — without APIs.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 h-12 text-base"
            >
              <a
                href="https://github.com/gauravburande/solana-llm-oracle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                View GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full dark:hover:text-accent px-8 h-12 text-base group bg-transparent"
            >
              <a href="#use-cases">
                See Live Example
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          {/* Code Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 lg:mt-24"
          >
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-muted/30 to-accent/20 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-card border border-border rounded-xl overflow-hidden shadow-2xl shadow-accent/5">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-chart-4/60" />
                    <div className="w-3 h-3 rounded-full bg-accent/60" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono ml-2">
                    lib.rs
                  </span>
                </div>
                <pre className="p-6 text-left overflow-x-auto text-sm">
                  <code className="font-mono text-foreground/90">
                    <span className="text-muted-foreground">
                      {"// Install solana-llm-oracle"}
                    </span>
                    {"\n"}
                    <span className="text-chart-4">
                      {"cargo add solana-llm-oracle --features cpi"}
                    </span>
                    {"\n\n"}
                    <span className="text-accent">use</span>{" "}
                    anchor_lang::prelude::*;
                    {"\n"}
                    <span className="text-accent">use</span>{" "}
                    solana_llm_oracle::cpi::{"{"}
                    {"\n"}
                    {"    "}accounts::CreateChat,{"\n"}
                    {"    "}create_chat,{"\n"}
                    {"}"};{"\n\n"}
                    <span className="text-accent">const</span> AGENT_DESC: &
                    <span className="text-chart-2">str</span> = {"\n"}
                    {"    "}
                    <span className="text-chart-4">
                      {'"You are a helpful assistant."'}
                    </span>
                    ;
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Copy, Check, ExternalLink } from "lucide-react";

const codeSnippets = [
  {
    id: "create-chat",
    title: "1. Create Chat Context",
    description:
      "Initialize a chat context for your AI agent with a system prompt",
    filename: "create_chat.rs",
    code: `use anchor_lang::prelude::*;
use solana_llm_oracle::cpi::{
    accounts::CreateChat,
    create_chat,
};

const AGENT_DESC: &str = "You are a helpful assistant.";

pub fn initialize(ctx: Context<Initialize>, seed: u8) -> Result<()> {
    // Store the chat context on your agent account
    ctx.accounts.agent.chat_context = ctx.accounts.chat_context.key();
    ctx.accounts.agent.bump = ctx.bumps.agent;

    let cpi_program = ctx.accounts.oracle_program.to_account_info();
    let cpi_accounts = CreateChat {
        user: ctx.accounts.signer.to_account_info(),
        chat_context: ctx.accounts.chat_context.to_account_info(),
        system_program: ctx.accounts.system_program.to_account_info(),
    };
    let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);

    create_chat(cpi_ctx, AGENT_DESC.to_string(), seed)?;

    Ok(())
}`,
  },
  {
    id: "create-inference",
    title: "2. Create LLM Inference",
    description: "Call create_llm_inference via CPI to request AI processing",
    filename: "create_inference.rs",
    code: `use solana_llm_oracle::cpi::{
    accounts::CreateLlmInference,
    create_llm_inference,
};
use solana_llm_oracle::state::AccountMeta;

pub fn chat_with_llm(ctx: Context<ChatWithLlm>, text: String) -> Result<()> {
    let cpi_program = ctx.accounts.oracle_program.to_account_info();
    let cpi_accounts = CreateLlmInference {
        user: ctx.accounts.user.to_account_info(),
        inference: ctx.accounts.inference.to_account_info(),
        chat_context: ctx.accounts.chat_context.to_account_info(),
        system_program: ctx.accounts.system_program.to_account_info(),
    };

    let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);

    // Callback discriminator (must be exactly 8 bytes)
    let callback_discriminator: [u8; 8] =
        instruction::CallbackFromLlm::DISCRIMINATOR
            .try_into()
            .expect("Invalid discriminator");

    create_llm_inference(
        cpi_ctx,
        text,
        crate::ID,                        // callback program id
        callback_discriminator,           // callback instruction
        Some(vec![
            AccountMeta {
                pubkey: ctx.accounts.user.key(),
                is_signer: false,
                is_writable: false,
            },
            AccountMeta {
                pubkey: ctx.accounts.cred_score.key(),
                is_signer: false,
                is_writable: true,
            },
        ]),
    )?;

    Ok(())
}`,
  },
  {
    id: "callback",
    title: "3. Handle Callback",
    description: "Receive and process the LLM response in your program",
    filename: "callback.rs",
    code: `pub fn callback_from_llm(
    ctx: Context<CallbackFromLlm>,
    response: String,
) -> Result<()> {
    // Verify oracle identity
    if !ctx.accounts.config.to_account_info().is_signer {
        return Err(ProgramError::InvalidAccountData.into());
    }

    msg!("AI response received: {}", response);

    // Example: parse numeric output
    let parsed_score: u8 = response.trim().parse::<u8>().map_err(|_| {
        msg!("Failed to parse AI response");
        ProgramError::InvalidInstructionData
    })?;

    let cred_score = &mut ctx.accounts.cred_score;
    cred_score.score = parsed_score.min(100);

    Ok(())
}`,
  },
];

export function CodeShowcaseSection() {
  const [activeTab, setActiveTab] = useState("create-chat");
  const [copied, setCopied] = useState(false);

  const activeSnippet =
    codeSnippets.find((s) => s.id === activeTab) || codeSnippets[0];

  const copyCode = async () => {
    await navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 lg:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 text-balance">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Three simple steps to integrate AI inference into your Solana
            program
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-accent/10 via-muted/20 to-accent/10 rounded-3xl blur-2xl opacity-50" />

          <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-2xl shadow-accent/5">
            {/* Tab Navigation */}
            <div className="flex flex-col sm:flex-row border-b border-border bg-muted/30">
              {codeSnippets.map((snippet) => (
                <button
                  key={snippet.id}
                  onClick={() => setActiveTab(snippet.id)}
                  className={`flex-1 cursor-pointer px-6 py-4 text-left transition-colors relative ${
                    activeTab === snippet.id
                      ? "bg-background text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <span className="text-sm font-medium">{snippet.title}</span>
                  {activeTab === snippet.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Code Content */}
            <div className="relative">
              {/* File header */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-muted/20">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-chart-4/60" />
                    <div className="w-3 h-3 rounded-full bg-accent/60" />
                  </div>
                  <span className="text-xs text-muted-foreground font-mono">
                    {activeSnippet.filename}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyCode}
                  className="h-8 px-3 text-xs text-muted-foreground hover:text-foreground"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 mr-1.5" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 mr-1.5" />
                      Copy
                    </>
                  )}
                </Button>
              </div>

              {/* Description */}
              <div className="px-6 py-4 border-b border-border bg-muted/10">
                <p className="text-sm text-muted-foreground">
                  {activeSnippet.description}
                </p>
              </div>

              {/* Code Block */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <pre className="p-6 overflow-x-auto text-sm leading-relaxed max-h-[500px] overflow-y-auto">
                    <code className="font-mono text-foreground/90 whitespace-pre">
                      {activeSnippet.code}
                    </code>
                  </pre>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer CTA */}
            <div className="px-6 py-4 border-t border-border bg-muted/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                See the full implementation in the DeFi Score example
              </p>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-full bg-transparent"
              >
                <a
                  href="https://github.com/GauravBurande/solana-llm-oracle/tree/main/programs/defi-score-agent-example"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Example
                  <ExternalLink className="w-3.5 h-3.5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

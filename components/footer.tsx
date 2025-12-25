"use client";

import Link from "next/link";
import { Github, Twitter } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-1">
              <Image
                src="/icon.png"
                alt="Solana LLM Oracle"
                width={32}
                height={32}
                className={`w-10 h-10 ${theme === "dark" ? "invert" : ""}`}
              />
              <span className="font-semibold text-foreground hidden sm:block">
                Solana LLM Oracle
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              Trustless AI. On-chain. Verifiable.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/gauravburande/solana-llm-oracle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://x.com/slo_hq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/gauravburande/solana-llm-oracle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/gauravburande/solana-llm-oracle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/GauravBurande/solana-llm-oracle/tree/main/programs/defi-score-agent-example"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Examples
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#what-is-slo"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  What is SLO
                </Link>
              </li>
              <li>
                <Link
                  href="#capabilities"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Capabilities
                </Link>
              </li>
              <li>
                <Link
                  href="#use-cases"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Use Cases
                </Link>
              </li>
              <li>
                <Link
                  href="#roadmap"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-medium mb-4">Community</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://x.com/slo_hq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/gauravburande/solana-llm-oracle/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Report Issue
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Solana LLM Oracle. Open source under
            MIT.
          </p>
          <p className="text-sm text-muted-foreground">
            Built for the Solana ecosystem.
          </p>
        </div>
      </div>
    </footer>
  );
}

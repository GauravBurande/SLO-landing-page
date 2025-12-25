import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { CodeShowcaseSection } from "@/components/code-showcase-section";
import { WhatIsSection } from "@/components/what-is-section";
import { CapabilitiesSection } from "@/components/capabilities-section";
import { UseCaseSection } from "@/components/use-case-section";
import { WhatYouCanBuildSection } from "@/components/what-you-can-build-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { WhyItMattersSection } from "@/components/why-it-matters-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CodeShowcaseSection />
      <WhatIsSection />
      <CapabilitiesSection />
      <WhatYouCanBuildSection />
      <UseCaseSection />
      <RoadmapSection />
      <WhyItMattersSection />
      <Footer />
    </main>
  );
}

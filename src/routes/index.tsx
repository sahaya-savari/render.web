import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "@/components/landing/AnnouncementBar";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { LogoStrip } from "@/components/landing/LogoStrip";
import { StepsSection } from "@/components/landing/StepsSection";
import { StackMarquee } from "@/components/landing/StackMarquee";
import { FeatureBento } from "@/components/landing/FeatureBento";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { InfraGrid } from "@/components/landing/InfraGrid";
import { SecuritySection } from "@/components/landing/SecuritySection";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Render — Cloud Application Platform" },
      {
        name: "description",
        content:
          "Your fastest path to production. Build, deploy, and scale apps, APIs, and AI agents with zero ops.",
      },
      { property: "og:title", content: "Render — Cloud Application Platform" },
      {
        property: "og:description",
        content: "Build, deploy, and scale apps, APIs, and AI agents with zero ops.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <StepsSection />
        <StackMarquee />
        <FeatureBento />
        <TestimonialSection />
        <InfraGrid />
        <SecuritySection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

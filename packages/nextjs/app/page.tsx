"use client";

import HeroSection from "../components/landing/HeroSection"
import FeaturesSection from "../components/landing/FeaturesSection"
import SponsorsSection from "../components/landing/SponsorsSection"
import ImpactStatsSection from "../components/landing/ImpactStatsSection"
import CTASection from "../components/landing/CTASection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <SponsorsSection />
      <ImpactStatsSection />
      <CTASection />
    </main>
  )
}

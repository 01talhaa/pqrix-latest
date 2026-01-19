"use client"

import { BlobDecorations } from "@/components/blob-decorations"
import { HeroSection } from "@/components/hero-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { InsightsSection } from "@/components/insights-section"
import { CareerSection } from "@/components/career-section"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"
import Features from "@/components/features"
import PartnersSection from "@/components/partners-section"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <BlobDecorations count={4} />

      <div className="relative z-10 p-4 md:p-8">
        <HeroSection />
         <PartnersSection />
      </div>

      <div className="relative p-4 md:p-8">
        <Features />
        <PortfolioSection /> 
        <TestimonialsSection />
        <InsightsSection />
        <CareerSection />
        <TeamSection />
        <Footer />
      </div>
    </div>
  )
}


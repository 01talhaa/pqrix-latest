"use client"

import { BlobDecorations } from "@/components/blob-decorations"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductSection } from "@/components/product-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { InsightsSection } from "@/components/insights-section"
import { CareerSection } from "@/components/career-section"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"
import Features from "@/components/features"
import PartnersSection from "@/components/partners-section"
import { MainHeader } from "@/components/main-header"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <MainHeader />
      {/* <BlobDecorations count={4} /> */}

      <div className="relative pt-20">
        <HeroSection />
        <AboutSection />
        <ProductSection />
         {/* <PartnersSection /> */}
      </div>

      <div className="relative">
        <Features />
        <PortfolioSection /> 
        <TestimonialsSection />
        <InsightsSection />
        <CareerSection />
        <TeamSection />
        <WhatsAppButton/>
        <Footer />
      </div>
    </div>
  )
}
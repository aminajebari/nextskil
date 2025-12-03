"use client"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import CertificationSection from "@/components/certification-section"
import TestimonialSection from "@/components/testimonial-section"
import DomainsSection from "@/components/domains-section"
import ProfessionalSection from "@/components/professional-section"
import CoursesGrid from "@/components/courses-grid"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <CertificationSection />
      <TestimonialSection />
      <DomainsSection />
      <ProfessionalSection />
      <CoursesGrid />
      <Footer />
    </main>
  )
}

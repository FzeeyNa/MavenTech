"use client";

import { useState, useCallback } from "react";
import { SplashScreen } from "@/components/splash-screen";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { ProcessSection } from "@/components/process-section";
import { MarketplaceSection } from "@/components/marketplace-section";
import { AcademicBanner } from "@/components/academic-banner";
import { ContactSection } from "@/components/contact-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import ReactLenis from "lenis/react";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <ReactLenis root>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <main className="min-h-screen bg-white overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MAVEN",
              url: "https://maventech.id",
              logo: "https://maventech.id/icon.png",
              description: "Urusan IT Bisnis Anda, Biar Ahlinya yang Selesai. MAVEN merakit website profesional, aplikasi kustom, dan sistem otomatisasi pintar untuk bisnis Anda.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62", // Replace with real phone number when ready
                contactType: "customer service"
              },
              sameAs: [
                "https://github.com/maventech",
                "https://instagram.com/maventech"
              ]
            })
          }}
        />
        <Navbar />
        <HeroSection />
        <PhilosophySection />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <MarketplaceSection />
        <AcademicBanner />
        <CTASection />
        <ContactSection />
        <Footer />
      </main>
    </ReactLenis>
  );
}

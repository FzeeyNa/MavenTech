"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15, duration: 0.5 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function PixelParticles() {
  const pixels = [
    { x: 5, y: 10, s: 4, d: 0 },
    { x: 90, y: 15, s: 3, d: 1 },
    { x: 20, y: 80, s: 5, d: 0.5 },
    { x: 75, y: 60, s: 3, d: 1.5 },
    { x: 50, y: 30, s: 4, d: 2 },
    { x: 10, y: 50, s: 2, d: 0.8 },
    { x: 85, y: 75, s: 6, d: 1.2 },
    { x: 35, y: 90, s: 3, d: 0.3 },
    { x: 60, y: 5, s: 4, d: 1.8 },
    { x: 95, y: 45, s: 2, d: 2.5 },
    { x: 15, y: 35, s: 5, d: 0.6 },
    { x: 70, y: 85, s: 3, d: 1.1 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pixels.map((p, i) => (
        <motion.div
          key={i}
          className="absolute bg-violet-500/10 rounded-sm"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s, willChange: "transform, opacity" }}
          animate={{ opacity: [0.1, 0.5, 0.1], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 4 + p.d, delay: p.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();

  const quickChecklist = [
    t("hero.checklist.1", "App Development"),
    t("hero.checklist.2", "Business Systems"),
    t("hero.checklist.3", "AI Automation"),
    t("hero.checklist.4", "Hosting & Maintenance"),
    t("hero.checklist.5", "Data Scraping"),
    t("hero.checklist.6", "Academic IT Support"),
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-56 sm:pb-64 md:pt-28 md:pb-72 pixel-grid overflow-hidden">
      <PixelParticles />
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center">
          
          {/* Mobile: Rocket first (order-first on mobile, order-last on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="relative h-[220px] sm:h-[280px] md:h-[350px] lg:h-[450px] w-full flex justify-center items-center order-first lg:order-last"
          >
            {/* Background glow - pulsing */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              style={{ willChange: "transform, opacity" }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-violet-200 rounded-full blur-3xl opacity-40" />
            </motion.div>

            {/* Pixel grid decoration */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-8 md:right-8 grid grid-cols-5 gap-1 opacity-20">
              {Array.from({ length: 15 }, (_, i) => (
                <div key={i} className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-violet-500 rounded-sm" style={{ opacity: i % 3 === 0 ? 0.6 : 0.2 }} />
              ))}
            </div>

            {/* Main 3D Rocket with launch animation */}
            <motion.div
              className="relative z-10"
              style={{ willChange: "transform" }}
              animate={{
                y: [-8, 8, -8],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Rocket glow trail */}
              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-24 sm:h-24 bg-[#FFBA1F]/20 rounded-full blur-2xl"
                style={{ willChange: "transform, opacity" }}
                animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <Image
                src="/images/rocket2.png"
                alt="MAVEN 3D Pixel Rocket"
                width={380}
                height={380}
                className="object-contain w-[180px] sm:w-[240px] md:w-[300px] lg:w-[380px] h-auto drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Floating pixel stars */}
            <motion.div
              className="absolute top-4 sm:top-8 right-4 sm:right-12 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 bg-violet-400 rounded-sm"
              style={{ willChange: "transform, opacity" }}
              animate={{ y: [-5, 5, -5], rotate: [0, 90, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-8 sm:bottom-16 left-4 sm:left-12 w-2 sm:w-3 h-2 sm:h-3 bg-[#FFBA1F] rounded-sm"
              style={{ willChange: "transform, opacity" }}
              animate={{ y: [5, -5, 5], rotate: [0, -90, 0], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.div
              className="absolute top-12 sm:top-20 left-8 sm:left-16 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-violet-300 rounded-full"
              style={{ willChange: "transform, opacity" }}
              animate={{ scale: [0.5, 1.5, 0.5], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            {/* Corner pixel grids */}
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 md:bottom-8 md:left-8 grid grid-cols-3 gap-1 opacity-15">
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-sm" />
              ))}
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-3 sm:gap-4 md:gap-5 relative z-10 order-last lg:order-first">
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 text-violet-600 text-xs sm:text-sm font-medium font-[family-name:var(--font-khand-custom)] border border-violet-100">
                <span className="w-2 h-2 bg-[#FFBA1F] rounded-sm" />
                {t("hero.badge", "Versatile Engineering Network")}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="font-[family-name:var(--font-array-custom)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-wider leading-tight">
                {t("hero.title1", "Website")}{" "}
                <span className="text-[#FFBA1F]">{t("hero.title2", "Impian Kamu?")}</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 font-[family-name:var(--font-khand-custom)] mt-2">
                {t("hero.subtitle", "Kami bantu wujudkan ")}
                <span className="text-violet-600 font-semibold">{t("hero.subtitle_highlight", "Solusi Digital")}</span>
                {t("hero.subtitle2", " yang tepat untuk bisnis mu.")}
              </p>
            </motion.div>

            {/* Checklist - clean without dark box */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <p className="text-xs sm:text-sm font-semibold font-[family-name:var(--font-khand-custom)] text-violet-600 uppercase tracking-wider">
                {t("hero.checklist.title", "Solusi IT Praktis")}
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                {quickChecklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 font-[family-name:var(--font-khand-custom)] text-xs sm:text-sm md:text-base text-gray-700">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-violet-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 mt-1 sm:mt-2">
              <MagneticWrapper>
                <Button className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm rounded-full bg-[#FFBA1F] text-black font-semibold hover:bg-[#FFBA1F]/80 hover:shadow-lg transition-all duration-300 font-[family-name:var(--font-khand-custom)]">
                  <Link href="#contact" className="flex items-center gap-2">
                    {t("hero.cta", "Konsultasi Proyek Kustom")} <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </MagneticWrapper>
              <MagneticWrapper>
                <Button variant="outline" className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm rounded-full border-violet-200 text-violet-600 hover:bg-violet-50 transition-colors font-[family-name:var(--font-khand-custom)]">
                  <Link href="#services">{t("hero.all_services", "Lihat Semua Layanan")}</Link>
                </Button>
              </MagneticWrapper>
            </motion.div>

            {/* Social / Halo */}
            <motion.div variants={itemVariants} className="mt-4 sm:mt-6">
              <a href="#contact" className="inline-flex flex-col items-start group">
                <div className="bg-white border-2 sm:border-[3px] border-gray-900 px-3 py-1 sm:px-4 sm:py-1.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                  <p className="text-sm sm:text-base font-bold font-[family-name:var(--font-array-custom)] text-gray-900 tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#FFBA1F] border border-gray-900 animate-pulse" />
                    SAY "HALO!" TO US
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-3 ml-1">
                  <span className="text-xs sm:text-sm font-semibold text-gray-500 font-[family-name:var(--font-khand-custom)] group-hover:text-violet-600 transition-colors">
                    @halo.maven
                  </span>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-sm" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-500 font-[family-name:var(--font-khand-custom)] group-hover:text-violet-600 transition-colors">
                    halomaven@gmail.com
                  </span>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}

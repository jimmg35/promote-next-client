"use client";

import HeroSection from "@/components/HeroSection";
import CareersSection from "@/components/CareersSection";
import SkillsSection from "@/components/SkillsSection";
import JobMarketSection from "@/components/JobMarketSection";
import StoriesSection from "@/components/StoriesSection";
import MapShowcaseSection from "@/components/MapShowcaseSection";
import RoadmapSection from "@/components/RoadmapSection";
import EventsSection from "@/components/EventsSection";
import ImpactSection from "@/components/ImpactSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import PageHeader from "@/components/PageHeader";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdf6ec] text-[#2F1B16]">
      <PageHeader />
      <main className="relative flex flex-col">
        <HeroSection />
        <CareersSection />
        <SkillsSection />
        <JobMarketSection />
        <StoriesSection />
        <MapShowcaseSection />
        <RoadmapSection />
        <EventsSection />
        <ImpactSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}

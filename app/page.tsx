import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ConsultantSection } from "@/components/sections/ConsultantSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { LearningManagementSection } from "@/components/sections/LearningManagementSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

function SectionDivider() {
  return <div className="h-5 w-full bg-white" aria-hidden="true" />;
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-white">
        <HeroSection />
        <LearningManagementSection />
        <SectionDivider />
        <ProgramsSection />
        <LeadershipSection />
        <ConsultantSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
    </>
  );
}

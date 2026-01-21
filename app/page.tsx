import CaseStudies from "@/components/CaseStudies";
import CardsSection from "@/components/sections/CardsSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CardsSection />
      <CaseStudies />
      <ContactSection />
    </>
  );
}

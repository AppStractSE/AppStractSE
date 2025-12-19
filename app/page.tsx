import CaseStudies from "@/components/CaseStudies";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <hr></hr>
      <ServicesSection />
      <hr></hr>
      <CaseStudies />
      <hr></hr>
      <ContactSection />
    </>
  );
}

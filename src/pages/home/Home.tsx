import { useRef } from "react";
import ContactSection from "../../components/sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";

const Home = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrolltoContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <HeroSection scrollToContact={scrolltoContact} />
      <ServicesSection />
      <ContactSection
        curved
        gradient
        bg={["blue-800", "bluegray-600"]}
        scrollRef={contactRef}
      />
    </>
  );
};

export default Home;

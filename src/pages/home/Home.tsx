import { useRef } from "react";
import ContactSection from "./sections/ContactSection";
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
      <ContactSection scrollRef={contactRef} />
    </>
  );
};

export default Home;

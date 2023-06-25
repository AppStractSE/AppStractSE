import { useRef } from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Learning React Helmet - Home</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
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

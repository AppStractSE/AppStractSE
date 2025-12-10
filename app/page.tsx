// import ContactSection from "@/components/sections/ContactSection";
// import FranchiseSection from "@/components/sections/FranchiseSection";
// import HeroSection from "@/components/sections/HeroSection";
// import OurTeam from "@/components/sections/OurTeam";
// import Services from "@/components/sections/Services";
// import StepSection from "@/components/sections/StepSection";
// import WhySvevr from "@/components/sections/WhySvevr";
// import { content } from "@/data/content";

import CaseStudies from "@/components/CaseStudies";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <hr></hr>
      <ServicesSection
        steps={[
          {
            title: "Step 1",
            shortDescription: "Short description for step 1",
            description: "Detailed description for step 1",
            image: "/path/to/image1.jpg",
          },
          {
            title: "Step 2",
            shortDescription: "Short description for step 2",
            description: "Detailed description for step 2",
            image: "/path/to/image2.jpg",
          },
          {
            title: "Step 3",
            shortDescription: "Short description for step 3",
            description: "Detailed description for step 3",
            image: "/path/to/image3.jpg",
          },
        ]}
      />
      <hr></hr>
      <CaseStudies />
    </>
  );
}

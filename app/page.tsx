import CaseStudies from "@/components/CaseStudies";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Copy } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <hr></hr>
      <ServicesSection />
      <hr></hr>
      <CaseStudies />
      <hr></hr>
      <section>
        <div className="max-page-width px-4 sm:px-8 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-12">
            <h2 className="text-3xl md:text-4xl">Samarbeta med oss</h2>
            <p className="text-sm inline-flex items-center gap-4">
              <span className="opacity-50">
                <a href="mailto:info@appstract.se">info@appstract.se</a>
              </span>{" "}
              <Copy
                size={28}
                className="rounded-full opacity-50 hover:opacity-100 p-1.5 border border-foreground hover:text-background hover:bg-foreground"
              />
            </p>
          </div>
          <div className="flex flex-col gap-12">
            <h6 className="text-xl">Vi är här för att fånga essensen av din vision, och förvandla den till en digital verklighet. Låt oss skapa något fantastiskt tillsammans!

            </h6>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-xs uppercase">Namn</label>
                <input type="text" placeholder="Ditt namn" className="border-b py-2" />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-xs uppercase">Email</label>
                <input type="email" placeholder="Din email" className="border-b py-2" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase">Meddelande</label>
              <textarea placeholder="Ditt meddelande" className="min-h-24 border-b resize-none py-2" />
            </div>
            <Button className="rounded-full flex-1 md:flex-none md:w-fit text-base py-2.5! px-4!">
              Skicka
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

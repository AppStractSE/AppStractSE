"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section>
      <div className="max-page-width px-4 sm:px-8 py-12 pt-32 lg:py-24 xl:py-32 flex flex-col gap-12 lg:gap-24">
        <div className={twMerge("grid gap-8 md:grid-cols-2")}>
          <h1 className="text-balance text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground xl:w-3/4">
            Webbyrån som förverkligar abstrakta idéer och skapar digitala hållbara lösningar.
          </h1>
          <div className="flex flex-col gap-8">
            <h6 className="whitespace-pre-line text-balance text-base lg:text-xl">
              Alla förtjänar att synas. Som fullservicebyrå skapar vi digitala plattformar som
              fångar essensen av ert varumärke, skapar marknadsföringsstrategier som engagerar
              målgrupper och bygger långsiktiga relationer. Vi tar abstrakta koncept och omvandlar
              dem till konkreta resultat.
            </h6>
            <div className="flex flex-wrap gap-2 mt-auto">
              <Button className="rounded-full flex-1 md:flex-none md:w-fit group text-base py-2.5! px-4!">
                Vad vi gör{" "}
                <ArrowRight className="h-3.5! w-3.5! ml-1 transition-all duration-100 ease-in-out group-hover:-rotate-45" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full flex-1 md:flex-none md:w-fit group text-base py-2.5! px-4!"
              >
                Kontakta oss{" "}
                <ArrowRight className="h-3.5! w-3.5! ml-1 transition-all duration-100 ease-in-out group-hover:-rotate-45" />
              </Button>
            </div>
          </div>
        </div>
        <div className="max-h-160 lg:max-h-max lg:h-[700px] w-full">
          <Image
            src="/placehold.png"
            fill
            alt="Hero Image"
            className="!relative object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

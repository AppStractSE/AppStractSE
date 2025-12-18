"use client";

import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const HeroSection = () => {
  const images = ["/mockup.png", "/mockup2.png", "/mockup3.png", "/mockup4.png", "/mockup5.png"];
  return (
    <section>
      <div className="max-page-width px-4 sm:px-8 pt-24 pb-12 md:pb-24 md:pt-32 lg:pt-48 flex flex-col gap-12 lg:gap-24">
        <div className={twMerge("flex flex-col gap-6 md:gap-12 justify-center items-center")}>
          <h1 className="text-balance text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground text-center">
            Webbyrån som förverkligar abstrakta idéer och skapar digitala hållbara lösningar.
          </h1>
          <div className="flex flex-col gap-8 justify-center items-center">
            <h6 className="whitespace-pre-line text-balance text-base lg:text-xl text-center">
              Alla förtjänar att synas. Vi tar abstrakta koncept och omvandlar dem till konkreta
              resultat.
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
        <Carousel
          opts={{ duration: 50, loop: true }}
          plugins={[
            Autoplay({
              delay: 4500,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
            Fade(),
          ]}
          className="w-full bg-orange-100 rounded-md overflow-hidden"
        >
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="h-[75vw] sm:h-auto sm:aspect-video lg:h-[700px] w-full">
                  <Image
                    src={src}
                    fill
                    alt="Hero Image"
                    className="relative! object-cover rounded-md"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots />
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSection;

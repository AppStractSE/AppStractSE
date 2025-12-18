"use client";

import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

type Step = {
  title: string;
  shortDescription: string;
  description: string;
  image: string;
};

type StepSectionProps = {
  options?: IntersectionOptions;
};

const useActiveStep = (stepsLength: number, options: IntersectionOptions = {}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const refs = Array.from({ length: stepsLength }, () => useInView(options));

  const activeIndex = useMemo(() => {
    const index = refs.findIndex(([, inView]) => inView);
    return index === -1 ? 0 : index;
  }, [refs]);

  return { refs, activeIndex };
};

const ServicesSection = ({ options }: StepSectionProps) => {
  const [manualStep, setManualStep] = useState<number | null>(null);
  const { refs, activeIndex } = useActiveStep(services.length, {
    rootMargin: "-20% 0px -20% 0px",
    threshold: 0,
    ...options,
  });

  const current = manualStep ?? activeIndex;

  return (
    <section>
      <div className="max-page-width grid grid-cols-1 items-start gap-8 py-12 md:py-24 md:col-span-2 lg:grid-cols-3 lg:gap-24 lg:relative">
        <div className="gap-8 lg:sticky lg:top-32 flex flex-col lg:gap-12 px-4 sm:px-8">
          <h2 className="max-w-3xl text-balance text-2xl sm:text-3xl md:text-3xl">
            Våra tjänster inom digital produktdesign och utveckling för att förvandla dina idéer
            till framgångsrika digitala lösningar.
          </h2>
          <Button className="rounded-full flex-1 md:flex-none md:w-fit group text-base py-2.5! px-4!">
            Utforska vår expertis{" "}
            <ArrowRight className="h-3.5! w-3.5! ml-1 transition-all duration-100 ease-in-out group-hover:-rotate-45" />
          </Button>
        </div>
        <Carousel opts={{ align: "start" }} className="w-full rounded-md md:col-span-2 ">
          <CarouselContent className="overflow-auto custom-scrollbar px-4 sm:px-0">
            {services.map((src, index) => (
              <CarouselItem
                key={index}
                className="basis-4/5 md:basis-1/2 lg:basis-1/3 flex flex-col gap-2"
              >
                <div className="aspect-[4.75/5] md:aspect-4/5">
                  <Image
                    src={src.image}
                    fill
                    alt="Hero Image"
                    className="relative! object-cover rounded-md"
                  />
                </div>
                <div>{src.title}</div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="ghost" />
          <CarouselNext variant="ghost" />
        </Carousel>
      </div>
    </section>
  );
};

export default ServicesSection;

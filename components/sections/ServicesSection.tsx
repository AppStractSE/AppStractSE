"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";

type Step = {
  title: string;
  shortDescription: string;
  description: string;
  image: string;
};

type StepSectionProps = {
  steps: Step[];
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

const ServicesSection = ({ steps, options }: StepSectionProps) => {
  const [manualStep, setManualStep] = useState<number | null>(null);
  const { refs, activeIndex } = useActiveStep(steps.length, {
    rootMargin: "-20% 0px -20% 0px",
    threshold: 0,
    ...options,
  });

  const current = manualStep ?? activeIndex;

  return (
    <section>
      <div className="max-page-width grid grid-cols-1 items-start gap-8 px-4 sm:px-8 py-12 md:py-24 lg:grid-cols-2 lg:gap-24 lg:relative">
        <div className="gap-8 lg:sticky lg:top-32 flex flex-col lg:gap-12">
          <h2 className="max-w-3xl text-balance text-2xl sm:text-3xl md:text-3xl">
            Våra tjänster inom digital produktdesign och utveckling för att förvandla dina idéer
            till framgångsrika digitala lösningar.
          </h2>
          <Button className="rounded-full flex-1 md:flex-none md:w-fit group text-base py-2.5! px-4!">
            Utforska vår expertis{" "}
            <ArrowRight className="h-3.5! w-3.5! ml-1 transition-all duration-100 ease-in-out group-hover:-rotate-45" />
          </Button>
        </div>
        <div className="flex flex-col gap-12 lg:gap-16">
          {steps.map((step, index) => {
            const [ref] = refs[index];
            const isActive = current === index;
            return (
              <Link
                href="/"
                key={index}
                className={twMerge(
                  "scroll-mt-32 items-center transition-all duration-300 ease-in-out gap-4 lg:gap-6 flex flex-col group",
                  isActive ? "opacity-100 translate-x-0" : "opacity-25 blur-xs translate-x-8",
                )}
                onMouseEnter={() => setManualStep(index)}
                onMouseLeave={() => setManualStep(null)}
              >
                <div className="h-auto w-full">
                  <Image
                    src="/placehold.png"
                    fill
                    alt="Hero Image"
                    className="relative! object-cover rounded-md max-h-80 lg:max-h-[400px]"
                  />
                </div>
                <div className="flex items-center gap-8">
                  <div className="flex w-full flex-col justify-start gap-2">
                    <h3 ref={ref} className="text-balance text-xl">
                      {step.title}
                    </h3>
                    <p className="text-base antialiased">
                      Brand, business & experience design We design experiences that close the gap
                      between what your customers expect and what your business delivers, creating
                      meaningful connections that drive growth.
                    </p>
                  </div>
                  <ArrowRight
                    size={42}
                    className={twMerge(
                      "transition-all duration-500 hidden md:block",
                      isActive ? "-rotate-45" : "",
                    )}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

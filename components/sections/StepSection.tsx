"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { IntersectionOptions } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";

type Step = {
  title: string;
  shortDescription: string;
  description: string;
  image: string;
};

type StepSectionProps = {
  steps: Step[];
  showStepIndex?: boolean;
  options?: IntersectionOptions;
};

type UseActiveStepOptions = IntersectionObserverInit;

const useActiveStep = (count: number, options: UseActiveStepOptions) => {
  const refs = useRef<(HTMLElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible.length > 0) {
        const index = refs.current.findIndex((el) => el === visible[0].target);
        if (index !== -1) setActiveIndex(index);
      }
    }, options);

    refs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, [count, options]);

  return { refs, activeIndex };
};

const StepSection = ({ steps, options, showStepIndex }: StepSectionProps) => {
  const [manualCurrentStep, setManualCurrentStep] = useState<number | null>(null);

  const contentRefs = useRef<(HTMLElement | null)[]>([]);
  const navRefs = useRef<(HTMLDivElement | null)[]>([]);
  const indicatorRef = useRef<HTMLDivElement | null>(null);

  const { refs, activeIndex } = useActiveStep(steps.length, {
    rootMargin: "-30% 0px -30% 0px",
    threshold: 0.4,
    ...options,
  });

  const currentStep = useMemo(
    () => manualCurrentStep ?? activeIndex,
    [manualCurrentStep, activeIndex],
  );

  useLayoutEffect(() => {
    const indicator = indicatorRef.current;
    const activeNav = navRefs.current[currentStep];
    if (!indicator || !activeNav) return;

    indicator.style.height = `${activeNav.offsetHeight}px`;
    indicator.style.transform = `translateY(${activeNav.offsetTop}px)`;
  }, [currentStep]);

  return (
    <section>
      <div className="max-page-width px-4 py-12 sm:px-8 md:py-24 flex flex-col gap-12 md:gap-24">
        <div className="flex flex-col gap-6 items-center">
          <h1 className="text-balance text-3xl md:text-4xl lg:text-5xl leading-tight max-w-2xl text-center">
            Senaste projekten som visar vår expertis
          </h1>
          <h6 className="whitespace-pre-line text-balance text-base md:text-lg lg:text-xl max-w-3xl text-center">
            Upptäck hur vi har hjälpt våra kunder att förverkliga sina visioner genom skräddarsydda
            lösningar som kombinerar innovation, design och teknik.
          </h6>
        </div>
        <div className="grid grid-cols-1 items-start gap-8 lg:relative lg:grid-cols-2 lg:gap-4">
          <div className="gap-8 lg:sticky lg:top-32 lg:flex lg:flex-col lg:gap-12">
            <div className="relative hidden lg:block">
              <div
                ref={indicatorRef}
                className="absolute left-0 w-0.5 bg-foreground transition-all duration-500 ease-in-out will-change-transform z-50"
              />
              {steps.map((step, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    navRefs.current[index] = el;
                  }}
                  className={twMerge(
                    "flex cursor-pointer flex-col gap-2 px-8 py-4 transition-opacity duration-200 lg:max-w-xl border-l-2",
                    currentStep === index ? "opacity-100" : "opacity-50",
                  )}
                  onClick={() => {
                    setManualCurrentStep(index);
                    contentRefs.current[index]?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                    setTimeout(() => setManualCurrentStep(null), 1000);
                  }}
                >
                  <p className="text-lg">
                    {showStepIndex ? `${index + 1}. ` : null}
                    {step.title}
                  </p>
                  <p className="text-sm">{step.shortDescription}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-x-2 gap-y-12 lg:gap-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  refs.current[index] = el;
                  contentRefs.current[index] = el;
                }}
                className={twMerge(
                  "flex scroll-mt-32 flex-col gap-4 transition-opacity duration-200 lg:gap-8",
                  currentStep === index ? "lg:opacity-100" : "lg:opacity-50",
                )}
              >
                <div className="relative aspect-[1.618/1] w-full">
                  <Image
                    quality={100}
                    fill
                    src="/mockup2.png"
                    alt={`Step ${index + 1}`}
                    className="h-full w-full rounded-sm object-cover object-center"
                  />
                </div>
                <Link
                  href={`tjanster/${step.title.toLowerCase()}`}
                  className="mb-auto flex group w-full flex-col gap-4"
                >
                  <h3 className="text-lg md:text-2xl inline-flex gap-2 items-center">
                    <ArrowRight
                      size={28}
                      className="transition-all duration-200 ease-in-out group-hover:-rotate-45 group-hover:mr-2"
                    />
                    {step.title}
                  </h3>
                  <p className="text-base antialiased">{step.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepSection;

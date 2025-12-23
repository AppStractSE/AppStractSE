"use client";

import { cases } from "@/data/cases";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";

const Cases = () => {
  const [currentType, setCurrentType] = useState<string | null>(null);
  return (
    <section>
      <div className="max-page-width px-4 sm:px-8 py-12 md:py-24 gap-6 flex flex-col">
        <div className="flex gap-2 items-center flex-wrap pb-4 md:pb-0">
          <Button
            variant={"ghost"}
            className={twMerge(
              "min-w-fit rounded-full px-4 py-2 text-sm border hover:opacity-100 cursor-pointer",
              !currentType ? "opacity-100" : "opacity-50",
            )}
            onClick={() => setCurrentType(null)}
          >
            Visa alla
          </Button>
          {services
            .sort((a, b) => a.id.localeCompare(b.id))
            .map((service, index) => (
              <Button
                variant={"ghost"}
                className={twMerge(
                  "min-w-fit rounded-full px-4 py-2 text-sm border hover:opacity-100 cursor-pointer",
                  currentType === service.id ? "opacity-100" : "opacity-50",
                )}
                key={index}
                onClick={() => setCurrentType(service.id)}
              >
                {service.id.charAt(0).toUpperCase() + service.id.slice(1)}
              </Button>
            ))}
        </div>
        <div className="grid grid-cols-1 items-stretch gap-x-4 gap-y-12 md:grid-cols-2">
          {cases
            .filter((caseStudy) => !currentType || caseStudy.serviceIds.includes(currentType))
            .map((caseStudy, index) => (
              <Link
                key={index}
                href={"/case/" + caseStudy.id}
                className={twMerge("flex flex-col gap-2 group")}
              >
                <div className="aspect-video lg:h-[350px] relative">
                  <Image
                    src={caseStudy.image}
                    fill
                    alt={caseStudy.title}
                    quality={100}
                    priority={true}
                    className="relative! object-cover max-w-full rounded-md transition-all duration-200 ease-in-out opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute bottom-2 left-2 flex gap-1">
                    {caseStudy.serviceIds.map((serviceId, index) => (
                      <div key={index} className="rounded-full text-[10px] px-2 py-1 bg-background">
                        {serviceId.charAt(0).toUpperCase() + serviceId.slice(1)}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <ArrowRight
                    size={32}
                    className={twMerge("transition-all duration-500 group-hover:-rotate-45")}
                  />
                  <div className="flex flex-col gap-0.5">
                    <h6 className="text-lg">{caseStudy.title}</h6>
                    <p className="text-base opacity-50">{caseStudy.description}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;

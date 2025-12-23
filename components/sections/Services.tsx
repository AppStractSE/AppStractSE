"use client";

import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const Services = () => {
  return (
    <section>
      <div className="max-page-width px-4 sm:px-8 py-12 md:py-24 gap-6 lg:gap-12 flex flex-col">
        <div className="flex flex-col gap-6 items-center">
          <h1 className="text-balance text-3xl md:text-4xl lg:text-5xl leading-tight max-w-2xl text-center">
            Senaste projekten som visar vår expertis
          </h1>
          <h6 className="whitespace-pre-line text-balance text-base md:text-lg lg:text-xl max-w-3xl text-center">
            Upptäck hur vi har hjälpt våra kunder att förverkliga sina visioner genom skräddarsydda
            lösningar som kombinerar innovation, design och teknik.
          </h6>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-x-4 gap-y-12 md:grid-cols-2">
          {services.map((service, index) => (
            <Link
              key={index}
              href={"/case/" + service.id}
              className={twMerge("flex flex-col gap-2 group")}
            >
              <div className="aspect-video lg:h-[350px] relative">
                <Image
                  src={service.image}
                  fill
                  alt={service.title}
                  quality={100}
                  priority={true}
                  className="relative! object-cover max-w-full rounded-md transition-all duration-200 ease-in-out opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="flex gap-4 items-center">
                <ArrowRight
                  size={32}
                  className={twMerge("transition-all duration-500 group-hover:-rotate-45")}
                />
                <div className="flex flex-col gap-0.5">
                  <h6 className="text-lg">{service.title}</h6>
                  <p className="text-base opacity-50">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

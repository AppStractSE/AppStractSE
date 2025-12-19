import ContactSection from "@/components/sections/ContactSection";
import { cases } from "@/data/cases";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  metadataBase: new URL("https://dev.appstract.se"),
  title: {
    template: "%s | Appstract",
    default: "Konkreta lösningar på abstrakta problem | Appstract",
  },
  openGraph: {
    title: "Appstract",
    description: "Konkreta lösningar på abstrakta problem | Appstract",
    url: "/",
    siteName: "Appstract",
    images: [
      {
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Appstract - Konkreta lösningar på abstrakta problem",
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    title: "Appstract",
    images: [
      {
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Appstract - Konkreta lösningar på abstrakta problem",
      },
    ],
    description: "Konkreta lösningar på abstrakta problem",
  },
  robots: "max-image-preview:large",
};

export default function Page() {
  return (
    <>
      <section>
        <div className="max-page-width px-4 sm:px-8 pt-24 pb-12 md:pb-24 md:pt-32 lg:pt-48 flex flex-col gap-12 lg:gap-24">
          <div className="flex flex-col gap-6 items-center">
            <h1 className="text-balance text-3xl md:text-4xl lg:text-5xl leading-tight max-w-2xl text-center">
              Senaste projekten som visar vår expertis
            </h1>
            <h6 className="whitespace-pre-line text-balance text-base md:text-lg lg:text-xl max-w-3xl text-center">
              Upptäck hur vi har hjälpt våra kunder att förverkliga sina visioner genom
              skräddarsydda lösningar som kombinerar innovation, design och teknik.
            </h6>
          </div>
          <div className="h-[75vw] sm:h-auto sm:aspect-video lg:h-[600px] w-full">
            <Image
              src="/mockup2.png"
              fill
              alt="Hero Image"
              className="relative! object-cover rounded-md"
            />
          </div>
        </div>
      </section>
      <hr></hr>
      <section>
        <div className="max-page-width px-4 sm:px-8 py-12 md:py-24 gap-6 flex flex-col">
          <div className="flex gap-2 items-center flex-wrap pb-4 md:pb-0">
            <div className="min-w-fit rounded-full px-4 py-2 text-sm border">Visa alla</div>
            {services
              .sort((a, b) => a.id.localeCompare(b.id))
              .map((service, index) => (
                <div className="min-w-fit rounded-full px-4 py-2 text-sm border" key={index}>
                  {service.id.charAt(0).toUpperCase() + service.id.slice(1)}
                </div>
              ))}
          </div>
          <div className="grid grid-cols-1 items-stretch gap-x-4 gap-y-12 md:grid-cols-2">
            {cases.map((caseStudy, index) => (
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
      <hr></hr>
      <ContactSection />
    </>
  );
}

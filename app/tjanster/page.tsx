import ContactSection from "@/components/sections/ContactSection";
import Services from "@/components/sections/Services";
import StepSection from "@/components/sections/StepSection";
import { services } from "@/data/services";
import { Metadata } from "next";
import Image from "next/image";

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
              Tjänster som förvandlar idéer till verklighet
            </h1>
            <h6 className="whitespace-pre-line text-balance text-base md:text-lg lg:text-xl max-w-3xl text-center">
              Upptäck vårt breda utbud av tjänster som är utformade för att möta dina unika behov
              och hjälpa ditt företag att växa i den digitala världen.
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
      <StepSection
        steps={services.map((service) => ({
          title: service.title,
          shortDescription: service.description,
          description: service.description,
          image: service.image,
        }))}
      />
      <hr></hr>
      <Services />
      <hr></hr>
      <ContactSection />
    </>
  );
}

import ContactSection from "@/components/sections/ContactSection";
import { services } from "@/data/services";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
              Våra tjänster
            </h1>
            <h6 className="whitespace-pre-line text-balance text-base md:text-lg lg:text-xl max-w-3xl text-center">
              Våra tjänster omfattar i stort sett allt från mindre designprojekt till kompletta
              appar, webbplatser och systemlösningar.
            </h6>
          </div>
        </div>
      </section>
      <section>
        <div className="max-page-width px-4 sm:px-8 py-12 md:py-24 gap-6 flex flex-col">
          <div className="grid grid-cols-1 items-stretch gap-x-4 gap-y-12 md:grid-cols-2">
            {services.map((service, index) => (
              <Link
                key={index}
                href={"/tjanster/" + service.id}
                className="flex flex-col gap-2 group hover:-translate-y-1 transition-all duration-300 ease-in-out group"
              >
                <div className="lg:h-[500px]">
                  <div className="overflow-hidden h-full relative rounded-sm w-full">
                    <div className="absolute inset-0 transition-all duration-500 ease-in-out group-hover:bg-foreground/50 z-50 flex items-center justify-center">
                      <div className="text-background translate-y-full opacity-0 will-change-transform transition-all duration-500 ease-in-out group-hover:translate-y-1/2 group-hover:opacity-100">
                        Läs mer
                      </div>
                    </div>
                    <Image
                      src={service.image}
                      fill
                      alt={service.title}
                      className="object-cover relative! opacity-90 group-hover:opacity-100 group-hover:scale-[1.05] transition-all duration-500 ease-in-out"
                    />
                    <div className="absolute bottom-3 left-3 right-3 flex-wrap flex gap-1 z-50">
                      {service.tags.map((tag, index) => (
                        <div
                          key={index}
                          className="rounded-full text-[10px] px-3 py-1 bg-background"
                        >
                          {tag.charAt(0).toUpperCase() + tag.slice(1)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-0.5">
                  <h6 className="text-lg">{service.title}</h6>
                  <p className="text-base opacity-50">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}

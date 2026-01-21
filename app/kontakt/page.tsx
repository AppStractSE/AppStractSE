import ContactSection from "@/components/sections/ContactSection";
import { Metadata } from "next";

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
              Kom i kontakt med oss
            </h1>
            <h6 className="whitespace-pre-line text-balance text-base md:text-lg lg:text-xl max-w-3xl text-center">
              Kul att du vill komma i kontakt med oss! Vi drivs av att skapa fantastiska digitala
              upplevelser och ser fram emot att höra om ditt projekt eller dina idéer. Låt oss prata
              vidare!
            </h6>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}

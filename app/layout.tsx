import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { PlusJakartaSans } from "@/util/fonts";
import { Metadata, Viewport } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

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

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${PlusJakartaSans.className} bg-background text-primary font-medium antialiased`}
      >
        <Toaster />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

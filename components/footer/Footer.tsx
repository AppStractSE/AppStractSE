import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  ThreadsIcon,
} from "@/components/SocialMediaIcons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerlinks = [
    { name: "Tjänster", href: "/tjanster" },
    { name: "Om Appstract", href: "/case" },
    { name: "Kontakt", href: "/kontakt" },
  ];
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-background">
      <div className="max-page-width flex flex-col gap-8 px-4 sm:px-8 pb-8 pt-32 md:gap-16">
        <div className="justify-center flex">
          <Link href="/" className="relative block h-auto w-12">
            <Image priority quality={100} className="relative!" fill alt="Logo" src="/stamp.png" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12">
          <div className="flex min-w-fit flex-col gap-8">
            <h5 className="text-base">Snabblänkar</h5>
            <div className="flex flex-col gap-4">
              {footerlinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex w-fit items-center gap-2 text-lg font-light hover:text-yellow-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex min-w-fit flex-col gap-8">
            <h5 className="text-base">Kontakt</h5>
            <div className="flex flex-col gap-2">
              <Link className="text-lg font-light hover:text-yellow-300" href="tel:070-123 45 67">
                070-123 45 67
              </Link>
              <Link
                className="text-lg font-light hover:text-yellow-300"
                href="mailto:info@appstract.se"
              >
                info@appstract.se
              </Link>
            </div>
          </div>
          <div className="flex min-w-fit flex-col gap-8">
            <h5 className="text-base">Följ oss</h5>
            {/* <div className="flex flex-col gap-2">
              <a
                className="flex w-fit items-center gap-2 text-lg font-light hover:text-yellow-300"
                href="https://www.instagram.com/appstract.se/"
            </div> */}
          </div>
          <div className="flex min-w-fit flex-col gap-8">
            <h5 className="text-base">Följ oss</h5>
            <div className="flex flex gap-2">
              <FacebookIcon fillColor="var(--background)" />
              <InstagramIcon fillColor="var(--background)" />
              <LinkedInIcon fillColor="var(--background)" />
              <ThreadsIcon fillColor="var(--background)" />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-background/25" />
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center max-page-width py-8 px-4 sm:px-8">
        <div className="flex gap-8">
          <a
            href="https://www.appstract.se"
            target="_blank"
            className="text-xs text-background/50 hover:underline"
          >
            Integritetspolicy
          </a>
          <a
            href="https://www.appstract.se"
            target="_blank"
            className="text-xs text-background/50 hover:underline"
          >
            Cookies
          </a>
        </div>
        <p className="text-xs text-background/50">
          © {currentYear} appstract. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

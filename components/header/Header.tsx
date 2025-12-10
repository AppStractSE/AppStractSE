"use client";
// import useMounted from "@/hooks/useMounted";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { FacebookIcon, InstagramIcon, LinkedInIcon, ThreadsIcon } from "../SocialMediaIcons";
import { Button } from "../ui/button";
// import Drawer from "../drawer/Drawer";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(() => {
    // Initialize based on current scroll position
    return typeof window !== "undefined" ? window.scrollY > 0 : false;
  });
  const ICON_SIZE = 24;
  const pathname = usePathname();
  // const isMounted = useMounted();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isDrawerOpen]);

  const buttonBaseClasses = twMerge(
    "text-xs md:text-sm tracking-wide transition-all duration-100 ease-in-out",
  );

  return (
    <>
      <div
        onClick={() => setIsDrawerOpen(false)}
        className={twMerge(
          "bg-foreground/50 backdrop-blur-sm fixed inset-0 z-49",
          isDrawerOpen ? "" : "hidden",
        )}
      ></div>
      <div
        className={twMerge(
          "fixed top-0 md:top-4 left-0 right-0 w-full md:w-fit z-50 transition-all duration-100 ease-in-out mx-auto flex flex-col items-center",
        )}
      >
        <header
          className={twMerge(
            "md:rounded-full backdrop-blur-sm border w-full md:w-fit md:max-w-[700px] border-border/50",
            isDrawerOpen ? "bg-background" : "bg-background/75",
          )}
        >
          <div className={twMerge("px-4 py-2.5 md:px-8 flex md:justify-center")}>
            <div className={twMerge("flex items-center w-full justify-between")}>
              <Link
                href="/"
                className={twMerge(
                  "h-4.5 w-auto transition-all duration-300 ease-in-out opacity-50 hover:opacity-100",
                  isScrolled ? "mr-4" : "mr-24",
                  isDrawerOpen && "mr-48",
                )}
              >
                <Image
                  priority
                  quality={100}
                  fill
                  alt="Logo"
                  src="/logo.png"
                  className="!relative transition-all duration-100 ease-in-out"
                />
              </Link>

              <div className="flex items-center gap-2">
                <Link href="/tjanster" className={twMerge(buttonBaseClasses, "hidden sm:block")}>
                  <Button variant="ghost">Tjänster</Button>
                </Link>
                <Link
                  href="/om-oss"
                  className={twMerge(buttonBaseClasses, "hidden sm:block md:hidden lg:block")}
                >
                  <Button variant="ghost">Case</Button>
                </Link>
                <Link
                  href="/om-oss"
                  className={twMerge(buttonBaseClasses, "hidden sm:block md:hidden lg:block")}
                >
                  <Button variant="ghost">Kontakt</Button>
                </Link>
                <Button
                  onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                  variant="ghost"
                  className={twMerge(
                    buttonBaseClasses,
                    "bg-foreground text-background cursor-pointer",
                  )}
                >
                  {isDrawerOpen ? "Stäng" : "Meny"}
                </Button>
              </div>
            </div>
          </div>
        </header>
        <div
          className={twMerge(
            "backdrop-blur-sm md:rounded-xl transition-all duration-300 ease-in-out mt-px md:mt-2 px-4 md:px-8 flex flex-col gap-6",
            isDrawerOpen
              ? "h-auto translate-y-0 opacity-100 py-2.5 md:py-4 bg-background max-w-[750px] max-h-[80vh] overflow-y-scroll custom-scrollbar"
              : "min-h-0 max-h-0 h-0 overflow-hidden -translate-y-[200%] opacity-0 bg-background/75",
          )}
        >
          <div className="grid grid-cols-2 gap-12">
            <div className="gap-4 flex flex-col">
              <h6 className="text-lg font-medium">Cases1</h6>
              <div className="flex flex-col gap-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Link key={index} href="/om-oss" className="flex items-center gap-2 group">
                    <Image
                      src="/placehold.png"
                      width={80}
                      height={80}
                      alt="Icon"
                      className="group-hover:opacity-100 opacity-80"
                    />
                    <div>
                      <p className="text-sm">Case {index}</p>
                      <p className="text-sm">Case info</p>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                href="/tjanster"
                className="flex justify-center rounded-lg text-xs font-bold hover:underline hover:bg-background/25 py-2 gap-4 items-center"
              >
                <hr className="bg-black w-full"></hr>
                <span className="min-w-fit">Se alla cases</span>
                <hr className="bg-black w-full"></hr>
              </Link>
            </div>
            <div className="gap-4 flex flex-col">
              <h6 className="text-lg font-medium">Cases</h6>
              <div className="flex flex-col gap-3">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Link key={index} href="/om-oss" className="flex items-center gap-2 group">
                    <Image
                      src="/placehold.png"
                      width={80}
                      height={80}
                      alt="Icon"
                      className="group-hover:opacity-100 opacity-80"
                    />
                    <div>
                      <p className="text-sm">Case {index}</p>
                      <p className="text-sm">Case info</p>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                href="/tjanster"
                className="flex justify-center rounded-lg text-xs font-bold hover:underline hover:bg-background/25 py-2 gap-4 items-center"
              >
                <hr className="bg-black w-full"></hr>
                <span className="min-w-fit">Se alla cases</span>
                <hr className="bg-black w-full"></hr>
              </Link>
            </div>
          </div>
          <div className="border p-4 rounded-md grid grid-cols-2 gap-12">
            <div>
              <h6 className="text-lg font-medium mb-4">Har du ett projekt i åtanke?</h6>
              <Link href="/kontakt">
                <Button className="rounded-full w-fit group text-xs py-2.5! px-4!">
                  Kontakta oss{" "}
                  <ArrowRight className="h-3.5! w-3.5! ml-1 transition-all duration-100 ease-in-out group-hover:-rotate-45" />
                </Button>
              </Link>
            </div>
            <p className="text-sm mb-4 text-pretty">
              Låt oss diskutera hur vi kan hjälpa dig att förverkliga din vision. Kontakta oss idag!
            </p>
          </div>
          <div className="gap-4 flex flex-col">
            <h6 className="text-lg font-medium">Tjänster</h6>
            <div className="grid grid-cols-2 gap-x-12 gap-y-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <Link key={index} href="/om-oss" className="flex items-center gap-2 group">
                  <Image
                    src="/placehold.png"
                    width={80}
                    height={80}
                    alt="Icon"
                    className="group-hover:opacity-100 opacity-80"
                  />
                  <div>
                    <p className="text-sm">Tjänst {index}</p>
                    <p className="text-sm">Tjänst info</p>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              href="/tjanster"
              className="flex justify-center rounded-lg text-xs font-bold hover:underline hover:bg-background/25 py-2 gap-4 items-center"
            >
              <hr className="bg-black w-full"></hr>
              <span className="min-w-fit">Se alla tjänster</span>
              <hr className="bg-black w-full"></hr>
            </Link>
          </div>
          <div>Om oss</div>
          <div className="flex min-w-fit flex-col gap-4 items-center">
            <h5 className="text-base">Följ & interagera med oss</h5>
            <div className="flex flex gap-2">
              <FacebookIcon fillColor="var(--foreground)" />
              <InstagramIcon fillColor="var(--foreground)" />
              <LinkedInIcon fillColor="var(--foreground)" />
              <ThreadsIcon fillColor="var(--foreground)" />
            </div>
          </div>
        </div>
      </div>
      {/* <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} /> */}
    </>
  );
};

export default Header;

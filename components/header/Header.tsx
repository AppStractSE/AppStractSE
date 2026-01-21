"use client";
// import useMounted from "@/hooks/useMounted";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Menu from "../Menu";
import { Button } from "../ui/button";

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
        className={twMerge(
          "fixed top-0 md:top-6 left-0 right-0 w-full md:w-fit z-9999 transition-all duration-100 ease-in-out mx-auto flex flex-col items-center",
        )}
      >
        <header
          className={twMerge(
            "md:rounded-full backdrop-blur-sm border-b md:border w-full md:w-fit md:max-w-[700px] border-border/50 shadow-md",
            isDrawerOpen ? "bg-background" : "bg-background/75",
          )}
        >
          <div className={twMerge("px-4 py-2.5 md:px-8 flex md:justify-center")}>
            <div className={twMerge("flex items-center w-full justify-between")}>
              <Link
                href="/"
                className={twMerge(
                  "h-auto w-24 transition-all duration-300 ease-in-out opacity-50 hover:opacity-100",
                  !isScrolled || isDrawerOpen ? "md:mr-32" : "md:mr-12",
                )}
              >
                <Image
                  priority
                  quality={100}
                  fill
                  alt="Logo"
                  src="/logo.png"
                  className="relative! transition-all duration-100 ease-in-out"
                />
              </Link>

              <div className="flex items-center gap-2">
                <Link href="/tjanster" className={twMerge(buttonBaseClasses, "hidden sm:block")}>
                  <Button
                    variant="ghost"
                    className="rounded-full cursor-pointer hover:bg-foreground/10 hover:text-foreground"
                  >
                    Tjänster
                  </Button>
                </Link>
                <Link
                  href="/case"
                  className={twMerge(buttonBaseClasses, "hidden sm:block md:hidden lg:block")}
                >
                  <Button
                    variant="ghost"
                    className="rounded-full cursor-pointer hover:bg-foreground/10 hover:text-foreground"
                  >
                    Case
                  </Button>
                </Link>
                <Link
                  href="/kontakt"
                  className={twMerge(buttonBaseClasses, "hidden sm:block md:hidden lg:block")}
                >
                  <Button
                    variant="ghost"
                    className="rounded-full cursor-pointer hover:bg-foreground/10 hover:text-foreground"
                  >
                    Kontakt
                  </Button>
                </Link>
                <Menu isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;

"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FacebookIcon, InstagramIcon, LinkedInIcon, ThreadsIcon } from "./SocialMediaIcons";

interface Props {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Menu = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="text-xs md:text-sm tracking-wide transition-all duration-100 ease-in-out bg-foreground text-background cursor-pointer bg-foreground/90 rounded-full hover:bg-foreground hover:text-background"
        >
          {isOpen ? "Stäng" : "Meny"}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="hidden">
          <DrawerTitle className="flex justify-center">
            <Image width={72} height={72} alt="" src="/logo.png" />
          </DrawerTitle>
          <DrawerDescription>
            Webbyrån som förverkligar abstrakta idéer och skapar digitala hållbara lösningar.
          </DrawerDescription>
        </DrawerHeader>
        <div className="mx-auto w-full overflow-y-scroll mt-4">
          <div className="p-4 pb-0">
            <div className="max-h-[60vh] lg:max-h-[85vh]">
              <div className="pb-8 flex flex-col gap-6">
                <h6 className="text-lg font-medium">Meny</h6>
                <div className="flex flex-col gap-6">
                  <Link
                    href="/"
                    className="text-3xl flex items-center gap-4 group opacity-50 hover:opacity-100"
                  >
                    <ArrowRight
                      size={28}
                      className="transition-all duration-200 ease-in-out group-hover:-rotate-45 group-hover:mr-2"
                    />{" "}
                    Om oss
                  </Link>
                  <Link
                    href="/"
                    className="text-3xl flex items-center gap-4 group opacity-50 hover:opacity-100"
                  >
                    <ArrowRight
                      size={28}
                      className="transition-all duration-200 ease-in-out group-hover:-rotate-45 group-hover:mr-2"
                    />{" "}
                    Om oss
                  </Link>
                  <Link
                    href="/"
                    className="text-3xl flex items-center gap-4 group opacity-50 hover:opacity-100"
                  >
                    <ArrowRight
                      size={28}
                      className="transition-all duration-200 ease-in-out group-hover:-rotate-45 group-hover:mr-2"
                    />{" "}
                    Om oss
                  </Link>
                  <Link
                    href="/"
                    className="text-3xl flex items-center gap-4 group opacity-50 hover:opacity-100"
                  >
                    <ArrowRight
                      size={28}
                      className="transition-all duration-200 ease-in-out group-hover:-rotate-45 group-hover:mr-2"
                    />{" "}
                    Om oss
                  </Link>
                </div>
                <hr className="bg-black w-full"></hr>
                <div className="gap-4 md:gap-6 flex flex-col">
                  <h6 className="text-lg font-medium md:text-center">Cases</h6>
                  <div className="grid grid-cols-2 gap-x-4 md:gap-x-12 gap-y-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <Link key={index} href="/case" className="flex items-center gap-2 group">
                        <Image
                          src="/placehold2.png"
                          width={64}
                          height={64}
                          alt="Icon"
                          className="group-hover:opacity-100 opacity-80 bg-black rounded-sm"
                        />
                        <div className="flex flex-col gap-0.5">
                          <p className="text-xs md:text-sm">Case {index}</p>
                          <p className="text-[10px] md:text-sm">Case info</p>
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
                <div className="gap-4 md:gap-6 flex flex-col">
                  <h6 className="text-lg font-medium md:text-center">Cases</h6>
                  <div className="grid grid-cols-2 gap-x-4 md:gap-x-12 gap-y-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <Link key={index} href="/case" className="flex items-center gap-2 group">
                        <Image
                          src="/placehold2.png"
                          width={64}
                          height={64}
                          alt="Icon"
                          className="group-hover:opacity-100 opacity-80 bg-black rounded-sm"
                        />
                        <div className="flex flex-col gap-0.5">
                          <p className="text-xs md:text-sm">Case {index}</p>
                          <p className="text-[10px] md:text-sm">Case info</p>
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
                <div className="border p-4 rounded-md grid grid-cols-2 gap-6">
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
                    Låt oss diskutera hur vi kan hjälpa dig att förverkliga din vision. Kontakta oss
                    idag!
                  </p>
                </div>
                <div className="gap-4 flex flex-col">
                  <h6 className="text-lg font-medium">Tjänster</h6>
                  <div className="grid grid-cols-2 gap-x-12 gap-y-3">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <Link key={index} href="/case" className="flex items-center gap-2 group">
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
                <div className="flex min-w-fit flex-col gap-4 items-center">
                  <h5 className="text-base">Följ & interagera med oss</h5>
                  <div className="flex gap-2">
                    <FacebookIcon fillColor="var(--foreground)" />
                    <InstagramIcon fillColor="var(--foreground)" />
                    <LinkedInIcon fillColor="var(--foreground)" />
                    <ThreadsIcon fillColor="var(--foreground)" />
                  </div>
                </div>
              </div>
              {/* End */}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Menu;

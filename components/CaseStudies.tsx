import { cases } from "@/data/cases";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Button } from "./ui/button";

const CaseStudies = () => {
  return (
    <section>
      <div className="max-page-width px-4 sm:px-8 py-12 md:py-24 flex flex-col gap-12">
        <div className={twMerge("grid gap-8 md:grid-cols-2")}>
          <h1 className="max-w-3xl text-balance text-2xl sm:text-3xl md:text-4xl">
            Webbyrån som förverkligar abstrakta idéer och skapar digitala hållbara lösningar.
          </h1>
          <div className="flex flex-col gap-8">
            <h6 className="whitespace-pre-line text-balance text-base lg:text-xl">
              Alla förtjänar att synas. Som fullservicebyrå skapar vi digitala plattformar som
              fångar essensen av ert varumärke, skapar marknadsföringsstrategier som engagerar
              målgrupper och bygger långsiktiga relationer. Vi tar abstrakta koncept och omvandlar
              dem till konkreta resultat.
            </h6>
            <div className="flex flex-wrap gap-2 mt-auto">
              <Button className="rounded-full flex-1 md:flex-none md:w-fit group text-base py-2.5! px-4!">
                Vad vi gör{" "}
                <ArrowRight className="h-3.5! w-3.5! ml-1 transition-all duration-100 ease-in-out group-hover:-rotate-45" />
              </Button>
              <Button
                variant="outline"
                className="rounded-full flex-1 md:flex-none md:w-fit group text-base py-2.5! px-4!"
              >
                Kontakta oss{" "}
                <ArrowRight className="h-3.5! w-3.5! ml-1 transition-all duration-100 ease-in-out group-hover:-rotate-45" />
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-x-4 gap-y-12 md:grid-cols-2">
          {cases.map((caseStudy, index) => (
            <Link
              key={index}
              href={"/case/" + caseStudy.id}
              className={twMerge(
                "flex flex-col gap-2 group",
                index === 0 ? "col-span-2" : "col-span-2 md:col-span-1",
              )}
            >
              <div
                className={twMerge(
                  "lg:h-[500px] relative",
                  index === 0 ? "max-h-160 lg:max-h-max xl:h-[700px]" : "",
                )}
              >
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
        {/* <div className="col-span-2 md:col-span-1">
          <Image
            src="/placehold.png"
            fill
            alt="Hero Image"
            className="relative! object-cover max-w-full"
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Image
            src="/placehold.png"
            fill
            alt="Hero Image"
            className="relative! object-cover max-w-full"
          />
        </div> */}
      </div>
    </section>
  );
};

export default CaseStudies;

import { cases } from "@/data/cases";
import Image from "next/image";
import Link from "next/link";

const CaseStudies = () => {
  return (
    <section>
      <div className="max-page-width px-4 sm:px-8 py-12 md:py-24 flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase text-foreground/50">Tidigare projekt</p>
          <h4 className="max-w-xl text-balance text-2xl sm:text-3xl md:text-4xl">
            Realiserade visioner som gör skillnad.
          </h4>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-x-6 gap-y-12 md:grid-cols-2">
          {cases.map((caseStudy, index) => (
            <Link
              key={index}
              href={"/case/" + caseStudy.id}
              className="flex flex-col gap-2 group hover:-translate-y-1 transition-all duration-300 ease-in-out group col-span-2 md:col-span-1"
            >
              <div className="lg:h-[500px]">
                <div className="overflow-hidden h-full relative rounded-sm w-full">
                  <div className="absolute inset-0 transition-all duration-500 ease-in-out group-hover:bg-foreground/50 z-50 flex items-center justify-center">
                    <div className="text-background translate-y-full opacity-0 will-change-transform transition-all duration-500 ease-in-out group-hover:translate-y-1/2 group-hover:opacity-100">
                      Gå till case
                    </div>
                  </div>
                  <Image
                    src={caseStudy.image}
                    fill
                    alt={caseStudy.title}
                    className="object-cover relative! opacity-90 group-hover:opacity-100 group-hover:scale-[1.05] transition-all duration-500 ease-in-out"
                  />
                  <div className="absolute bottom-3 left-3 flex gap-1 z-50">
                    {caseStudy.serviceIds.map((serviceId, index) => (
                      <div key={index} className="rounded-full text-[10px] px-3 py-1 bg-background">
                        {serviceId.charAt(0).toUpperCase() + serviceId.slice(1)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-0.5">
                <h6 className="text-lg">{caseStudy.title}</h6>
                <p className="text-base opacity-50">{caseStudy.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

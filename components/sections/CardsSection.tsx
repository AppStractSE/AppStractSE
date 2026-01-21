/* eslint-disable @next/next/no-img-element */
import { services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";

const CardsSection = () => {
  return (
    <section>
      <div className="max-page-width py-12 md:py-24 px-4 sm:px-8 flex flex-col gap-12">
        <div className="flex flex-col gap-4 items-center">
          <p className="text-xs uppercase text-foreground/50 text-center">Vad appstract gör</p>
          <h4 className="max-w-4xl text-balance text-2xl sm:text-3xl md:text-4xl text-center">
            Från idé till verklighet.
          </h4>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 group">
          {services.map((src, index) => (
            <Link
              href="/"
              key={index}
              className="group/card card flex flex-col gap-4 transition-all ease-linear duration-400 group-has-[.card:hover]:opacity-50 group-has-[.card:hover]:scale-[.98] hover:opacity-100! hover:scale-[1.02]!"
            >
              <div className="relative aspect-square rounded-sm overflow-hidden">
                <div className="absolute inset-0 transition-all duration-500 ease-in-out group-hover/card:bg-foreground/50 z-50 flex items-center justify-center">
                  <div
                    className="text-background translate-y-full opacity-0 will-change-transform
                 transition-all duration-500 ease-in-out
                 group-hover/card:translate-y-1/2
                 group-hover/card:opacity-100"
                  >
                    Läs mer
                  </div>
                </div>
                <Image
                  fill
                  src={src.image}
                  alt={src.title}
                  className="object-cover group-hover/card:scale-[1.05] transition-all duration-200 ease-in-out"
                />
              </div>

              <h4 className="text-lg md:text-xl">{src.title}</h4>
              <p className="text-sm md:text-base">{src.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;

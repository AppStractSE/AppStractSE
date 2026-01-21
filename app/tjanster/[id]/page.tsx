import { services } from "@/data/services";
import { redirect } from "next/navigation";
import { twMerge } from "tailwind-merge";
export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: any) {
  const param = await params;
  const service = services.find((service) => service.id === param.id);
  if (!service) redirect("/404");
  return {
    title: service.title,
    openGraph: {
      title: `Appstract | ${service.title}`,
      description: service.description,
      url: `/vara-tjanster/${service.id}`,
      siteName: "Appstract",
      images: [
        {
          url: `/${service.image}`,
          width: 1200,
          height: 630,
          alt: `Appstract | ${service.title}`,
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
          url: `/${service.image}`,
          width: 1200,
          height: 630,
          alt: `Appstract | ${service.title}`,
        },
      ],
      description: service.description,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const param = await params;
  const service = services.find((service) => service.id === param.id);
  if (!service) redirect("/404");

  return (
    <div>
      <div className="w-full h-[90vw]! md:h-[60vw]! lg:h-[45vw]!">
        <img alt="" className="w-full h-full object-cover" src="/mockup2.png" />
      </div>
      <div
        className={twMerge(
          "gap-8 max-page-width px-4 sm:px-8 my-12 md:my-24 flex flex-col items-center justify-center text-center",
        )}
      >
        <h1 className="text-balance text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground md:w-2/3">
          {service.title}
        </h1>
        <div className="flex flex-col gap-8 md:w-2/3">
          <h6 className="whitespace-pre-line text-balance text-base lg:text-xl">
            {service.description}
          </h6>
        </div>
      </div>
      <section>
        <div className="max-page-width px-4 sm:px-8 my-12 md:my-24 flex flex-col gap-12">
          <img alt="" className="w-full h-full object-cover rounded-md" src="/rosers1.png" />
        </div>
      </section>
      <section>
        <div className="max-page-width px-4 sm:px-8 my-12 md:my-24 flex flex-col gap-8 justify-center items-center text-center">
          <h2 className="text-balance text-2xl md:text-3xl lg:text-4xl leading-tight text-foreground md:w-2/3">
            Webbyrån som förverkligar abstrakta idéer och skapar digitala hållbara lösningar.
          </h2>
          <div className="flex flex-col gap-8 md:w-2/3">
            <h6 className="whitespace-pre-line text-balance text-base lg:text-xl">
              Alla förtjänar att synas. Som fullservicebyrå skapar vi digitala plattformar som
              fångar essensen av ert varumärke, skapar marknadsföringsstrategier som engagerar
              målgrupper och bygger långsiktiga relationer. Vi tar abstrakta koncept och omvandlar
              dem till konkreta resultat.
            </h6>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <img alt="" className="w-full h-full object-cover rounded-md" src="/rosers2.png" />
            <img alt="" className="w-full h-full object-cover rounded-md" src="/rosers2.png" />
          </div>
        </div>
      </section>
    </div>
  );
}

import { useRef } from "react";
import { ServicePagePart } from "../../types/types";
import SlateCard from "../cards/SlateCard/SlateCard";
import Grid from "../grid/Grid";

interface Props {
  parts: ServicePagePart[];
}

const ServiceSteps = ({ parts }: Props) => {
  const scrollRefs = useRef<HTMLDivElement[]>([]);
  const handleRefScroll = (index: number) => {
    if (scrollRefs.current[index]) {
      const contentContainer = scrollRefs.current[index];

      if (contentContainer) {
        const topOffset = contentContainer.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: topOffset - 50, behavior: "smooth" });
      }
    }
  };
  return (
    <>
      <section className="w-full">
        <div className="p-2 md:p-4 lg:py-0 lg:px-6 bg-bluegray-900">
          <div className="container m-auto w-full">
            <Grid>
              {parts.map((part: ServicePagePart, index: number) => (
                <SlateCard
                  key={index}
                  className="col-6 lg:col-3 flex"
                  title={part.title}
                  description={part.hovertext}
                  image={part.image}
                  bg={part.background}
                  onClick={() => handleRefScroll(index)}
                />
              ))}
            </Grid>
          </div>
        </div>
      </section>
      <section className="w-full">
        {parts.map((part: ServicePagePart, index: number) => (
          <div
            style={{ scrollSnapAlign: "start" }}
            className="p-2 md:p-4 lg:p-6 bg-bluegray-900"
            key={index}
            ref={(ref) => {
              if (ref) scrollRefs.current[index] = ref;
            }}
          >
            <div className="container m-auto w-full">
              <div className="flex flex-wrap justify-content-center align-items-start">
                <div className="col-12 lg:col-5 text-2xl lg:text-4xl xl:text-5xl font-bold break-word">
                  <div>{part.title}</div>
                  <div className={`mt-2 pt-1 ${part.background} w-10rem`} />
                </div>
                <div className="col-12 lg:col-7">
                  <div className="text-xl font-bold mb-2">{part.subtitle}</div>
                  <div className="text-1xl font" style={{ whiteSpace: "pre-line" }}>
                    {part.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ServiceSteps;

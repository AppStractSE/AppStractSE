import { useRef } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import SlateCard from "../../components/cards/SlateCard/SlateCard";
import Grid from "../../components/grid/Grid";
import ContactSection from "../../components/sections/ContactSection";

const Clients = () => {
  const contactRef = useRef<HTMLSpanElement>(null);
  const scrolltoContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="w-full">
        <div className="p-2 md:p-4 lg:p-6">
          <div className="container w-full m-auto pt-8 pb-2">
            <Breadcrumbs />
            <div className="flex-column-reverse flex-wrap flex lg:flex-row">
              <div className="col-12 lg:col-6 flex flex-column justify-content-between">
                <div className="block text-5xl break-word md:text-6xl lg:text-7xl font-bold line-height-1 my-4 lg:mt-0 lg:mb-4">
                  Klienter och cases
                </div>
                <p className="mt-0 mb-4 line-height-3">
                  Vi på Appstract är stolta över att ha arbetat med en mångfald av kunder och
                  projekt. Vi älskar den variation som vår bransch erbjuder och att få möjligheten
                  att bidra till olika branscher och projekt. Nedan kan du se ett urval av våra
                  senaste projekt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="px-2 md:px-4 lg:px-6">
          <div className="container w-full m-auto pb-6">
            <div className="col-12 flex gap-4 text-3xl font-bold mb-4">
            <div className="text-primary">Visa alla</div>
            <div className="text-primary-500">Appar</div>
            <div className="text-primary-500">Webbapplikationer</div>
            <div className="text-primary-500">Alla</div>
            </div>
            <Grid>
              <SlateCard
                className="col-12 md:col-6 lg:col-3 flex"
                title="Client 1"
                description="Client 1 info"
                image="https://s29814.pcdn.co/wp-content/uploads/2022/10/Shutterstock_749265139-1.png"
                bg="bg-primary-900"
              />
              <SlateCard
                className="col-12 md:col-6 lg:col-3 flex"
                title="Client 2"
                description="Client 2 info"
                image="https://c0.wallpaperflare.com/preview/484/389/259/drink-glass-hand-party.jpg"
                bg="bg-primary-900"
              />
              <SlateCard
                className="col-12 md:col-6 lg:col-3 flex"
                title="Client 3"
                description="Client 3 info"
                image="https://c0.wallpaperflare.com/preview/484/389/259/drink-glass-hand-party.jpg"
                bg="bg-primary-900"
              />
              <SlateCard
                className="col-12 md:col-6 lg:col-3 flex"
                title="Client 4"
                description="Client 4 info"
                image="https://c0.wallpaperflare.com/preview/484/389/259/drink-glass-hand-party.jpg"
                bg="bg-primary-900"
              />
              <SlateCard
                className="col-12 md:col-6 lg:col-3 flex"
                title="Client 5"
                description="Client 5 info"
                image="https://c0.wallpaperflare.com/preview/484/389/259/drink-glass-hand-party.jpg"
                bg="bg-primary-900"
              />
              <SlateCard
                className="col-12 md:col-6 lg:col-3 flex"
                title="Client 6"
                description="Client 6 info"
                image="https://c0.wallpaperflare.com/preview/484/389/259/drink-glass-hand-party.jpg"
                bg="bg-primary-900"
              />
            </Grid>
          </div>
        </div>
      </section>

      <ContactSection curved bg={["purple-800", "indigo-700"]} gradient scrollRef={contactRef} />
    </>
  );
};

export default Clients;

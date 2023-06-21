import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import SlateCard from "../../components/cards/SlateCard/SlateCard";
import Grid from "../../components/grid/Grid";
import ContactSection from "../../components/sections/ContactSection";
import { common } from "../../locales/common";

const Clients = () => {
  const [selectedTag, setSelectedTag] = useState<string>(common.clientTags.showAll);
  const filteredClients =
    selectedTag === common.clientTags.showAll
      ? common.clients
      : common.clients.filter((client) => client.tags.includes(selectedTag));
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
            <div className="col-12 flex gap-4 text-2xl md:text-3xl font-bold mb-4 white-space-nowrap" style={{overflowX: "auto"}}>
              {Object.values(common.clientTags).map((tag) => (
                <div
                  key={tag}
                  className={`cursor-pointer hover:text-primary-300 ${
                    tag === selectedTag ? "text-primary" : "text-primary-500"
                  }`}
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </div>
              ))}
            </div>
            <Grid>
              {filteredClients.map((client) => (
                <SlateCard
                  key={client.slug}
                  link={`${common.paths.clients}/${client.slug}`}
                  className="col-12 md:col-6 lg:col-3 flex transition-opacity duration-500"
                  title={client.title}
                  description={client.subtitle}
                  image={client.image}
                  bg="bg-primary-900"
                />
              ))}
            </Grid>
          </div>
        </div>
      </section>

      <ContactSection curved bg={["purple-800", "indigo-700"]} gradient />
    </>
  );
};

export default Clients;

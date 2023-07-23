import { Tag } from "primereact/tag";
import { useEffect, useState } from "react";
import HeroSection from "../../components/HeroSection";
import SlateCard from "../../components/cards/SlateCard/SlateCard";
import Grid from "../../components/grid/Grid";
import ContactSection from "../../components/sections/ContactSection";
import { useLanguage } from "../../contexts/LanguageContext";
import { common } from "../../locales/common";
import { Client } from "../../types/types";

const Clients = () => {
  const { translations, language } = useLanguage();
  const [selectedTag, setSelectedTag] = useState<string>(translations.clientTags.showAll);
  
  useEffect(() => {
    setSelectedTag(translations.clientTags.showAll);
  }, [language]);

  const filteredClients =
    selectedTag === translations.clientTags.showAll
      ? translations.clients.cases
      : translations.clients.cases.filter((client: Client) => client.tags.includes(selectedTag));
  return (
    <>
      <HeroSection
        title={translations.paths.clients.label}
        description={translations.clients.description}
        // image={client.image}
        bg={["purple-900", "indigo-600"]}
        gradient
      />
      <section className="w-full">
        <div className="px-2 md:px-4 lg:px-6">
          <div className="container w-full m-auto pb-6">
            <div className="col-12 flex gap-2 font-bold mb-4 flex-wrap justify-content-center md:justify-content-start">
              {Object.values(translations.clientTags).map((tag: any) => (
                <Tag
                  key={tag}
                  value={tag}
                  rounded
                  onClick={() => setSelectedTag(tag)}
                  className={`bg-primary-800 text-xl px-4 cursor-pointer hover:text-primary-300 ${
                    tag === selectedTag ? "text-primary" : "text-primary-500"
                  }`}
                />
              ))}
            </div>
            <Grid>
              {filteredClients.map((client: Client) => (
                <SlateCard
                  key={client.slug}
                  link={client.active ? `${common.paths.clients}/${client.slug}` : undefined}
                  className="col-12 md:col-6 lg:col-4 flex transition-opacity duration-500"
                  title={client.title}
                  description={client.subtitle}
                  image={client.image}
                  bg={client.bg}
                />
              ))}
            </Grid>
          </div>
        </div>
      </section>

      <ContactSection curved bg={['purple-800', 'indigo-700']} gradient />
    </>
  );
};

export default Clients;

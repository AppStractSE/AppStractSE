import { useEffect, useState } from 'react';
import HeroSection from '../../components/HeroSection';
import SlateCard from '../../components/cards/SlateCard/SlateCard';
import Grid from '../../components/grid/Grid';
import ContactSection from '../../components/sections/ContactSection';
import { useLanguage } from '../../contexts/LanguageContext';
import { common } from '../../locales/common';
import { Client } from '../../types/types';

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
        bg={['purple-900', 'indigo-600']}
        gradient
        content={
          <>
            <div className="col-12 flex gap-4 font-bold mb-4 flex-wrap justify-content-center md:justify-content-start">
              {Object.values(translations.clientTags).map((tag: any) => (
                <div
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`text-2xl py-2 cursor-pointer ${
                    tag === selectedTag ? 'active-tag' : ''
                  }`}
                >{tag}</div>
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
          </>
        }
      />
      <ContactSection curved bg={['purple-800', 'indigo-700']} gradient />
    </>
  );
};

export default Clients;

import { useParams } from "react-router-dom";
import ContentSection from "../../components/ContentSection";
import HeroSection from "../../components/HeroSection";
import ContactSection from "../../components/sections/ContactSection";
import Text from "../../components/text/Text";
import { useLanguage } from "../../contexts/LanguageContext";
import { Client } from "../../types/types";
import NotFound from "../notfound/NotFound";
import { Button } from 'primereact/button';
import { Link, useParams } from 'react-router-dom';
import ContentSection from '../../components/ContentSection';
import SlateCard from '../../components/cards/SlateCard/SlateCard';
import ClientHero from '../../components/client/ClientHero';
import Grid from '../../components/grid/Grid';
import ContactSection from '../../components/sections/ContactSection';
import Text from '../../components/text/Text';
import { common } from '../../locales/common';
import { Client } from '../../types/types';
import NotFound from '../notfound/NotFound';

const ClientDetails = () => {
  const name = useParams().clientName;
  const { translations } = useLanguage();
  const client = translations.clients.cases.find((c: Client) => c.slug === name);
  if (!client) return <NotFound />;
  return (
    <>
      <HeroSection
        title={client.title}
        description={client.description}
        image={client.image}
        bg={["purple-900", "bluegray-600"]}
        gradient
        isClient
      />
      <ContentSection>
        <div className="flex-column-reverse flex-wrap flex md:flex-row">
          <div className="col-12 md:col-5">
            <Text size="h3" bold className="break-word mb-4">
              Skapar effektiv fastighetsadministration
            </Text>
            <Text size="h6" as="p" lineheight={3}>
              PropertEase är en innovativ plattform som förenklar och effektiviserar fastighetsadministrationen. Med
              våra verktyg och funktioner kan du hantera hyresgäster, underhållsärenden och transaktioner på ett smidigt
              sätt.
            </Text>
          </div>
          <div className="col-12 md:col-7 lg:col-6 lg:col-offset-1">
            <img
              className="border-round"
              width="100%"
              src="https://imageio.forbes.com/specials-images/imageserve/5c3f5df84bbe6f7020fc1a5e/0x0.jpg?format=jpg&width=1200"
            />
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="flex-wrap flex md:flex-row">
          <div className="col-12 md:col-6 lg:col-6">
            <img
              className="border-round"
              width="100%"
              src="https://imageio.forbes.com/specials-images/imageserve/5c3f5df84bbe6f7020fc1a5e/0x0.jpg?format=jpg&width=1200"
            />
          </div>
          <div className="col-12 md:col-6 lg:col-5 lg:col-offset-1">
            <Text size="h3" bold className="break-word mb-4">
              Optimerar fastighetsaffärer och transaktioner
            </Text>
            <Text size="h6" as="p" lineheight={3}>
              Med PropertEase kan du optimera dina fastighetsaffärer och transaktioner. Vår plattform erbjuder dig en
              sömlös upplevelse för att hantera försäljningar, förvaltning av dokumentation och genomföra juridiska
              processer, vilket sparar tid och minskar risken för felaktigheter.
            </Text>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="flex-column-reverse flex-wrap flex md:flex-row">
          <div className="col-12 md:col-5">
            <Text size="h3" bold className="break-word mb-4">
              Vårt uppdrag
            </Text>
            <Text size="h6" as="p" lineheight={3}>
              Vårt uppdrag är att skapa en plattform som förenklar och effektiviserar
              fastighetsadministrationen. Vi vill att du ska kunna hantera hyresgäster,
              underhållsärenden och transaktioner på ett smidigt sätt.
            </Text>
          </div>
          <div className="col-12 md:col-7 lg:col-6 lg:col-offset-1">
            <Text size="h3" bold className="break-word mb-4">
              Vårt uppdrag
            </Text>
            <Text size="h6" as="p" lineheight={3}>
              Vårt uppdrag är att skapa en plattform som förenklar och effektiviserar
              fastighetsadministrationen. Vi vill att du ska kunna hantera hyresgäster,
              underhållsärenden och transaktioner på ett smidigt sätt.
            </Text>
          </div>
        </div>
      </ContentSection>

      <ContentSection>
        <div className="col-12">
          <img
            className="border-round"
            width="100%"
            src="https://www.klarna.com/press-media/images/919/download_url-Klarna_Decacorn_1920x1080.jpg"
          />
        </div>
      </ContentSection>

      {/* <ContentSection>
        <div className="col-12">
          <Text size="h3" bold className="mb-4">
            Liknande cases & projekt
          </Text>
        </div>
        <Grid>
          {translations.clients.cases.map((client: Client) => (
            <SlateCard
              className="col-12 md:col-6 lg:col-3 flex transition-opacity duration-500"
              key={client.slug}
              title={client.title}
              description="Hejhej"
              image={client.image}
              link={`${common.paths.clients}/${client.slug}`}
            />
          ))}
        </Grid>
        <div className="col-12 justify-content-center flex">
          <Link to={common.paths.clients} className="decoration-none">
            <Button
              type="submit"
              label="Fler kunder & cases"
              className="my-3 shadow-3 hover:shadow-6 px-4 py-3 uppercase"
            />
          </Link>
        </div>
      </ContentSection> */}

      <ContactSection curved bg={['purple-800', 'indigo-700']} gradient />
    </>
  );
};

export default ClientDetails;

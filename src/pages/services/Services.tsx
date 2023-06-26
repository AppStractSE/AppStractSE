import Breadcrumbs from "../../components/Breadcrumbs";
import SlateCard from "../../components/cards/SlateCard/SlateCard";
import Grid from "../../components/grid/Grid";
import { useLanguage } from "../../contexts/LanguageContext";
import { Service } from "../../types/types";

const Services = () => {
  const { translations } = useLanguage();
  return (
    <>
      <section className="w-full">
        <div className="p-2 md:p-4 lg:p-6 bg-blue-800">
          <div className="container w-full m-auto pt-8 pb-2">
            <Breadcrumbs />
            <div className="flex-column-reverse flex-wrap flex lg:flex-row">
              <div className="col-12 lg:col-6 flex flex-column justify-content-between">
                <div className="block text-5xl break-word md:text-6xl lg:text-7xl font-bold line-height-1 my-4 lg:mt-0 lg:mb-4">
                {translations.home.serviceTitle}
                </div>
                <p className="mt-0 mb-4 text-700 line-height-3">
                  {translations.home.serviceDescription}
                </p>
              </div>
              <Grid>
                {translations.services.map((service: Service) => (
                  <SlateCard
                    key={service.title}
                    bg={service.bg}
                    gradient
                    className="col-12 md:col-4 flex"
                    title={service.title}
                    description={service.description}
                    image={service.image}
                    link={service.link}
                  />
                ))}
              </Grid>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="p-2 md:p-4 lg:p-6">
          <div className="container w-full m-auto pb-6">
            <div className="flex flex-wrap justify-content-center align-items-start">
              <div className="col-12 lg:col-6 text-3xl lg:text-4xl xl:text-5xl font-bold break-word">
                Från abstrakta idéer till konkreta lösningar
              </div>
              <div className="col-12 lg:col-6">
                <div className="text-xl font-bold mb-2">
                  Från vision till verklighet: Konkreta lösningar för din digitala framtid
                </div>
                <div className="text-1xl font">
                  Vi på Appstract förstår vikten av en stark och framgångsrik närvaro online. Genom
                  att kombinera vår expertis inom webbutveckling, design och digital strategi,
                  omsätter vi abstrakta idéer till konkreta lösningar. Vi arbetar tätt tillsammans
                  med dig för att förstå dina mål och skapa skräddarsydda lösningar som tar din
                  online-närvaro till nya höjder. Oavsett om du behöver en modern webbplats, en
                  avancerad e-handelsplattform eller en interaktiv webbapplikation, är vi redo att
                  ta itu med utmaningen och hjälpa dig att skapa en framgångsrik digital framtid.
                  Låt oss göra din vision till verklighet. Kontakta oss idag för att utforska
                  möjligheterna och ta det första steget mot framgång.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

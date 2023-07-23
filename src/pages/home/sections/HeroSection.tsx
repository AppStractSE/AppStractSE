import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import SlateCard from "../../../components/cards/SlateCard/SlateCard";
import Grid from "../../../components/grid/Grid";
import Text from "../../../components/text/Text";
import { useLanguage } from "../../../contexts/LanguageContext";
import { Service } from "../../../types/types";

interface Props {
  scrollToContact: () => void;
}

const HeroSection = ({ scrollToContact }: Props) => {
  const { translations } = useLanguage();
  return (
    <>
    
    <section className="w-full">
        <div className="p-2 md:p-4 lg:p-6 bg-blue-800" style={{backgroundImage: "linear-gradient(69deg, var(--purple-900), var(--indigo-600))"}}>
          <div className="container w-full m-auto pb-6">
            <div className="col-12" style={{paddingTop: 250}}>
              <Text size="h1" as="h1">
                Webbyrå i Borås & Skövde
              </Text>
            </div>
            <div className="col-12 sm:col-10 md:col-6">
              <Text size="h6" lineheight={3} className="my-4">
                {translations.home.description}
              </Text>
            </div>
            <div className="col-12 flex gap-4 md:flex-row flex-column" style={{marginBottom: 200}}>
              <div>
                <Button
                  onClick={scrollToContact}
                  label={translations.buttons.contact}
                  type="button"
                  style={{ minWidth: 200 }}
                  className="bg-blue-500 border-blue-500 shadow-3 hover:shadow-5 hover:bg-blue-700 hover:border-blue-700 text-white hover:text-yellow-200 text-lg p-3"
                />
              </div>
              <div>
                <Link to={translations.paths.services.link} className="decoration-none">
                  <Button
                    label={translations.buttons.help}
                    type="button"
                    style={{ minWidth: 200 }}
                    className="bg-primary-800 border-primary-800 shadow-5 hover:shadow-5 hover:bg-primary-900 hover:border-primary-900 text-white hover:text-yellow-200 text-lg p-3"
                  >
                  </Button>
                </Link>
              </div>
            </div>
            <Grid>
            {translations.services.map((service: Service) => (
              <SlateCard
                key={service.title}
                className="col-12 md:col-6 lg:col-4 flex"
                bg={service.bg}
                gradient
                title={service.title}
                description={service.description}
                image={service.image}
                link={service.link}
              />
            ))}
          </Grid>
        </div>
      </div>
      </section>
    {/* <section className="w-full">
      <div
        className="flex relative align-items-center text-center sm:text-left p-2 md:p-4 lg:p-6 h-screen bg-cover bg-center bg-no-repeat bg-purple-700"
      >
        <div className="absolute backdrop z-1" />
        <div className="container flex w-full m-auto">
          <div className="col relative z-2">
            <div className="hidden md:py-8" />
            <div className="text-center md:text-left block md:flex align-items-center gap-2 md:text-1xl lg:text-3xl">
              <Text size="h2" as="h1" className="font-bold">
                {translations.home.phraseTitle}
              </Text>
              <Text size="h2" as="h1">
                <TypeWriter phrases={translations.home.phrases} />
              </Text>
            </div>
            <div className="col-offset-1 col-10 md:col-6 md:col-offset-0">
              <Text size="h6" lineheight={3} className="text-center md:text-left my-4">
                {translations.home.description}
              </Text>
            </div>
            <div className="flex gap-4 md:flex-row flex-column align-items-center justify-content-center md:justify-content-start">
              <div>
                <Button
                  onClick={scrollToContact}
                  label={translations.buttons.contact}
                  type="button"
                  style={{ minWidth: 250 }}
                  className="uppercase bg-blue-500 border-blue-500 shadow-3 hover:shadow-5 hover:bg-blue-700 hover:border-blue-700 text-white hover:text-yellow-200 text-md p-3"
                />
              </div>
              <div>
                <Link to={translations.paths.services.link} className="decoration-none">
                  <Button
                    label={translations.buttons.help}
                    type="button"
                    style={{ minWidth: 250 }}
                    className="uppercase bg-primary-800 border-primary-800 shadow-5 hover:shadow-5 hover:bg-primary-900 hover:border-primary-900 text-white hover:text-yellow-200 text-md p-3"
                  >
                    <HiArrowLongRight className="text-xl" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:py-8"></div>
          </div>
        </div>
      </div>
      </section> */}
      </>
  );
};

export default HeroSection;

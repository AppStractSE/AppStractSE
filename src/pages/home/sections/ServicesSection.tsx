import SlateCard from "../../../components/cards/SlateCard/SlateCard";
import Grid from "../../../components/grid/Grid";
import { useLanguage } from "../../../contexts/LanguageContext";

const ServicesSection = () => {
  interface Service {
    title: string;
    description: string;
    image: string;
    link: string;
  }
  const { translations } = useLanguage();
  return (
    <section className="w-full">
      <div className="p-2 md:p-4 lg:p-6 text-800">
        <div className="container w-full m-auto pb-6">
          <div className="col-12 md:col-6 text-center sm:text-left flex align-items-center ">
            <div>
              <span className="block text-6xl font-bold mb-1">
                {translations.homePage.serviceTitle}
              </span>
              <p className="mt-0 mb-4 text-700 line-height-3">
                {translations.homePage.serviceDescription}
              </p>
            </div>
          </div>
          <Grid>
            {translations.services.map((service: Service) => (
              <SlateCard
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
    </section>
  );
};

export default ServicesSection;

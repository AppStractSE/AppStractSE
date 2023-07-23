import SlateCard from '../../../components/cards/SlateCard/SlateCard';
import Grid from '../../../components/grid/Grid';
import { useLanguage } from '../../../contexts/LanguageContext';
import Text from '../../../components/text/Text';
import { Service } from '../../../types/types';

const ServicesSection = () => {
  const { translations } = useLanguage();
  return (
    <section className="w-full">
      <div className="p-2 md:p-4 lg:p-6">
        <div className="container w-full m-auto pb-6">
          <div className="col-12 md:col-6 text-center sm:text-left flex align-items-center">
            <div>
              <Text size="h2" bold className="mb-4">
                {translations.home.serviceTitle}
              </Text>
              <Text size="p" className="mb-4 text-800">
                {translations.home.serviceDescription}
              </Text>
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
  );
};

export default ServicesSection;

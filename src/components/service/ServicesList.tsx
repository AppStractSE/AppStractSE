import { useLanguage } from '../../contexts/LanguageContext';
import { Service } from '../../types/types';
import BulletList from '../bulletlist/BulletList';
import SlateCard from '../cards/SlateCard/SlateCard';

const ServicesList = () => {
  const { translations } = useLanguage();
  return (
    <div className="container w-full m-auto">
      <BulletList>
        {translations.services.map((service: Service) => (
          <SlateCard
            key={service.title}
            className="col-11 sm:col-8 md:col-7 lg:col-4 flex"
            bg={service.bg}
            gradient
            title={service.title}
            description={service.description}
            image={service.image}
            link={service.link}
          />
        ))}
      </BulletList>
    </div>
  );
};

export default ServicesList;

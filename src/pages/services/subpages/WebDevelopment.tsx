import ContactSection from '../../../components/sections/ContactSection';
import ServiceHero from '../../../components/service/ServiceHero';
import ServiceIntro from '../../../components/service/ServiceIntro';
import ServiceSteps from '../../../components/service/ServiceSteps';
import { useLanguage } from '../../../contexts/LanguageContext';

const WebDevelopment = () => {
  const { translations } = useLanguage();

  return (
    <>
      <ServiceHero
        bg={['blue-800', 'blue-600']}
        gradient
        title={translations.paths.webDevelopment.label}
        description={translations.servicepages.webdevelopment.herodescription}
      />
      <ServiceIntro
        bg="bg-bluegray-900"
        title={translations.servicepages.webdevelopment.introtitle}
        subtitle={translations.servicepages.webdevelopment.introsubtitle}
        description={translations.servicepages.webdevelopment.introdescription}
      />
      <ServiceSteps parts={translations.servicepages.webdevelopment.parts} />
      <ContactSection curved gradient bg={['blue-800', 'blue-600']} />
    </>
  );
};

export default WebDevelopment;

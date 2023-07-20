import ContactSection from '../../../components/sections/ContactSection';
import ServiceHero from '../../../components/service/ServiceHero';
import ServiceIntro from '../../../components/service/ServiceIntro';
import ServiceSteps from '../../../components/service/ServiceSteps';
import { useLanguage } from '../../../contexts/LanguageContext';

const AppDevelopment = () => {
  const { translations } = useLanguage();
  return (
    <>
      <ServiceHero
        bg={['cyan-800', 'teal-600']}
        gradient
        title={translations.paths.appDevelopment.label}
        description={translations.servicepages.appdevelopment.herodescription}
      />
      <ServiceIntro
        bg="bg-bluegray-900"
        title={translations.servicepages.appdevelopment.introtitle}
        subtitle={translations.servicepages.appdevelopment.introsubtitle}
        description={translations.servicepages.appdevelopment.introdescription}
      />
      <ServiceSteps parts={translations.servicepages.appdevelopment.parts} />
      <ContactSection curved gradient bg={['cyan-800', 'teal-600']} />
    </>
  );
};

export default AppDevelopment;

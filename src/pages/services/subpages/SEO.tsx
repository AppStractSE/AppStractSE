import ContactSection from '../../../components/sections/ContactSection';
import ServiceHero from '../../../components/service/ServiceHero';
import ServiceIntro from '../../../components/service/ServiceIntro';
import ServiceSteps from '../../../components/service/ServiceSteps';
import { useLanguage } from '../../../contexts/LanguageContext';

const SEO = () => {
  const { translations } = useLanguage();
  return (
    <>
      <ServiceHero
        bg={['bluegray-800', 'indigo-600']}
        gradient
        title={translations.paths.seo.label}
        description={translations.servicepages.seo.herodescription}
      />
      <ServiceIntro
        bg="bg-bluegray-900"
        title={translations.servicepages.seo.introtitle}
        subtitle={translations.servicepages.seo.introsubtitle}
        description={translations.servicepages.seo.introdescription}
      />
      <ServiceSteps parts={translations.servicepages.seo.parts} />
      <ContactSection curved gradient bg={['bluegray-800', 'indigo-600']} />
    </>
  );
};

export default SEO;

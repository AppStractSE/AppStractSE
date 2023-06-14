import ServiceHero from "../../../components/service/ServiceHero";
import ServiceIntro from "../../../components/service/ServiceIntro";
import ServiceSteps from "../../../components/service/ServiceSteps";
import { useLanguage } from "../../../contexts/LanguageContext";

const SEO = () => {
  const { translations } = useLanguage();
  return (
    <>
      <ServiceHero
        title={translations.paths.seo.label}
        description={translations.servicepages.seo.herodescription}
      />
      <ServiceIntro
        title={translations.servicepages.seo.introtitle}
        subtitle={translations.servicepages.seo.introsubtitle}
        description={translations.servicepages.seo.introdescription}
      />
      <ServiceSteps parts={translations.servicepages.seo.parts} />
    </>
  );
};

export default SEO;

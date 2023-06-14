import ServiceHero from "../../../components/service/ServiceHero";
import ServiceIntro from "../../../components/service/ServiceIntro";
import ServiceSteps from "../../../components/service/ServiceSteps";
import { useLanguage } from "../../../contexts/LanguageContext";

const WebDevelopment = () => {
  const { translations } = useLanguage();
  return (
    <>
      <ServiceHero
        title={translations.paths.webDevelopment.label}
        description={translations.servicepages.webdevelopment.herodescription}
      />
      <ServiceIntro
        title={translations.servicepages.webdevelopment.introtitle}
        subtitle={translations.servicepages.webdevelopment.introsubtitle}
        description={translations.servicepages.webdevelopment.introdescription}
      />
      <ServiceSteps parts={translations.servicepages.webdevelopment.parts} />
    </>
  );
};

export default WebDevelopment;

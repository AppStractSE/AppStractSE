import ServiceHero from "../../../components/service/ServiceHero";
import ServiceIntro from "../../../components/service/ServiceIntro";
import ServiceSteps from "../../../components/service/ServiceSteps";
import { useLanguage } from "../../../contexts/LanguageContext";

const AppDevelopment = () => {
  const { translations } = useLanguage();
  return (
    <>
      <ServiceHero
        title={translations.paths.appDevelopment.label}
        description={translations.servicepages.appdevelopment.herodescription}
      />
      <ServiceIntro
        title={translations.servicepages.appdevelopment.introtitle}
        subtitle={translations.servicepages.appdevelopment.introsubtitle}
        description={translations.servicepages.appdevelopment.introdescription}
      />
      <ServiceSteps parts={translations.servicepages.appdevelopment.parts} />
    </>
  );
};

export default AppDevelopment;

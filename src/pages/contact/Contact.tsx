import HeroSection from '../../components/HeroSection';
import ContactSection from '../../components/sections/ContactSection';
import { useLanguage } from '../../contexts/LanguageContext';

const Contact = () => {
  const { translations } = useLanguage();

  return (
    <>
      <HeroSection
        title={translations.contact.title}
        description={translations.contact.description}
        bg={["indigo-900", "purple-500"]}
        gradient
      />
      <ContactSection curved bg={['purple-800', 'indigo-700']} gradient />
    </>
  );
};

export default Contact;

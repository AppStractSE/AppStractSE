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
        bg={['indigo-900', 'purple-500']}
        gradient
      />
      <ContactSection bg={['indigo-800']} />
      <ContactSection curved bg={['bg-dark', 'indigo-900']} gradient />
    </>
  );
};

export default Contact;

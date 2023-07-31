import HeroSection from '../../components/HeroSection';
import ContactSection from '../../components/sections/ContactSection';
import Text from '../../components/text/Text';
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
        content={
          <>
            <div className="col-12 md:col-8 flex flex-wrap">
              {translations.contact.links.map((link: any) => (
                <div className="p-0 col-12 sm:col-6 flex flex-column gap-2 mb-4">
                  <Text size="h4">{link.title}</Text>
                  {link.addresses.map((address: any) => (
                    <div className="flex align-items-center gap-2">
                      <a
                        href={address.link}
                        target="_blank"
                        className="decoration-none transition-slow text-primary hover:text-orange-300 font-bold"
                      >
                        <div className="flex align-items-center gap-2">
                          <address.icon size={24} />
                          <Text size="p" className="border-bottom-2">
                            {address.text}
                          </Text>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </>
        }
      />
      <ContactSection curved bg={['bg-dark', 'indigo-900']} gradient />
    </>
  );
};

export default Contact;

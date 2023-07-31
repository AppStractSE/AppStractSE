import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import Text from '../../../../components/text/Text';
import { useLanguage } from '../../../../contexts/LanguageContext';

interface Props {
  scrollToContact: () => void;
}

const HeroHeader = ({ scrollToContact }: Props) => {
  const { translations } = useLanguage();
  return (
    <div className="container w-full m-auto hero-header">
      <div className="col-12">
        <Text size="h1" as="h1">
          {translations.home.title}
        </Text>
      </div>
      <div className="col-12 sm:col-10 md:col-6">
        <Text size="h5" as="h2" lineheight={3} className="my-4">
          {translations.home.description}
        </Text>
      </div>
      <div className="col-12 flex gap-3 md:flex-row flex-column hero-content">
        <div>
          <Button
            onClick={scrollToContact}
            label={translations.buttons.contact}
            type="button"
            style={{ minWidth: 200 }}
            className="bg-black shadow-3 text-white border-transparent hover:shadow-5 hover:bg-yellow-500 hover:text-0 text-lg p-3"
          />
        </div>
        <div>
          <Link to={translations.paths.services.link} className="decoration-none">
            <Button
              label={translations.buttons.help}
              type="button"
              style={{ minWidth: 200 }}
              className="bg-white shadow-3 text-0 border-transparent hover:shadow-5 hover:bg-red-500 hover:text-white text-lg p-3"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;

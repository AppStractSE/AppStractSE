import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../contexts/LanguageContext";
import TypeWriter from "../../../utils/TypeWriter";

const HeroSection = () => {
  const { translations } = useLanguage();
  return (
    <section className="w-full">
      <div
        className="flex relative align-items-center text-center sm:text-left p-2 md:p-4 lg:p-6 h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://wallpaperaccess.com/full/1657858.jpg')`,
        }}
      >
        <div className="absolute backdrop z-1" />
        <div className="container flex w-full m-auto">
          <div className="col relative z-2">
            <div className="hidden md:py-8" />
            <div className="text-center md:text-left block md:flex align-items-center gap-2 md:text-1xl lg:text-3xl">
              <h1 className="font-bold m-0">{translations.home.phraseTitle}</h1>
              <h1 className="m-0">
                <TypeWriter phrases={translations.home.phrases} />
              </h1>
            </div>
            <p className="text-center md:text-left my-4 line-height-3 col-12 md:col-6 p-0">
              {translations.home.description}
            </p>
            <div className="flex gap-4 md:flex-row flex-column align-items-center justify-content-center md:justify-content-start">
              <div>
                <Button
                  onClick={() => (location.href = "#contact")}
                  label={translations.buttons.contact}
                  type="button"
                  style={{ minWidth: 250 }}
                  className="uppercase bg-blue-500 border-blue-500 shadow-3 hover:shadow-5 hover:bg-blue-700 hover:border-blue-700 text-white hover:text-yellow-200 text-md p-3"
                />
              </div>
              <div>
                <Link to={translations.paths.services.link}>
                  <Button
                    label={translations.buttons.help}
                    type="button"
                    style={{ minWidth: 250 }}
                    className="uppercase bg-primary-800 border-primary-800 shadow-5 hover:shadow-5 hover:bg-primary-900 hover:border-primary-900 text-white hover:text-yellow-200 text-md p-3"
                  />
                </Link>
              </div>
            </div>
            <div className="hidden md:py-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

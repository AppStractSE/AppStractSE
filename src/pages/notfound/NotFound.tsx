import { useLanguage } from "../../contexts/LanguageContext";

const NotFound = () => {
  const { translations } = useLanguage();
  return (
    <section className="w-full">
      <div className="md:p-4 lg:p-6 bg-bluegray-900 curved-bg">
        <div className="container w-full m-auto pb-6">
          <div className="py-6"></div>
          <div className="col-12 md:col-6 text-center md:text-left py-4">
            <h1 className="text-6xl font-bold">{translations.notFound.title}</h1>
            <h2 className="text-2xl font-bold" style={{ whiteSpace: "pre-line" }}>
              {translations.notFound.description}
            </h2>
          </div>
          <div className="py-6"></div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

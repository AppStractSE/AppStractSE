interface Props {
  title: string;
  subtitle: string;
  description: string;
}

const ServiceIntro = ({ title, subtitle, description }: Props) => {
  return (
    <section className="w-full my-6 md:my-8">
      <div className="p-2 md:p-4 lg:px-6">
        <div className="container m-auto w-full">
          <div className="flex flex-wrap justify-content-center align-items-start">
            <div className="col-12 lg:col-6 text-3xl lg:text-4xl xl:text-5xl font-bold break-word">
              {title}
            </div>
            <div className="col-12 lg:col-6">
              <div className="text-xl font-bold mb-2">{subtitle}</div>
              <div className="text-1xl font">{description}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntro;

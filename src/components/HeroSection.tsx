import Breadcrumbs from "./Breadcrumbs";
import Text from "./text/Text";

interface Props {
  bg?: string[];
  gradient?: boolean;
  title: string;
  description: string;
  image?: string;
  isClient?: boolean;
}

const HeroSection = ({ bg, gradient, title, description, image, isClient }: Props) => {
  return (
    <section className="w-full">
      <div
        className={`p-2 md:p-4 lg:p-6 ${bg ? `bg-${bg[0]}` : 'bg-bluegray-900'}`}
        style={{
          backgroundImage:
            gradient && bg && bg.length > 1 ? `linear-gradient(0deg, var(--${bg[0]}), var(--${bg[1]}))` : '',
        }}
      >
        <div className="container w-full m-auto pt-8 pb-2">
          <Breadcrumbs client={isClient ? title : undefined} />
          <div className="flex-column-reverse flex-wrap flex md:flex-row">
            <div className="col-12 md:col-8 flex flex-column justify-content-between">
              <div>
                <Text size="h1" bold className="break-word my-4 lg:mt-0 lg:mb-4">
                  {title}
                </Text>
                <Text size="h5" as="h2" lineheight={3}>
                  {description}
                </Text>
              </div>
            </div>
            <div className="col-12 md:col-3 md:col-offset-1">
              <img width="100%" src={image} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

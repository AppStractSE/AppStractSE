import { Client } from "../../pages/clients-and-cases/ClientDetails";
import Breadcrumbs from "../Breadcrumbs";

interface Props {
  scrollRef?: React.RefObject<HTMLElement>;
  bg?: string[];
  curved?: boolean;
  gradient?: boolean;
  client: Client;
}

const ClientHero = ({ scrollRef, bg, curved, gradient, client }: Props) => {
  return (
    <section className={`w-full ${curved && "curved-bg overflow-hidden"}`} ref={scrollRef}>
      <div
        className={`p-2 md:p-4 lg:p-6 ${bg ? `bg-${bg[0]}` : "bg-bluegray-900"}`}
        style={{
          backgroundImage:
            gradient && bg && bg.length > 1
              ? `linear-gradient(69deg, var(--${bg[0]}), var(--${bg[1]}))`
              : undefined,
        }}
      >
        <div className="container w-full m-auto pt-8 pb-2">
          <Breadcrumbs />
          <div className="flex-column-reverse flex-wrap flex md:flex-row">
            <div className="col-12 md:col-8 flex flex-column justify-content-between">
              <div>
                <div className="block text-5xl break-word md:text-6xl lg:text-7xl font-bold line-height-1 my-4 lg:mt-0 lg:mb-4">
                  {client.title}
                </div>
                <div className="text-2xl md:text-3xl mt-0 line-height-3">{client.description}</div>
              </div>
            </div>
            <div className="col-12 md:col-3 md:col-offset-1">
              <img width="100%" src={client.logo} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientHero;

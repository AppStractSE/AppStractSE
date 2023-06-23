import { Client } from "../../types/types";
import Breadcrumbs from "../Breadcrumbs";
import Text from "../text/Text";

interface Props {
  scrollRef?: React.RefObject<HTMLElement>;
  bg?: string[];
  curved?: boolean;
  gradient?: boolean;
  client: Client;
}

const ClientHero = ({ scrollRef, bg, curved, gradient, client }: Props) => {
  return (
    <section className={`w-full ${curved ? "curved-bg overflow-hidden" : ""}`} ref={scrollRef}>
      <div
        className={`p-2 md:p-4 lg:p-6 ${bg ? `bg-${bg[0]}` : "bg-bluegray-900"}`}
        style={{
          backgroundImage:
            gradient && bg && bg.length > 1
              ? `linear-gradient(69deg, var(--${bg[0]}), var(--${bg[1]}))`
              : "",
        }}
      >
        <div className="container w-full m-auto pt-8 pb-2">
          <Breadcrumbs client={client} />
          <div className="flex-column-reverse flex-wrap flex md:flex-row">
            <div className="col-12 md:col-8 flex flex-column justify-content-between">
              <div>
                <Text size="h1" bold className="break-word my-4 lg:mt-0 lg:mb-4">
                  {client.title}
                </Text>
                <Text size="h5" as="h2" lineheight={4}>
                  {client.description}
                </Text>
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

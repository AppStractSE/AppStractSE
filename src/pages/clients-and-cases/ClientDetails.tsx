import { useParams } from "react-router-dom";
import ClientHero from "../../components/client/ClientHero";
import ContactSection from "../../components/sections/ContactSection";
import { common } from "../../locales/common";

export interface Client {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  logo: string;
  link: string;
}

const ClientDetails = () => {
  const name = useParams().clientName;
  const client = common.clients.find((c) => c.slug === name) as Client;
  return (
    <>
      <ClientHero bg={["purple-900", "bluegray-600"]} gradient client={client} />
      <section className={`w-full`}>
        <div className={`p-2 md:p-4 lg:p-6`}>
          <div className="container w-full m-auto py-4">
            <div className="flex-column-reverse flex-wrap flex md:flex-row">
              <div className="col-12 md:col-5 flex flex-column justify-content-between">
                <div>
                  <div className="block text-3xl break-word md:text-4xl lg:text-5xl font-bold line-height-1 my-4 lg:mt-0 lg:mb-4">
                    En helhetslösning från västkusten till hela världen
                  </div>
                  <div className="text-xl md:text-2xl mt-0 line-height-2">{client.description}</div>
                </div>
              </div>
              <div className="col-12 md:col-7 lg:col-5 lg:col-offset-2">
                <img
                  className="border-round"
                  width="100%"
                  src="https://imageio.forbes.com/specials-images/imageserve/5c3f5df84bbe6f7020fc1a5e/0x0.jpg?format=jpg&width=1200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`w-full`}>
        <div className={`px-2 md:px-4 lg:px-6`}>
          <div className="container w-full m-auto">
            <div className="flex-wrap flex md:flex-row">
              <div className="col-12 md:col-6 lg:col-5">
                <img
                  className="border-round"
                  width="100%"
                  src="https://imageio.forbes.com/specials-images/imageserve/5c3f5df84bbe6f7020fc1a5e/0x0.jpg?format=jpg&width=1200"
                />
              </div>
              <div className="col-12 md:col-6 lg:col-5 lg:col-offset-2 flex flex-column justify-content-between">
                <div>
                  <div className="block text-3xl break-word md:text-4xl lg:text-5xl font-bold line-height-1 lg:mt-0 lg:mb-4">
                    En helhetslösning från västkusten till hela världen
                  </div>
                  <div className="text-xl md:text-2xl mt-0 line-height-2">{client.description}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`w-full`}>
        <div className={`p-2 md:p-4 lg:p-6`}>
          <div className="container w-full m-auto py-4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ">
            <div className="col-12">
              <img
                className="border-round"
                width="100%"
                src="https://www.klarna.com/press-media/images/919/download_url-Klarna_Decacorn_1920x1080.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactSection curved bg={["purple-800", "indigo-700"]} gradient />
    </>
  );
};

export default ClientDetails;

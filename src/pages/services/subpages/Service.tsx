import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useRef, useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import ContactForm from "../../../components/ContactForm";
import SlateCard from "../../../components/cards/SlateCard/SlateCard";
import Grid from "../../../components/grid/Grid";
import { useLanguage } from "../../../contexts/LanguageContext";
import { ServicePagePart } from "../../../types/types";

const Service = () => {
  const { translations } = useLanguage();
  const [modalVisible, setModalVisible] = useState(false);
  const scrollRefs = useRef<HTMLDivElement[]>([]);
  const handleRefScroll = (index: number) => {
    if (scrollRefs.current[index]) {
      const contentContainer = scrollRefs.current[index];

      if (contentContainer) {
        const topOffset =
          contentContainer.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: topOffset - 50, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <section className="w-full">
        <div className="p-2 md:p-4 lg:p-6 bg-blue-800">
          <div className="container w-full m-auto pt-8 pb-2">
            <Breadcrumbs />
            <div className="flex-column-reverse flex-wrap flex lg:flex-row">
              <div className="col-12 lg:col-6 flex flex-column justify-content-between">
                <div>
                  <div className="block text-5xl break-word md:text-6xl lg:text-7xl font-bold line-height-1 my-4 lg:mt-0 lg:mb-4">
                    Webbutveckling
                  </div>
                  <div className="text-2xl md:text-3xl mt-0 line-height-3">
                    {translations.servicepages.webdevelopment.herodescription}
                  </div>
                </div>
                <div className="mt-8 text-center lg:text-left">
                  <Button
                    label={translations.buttons.contactme}
                    type="button"
                    style={{ minWidth: 250 }}
                    className="uppercase bg-orange-500 border-orange-500 shadow-3 hover:shadow-5 hover:bg-orange-700 hover:border-orange-700 text-white text-md p-3"
                    onClick={() => setModalVisible(!modalVisible)}
                  />
                </div>
              </div>
              <div className="col-12 lg:col-6 ">
                <img
                  className="border-round shadow-5"
                  width="100%"
                  src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full my-6 md:my-8">
        <div className="p-2 md:p-4 lg:px-6">
          <div className="container m-auto w-full">
            <div className="flex flex-wrap justify-content-center align-items-start">
              <div className="col-12 lg:col-6 text-3xl lg:text-4xl xl:text-5xl font-bold break-word">
                {translations.servicepages.webdevelopment.introtitle}
              </div>
              <div className="col-12 lg:col-6">
                <div className="text-xl font-bold mb-2">
                  {translations.servicepages.webdevelopment.introsubtitle}
                </div>
                <div className="text-1xl font">
                  {translations.servicepages.webdevelopment.introdescription}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="p-2 md:p-4 lg:p-6 bg-bluegray-900">
          <div className="container m-auto w-full">
            <Grid>
              {translations.servicepages.webdevelopment.parts.map(
                (part: ServicePagePart, index: number) => (
                  <SlateCard
                    key={index}
                    className="col-12 md:col-6 lg:col-3 flex"
                    title={part.title}
                    description={part.hovertext}
                    image={part.image}
                    bg={part.background}
                    onClick={() => handleRefScroll(index)}
                  />
                )
              )}
            </Grid>
          </div>
        </div>
      </section>
      <section className="w-full">
        {translations.servicepages.webdevelopment.parts.map(
          (part: ServicePagePart, index: number) => (
            <div
              className="p-2 md:p-4 lg:p-6 bg-bluegray-900"
              key={index}
              ref={(ref) => {
                if (ref) {
                  scrollRefs.current[index] = ref;
                }
              }}
            >
              <div className="container m-auto w-full">
                <div className="flex flex-wrap justify-content-center align-items-start">
                  <div className="col-12 lg:col-5 text-2xl lg:text-4xl xl:text-5xl font-bold break-word">
                    <div>{part.title}</div>
                    <div className={`mt-2 pt-1 ${part.background} w-10rem`} />
                  </div>
                  <div className="col-12 lg:col-7">
                    <div className="text-xl font-bold mb-2">
                      {part.subtitle}
                    </div>
                    <div
                      className="text-1xl font"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {part.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </section>
      <Dialog
        contentClassName="p-0 sm:p-2 flex justify-content-center align-items-center bg-dialog"
        headerClassName="p-2 bg-dialog"
        dismissableMask={true}
        modal={true}
        draggable={false}
        blockScroll={true}
        resizable={false}
        className="fadein scaleout origin-top border-none shadow-3 w-screen sm:max-w-max h-screen sm:h-auto"
        visible={modalVisible}
        onHide={() => setModalVisible(false)}
      >
        <ContactForm
          openPolicyInNewTab={true}
          inModalOnSend={() => setModalVisible(!modalVisible)}
          location={window.location.pathname.split("/")[2]}
        />
      </Dialog>
    </>
  );
};

export default Service;

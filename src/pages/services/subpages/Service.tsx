import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import ContactForm from "../../../components/ContactForm";

const Service = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <section className="w-full">
        <div className="p-2 md:p-4 lg:p-6 bg-blue-800">
          <div className="container w-full m-auto pt-8 pb-2">
            <Breadcrumbs />
            <div className="col-12 md:col-6 mb-4">
              <div>
                <div className="block text-5xl md:text-7xl font-bold line-height-1 mb-4">
                  Webbutveckling
                </div>
                <div className="text-2xl mt-0 mb-4 line-height-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta,
                  tincidunt turpis at, interdum tortor. Vestibulum ante ipsum primis in faucibus
                  orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Nulla facilisi.
                  Nulla facilisi. Nulla facilisi. Nulla facilisi.
                </div>
              </div>
            </div>
            <div className="col-12 md:col-6 text-center md:text-right">
              <Button
                label="Kontakta mig"
                type="button"
                style={{ minWidth: 250 }}
                className="uppercase bg-blue-500 border-blue-500 shadow-3 hover:shadow-5 hover:bg-blue-700 hover:border-blue-700 text-white text-md p-3"
                onClick={() => setModalVisible(!modalVisible)}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="p-2 md:p-4 lg:px-6">
          <div className="container m-auto w-full">
            <div className="flex flex-wrap justify-content-center align-items-start">
              <div className="col-12 lg:col-6 text-4xl font-bold break-word">
                Från idé till färdig produkt
              </div>

              <div className="col-12 lg:col-6">
                <div className="text-xl font-bold mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta,
                </div>
                <div className="text-1xl font">
                  Genom noggrann utveckling och nära samarbete med dig som kund, skapar vi en
                  webbplats som är anpassad efter dina behov och önskemål.
                  <br />
                  Med vårt stora intresse för webbutveckling och design, ser vi till att din
                  webbplats blir både snygg och funktionell.
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <ContactForm openPolicyInNewTab={true} />
      </Dialog>
    </>
  );
};

export default Service;

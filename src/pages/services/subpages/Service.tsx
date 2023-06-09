import { Button } from "primereact/button";
import Breadcrumbs from "../../../components/Breadcrumbs";

const Service = () => {
  return (
    <>
      <section className="w-full">
        <div className="p-2 md:p-4 lg:p-6 bg-blue-800">
          <div className="container w-full m-auto pt-8 pb-4">
            <Breadcrumbs />
            <div className="col-12 md:col-8 mb-8">
              <div>
                <div className="block text-6xl font-bold line-height-1 mb-4">Webbutveckling</div>
                <div className="text-2xl mt-0 mb-4 line-height-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta,
                  tincidunt turpis at, interdum tortor. Vestibulum ante ipsum primis in faucibus
                  orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Nulla facilisi.
                  Nulla facilisi. Nulla facilisi. Nulla facilisi.
                </div>
              </div>
            </div>
            <div className="col-12 md:col-8 text-right">
              <Button
                label="Kontakta mig"
                type="button"
                style={{ minWidth: 250 }}
                className="uppercase bg-blue-500 border-blue-500 shadow-3 hover:shadow-5 hover:bg-blue-700 hover:border-blue-700 text-white text-md p-3"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="w-full -translate-y-50">
        <div className="p-2 md:p-4 lg:px-6">
          <div className="container m-auto w-full col-12">
            <div>
              <Button
                label="Kontakta mig"
                type="button"
                style={{ minWidth: 250 }}
                className="uppercase bg-purple-600 border-purple-600 shadow-3 hover:shadow-5 hover:bg-purple-700 hover:border-purple-700 text-white text-md p-3"
              />
            </div>
          </div>
        </div>
      </section> */}
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
    </>
  );
};

export default Service;

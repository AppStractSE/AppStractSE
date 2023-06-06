import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="text-white p-2 md:p-4 md:pb-2 lg:p-6 lg:pb-2">
        <div className="container m-auto px-4 md:px-0">
          <div className="flex flex-wrap md:flex-row-reverse md:justify-content-start mb-2">
            <div className="col-12 md:col-6 flex my-4 md:my-0 justify-content-end gap-2 md:gap-1">
              <a href="https://www.instagram.com/appstract.se/" target="_blank">
                <AiOutlineInstagram
                  className="text-primary hover:text-white cursor-pointer"
                  size={42}
                />
              </a>
              <a href="https://www.instagram.com/appstract.se/" target="_blank">
                <RiMessengerLine
                  className="text-primary hover:text-white cursor-pointer"
                  size={42}
                />
              </a>
              <a
                href="mailto:hello@appstract.se?subject=Kontaktförfrågan&priority=high"
                target="_blank"
              >
                <AiOutlineMail className="text-primary hover:text-white cursor-pointer" size={42} />
              </a>
            </div>
            <div className="col-12 flex md:col-6 justify-content-between">
              <div className="col-6 md:col-4 flex justify-content-center md:block">
                <div className="">
                  <div className="mb-3 text-primary font-bold">Links</div>
                  <div>Riktigt lång lääääänk</div>
                  <div>Länk 2</div>
                  <div>Länk 3</div>
                  <div>Länk 4</div>
                  <div>Länk 5</div>
                  <div>Länk 6</div>
                </div>
              </div>
              <div className="col-6 md:col-4 flex justify-content-center md:block">
                <div className="">
                  <div className="mb-3 text-primary font-bold">Länkar</div>
                  <div>Länk 1 till ditåt</div>
                  <div>Länk 2</div>
                  <div>Länk 3</div>
                  <div>Länk 4</div>
                </div>
              </div>
            </div>
          </div>
          <p className="col-12 md:col-6 text-right md:text-left text-xs mb-0">© 2023 Appstract</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

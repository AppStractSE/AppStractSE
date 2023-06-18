import Socials from "./socials/Socials";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="text-white p-2 md:p-4 md:pb-2 lg:p-6 lg:pb-2">
        <div className="container m-auto px-4 md:px-0">
          <div className="flex flex-wrap md:flex-row-reverse md:justify-content-start mb-2">
            <div className="col-12 md:col-6 flex my-4 md:my-0 justify-content-end gap-2 md:gap-1">
              <Socials />
            </div>
          </div>
          <p className="col-12 md:col-6 text-right md:text-left text-xs mb-0">© 2023 Appstract</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

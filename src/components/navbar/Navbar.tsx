import { Dialog } from "primereact/dialog";
import { Menubar } from "primereact/menubar";
import { useEffect, useState } from "react";
import { FaEnvelope, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const { translations, toggleLanguage } = useLanguage();
  console.log(isScrolled);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="w-full">
        <div
          className={`transition-slow p-menubar col-12 fixed rounded-none top-0 z-5 px-4 lg:px-6 ${
            isScrolled ? "surface-50 text-primary" : "text-800 bg-transparent"
          }`}
        >
          <div className="container px-2 flex w-full m-auto align-items-center justify-content-center">
            <div className="mr-auto">AppStract</div>
            <Menubar
              model={translations.navBar.menuItems}
              className="hidden bg-transparent lg:block hover:text-primary font-bold text-xl"
            />
            <div>
              <i className={`pi pi-bars text-4xl p-2 cursor-pointer`} onClick={toggleSidebar} />
            </div>
          </div>
        </div>
      </header>
      <Dialog
        modal={true}
        maximized={true}
        draggable={false}
        className="scalein scaleout origin-top border-none demburger-menu bg-indigo-900"
        visible={sidebarVisible}
        onHide={() => setSidebarVisible(false)}
      >
        <div className="flex">
          <div className="hidden md:col-8 flex-column md:flex gap-5">
            <FaFacebook className="mr-2" size={20} />
            <FaTwitter className="mr-2" size={20} />
            <FaEnvelope className="mr-2" size={20} />
          </div>
          <div className="col-12 md:col-4 flex flex-column align-items-start md:align-items-end">
            {translations.hamburgerMenuItems.map((item: any) => (
              <Link
                className="nav-link font-bold text-3xl hover:text-white"
                to={item.url}
                onClick={() => setSidebarVisible(!sidebarVisible)}
              >
                <span className="">{item.label}</span>
              </Link>
            ))}
            <Link
              to="/"
              className="nav-link font-bold text-3xl hover:text-white"
              onClick={toggleLanguage}
            >
              <span className="">{translations.hamburgerLanguage}</span>
            </Link>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Navbar;

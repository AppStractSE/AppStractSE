import { Dialog } from "primereact/dialog";
import { useEffect, useState } from "react";
import { FaEnvelope, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { HamburgerMenuItem, NavMenuItem } from "../../types/types";

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
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
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
            isScrolled ? "surface-50 text-primary" : "text-500 bg-transparent"
          }`}
        >
          <div className="container px-2 flex w-full m-auto align-items-center justify-content-center">
            <NavLink className="nav-link mr-auto p-0" to="/">
              <span>AppStract</span>
            </NavLink>
            <div className="hidden md:block">
              {translations.nav.menuItems.map((navItem: NavMenuItem) => (
                <NavLink
                  key={navItem.url}
                  className={`nav-link font-bold text-xl ${
                    isScrolled
                      ? "text-primary-500 hover:text-primary-300"
                      : "text-primary-200 hover:text-primary"
                  }`}
                  to={navItem.url}
                >
                  <span>{navItem.label}</span>
                </NavLink>
              ))}
            </div>
            <div className="ml-4">
              <i
                className={`text-primary-300 pi pi-bars text-4xl p-2 cursor-pointer ${
                  isScrolled
                    ? "text-primary hover:text-primary-300"
                    : "text-primary-300 hover:text-primary"
                }`}
                onClick={toggleSidebar}
              />
            </div>
          </div>
        </div>
      </header>
      <Dialog
        modal={true}
        maximized={true}
        draggable={false}
        className="scalein scaleout origin-top border-none demburger-menu bg-dark"
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
            {translations.hamburgerMenuItems.map((item: HamburgerMenuItem) => (
              <Link
                key={item.label}
                className="nav-link text-primary-300 hover:text-primary font-bold text-3xl"
                to={item.url}
                onClick={() => setSidebarVisible(!sidebarVisible)}
              >
                <span>{item.label}</span>
              </Link>
            ))}
            <div
              className="nav-link text-primary-300 hover:text-primary font-bold text-3xl cursor-pointer"
              onClick={toggleLanguage}
            >
              <span>{translations.hamburgerLanguage}</span>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Navbar;

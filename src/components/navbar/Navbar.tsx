import { Dialog } from 'primereact/dialog';
import { useEffect, useState } from 'react';
import { FaEnvelope, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { HamburgerMenuItem, NavMenuItem } from '../../types/types';
import LargeLogo from '../logo/LargeLogo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const { translations, toggleLanguage } = useLanguage();

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`w-full fixed top-0 z-5 transition-slow px-2 md:px-4 lg:px-6 py-0 flex align-items-center ${
          isScrolled ? 'bg-black' : 'bg-transparent'
        }`}
      >
        <NavLink className="nav-link mr-auto p-0 flex" to="/">
          <LargeLogo isScrolled={isScrolled} height={isScrolled ? 40 : 70} className="transition-slow" />
        </NavLink>
        <nav className={`flex transition-slow ${isScrolled ? '' : 'py-4'}`}>
          {translations.nav.menuItems.map((navItem: NavMenuItem) => (
            <NavLink
              key={navItem.url}
              className={`hidden md:block nav-link font-bold text-xl transition-slow ${
                isScrolled ? 'p-3 text-white hover:text-primary-600' : 'p-3 text-primary-200 hover:text-white'
              }`}
              to={navItem.url}
            >
              <span>{navItem.label}</span>
            </NavLink>
          ))}
          <div
            className={`hidden md:block nav-link font-bold text-xl cursor-pointer transition-slow ${
              isScrolled ? 'p-3 text-white hover:text-primary-600' : 'p-3 text-primary-200 hover:text-white'
            }`}
            onClick={toggleLanguage}
          >
            <span className="uppercase">{translations.general.short_lang}</span>
          </div>
          <div
            className={` ${
              isScrolled ? 'p-3 text-white hover:text-primary-600' : 'p-3 text-primary-200 hover:text-white'
            }`}
          >
            <i className="block pi pi-bars text-4xl cursor-pointer" onClick={toggleSidebar} />
          </div>
        </nav>
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

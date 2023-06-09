import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout";
import { useLanguage } from "./contexts/LanguageContext";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import ServicesSection from "./pages/home/sections/ServicesSection";
import NotFound from "./pages/notfound/NotFound";
import Service from "./pages/services/subpages/Service";

const App = () => {
  const { pathname } = useLocation();
  const { translations } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path={translations.paths.home.link} element={<Layout />}>
        <Route index path={translations.paths.home.link} element={<Home />} />
        <Route path={translations.paths.services.link} element={<ServicesSection />} />
        <Route path={translations.paths.webDevelopment.link} element={<Service />} />
        <Route path={translations.paths.seo.link} element={<Service />} />
        <Route path={translations.paths.appDevelopment.link} element={<Service />} />
        <Route path={translations.paths.contact.link} element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
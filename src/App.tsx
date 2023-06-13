import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout";
import { useLanguage } from "./contexts/LanguageContext";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import ServicesSection from "./pages/home/sections/ServicesSection";
import NotFound from "./pages/notfound/NotFound";
import Policy from "./pages/policy/Policy";
import Service from "./pages/services/subpages/Service";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  const { translations } = useLanguage();

  return (
    <>
      <Routes>
        <Route path={translations.paths.home.link} element={<Layout />}>
          <Route index path={translations.paths.home.link} element={<Home />} />
          <Route path={translations.paths.services.link} element={<ServicesSection />} />
          <Route path={translations.paths.webDevelopment.link} element={<Service />} />
          <Route path={translations.paths.seo.link} element={<Service />} />
          <Route path={translations.paths.appDevelopment.link} element={<Service />} />
          <Route path={translations.paths.contact.link} element={<Contact />} />
          <Route path={translations.paths.policy.link} element={<Policy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ScrollToTop />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default App;

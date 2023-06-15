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
import NotFound from "./pages/notfound/NotFound";
import Policy from "./pages/policy/Policy";
import Services from "./pages/services/Services";
import AppDevelopment from "./pages/services/subpages/AppDevelopment";
import SEO from "./pages/services/subpages/SEO";
import WebDevelopment from "./pages/services/subpages/WebDevelopment";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  const { translations } = useLanguage();

  return (
    <>
      <Routes>
        <Route path={translations.paths.home.link} element={<Layout />}>
          <Route index path={translations.paths.home.link} element={<Home />} />
          <Route path={translations.paths.services.link} element={<Services />} />
          <Route path={translations.paths.webDevelopment.link} element={<WebDevelopment />} />
          <Route path={translations.paths.seo.link} element={<SEO />} />
          <Route path={translations.paths.appDevelopment.link} element={<AppDevelopment />} />
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

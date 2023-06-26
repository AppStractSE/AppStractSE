import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import { Helmet } from "react-helmet";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout";
import { useLanguage } from "./contexts/LanguageContext";
import { common } from "./locales/common";
import ClientDetails from "./pages/clients-and-cases/ClientDetails";
import Clients from "./pages/clients-and-cases/Clients";
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
  const page = useLocation();  
  const {translations} = useLanguage();
  return (
    <>
          <Helmet>
        <title>
          {translations.metadescriptions.find((meta: any) => meta.path === page.pathname)?.title}
        </title>
        <meta
          name="description"
          content={translations.metadescriptions.find((meta: any) => meta.path === page.pathname)?.description}
        />
      </Helmet>
      <Routes>
        <Route path={common.paths.home} element={<Layout />}>
          <Route index path={common.paths.home} element={<Home />} />
          <Route path={common.paths.services} element={<Services />} />
          <Route path={common.paths.webDevelopment} element={<WebDevelopment />} />
          <Route path={common.paths.seo} element={<SEO />} />
          <Route path={common.paths.appDevelopment} element={<AppDevelopment />} />
          <Route path={common.paths.contact} element={<Contact />} />
          <Route path={common.paths.policy} element={<Policy />} />
          <Route path={common.paths.clients} element={<Clients />} />
          <Route path={`${common.paths.clients}/:clientName`} element={<ClientDetails />} />
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

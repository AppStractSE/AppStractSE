import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import Navbar from './components/navbar/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Layout;

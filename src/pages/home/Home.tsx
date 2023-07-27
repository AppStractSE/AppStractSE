import { useRef } from 'react';
import ContactSection from '../../components/sections/ContactSection';
import HeroSection from './sections/HeroSection';

const Home = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrolltoContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <HeroSection scrollToContact={scrolltoContact} />
      <ContactSection curved gradient bg={['indigo-600', 'purple-900']} scrollRef={contactRef} />
    </>
  );
};

export default Home;

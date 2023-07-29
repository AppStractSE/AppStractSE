import ServicesList from '../../../components/service/ServicesList';
import HeroHeader from './hero/HeroHeader';

interface Props {
  scrollToContact: () => void;
}

const HeroSection = ({ scrollToContact }: Props) => {
  return (
    <>
      <section className="w-full">
        <div
          className="p-2 md:p-4 lg:p-6 bg-blue-800"
          style={{ background: 'linear-gradient(0deg, var(--purple-900), var(--indigo-600))' }}
        >
          <HeroHeader scrollToContact={scrollToContact} />
          <ServicesList />
        </div>
      </section>
    </>
  );
};

export default HeroSection;

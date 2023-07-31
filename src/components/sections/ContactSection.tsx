import ContactForm from '../ContactForm';

interface Props {
  scrollRef?: React.RefObject<HTMLElement>;
  bg?: string[] | string;
  curved?: boolean;
  gradient?: boolean;
}

const ContactSection = ({ scrollRef, bg, curved, gradient }: Props) => {
  return (
    <section className={`w-full ${curved && 'curved-bg overflow-hidden'}`} ref={scrollRef}>
      <div
        className={`p-2 md:p-4 lg:p-6 ${bg ? `bg-${bg[0]}` : 'bg-bluegray-900'}`}
        style={{
          background:
            gradient && bg && bg.length > 1 ? `linear-gradient(0deg, var(--${bg[0]}), var(--${bg[1]}))` : `var(--${bg})`,
        }}
      >
        <div className="container w-full m-auto py-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

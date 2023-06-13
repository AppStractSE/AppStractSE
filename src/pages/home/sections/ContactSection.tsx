import ContactForm from "../../../components/ContactForm";

const ContactSection = () => {
  return (
    <section className="w-full curved-bg  overflow-hidden" id="contact">
      <div className="p-2 md:p-4 lg:p-6 text-800 bg-bluegray-900">
        <div className="container w-full m-auto py-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

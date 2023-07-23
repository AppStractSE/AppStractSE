import { useRef } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import ContactSection from "../../components/sections/ContactSection";
import Socials from "../../components/socials/Socials";
import { common } from "../../locales/common";

const Contact = () => {
  const contactRef = useRef<HTMLSpanElement>(null);
  const scrolltoContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      
      <section className="w-full">
        <div className="p-2 md:p-4 lg:p-6">
          <div className="container w-full m-auto pt-8 pb-2">
            <Breadcrumbs />
            <div className="flex-column-reverse flex-wrap flex lg:flex-row">
              <div className="col-12 lg:col-6 flex flex-column justify-content-between">
                <div className="block text-5xl break-word md:text-6xl lg:text-7xl font-bold line-height-1 my-4 lg:mt-0 lg:mb-4">
                  Kom i kontakt med oss
                </div>
                <p className="mt-0 mb-4 line-height-3">
                  Vi på Appstract kan det mesta inom digitala och webbaserade lösningar och kan
                  därmed hjälpa er med en rad olika behov. Oavsett om ni behöver utveckla en app,
                  designa en hemsida eller implementera en anpassad mjukvarulösning, är vi här för
                  att hjälpa er.
                  <br />
                  <br />
                  För att kontakta oss kan ni skicka ett{" "}
                  <a
                    className="nav-link p-0 text-primary-200 hover:text-primary-400"
                    href={common.socials.mail}
                  >
                    mail
                  </a>{" "}
                  eller meddelande via{" "}
                  <a
                    className="nav-link p-0 text-primary-200 hover:text-primary-400"
                    href={common.socials.facebook}
                  >
                    Facebook
                  </a>{" "}
                  eller{" "}
                  <a
                    className="nav-link p-0 text-primary-200 hover:text-primary-400"
                    href={common.socials.instagram}
                  >
                    Instagram
                  </a>
                  , där ni beskriver era behov. Ni kan även fylla i vårt{" "}
                  <span
                    onClick={scrolltoContact}
                    className="text-primary-200 cursor-pointer hover:text-primary-400"
                  >
                    kontaktformulär
                  </span>
                  .
                </p>
                <div className="flex gap-2">
                  <Socials />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactSection curved bg={["purple-800", "indigo-700"]} gradient scrollRef={contactRef} />
    </>
  );
};

export default Contact;

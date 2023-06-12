/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

interface Props {
  openPolicyInNewTab?: boolean;
}

const ContactForm = ({ openPolicyInNewTab }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { translations } = useLanguage();

  const handleSubmit = (e: any) => {
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form).toString()),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => console.log(error));

    e.preventDefault();
  };

  return (
    <div className="flex align-items-center justify-content-center">
      <div className="p-1 md:p-3" style={{ maxWidth: 440 }}>
        <div className="flex justify-content-center mb-2 md:mb-4">
          <div
            style={{ width: "fit-content" }}
            className="text-center text-900 text-2xl md:text-3xl font-medium"
          >
            {translations.contact.title}
          </div>
        </div>

        <form onSubmit={handleSubmit} name="contact-form">
          <input type="hidden" name="contact-form" value="contactForm" />

          <InputText
            id="name"
            name="name"
            type="text"
            placeholder={translations.contact.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-3 shadow-3 py-3 bg-primary-200 text-black-alpha-90 border-none hover:shadow-6 dark-placeholder"
          />
          <div className="flex gap-3">
            <InputText
              id="email"
              name="email"
              type="email"
              placeholder={translations.contact.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-3 shadow-3 py-3 bg-primary-200 text-black-alpha-90 border-none hover:shadow-6 dark-placeholder"
            />
            <InputText
              id="phone"
              name="phone"
              type="text"
              placeholder={translations.contact.phone}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mb-3 shadow-3 py-3 bg-primary-200 text-black-alpha-90 border-none hover:shadow-6 dark-placeholder"
            />
          </div>
          <InputTextarea
            value={message}
            id="message"
            name="message"
            rows={5}
            placeholder={translations.contact.message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full mb-3 shadow-3 py-3 bg-primary-200 text-black-alpha-90 border-none hover:shadow-6 dark-placeholder textarea"
          />
          <div className="flex align-items-center justify-content-between mb-4">
            <div className="text-600 font-medium line-height-2 text-xs md:text-sm">
              {translations.contact.info}{" "}
              <Link
                target={openPolicyInNewTab ? "_blank" : "_self"}
                className="nav-link p-0 text-primary hover:text-primary-300 cursor-pointer"
                to={translations.paths.policy.link}
              >
                {translations.contact.policy}
              </Link>
            </div>
          </div>
          <Button
            type="submit"
            label={translations.buttons.submit}
            className="w-full mb-3 shadow-3 hover:shadow-6 py-3"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

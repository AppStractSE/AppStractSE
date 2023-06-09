import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { translations } = useLanguage();

  return (
    <div className="flex align-items-center justify-content-center">
      <div className="p-3 md:p-2 xl:px-4 w-full md:w-8 xl:w-5" style={{ maxWidth: 440 }}>
        <div className="flex justify-content-center mb-4">
          <div
            style={{ width: "fit-content" }}
            className="text-center text-900 text-2xl md:text-3xl font-medium"
          >
            {translations.contact.title}
          </div>
        </div>
        <InputText
          id="name"
          type="text"
          placeholder={translations.contact.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 shadow-3 py-3 bg-primary-200 text-black-alpha-90 border-none hover:shadow-6 dark-placeholder"
        />
        <div className="flex gap-3">
          <InputText
            id="email"
            type="text"
            placeholder={translations.contact.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-3 shadow-3 py-3 bg-primary-200 text-black-alpha-90 border-none hover:shadow-6 dark-placeholder"
          />
          <InputText
            id="phone"
            type="text"
            placeholder={translations.contact.phone}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full mb-3 shadow-3 py-3 bg-primary-200 text-black-alpha-90 border-none hover:shadow-6 dark-placeholder"
          />
        </div>
        <InputTextarea
          value={message}
          rows={5}
          placeholder={translations.contact.message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full mb-3 shadow-3 py-3 bg-primary-200 text-black-alpha-90 border-none hover:shadow-6 dark-placeholder textarea"
        />
        <div className="flex align-items-center justify-content-between mb-4">
          <div className="text-600 font-medium line-height-1 text-xs md:text-sm">
            {translations.contact.info}{" "}
            <span className="text-primary hover:text-white cursor-pointer">
              {translations.contact.policy}
            </span>
          </div>
        </div>
        <Button
          label={translations.buttons.submit}
          className="w-full mb-3 shadow-3 hover:shadow-6 py-3"
        />
      </div>
    </div>
  );
};

export default ContactForm;

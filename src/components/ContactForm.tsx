import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="flex align-items-center justify-content-center">
      <div className="p-3 md:p-2 xl:px-4 w-full md:w-8 xl:w-5">
        <div className="mb-5">
          <div className="text-900 text-2xl md:text-3xl font-medium mb-3 text-left md:text-center">
            Ja, tack! Jag vill gärna bli kontaktad!
          </div>
        </div>
        <InputText
          id="name"
          type="text"
          placeholder="För- och efternamn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 shadow-3 py-3 bg-primary-200 text-black-alpha-90 border-none hover:shadow-6 dark-placeholder"
        />
        <div className="flex gap-3">
          <InputText
            id="email"
            type="text"
            placeholder="Mejladress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-3 shadow-3 py-3 bg-primary-200 text-black-alpha-90 border-none hover:shadow-6 dark-placeholder"
          />
          <InputText
            id="phone"
            type="text"
            placeholder="Telefonnummer"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full mb-3 shadow-3 py-3 bg-primary-200 text-black-alpha-90 border-none hover:shadow-6 dark-placeholder"
          />
        </div>
        <InputTextarea
          value={message}
          rows={5}
          placeholder="Meddelande"
          onChange={(e) => setMessage(e.target.value)}
          className="w-full mb-3 shadow-3 py-3 bg-primary-200 text-black-alpha-90 border-none hover:shadow-6 dark-placeholder"
          style={{ maxHeight: 132, overflowY: "auto", resize: "none" }}
        />
        <div className="flex align-items-center justify-content-between mb-4">
          <div className="text-600 font-medium line-height-3 text-xs md:text-sm">
            Genom att klicka på skicka godkänner du vår{" "}
            <Link className="text-link text-primary hover:text-white" to="/tjanster">
              <span>personuppgiftspolicy</span>
            </Link>
          </div>
        </div>
        <Button label="Skicka" className="w-full mb-3 shadow-3 hover:shadow-6 py-3" />
      </div>
    </div>
  );
};

export default ContactForm;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { ProgressBar } from 'primereact/progressbar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useLanguage } from '../contexts/LanguageContext';

interface Props {
  openPolicyInNewTab?: boolean;
  inModalOnSend?: () => void;
  location?: string;
}

const ContactForm = ({ openPolicyInNewTab, inModalOnSend, location }: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const { translations } = useLanguage();
  const [loading, setLoading] = useState(false);
  const encode = (data: any) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = (e: any) => {
    setLoading(true);
    const formType = location ?? 'home';
    fetch('/index.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contactForm',
        ...{ name, email, phone, message, formType },
      }),
    })
      .then(() => {
        console.log('Form successfully submitted');
        setLoading(false);
        toast.success(translations.toasts.success);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        inModalOnSend && inModalOnSend();
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error(translations.toasts.error);
      });
    e.preventDefault();
  };

  return (
    <div className="flex align-items-center justify-content-center">
      <div className="p-1 md:p-3" style={{ maxWidth: 440 }}>
        <div className="flex justify-content-center mb-2 md:mb-4">
          <div style={{ width: 'fit-content' }} className="text-center text-2xl md:text-3xl font-medium">
            {translations.contactForm.title}
          </div>
        </div>

        <form onSubmit={handleSubmit} name="contact-form">
          <input type="hidden" name="form-name" value="contactForm" />
          <InputText
            id="name"
            name="name"
            type="text"
            placeholder={translations.contactForm.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-3 shadow-3 py-3 bg-primary text-black-alpha-90 border-none hover:shadow-6 dark-placeholder"
          />
          <div className="flex gap-3">
            <InputText
              id="email"
              name="email"
              type="email"
              placeholder={translations.contactForm.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-3 shadow-3 py-3 bg-primary text-black-alpha-90 border-none hover:shadow-6 dark-placeholder"
            />
            <InputText
              id="phone"
              name="phone"
              type="text"
              placeholder={translations.contactForm.phone}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mb-3 shadow-3 py-3 bg-primary text-black-alpha-90 border-none hover:shadow-6 dark-placeholder"
            />
          </div>
          <InputTextarea
            value={message}
            id="message"
            name="message"
            rows={5}
            placeholder={translations.contactForm.message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full mb-3 shadow-3 py-3 bg-primary text-black-alpha-90 border-none hover:shadow-6 dark-placeholder textarea"
          />
          <div className="flex align-items-center justify-content-between mb-4">
            <div className="text-600 font-medium line-height-2 text-xs md:text-sm">
              {translations.contactForm.info}{' '}
              <Link
                target={openPolicyInNewTab ? '_blank' : '_self'}
                className="nav-link p-0 text-primary hover:text-primary-300 cursor-pointer"
                to={translations.paths.policy.link}
              >
                {translations.contactForm.policy}
              </Link>
            </div>
          </div>
          <input type="text" name="formType" value="home" hidden />
          <Button
            disabled={loading ? true : false}
            type="submit"
            label={translations.buttons.submit}
            className="w-full mb-3 shadow-3 hover:shadow-6 py-3 bg-black border-transparent text-white hover:text-0 hover:bg-blue-400"
          />
          <div style={{ height: 6 }}>
            {loading ? <ProgressBar className="shadow-3" mode="indeterminate" style={{ height: '100%' }} /> : null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

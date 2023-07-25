import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Breadcrumbs from '../Breadcrumbs';
import ContactForm from '../ContactForm';

interface Props {
  title: string;
  description: string;
  bg?: string[];
  gradient?: boolean;
}

const ServiceHero = ({ title, description, bg, gradient }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { translations } = useLanguage();
  return (
    <section className="w-full">
      <div
        className={`p-2 md:p-4 lg:p-6 ${bg ? `bg-${bg[0]}` : 'bg-blue-800'}`}
        style={{
          backgroundImage: gradient && bg ? `linear-gradient(0deg, var(--${bg[0]}), var(--${bg[1]}))` : undefined,
        }}
      >
        <div className="container w-full m-auto pt-8 pb-2">
          <Breadcrumbs />
          <div className="flex-column-reverse flex-wrap flex lg:flex-row">
            <div className="col-12 lg:col-6 flex flex-column justify-content-between">
              <div>
                <div className="block text-5xl break-word md:text-6xl lg:text-7xl font-bold line-height-1 my-4 lg:mt-0 lg:mb-4">
                  {title}
                </div>
                <div className="text-2xl md:text-3xl mt-0 line-height-3">{description}</div>
              </div>
              <div className="mt-8 text-center lg:text-left">
                <Button
                  label={translations.buttons.contactme}
                  type="button"
                  style={{ minWidth: 250 }}
                  className="bg-orange-500 border-orange-500 shadow-3 hover:shadow-5 hover:bg-orange-700 hover:border-orange-700 text-white text-md p-3"
                  onClick={() => setModalVisible(!modalVisible)}
                />
              </div>
            </div>
            <div className="col-12 lg:col-6 ">
              <img
                className="border-round shadow-5"
                width="100%"
                src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              />
            </div>
          </div>
        </div>
      </div>
      <Dialog
        contentClassName="p-0 sm:p-2 flex justify-content-center align-items-center bg-dialog"
        headerClassName="p-2 bg-dialog"
        dismissableMask={true}
        modal={true}
        draggable={false}
        blockScroll={true}
        resizable={false}
        className="fadein scaleout origin-top border-none shadow-3 w-screen sm:max-w-max h-screen sm:h-auto"
        visible={modalVisible}
        onHide={() => setModalVisible(false)}
      >
        <ContactForm openPolicyInNewTab={true} inModalOnSend={() => setModalVisible(!modalVisible)} />
      </Dialog>
    </section>
  );
};

export default ServiceHero;

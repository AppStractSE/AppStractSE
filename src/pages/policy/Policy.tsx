import React from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import { useLanguage } from '../../contexts/LanguageContext';
import { PolicySection } from '../../types/types';

const Policy = () => {
  const { translations } = useLanguage();
  return (
    <>
      <section className="w-full surface-0">
        <div className="p-2 md:p-4 lg:p-6">
          <div className="container w-full m-auto pt-8 pb-4">
            <Breadcrumbs />
            <div className="col-12 md:col-8">
              <div className="text-4xl md:text-6xl font-bold line-height-1 mb-4">{translations.policy.title}</div>
              <div className="text-2xl line-height-3 font-bold mb-4">{translations.policy.subtitle}</div>
              <div className="text-2xl mb-6 line-height-3">{translations.policy.description}</div>

              {translations.policy.sections.map((section: PolicySection) => (
                <React.Fragment key={section.title}>
                  <div className="text-3xl md:text-4xl font-bold line-height-1 mb-4">{section.title}</div>
                  <div className="text-xl mb-6" style={{ whiteSpace: 'pre-line' }}>
                    {section.description}
                    {section.subdescription && (
                      <span>
                        {' '}
                        <a href="mailto:info@appstract.se" className="text-primary-300 nav-link p-0 hover:text-white">
                          {section.subdescription}
                        </a>
                        {'.'}
                      </span>
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Policy;

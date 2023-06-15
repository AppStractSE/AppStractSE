import React from "react";
import { IoHome } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

function Breadcrumbs() {
  const location = useLocation();
  const { translations } = useLanguage();

  interface Breadcrumb {
    breadcrumb: string;
    path: string;
  }
  // Define your breadcrumb data
  const breadcrumbs: Breadcrumb[] = translations.breadcrumbs;

  // Generate the breadcrumbs dynamically based on the current location
  const renderedBreadcrumbs = breadcrumbs
    .filter((breadcrumb) => location.pathname.startsWith(breadcrumb.path))
    .map((breadcrumb, index) => {
      const isCurrentBreadcrumb = location.pathname === breadcrumb.path;
      const className = isCurrentBreadcrumb ? "text-white" : "text-primary-300";

      if (breadcrumb.breadcrumb === translations.paths.home.label) {
        return (
          <React.Fragment key={breadcrumb.path}>
            <span className={`${className} flex align-items-center`}>
              <Link
                to={breadcrumb.path}
                className="text-link hover:text-primary flex align-items-center"
              >
                <IoHome size={24} />
              </Link>
            </span>
          </React.Fragment>
        );
      } else
        return (
          <React.Fragment key={breadcrumb.path}>
            {index > 0 && <span> / </span>}
            <span className={`${className}`}>
              <Link to={breadcrumb.path} className="text-link hover:text-primary">
                {breadcrumb.breadcrumb}
              </Link>
            </span>
          </React.Fragment>
        );
    });

  return <nav className="col-12 py-4 flex gap-1">{renderedBreadcrumbs}</nav>;
}

export default Breadcrumbs;

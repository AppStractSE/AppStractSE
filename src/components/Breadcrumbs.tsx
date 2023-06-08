import React from "react";
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
      const className = isCurrentBreadcrumb ? "text-white" : "text-primary";

      if (isCurrentBreadcrumb) {
        return (
          <React.Fragment key={breadcrumb.path}>
            {index > 0 && <span className="mx-1"> / </span>}
            <span className={className}>{breadcrumb.breadcrumb}</span>
          </React.Fragment>
        );
      }

      return (
        <React.Fragment key={breadcrumb.path}>
          {index > 0 && <span className="mx-1"> / </span>}
          <span className={`${className}`}>
            <Link to={breadcrumb.path} className="text-link hover:text-primary-200">
              {breadcrumb.breadcrumb}
            </Link>
          </span>
        </React.Fragment>
      );
    });

  return <nav className="col-12 py-4">{renderedBreadcrumbs}</nav>;
}

export default Breadcrumbs;

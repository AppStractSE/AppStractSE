export interface Paths {
  home: {
    link: string;
    label: string;
  };
  contact: {
    link: string;
    label: string;
  };
  services: {
    link: string;
    label: string;
  };
  webDevelopment: {
    link: string;
    label: string;
  };
  seo: {
    link: string;
    label: string;
  };
  appDevelopment: {
    link: string;
    label: string;
  };
  clients: {
    link: string;
    label: string;
  };
  policy: {
    link: string;
    label: string;
  };
  notFound: {
    link: string;
    label: string;
  };
}

export interface HamburgerMenuItem {
  label: string;
  url: string;
}

export interface NotFound {
  title: string;
  description: string;
}

export interface Contact {
  title: string;
  name: string;
  email: string;
  message: string;
  phone: string;
  info: string;
  policy: string;
}

export interface Buttons {
  help: string;
  contact: string;
  contactme: string;
  send: string;
  back: string;
  submit: string;
}

export interface Home {
  title: string;
  description: string;
  buttons: {
    contact: string;
    help: string;
  };
  serviceTitle: string;
  serviceDescription: string;
  phraseTitle: string;
  phrases: string[];
}

export interface Service {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface PolicySection {
  title: string;
  description: string;
  subdescription?: string;
}

export interface Policy {
  title: string;
  subtitle: string;
  description: string;
  sections: PolicySection[];
}

export interface Breadcrumb {
  path: string;
  breadcrumb: string;
}

export interface Nav {
  menuItems: NavMenuItem[];
}

export interface NavMenuItem {
  label: string;
  url: string;
}

export interface ServicePage {
  [key: string]: {
    herodescription: string;
    introtitle: string;
    introsubtitle: string;
    introdescription: string;
    parts: ServicePagePart[];
  };
}

export interface ServicePagePart {
  title: string;
  hovertext: string;
  image: string;
  background: string;
  subtitle: string;
  description: string;
}

export interface Client {
  title: string;
  subtitle: string;
  image: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

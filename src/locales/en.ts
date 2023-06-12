import {
  Breadcrumb,
  Buttons,
  Contact,
  HamburgerMenuItem,
  Home,
  Nav,
  NotFound,
  Paths,
  Policy,
  Service,
  ServicePage,
} from "../types/types";

const paths: Paths = {
  home: {
    link: "/",
    label: "Home",
  },
  contact: {
    link: "/contact",
    label: "Contact",
  },
  services: {
    link: "/services",
    label: "Services",
  },
  webDevelopment: {
    link: "/services/web-development",
    label: "Web Development",
  },
  seo: {
    link: "/services/seo",
    label: "Search Engine Optimization",
  },
  appDevelopment: {
    link: "/services/app-development",
    label: "App Development",
  },
  clients: {
    link: "/clients-and-cases",
    label: "Clients & Cases",
  },
  policy: {
    link: "/privacy-policy",
    label: "Privacy Policy",
  },
  notFound: {
    link: "/404",
    label: "404",
  },
};
const hamburgerLanguage = "Svenska";
const hamburgerMenuItems: HamburgerMenuItem[] = [
  {
    label: paths.services.label,
    url: paths.services.link,
  },
  {
    label: paths.contact.label,
    url: paths.contact.link,
  },
];

const notFound: NotFound = {
  title: "Oops! Something went wrong.",
  description: "Looks like you're lost.\nDon't worry though, we're here to save you!",
};

const contact: Contact = {
  title: "Yes, please! I'd like to be contacted!",
  name: "First and last name",
  email: "Email",
  message: "Message",
  phone: "Phone number",
  info: "By clicking send you agree to our",
  policy: "privacy policy",
};

const buttons: Buttons = {
  help: "How we can help you",
  contact: "Contact us",
  contactme: "Contact me",
  send: "Send",
  back: "Back",
  submit: "Submit",
};

const home: Home = {
  title: "Web Agency in Borås",
  description:
    "AppStract offers an IT solution for all needs. Our goal is to help you succeed in your business, and we have the tools to do it.",
  buttons: {
    contact: buttons.contact,
    help: buttons.help,
  },
  serviceTitle: "Our Services",
  serviceDescription: "We offer a wide range of services to help you with your business.",
  phraseTitle: "Your trusted partner for ",
  phrases: [
    "responsive web design",
    "web applications",
    "system development",
    "tailored IT solutions",
    "web design",
    "SEO services",
    "web development",
    "app development",
  ],
};

export const services: Service[] = [
  {
    title: paths.webDevelopment.label,
    description:
      "We help you build a website that you can be proud of, and that your customers will love.",
    image:
      "https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png",
    link: paths.webDevelopment.link,
  },
  {
    title: paths.seo.label,
    description:
      "We help you get better visibility on the internet, using various techniques such as SEO, SEM, and more.",
    image:
      "https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png",
    link: paths.seo.link,
  },
  {
    title: paths.appDevelopment.label,
    description:
      "We help you build an app that your customers will love, and that will help you grow your business.",
    image:
      "https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png",
    link: paths.appDevelopment.link,
  },
];

const policy: Policy = {
  title: "Privacy Policy",
  subtitle: "AppStract's processing of your personal information",
  description:
    "We value your privacy and strive to protect your personal information in the best possible way. This privacy policy describes how we collect, use, and protect your personal information when you visit our website. We comply with applicable data protection laws and aim to be transparent in our data collection and usage practices.",
  sections: [
    {
      title: "Collection of Personal Information",
      description:
        "We collect personal information from you when you subscribe to our newsletter, submit inquiries through our contact form, make purchases of our products or services, or interact with our website in other ways. The personal information we may collect includes names, contact information (such as email address, phone number, and address), payment information, and other relevant details that you voluntarily provide to us.",
    },
    {
      title: "Use of Personal Information",
      description:
        "We use your personal information to communicate with you and provide the services or products you have requested. We may also use your information to send you marketing materials related to our products and services, provided that you have given your consent.\n\nAdditionally, we may use personal information to improve and customize your experience on our website, analyze trends and behaviors of our users, and fulfill our legal obligations and protect our rights and interests.",
    },
    {
      title: "Sharing of Personal Information",
      description:
        "We only share your personal information with third parties when necessary to provide our services and products to you. This may include sharing data with suppliers, payment processors, and logistics companies to facilitate order processing, payments, and deliveries.\n\nWe do not share your personal information with third parties for their own marketing purposes without your explicit consent, unless there is a legal exception.",
    },
    {
      title: "Data Protection and Security",
      description:
        "We take appropriate technical and organizational measures to protect your personal information against accidental loss, misuse, or unauthorized access. We use encryption technology to secure the transmission of sensitive data and limit access to the personal information only to authorized personnel who need to use it for specific job tasks.",
    },
    {
      title: "Your Rights",
      description:
        "You have the right to request access to the personal information we have about you and to request correction of any inaccurate information. You also have the right to request deletion of your information under certain circumstances, restriction of the processing of your information, and objection to certain processing of your information.\n\nIf you wish to exercise your rights or have any questions or complaints regarding our handling of your personal information, please contact us at",
      subdescription: "info@appstract.se",
    },
    {
      title: "Changes to the Privacy Policy",
      description:
        "We reserve the right to change this privacy policy at any time. Any changes will be posted on our website and will take effect immediately. We recommend that you regularly review the policy to stay informed about any updates and changes.",
    },
  ],
};

const breadcrumbs: Breadcrumb[] = [
  { path: paths.home.link, breadcrumb: paths.home.label },
  { path: paths.services.link, breadcrumb: paths.services.label },
  { path: paths.webDevelopment.link, breadcrumb: paths.webDevelopment.label },
  { path: paths.seo.link, breadcrumb: paths.seo.label },
  { path: paths.appDevelopment.link, breadcrumb: paths.appDevelopment.label },
  { path: paths.clients.link, breadcrumb: paths.clients.label },
  { path: paths.contact.link, breadcrumb: paths.contact.label },
  { path: paths.policy.link, breadcrumb: paths.policy.label },
  { path: paths.notFound.link, breadcrumb: paths.notFound.label },
];

const nav: Nav = {
  menuItems: [
    {
      label: paths.clients.label,
      url: paths.clients.link,
    },
    {
      label: paths.services.label,
      url: paths.services.link,
    },
    {
      label: paths.contact.label,
      url: paths.contact.link,
    },
  ],
};

const servicepages: ServicePage = {
  webdevelopment: {
    herodescription:
      "We bring together all the elements needed to create a well-functioning website, including customized development and content placement. Our goal is to improve conversion rates and strengthen your brand.",
    introtitle: "A customized website that actualizes your vision",
    introsubtitle: "We understand the importance of turning your vision into reality.",
    introdescription:
      "Through meticulous development and close collaboration with you as the client, we create a website tailored to your needs and preferences. Whether you need a simple business website, an advanced e-commerce platform, or an interactive web application, we can deliver a solution that suits you perfectly.",
    parts: [
      {
        title: "Planning and Analysis",
        hovertext: "Read More",
        image:
          "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        background: "bg-red-700",
        subtitle:
          "Our first and most crucial phase is to understand your vision and goals for the website.",
        description:
          "We conduct thorough discussions and workshops to capture all your desires and requirements. We also analyze your target audience, market trends, and competition to create a strategy that will be successful in the long term. With our experience and expertise in web development, we also provide advice and recommendations to optimize your website.",
      },
      {
        title: "Design and Interface",
        hovertext: "Read More",
        image:
          "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        background: "bg-blue-500",
        subtitle: "Once we have a clear plan, we move on to the design phase.",
        description:
          "We create visual concepts that represent your brand identity while appealing to your target audience. We focus on creating a user-friendly and aesthetically pleasing website by designing intuitive navigation structures and an attractive visual design. We ensure that your website is responsive and adapts to different screen sizes to provide a consistent experience on all devices.",
      },
      {
        title: "Development and Implementation",
        hovertext: "Read More",
        image:
          "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        background: "bg-orange-600",
        subtitle:
          "When the design is approved, we begin the process of translating the design into a functional website.",
        description:
          "We utilize the latest technologies and frameworks to build a stable and secure website. We prioritize creating scalable and flexible solutions to facilitate future upgrades and customizations. Throughout the development process, we maintain open communication and regular checkpoints to ensure that the outcome aligns with your expectations.",
      },
      {
        title: "Testing and Launching",
        hovertext: "Read More",
        image:
          "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        background: "bg-green-600",
        subtitle:
          "Before releasing your website to the public, we conduct rigorous testing to ensure everything functions correctly and address any bugs or issues.",
        description:
          "We test the website on various platforms, browsers, and devices to ensure a seamless user experience everywhere. Once we are satisfied with the test results and you are happy with the outcome, it's time for the launch. We assist you in setting up the website on your chosen web server and ensure that everything is configured correctly for a smooth launch. With our passion for web development and our commitment to realizing your vision, we are ready to create a custom website that exceeds your expectations. Contact us today to initiate the collaboration and take your vision to the next level!",
      },
    ],
  },
};

export const enTranslations = {
  nav,
  servicepages,
  buttons,
  services,
  paths,
  breadcrumbs,
  home,
  notFound,
  hamburgerMenuItems,
  contact,
  hamburgerLanguage,
  policy,
};

import {
  Breadcrumb,
  Buttons,
  Client,
  ClientTags,
  Contact,
  General,
  HamburgerMenuItem,
  Home,
  MetaDescription,
  Nav,
  NotFound,
  Paths,
  Policy,
  Service,
  ServicePage,
} from "../types/types";
import { common } from "./common";

const metadescriptions: MetaDescription[] = [
  {
    path: common.paths.home,
    title: "Web Agency in Borås | AppStract",
    description:
      "AppStract is a web agency in Borås that offers IT solutions for all needs. Our goal is to help you succeed in your business, and we have the tools to do it.",
  },
  {
    path: common.paths.contact,
    title: "Contact | AppStract",
    description:
      "Contact us today and we will help you with your IT needs. We offer a wide range of services to help you with your business.",
  },
  {
    path: common.paths.services,
    title: "Services | AppStract",
    description:
      "We offer a wide range of services to help you with your business. We offer a wide range of services to help you with your business.",
  },
  {
    path: common.paths.webDevelopment,
    title: "Web Development | AppStract",
    description:
      "We help you build a website that you can be proud of, and that your customers will love.",
  },
  {
    path: common.paths.seo,
    title: "Search Engine Optimization | AppStract",
    description:
      "We help you get better visibility on the internet, using various techniques such as SEO, SEM, and more.",
  },
  {
    path: common.paths.appDevelopment,
    title: "App Development | AppStract",
    description:
      "We help you build an app that your customers will love, and that will help you grow your business.",
  },
  {
    path: common.paths.clients,
    title: "Clients & Cases | AppStract",
    description: "We have helped many clients with their IT needs. Here are some of our cases.",
  },
  {
    path: common.paths.policy,
    title: "Privacy Policy | AppStract",
    description: "We take your privacy seriously. Read our privacy policy to learn more.",
  },
  {
    path: common.paths.notFound,
    title: "404 | AppStract",
    description:
      "Oops! Something went wrong. Looks like you're lost. Don't worry though, we're here to save you!",
  },
];

const general: General = {
  read_more: "Read more",
  current_lang: "en",
  short_lang: "sv",
};
const paths: Paths = {
  home: {
    link: common.paths.home,
    label: "Home",
  },
  contact: {
    link: common.paths.contact,
    label: "Contact",
  },
  services: {
    link: common.paths.services,
    label: "Services",
  },
  webDevelopment: {
    link: common.paths.webDevelopment,
    label: "Web Development",
  },
  seo: {
    link: common.paths.seo,
    label: "Search Engine Optimization",
  },
  appDevelopment: {
    link: common.paths.appDevelopment,
    label: "App Development",
  },
  clients: {
    link: common.paths.clients,
    label: "Clients & Cases",
  },
  policy: {
    link: common.paths.policy,
    label: "Privacy Policy",
  },
  notFound: {
    link: common.paths.notFound,
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

const toasts = {
  success: "Message sent! We will get back to you as soon as possible.",
  error: "Something went wrong. Please try again later.",
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
const clientTags: ClientTags = {
  showAll: "Show all",
  apps: "Apps",
  webapps: "Web apps",
  seo: "SEO",
};
const cases: Client[] = [
  {
    title: "PropertEase",
    subtitle:
      "Propertease is a comprehensive property management platform that provides users with essential tools for managing properties.",
    logo: "https://justifiedcoding.org/wp-content/uploads/2019/01/Client-Logo-Placeholder.png",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    description:
      "PropertEase revolutionerar fastighetsadministration genom att erbjuda effektiva verktyg för hantering av fastigheter och kunder, vilket resulterar i en smidigare och mer lönsam process.",
    link: "https://appstract.se",
    slug: "propertease",
    tags: [clientTags.apps, clientTags.webapps],
    active: true,
    bg: ["indigo-500"],
  },
  {
    title: "En vanlig sommelier",
    subtitle: "Coming soon",
    logo: "https://justifiedcoding.org/wp-content/uploads/2019/01/Client-Logo-Placeholder.png",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    description: "Coming soon",
    link: "https://envanligsommelier.se",
    slug: "en-vanlig-sommelier",
    tags: [clientTags.webapps],
    active: false,
    bg: ["red-600"],
  },
];

const clients = {
  description:
    "We at Appstract are proud to have worked with a diverse range of clients and projects. We love the variety that our industry offers and the opportunity to contribute to different sectors and projects. Below you can see a selection of our recent projects.",
  cases: cases,
};

export const services: Service[] = [
  {
    title: paths.webDevelopment.label,
    description:
      "We help you build a website that you can be proud of, and that your customers will love.",
    image:
      "https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png",
    link: paths.webDevelopment.link,
    bg: ["blue-800", "blue-600"],
  },
  {
    title: paths.seo.label,
    description:
      "We help you get better visibility on the internet, using various techniques such as SEO, SEM, and more.",
    image:
      "https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png",
    link: paths.seo.link,
    bg: ["bluegray-800", "indigo-600"],
  },
  {
    title: paths.appDevelopment.label,
    description:
      "We help you build an app that your customers will love, and that will help you grow your business.",
    image:
      "https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png",
    link: paths.appDevelopment.link,
    bg: ["cyan-800", "teal-600"],
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
        title: "Planning & analysis",
        hovertext: general.read_more,
        image:
          "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        background: "red-700",
        subtitle:
          "Our first and most crucial phase is to understand your vision and goals for the website.",
        description:
          "We conduct thorough discussions and workshops to capture all your desires and requirements. We also analyze your target audience, market trends, and competition to create a strategy that will be successful in the long term. With our experience and expertise in web development, we also provide advice and recommendations to optimize your website.",
      },
      {
        title: "Design & interface",
        hovertext: general.read_more,
        image:
          "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        background: "blue-500",
        subtitle: "Once we have a clear plan, we move on to the design phase.",
        description:
          "We create visual concepts that represent your brand identity while appealing to your target audience. We focus on creating a user-friendly and aesthetically pleasing website by designing intuitive navigation structures and an attractive visual design. We ensure that your website is responsive and adapts to different screen sizes to provide a consistent experience on all devices.",
      },
      {
        title: "Development",
        hovertext: general.read_more,
        image:
          "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        background: "orange-600",
        subtitle:
          "When the design is approved, we begin the process of translating the design into a functional website.",
        description:
          "We utilize the latest technologies and frameworks to build a stable and secure website. We prioritize creating scalable and flexible solutions to facilitate future upgrades and customizations. Throughout the development process, we maintain open communication and regular checkpoints to ensure that the outcome aligns with your expectations.",
      },
      {
        title: "Testing & launching",
        hovertext: general.read_more,
        image:
          "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        background: "green-600",
        subtitle:
          "Before releasing your website to the public, we conduct rigorous testing to ensure everything functions correctly and address any bugs or issues.",
        description:
          "We test the website on various platforms, browsers, and devices to ensure a seamless user experience everywhere. Once we are satisfied with the test results and you are happy with the outcome, it's time for the launch. We assist you in setting up the website on your chosen web server and ensure that everything is configured correctly for a smooth launch. With our passion for web development and our commitment to realizing your vision, we are ready to create a custom website that exceeds your expectations. Contact us today to initiate the collaboration and take your vision to the next level!",
      },
    ],
  },
  seo: {
    herodescription:
      "Improve your website's visibility and rankings on search engines with our SEO services. We optimize your website's content, structure, and performance to attract organic traffic and increase conversions.",
    introtitle: "Boost your online presence with effective SEO strategies",
    introsubtitle: "Unlock the potential of your website with our SEO expertise.",
    introdescription:
      "Our SEO services focus on enhancing your website's visibility in search engine results. By implementing proven strategies and techniques, we help you reach a wider audience and drive targeted traffic to your website. Whether you need on-page optimization, keyword research, link building, or technical SEO, our team of experts is ready to assist you.",
    parts: [
      {
        title: "Keyword research",
        hovertext: general.read_more,
        image:
          "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        background: "purple-500",
        subtitle:
          "We conduct thorough keyword research to identify the most relevant and valuable keywords for your business.",
        description:
          "Our team utilizes various tools and techniques to determine the keywords that your target audience is using to find products or services similar to yours. By incorporating these keywords strategically into your website's content and metadata, we can improve your website's visibility and attract more qualified traffic.",
      },
      {
        title: "On-page optimization",
        hovertext: general.read_more,
        image:
          "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        background: "orange-600",
        subtitle:
          "We optimize your website's structure and content for improved search engine visibility.",
        description:
          "Our team analyzes your website's structure, URLs, headings, and content to ensure they align with SEO best practices. We optimize your website's meta tags, image alt tags, internal linking, and other on-page elements to improve search engine crawlers' understanding of your website's content.",
      },
      {
        title: "Link building",
        hovertext: general.read_more,
        image:
          "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        background: "blue-600",
        subtitle:
          "We build high-quality backlinks to improve your website's authority and rankings.",
        description:
          "Our team employs effective link building strategies to acquire authoritative and relevant backlinks to your website. By earning these backlinks from reputable sources, your website's authority and credibility increase, leading to improved search engine rankings and organic traffic.",
      },
      {
        title: "Technical SEO",
        hovertext: general.read_more,
        image:
          "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        background: "green-600",
        subtitle:
          "We optimize your website's technical aspects to improve its performance and search engine crawlability.",
        description:
          "Our team addresses technical issues that may hinder your website's search engine visibility. We optimize website speed, ensure mobile-friendliness, fix broken links, and implement structured data markup, among other technical optimizations. By providing a seamless user experience and meeting search engine guidelines, your website's visibility and rankings can improve significantly.",
      },
    ],
  },
  appdevelopment: {
    herodescription:
      "Improve your app's visibility and reach on app stores with our ASO services. We optimize your app's metadata, keywords, and performance to attract organic downloads and increase conversions.",
    introtitle: "Boost your app's presence with effective ASO strategies",
    introsubtitle: "Unlock the potential of your app with our ASO expertise.",
    introdescription:
      "Our ASO services focus on enhancing your app's visibility in app store search results. By implementing proven strategies and techniques, we help you reach a wider audience and drive targeted downloads to your app. Whether you need app store optimization, keyword research, localization, or app performance optimization, our team of experts is ready to assist you.",
    parts: [
      {
        title: "Conceptualization",
        hovertext: general.read_more,
        image:
          "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        background: "purple-500",
        subtitle:
          "Define the app's purpose, target audience, and plan its features and functionality.",
        description:
          "In this initial phase, we brainstorm ideas, identify the target audience, and define the goals and objectives of your app. We plan its features, functionality, and user experience. This step involves market research, competitor analysis, and creating wireframes or prototypes to visualize the app's structure and flow.",
      },
      {
        title: "Design & user interface",
        hovertext: general.read_more,
        image:
          "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        background: "orange-600",
        subtitle:
          "Create an appealing and user-friendly design that aligns with your app's brand and purpose.",
        description:
          "During this phase, you design the visual elements of your app, including its layout, color scheme, typography, and icons. The goal is to create an intuitive and visually appealing user interface (UI) that reflects your app's brand identity.",
      },
      {
        title: "Development & testing",
        hovertext: general.read_more,
        image:
          "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        background: "blue-600",
        subtitle:
          "Build the app's backend, frontend, and conduct thorough testing to ensure its functionality and performance.",
        description:
          "In this stage, developers write code to implement the app's features and functionality. The backend development involves setting up servers, databases, and APIs to handle data and business logic. The frontend development focuses on building the user interface and integrating it with the backend. Thorough testing is conducted at each step to identify and fix bugs, ensuring the app's functionality, usability, and performance.",
      },
      {
        title: "Deployment & maintenance",
        hovertext: general.read_more,
        image:
          "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        background: "green-600",
        subtitle:
          "Deploy the app to app stores or platforms and provide ongoing maintenance and updates.",
        description:
          "Once the app is developed and tested, it is ready for deployment. This involves publishing it to app stores like the Apple App Store or Google Play Store, or deploying it to relevant platforms.\n\nAfter deployment, it's crucial to monitor user feedback, fix any issues, and release updates to enhance the app's functionality and address user needs. Ongoing maintenance, performance optimization, and regular updates ensure the app's longevity and user satisfaction.",
      },
    ],
  },
};

export const enTranslations = {
  nav,
  servicepages,
  buttons,
  general,
  services,
  paths,
  breadcrumbs,
  home,
  notFound,
  hamburgerMenuItems,
  contact,
  hamburgerLanguage,
  toasts,
  metadescriptions,
  policy,
  clients,
  clientTags,
};

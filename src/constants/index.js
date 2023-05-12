import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  flutter,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },

  {
    title: "Video Editor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "flutter",
    icon: flutter,
  }
];

const experiences = [
  {
    title: "Internship in Flutter Development",
    company_name: "Euphotech",
    icon: flutter,
    iconBg: "#383E56",
    date: "Nov 2019 - Nov 2020",
    points: [
      "Internship focused on developing and maintaining a mobile application using Flutter.",
      "Collaborating with other developers to create a high-quality product.",
      "Implementing responsive designs.",
    ],
  },
  {
    title: "Jr. Flutter Developer",
    company_name: "MySoftware",
    icon: flutter,
    iconBg: "#E6DEDD",
    date: "Dec 2020 - Feb 2021",
    points: [
      "Developing and maintaining a website using Flutter and other related technologies.",
      "Collaborating with other developers to create a high-quality product.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Jr. Flutter Developer",
    company_name: "ThinkProject",
    icon: flutter,
    iconBg: "#383E56",
    date: "Apr 2021 - Sep 2021",
    points: [
      "Developing and maintaining web and mobile applications using Flutter.",
      "Collaborating with other teams including product managers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring various devices compatibility.",
      "Participating in code reviews and being given feedback from superior developers.",
    ],
  },
  {
    title: "Jr. Flutter Developer",
    company_name: "CRMall",
    icon: flutter,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Dec 2022",
    points: [
      "Developing and maintaining a mobile application using Flutter, and then porting it to web.",
      "Collaborating with other teams including designers, product managers and other developers to create a high-quality product.",
      "Implementing responsive design and ensuring various devices and browsers compatibility.",
      "Participating in code reviews and being given feedback from superior developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

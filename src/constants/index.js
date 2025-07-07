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
  ana,
  tesla,
  pixel,
  php,
  gitlab,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  mySQL,
  tokenway,
  rally,
  nextjs,
  reltime,
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Responsive UI Developer",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "gitlab",
    icon: gitlab,
  },
  {
    name: "mySQL",
    icon: mySQL,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Ana Info Pvt Ltd",
    icon: ana,
    iconBg: "#383E56",
    date: "Jun 2022 - Jul 2023",
    points: [
      "Assisted in developing and maintaining web applications using React.js and related technologies.",
      "Collaborated with senior developers, designers, and product teams to contribute to project goals and feature development.",
      "Learned and applied responsive design principles to support mobile and cross-browser compatibility.",
      "Participated in code reviews, gaining feedback and improving coding standards and best practices.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Pixel Web Solutions",
    icon: pixel,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Present",
    points: [
      "Developed and maintained full-stack web applications using React.js for frontend and Node.js/Express for backend in a blockchain-focused environment.",
      "Collaborated closely with designers, product managers, and cross-functional teams to deliver scalable and secure decentralized applications (dApps).",
      "Led the resolution of critical bugs and technical issues, significantly improving performance and user experience across multiple projects.",
      "Successfully contributed to multiple end-to-end project deliveries, consistently meeting product milestones and deadlines.",
    ],
  }
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Reltime DEX",
    description:
      "Reltime DEX is a decentralized exchange platform that empowers users to securely swap tokens, provide and manage liquidity, and interact with various Web3 wallets across multiple supported blockchain networks. The platform features real-time trading charts, slippage control, transaction history, farming options, and support for staking to earn rewards. As a developer on the project, I contributed to building and optimizing essential functionalities such as token swaps, liquidity pools, staking mechanisms, cross-chain wallet integration, and user interface responsiveness—ensuring a seamless, secure, and efficient trading experience tailored for both novice and experienced crypto users.",
    tags: [
      {
        name: "nextjs",
        color: "grey-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "orange-text-gradient",
      },
    ],
    image: reltime,
    source_code_link: "https://dex.reltime.com/",
  },
  {
    name: "Token Way",
    description:
      "TokenWay is an advanced blockchain-based fundraising platform designed to help European SMEs and startups raise capital through the use of tokenized assets via ICOs and IEOs. The platform supports MiCA-compliant fundraising processes and features integrated KYC/KYB onboarding, audited smart contracts deployed on the Polygon network, and seamless fiat and crypto payment options. With real-time funding dashboards, peer-to-peer investment capabilities, and automated workflows, TokenWay ensures enhanced transparency, regulatory compliance, and secure asset management for both investors and businesses.",
    tags: [
      {
        name: "nextjs",
        color: "grey-text-gradient",
      },
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "orange-text-gradient",
      },
    ],
    image: tokenway,
    source_code_link: "https://tokenway.io/",
  },
  {
    name: "Rally",
    description:
      "RallyBT is a decentralized crypto trading platform that features a real-time order book system, allowing users to place limit and market orders for various token pairs. The platform is designed with a clean and responsive trading interface, offering features such as live trading view charts, order history, trade execution tracking, wallet integration, and token swapping. It ensures a smooth and fast user experience by optimizing performance for both web and mobile. As a developer, I contributed to implementing the order book logic, user trading flow, and enhancing real-time data updates for trades and order statuses.",
    tags: [
      {
        name: "nextjs",
        color: "grey-text-gradient",
      },
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "orange-text-gradient",
      },
    ],
    image: rally,
    source_code_link: "https://rallybt.com/",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };

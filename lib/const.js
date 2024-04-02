/*-------------------------- Navigation --------------------------*/

export const navLinks = [
  {
    name: "About",
    href: "/#about",
  },
  {
    name: "Experience",
    href: "/#experience",
  },
  {
    name: "Projects",
    href: "/#projects",
  },
  {
    name: "Contact",
    href: "/#contact",
  },
];

/*-------------------------- Section content --------------------------*/

// Use markdown link format to create links in strings
export const heroContent = {
  firstName: "Esegboria",
  lastName: "Osarhemen",
  title: "Front-end Developer",
  description: [
    "I create seamless and accessible digital experience for the web. From responsive designs to cutting-edge frameworks like [NextJS](https://nextjs.org/) and [VueJS](https://vuejs.org/), I navigate the ever-evolving tech landscape, ensuring every click is a delight.",
  ],
  sideDescription: "Building stunning products, crafting intuitive interfaces",
  email: "esegboria@gmail.com",
  github: "https://github.com/eseoooo",
};

export const aboutContent = {
  description: [
    "My journey in web development began in 2020 when I developed an interest in Web Scraping with Python. To effectively write web scraping code, I needed to have a strong foundation in HTML and CSS fundamentals. Since then, I have continuously immersed myself in the ever-evolving world of front-end technologies and have developed a strong foundation in HTML, CSS, and JavaScript.",

    "My most recent focus was building products for clients at [Kellton](https://www.kellton.com/). However, I am currently seeking new opportunities where I can leverage my skills to create meaningful digital experiences and contribute to innovative projects.",

    "When I'm not coding, you can find me working out at the gym, gaming online, or hanging out with friends.",
  ],
  sideDescription: ["Experience", "Get to know me"],
};

export const experienceContent = {
  jobs: [
    {
      id: 999,
      title: "Front-end Developer (Intermediate)",
      company: "Kellton",
      duration: { from: "April 2022", to: "August 2023" },
      descriptions: [
        "Develop intuitive interfaces for one of our clients, [Best Egg](https://www.bestegg.com/), an online lender specializing in personal loans. Ensure sleek, responsive designs tailored to borrowers with fair to good credit, enhancing their journey through the loan application process.",

        "Integrate with backend systems to guarantee the reliability and security of financial products. This was key in providing a smooth loan process and management, empowering both borrowers and lenders alike.",

        "Meticulous testing and documentation to maintain the highest standards of quality and accessibility across all frontend components.",

        "Collaborate with internal and client dev team for continuous improvement of their financial products.",

        "Track user behavior, demographic and audience segmentation, and engagement metrics for data-driven decision-making and improved user experience.",
      ],
      url: "https://www.kellton.com/",
      technologies: [
        "JavaScript",
        "Vue.js",
        "Tailwind CSS",
        "Python & Django",
        "HTML & CSS",
        "Jest",
        "Vitest",
        "Storybook",
        "Docker",
      ],
    },
    {
      id: 1000,
      title: "Web Development Support Specialist",
      company: "SkipTheDishes",
      duration: { from: "May 2020", to: "March 2022" },
      descriptions: [
        "Maintain, update, and implement changes to the internal operations website. This included regularly monitoring the website for any issues and ensuring the internal operations website remains operational.",

        "Handle daily escalations, and website feedback, and work with development to file bug reports, correct bugs and add new features to the platform.",

        "Properly prioritize bug fix requests and provide the most appropriate and effective solutions available.",

        "Deliver technical support and provide coaching to the internal team on our internal platform.",
      ],
      url: "https://www.skipthedishes.com/",
      technologies: ["JavaScript", "React", "HTML & CSS", "CSS Modules"],
    },
  ],
};

export const projectContent = {
  projects: [
    {
      id: 998,
      name: "Personal Website (V1)",
      description:
        "My first personal website showcasing my interests, achievements, and journey. Built with care and passion. Powered by [Next.js](https://nextjs.org/).",
      url: "https://www.esegboria.com/",
      github: "https://github.com/eseoooo/v1",
      technologies: [
        "HTML & CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
      imagePath: "/images/projects/portfolio-v1.png",
      imageAlt: `Personal Website (V1) hero section`,
    },
    {
      id: 999,
      name: "Flightnest",
      description:
        "Web app for tracking flights in real-time using the [Skyscanner API](https://www.partners.skyscanner.net/product/travel-api). Search for flights by city, airport, or IATA airport code. User account creation and authentication managed by [Firebase](https://firebase.google.com/). Bookmark and compare flight prices and schedules.",
      url: "https://flightnest.netlify.app/",
      github: "https://github.com/eseoooo/flightnest",
      technologies: [
        "HTML & CSS",
        "JavaScript",
        "React",
        "Redux",
        "CSS Modules",
        "Firebase",
      ],
      imagePath: "/images/projects/flightnest.png",
      imageAlt: "flightnest flight section",
    },
    {
      id: 1000,
      name: "Open Weather",
      description:
        "Simple weather web app built using the [OpenWeatherMap API](https://openweathermap.org/api) and the built-in JavaScript Geolocation API",
      url: "https://weatheropened.netlify.app/",
      github: "https://github.com/eseoooo/open-weather",
      technologies: ["HTML & CSS", "JavaScript", "React", "CSS Modules"],
      imagePath: "/images/projects/open-weather.png",
      imageAlt: "open weather app dashboard",
    },
  ],
};

export const footerContent = {
  description:
    "Designed, developed with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/), and deployed with [Vercel](https://vercel.com/) by Esegboria Osarhemen",
};

/*-------------------------- Metadata --------------------------*/
export const metadataObject = {
  metadataBase: new URL("https://esegboria.com"),
  title: "Esegboria Osarhemen",
  description:
    "Esegboria Osarhemen is a software engineer who builds accessible, inclusive products and digital experiences for the web",
  keywords: ["Esegboria", "Osarhemen", "Esegboria Osarhemen"],
  creator: "Esegboria Osarhemen",
  applicationName: "Esegboria Osarhemen",
  openGraph: {
    title: "Esegboria Osarhemen",
    description:
      "Esegboria Osarhemen is a software engineer who builds accessible, inclusive products and digital experiences for the web",
    url: "/",
    siteName: "Esegboria Osarhemen",
    images: {
      url: `/images/og.png`,
    },
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    apple: {
      url: "/images/favicon/apple-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    icon: [
      {
        url: "/images/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/images/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

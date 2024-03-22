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
  phone: 2042187799,
  github: "https://github.com/eseoooo",
};

export const aboutContent = {
  description: [
    "Hello there! My name is Esegboria, but you can call me Ese for short. I am a front-end developer who is passionate about creating user-friendly, accessible, responsive websites and web applications.",

    "My journey in web development began in 2020 when I developed an interest in Web Scraping with Python. To effectively write web scraping code, I needed to have a strong foundation in HTML and CSS fundamentals. Since then, I have continuously immersed myself in the ever-evolving world of front-end technologies and have developed a strong foundation in HTML, CSS, and JavaScript.",

    "My most recent focus was building products for clients at [Kellton](https://www.kellton.com/). However, I am currently seeking new opportunities where I can leverage my skills to create meaningful digital experiences and contribute to innovative projects.",

    "When I'm not coding, you can find me working out at the gym, gaming online, or hanging out with friends.",
  ],
  sideDescription: ["Experience", "Get to know me"],
};

export const experienceContent = {
  jobs: [
    {
      id: 1,
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
        "Vitest",
        "Storybook",
        "Docker",
      ],
    },
    {
      id: 2,
      title: "Web Development Support Specialist",
      company: "SkipTheDishes",
      duration: { from: "May 2020", to: "March 2022" },
      descriptions: [
        "Maintain, update, and implement changes to the internal operations website. This included regularly monitoring the website for any issues and ensuring that the internal operations website remains operational.",

        "Handle daily escalations, website feedback, and work with development to file bug reports, correct bugs and add new features to the platform.",

        "Properly prioritize requests and provide the most appropriate and effective solutions available.",

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
      name: "Personal Website V1",
      description:
        "My first personal website showcasing my interests, achievements, and journey. Built with care and passion and powered by [Next.js](https://nextjs.org/).",
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
      imageAlt: "esegboria.com version 1 hero section",
    },
  ],
};

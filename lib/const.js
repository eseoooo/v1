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
      Id: 1,
      title: "Front-end Developer",
      company: "Kellton",
      duration: { from: "May 2022", to: "Present" },
      description: "",
      technologies: ["NextJS", "ReactJS", "TailwindCSS", "TypeScript"],
    },
  ],
};

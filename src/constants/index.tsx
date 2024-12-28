import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a dedicated Developer specializing in ReactJS and NextJS, with a deep passion for web development and a commitment to building innovative, user-friendly, and efficient web applications. Over the years, I have honed my skills in crafting dynamic and interactive user interfaces that not only meet modern design standards but also provide exceptional user experiences.`;

export const ABOUT_TEXT = `My journey as a developer has been fueled by an insatiable curiosity and a drive to continuously learn and grow. I make it a priority to stay updated with the latest trends and advancements in web development, from emerging technologies to best practices, ensuring that the solutions I create are both cutting-edge and future-ready. Beyond technical skills, I place great value on writing clean, maintainable, and scalable code, as I believe these are the foundations of robust software development. Whether working independently or as part of a team, I thrive on solving complex challenges, optimizing performance, and delivering high-quality products that exceed expectations.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "OwwiMoney Website",
    image: project1,
    description:
      "OwwiMoney is a website that allows individuals to manage their daily expenses, aiming for financial prosperity.",
    technologies: [
      "HTML",
      "CSS",
      "TaildwindCSS",
      "RadixUI",
      "Reactjs",
      "Nextjs",
      "Nodejs",
      "MongoDB",
    ],
  },
  {
    title: "Twitter",
    image: project2,
    description:
      "Is a server that includes APIs that have basic Twitter functionality.",
    technologies: ["Nodejs", "ExpressJS", "MongoDB", "SocketIO"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "TailwindCSS", "Reactjs"],
  },
  {
    title: "Dish Order Website",
    image: project4,
    description:
      "As an ecommerce website, the food management allows real-time ordering and other basic functions.",
    technologies: [
      "HTML",
      "CSS",
      "ShadcnUI",
      "Reactjs",
      "Nextjs",
      "React query",
      "SocketIO",
    ],
  },
];

export const CONTACT = {
  address: "38/7 Street No.5, Linh Trung Ward, Thu Duc City",
  phoneNo: "+84 918 475 646",
  email: "duongtantien1@gmail.com",
};

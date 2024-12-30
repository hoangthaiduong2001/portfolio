import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a dedicated Developer specializing in ReactJS and NextJS, with a deep passion for web development and a commitment to building innovative, user-friendly, and efficient web applications. Over the years, I have honed my skills in crafting dynamic and interactive user interfaces that not only meet modern design standards but also provide exceptional user experiences.`;

export const ABOUT_TEXT = `My journey as a developer has been fueled by an insatiable curiosity and a drive to continuously learn and grow. I make it a priority to stay updated with the latest trends and advancements in web development, from emerging technologies to best practices, ensuring that the solutions I create are both cutting-edge and future-ready. Beyond technical skills, I place great value on writing clean, maintainable, and scalable code, as I believe these are the foundations of robust software development. Whether working independently or as part of a team, I thrive on solving complex challenges, optimizing performance, and delivering high-quality products that exceed expectations.`;

export const EXPERIENCES = [
  {
    year: "04/2023 - Present",
    role: "Frontend Developer",
    company: "Shinhan DS Vietnam",
    mainResponsibilities:
      "Integrated React into the project to enhance frontend capabilities. Developed a human resources management system. Expand responsibilities to develop a system for constructing an environment to initiate messages and databases for Korean partners. Collaborate with Korean development team to create CRUD, management admin pages.",
    mainAchievements:
      "Successfully implemented and applied React to the company's existing applications. Developed a successful website for constructing databases and messaging systems for partners. Built a website for initiating orders and showcasing products/service for partners.",
    technologies: [
      "Javascript",
      "Reactjs",
      "Nextjs",
      "Typescript",
      "TailwindCss",
      "MUI",
      "Storybook",
    ],
    projects: "ProjectTM(4 phases), Madiv-One, HRM, SOL, Internet Banking",
  },
  {
    year: "11/2022 - 03/2023",
    role: " Intern Frontend developer",
    company: "FPT Software",
    mainResponsibilities:
      " Participate in developing and building advertising and tourist room rental websites. Deployed services for websites, ensuring seamless implementation and optimal functionality.",
    mainAchievements:
      "Participate in website CRUD functions. Deploy and complete projects and hand over to customers.",
    technologies: ["Javascript", "Reactjs", "Redux", "TailwindCss", "Antd"],
    projects: "Hotel Booking, Advertising",
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
    github: "https://github.com/thoaiIT/OwwiMoney",
  },
  {
    title: "Twitter",
    image: project2,
    description:
      "Is a server that includes APIs that have basic Twitter functionality.",
    technologies: ["Nodejs", "ExpressJS", "MongoDB", "SocketIO"],
    github: "https://github.com/hoangthaiduong2001/node_twitter",
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
    github: "https://github.com/hoangthaiduong2001/next-app",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "TailwindCSS", "Reactjs", "Responsive"],
    github: "https://github.com/hoangthaiduong2001/portfolio",
  },
];

export const CONTACT = {
  address: "38/7 Street No.5, Linh Trung Ward, Thu Duc City",
  phoneNo: "+84 918 475 646",
  email: "duongtantien1@gmail.com",
};

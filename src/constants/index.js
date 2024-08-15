import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  nodejs,
  git,
  figma,
  docker,
  c,
  cpp,
  java,
  python,
  mysql,
  sqlsever,
  fpt,
  code_extension,
  hospital,
  pdf2md,
  sign,
  snake,
  store_java,
  sorting,
  mos,
  hust,
  phc,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work Experience",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
const educations =[ 
  {
    school: "Hanoi University of Science and Technology",
    major: "A3K23",
    logo: hust,
    iconBg: "#383E56",
    date: "12/2023 - 3/2024",
    points: [
      "I have studied basic subjects like Data Science, Algorithms, AI, Machine Learning, OOP, etc., and I have done some mini-projects in these subjects, which always receive the grade greater or equal 9/10. I'm also a research student at the AI center.",
      "I was selected for Student with Five Good Criteria which is given to top 1% of students in my university."
    ]
  },
  {
    school: "Phan Huy Chu School",
    major: "A3K23",
    logo: phc,
    iconBg: "#383E56",
    date: "9/2019 - 5/2021",
    points: [
      "I have studied basic subjects like Data Science, Algorithms, AI, Machine Learning, OOP, etc., and I have done some mini-projects in these subjects, which always receive the grade greater or equal 9/10. I'm also a research student at the AI center.",
      "I was selected for Student with Five Good Criteria which is given to top 1% of students in my university."
    ]
  },

]
const services = [
  {
    title: "Data Engineer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "AI Engineer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "My SQL",
    icon: mysql,
  },
  {
    name: "SQL Sever",
    icon: sqlsever,
  },

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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Analyst",
    company_name: "FPT",
    icon: fpt,
    iconBg: "#383E56",
    date: "12/2023 - 3/2024",
    points: [
      "Data Analyst: Specializing in academic data analysis, they uncover insights and know-how, offering solutions for structuring and segmenting data to support AI bot machine learning endeavors.",
      "Data Engineer: They construct data pipelines capable of processing diverse file formats like PDFs and Word documents, extracting essential information and converting it into Markdown for easy integration into AI systems",
      "Working with Retrieval-Augmented Generation (RAG): Data Engineers handle tasks such as text processing, chunking, embedding, and vectorization, enriching the AI’s comprehension and utilization of textual data, thereby enhancing its capabilities in retrieval-augmented generation techniques.",
    ],
  },
  
];

const certificates = [
  {
    certificate:
      "Google Professional Data Analytics.",
    link: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
  },
  {
    certificate:
      "IELTS 6.0 by British Council.",
    link: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/British_Council_logo.svg/2560px-British_Council_logo.svg.png",
  },
  {
    certificate:
      "Microsoft Office Specialist Excel 2016.",
    link: "",
    image: mos,
  },
  {
    certificate:
      "Microsoft Office Specialist Word 2013.",
    link: "",
    image: mos,
  },
  {
    certificate:
      "Microsoft Office Specialist Powerpoint 2013.",
    link: "",
    image: mos,
  },

];

const projects = [
  {
    name: "SortingDemonstrate",
    description:
      "This project is a graphical representation of basic sorting algorithms, designed to help users understand and visualize how different sorting techniques work.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
    ],
    image: sorting,
    source_code_link: "https://github.com/duongnguyen291/SortingDemonstrate",
  },
  {
    name: "Hospital Booking",
    description:
      "The project focuses on creating a Hospital Appointment Booking system to facilitate appointment scheduling for people. My responsibilities encompass project management, front-end development, and database management, specifically SQL.",
    tags: [
      {
        name: "EJS",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "SQL Sever",
        color: "blue-text-gradient",
      },
    ],
    image: hospital,
    source_code_link: "https://github.com/duongnguyen291/HospitalBooking",
  },
  {
    name: "Sign Language Recognition",
    description:
      "The primary goal of this project is to recognize sign language through live video and compare the accuracy and efficiency of these two approaches with existing state-of-the-art methods.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },

    ],
    image: sign,
    source_code_link: "https://github.com/duongnguyen291/Sign-Language-Recognition",
  },
  {
    name: "Convert PDF to Markdown",
    description:
      "This project focuses on automatically converting PDF files to Markdown (MD) format. The main goal is to create an efficient and flexible tool for converting documents from PDF to MD for LLMs trainning",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },

    ],
    image: pdf2md,
    source_code_link: "https://github.com/duongnguyen291/ConvertPDF2MD",
  },
  {
    name: "Code-lleague",
    description:
      "This AI assistant is designed to enhance developers' productivity by providing quick access to relevant information, such as programming language syntax, algorithms, and best practices.",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },

    ],
    image: code_extension,
    source_code_link: "https://github.com/duongnguyen291/ConvertPDF2MD",
  },
  {
    name: "Store and Cart Management System",
    description:
      "A Java-based DVD store application with JavaFX for browsing, purchasing, and managing DVDs using OOP principles.",
    tags: [
      {
        name: "Java",
        color: "pink-text-gradient",
      },
      {
        name: "JavaJX",
        color: "blue-text-gradient",
      },

    ],
    image: store_java,
    source_code_link: "https://github.com/duongnguyen291/OOP/tree/main/labs/AimsProjectWeek5",
  },
  {
    name: "Snake",
    description:
      "This project is a classic Snake game implemented in Java using the Swing library for the graphical user interface.",
    tags: [
      {
        name: "Java",
        color: "pink-text-gradient",
      },
      {
        name: "JavaJX",
        color: "blue-text-gradient",
      },

    ],
    image: snake,
    source_code_link: "https://github.com/duongnguyen291/OOP/tree/main/labs/AimsProjectWeek5",
  },
];

export { services, technologies, experiences, certificates, projects, educations };

export const personalInfo = {
  name: "Ajay Bhaskar Sanganaboina",
  shortName: "Ajay Bhaskar",
  location: "Guntur, India",
  phone: "9133653693",
  email: "ajay001298@gmail.com",
  linkedin: "https://www.linkedin.com/in/ajay-bhaskar-sanganaboina-902727258/",
  github: "https://github.com/ajayBhaskar21",
  tagline: "Full-Stack Developer & ML Enthusiast",
  bio: "A passionate Computer Science graduate skilled in building full-stack web applications and exploring machine learning. I love turning ideas into deployed, production-ready applications.",
};

export const education = [
  {
    institution: "Vignan's Foundation for Science, Technology and Research",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    location: "Vadlamudi, India",
    period: "Aug 2021 – May 2025",
    score: "CGPA: 8.76",
  },
  {
    institution: "Narayana Junior College",
    degree: "Intermediate (11th and 12th Grades) in MPC",
    location: "Guntur, India",
    period: "Jun 2019 – May 2021",
    score: "Percentage: 98.4%",
  },
  {
    institution: "ABC EM High School",
    degree: "10th Grade, State Board",
    location: "Piduguralla, India",
    period: "Jun 2018 – May 2019",
    score: "Grade Points: 10",
  },
];

export const skills = {
  "Programming Languages": ["Java", "Python", "C", "SQL"],
  "Web Technologies": ["HTML", "CSS", "JavaScript", "Spring Boot", "Node.js", "Express.js", "EJS", "React"],
  "Database": ["MySQL", "MongoDB"],
  "Tools / Platforms": ["GitHub", "Jupyter Notebook", "VS Code", "MySQL Workbench", "Maven", "Eclipse", "IntelliJ IDEA"],
};

export const projects = [
  {
    title: "ML-Driven Optimization of Process Parameters for Enhanced Pectin Yield",
    shortTitle: "Pectin Yield Optimization",
    tags: ["Machine Learning", "Deep Learning", "Python"],
    year: "2025",
    description: "Bioinformatics-oriented ML project predicting pectin yield from banana peel extraction parameters (pH, temperature, time, solid-to-liquid ratio).",
    highlights: [
      "Implemented ANN, SVR, Random Forest, Gradient Boosting, and XGBoost models",
      "Enhanced ANN achieved the best predictive accuracy for non-linear relationship modeling",
      "Applied Differential Evolution Algorithm for parameter optimization",
    ],
    link: "https://drive.google.com/file/d/1-EnrJkoNfHiUc5TY9TG6vgtStFDqf3Ks/view?usp=sharing",
    linkLabel: "View Research",
    github: null,
  },
  {
    title: "Book Store Management System",
    shortTitle: "Book Store System",
    tags: ["Spring Boot", "MySQL", "Java", "REST API"],
    year: "2024",
    description: "Backend system for a book store management application with book catalog management and order processing features.",
    highlights: [
      "RESTful APIs with Spring Boot for CRUD operations on books, orders, users, and reviews",
      "MySQL database with JPA annotations for seamless entity management",
      "Thorough API testing with Postman across various endpoints",
    ],
    link: null,
    linkLabel: null,
    github: "https://github.com/ajayBhaskar21/BookStoreSpringBoot",
  },
  {
    title: "Restaurant Menu Management Website",
    shortTitle: "Restaurant Management",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    year: "2023",
    description: "Full-stack MERN application for restaurant management with user authentication, menu management, order tracking, and reservation system.",
    highlights: [
      "RESTful APIs in Node.js for admin-only CRUD operations on menu items",
      "JWT-based authentication and authorization for secure access",
      "Frontend deployed on Vercel, backend on Render",
    ],
    link: "https://restaurant-frontend-tan.vercel.app/",
    linkLabel: "Live Demo",
    github: null,
  },
];

export const deployedApps = [
  {
    title: "Restaurant Menu Management",
    description: "A full-stack MERN restaurant management app with authentication, menu management, and order tracking.",
    tags: ["React", "Node.js", "MongoDB", "Express.js"],
    liveUrl: "https://restaurant-frontend-tan.vercel.app/",
    image: null,
  },
  {
    title: "Online Project Version Tracker",
    description: "Displays changes from previous versions of the project. Two versions of the projects should be uploaded as zip files.",
    tags: ["React", "FastApi", "Sqlite"],
    liveUrl: "https://zip-comparison-project-frontend.vercel.app/",
    image: null,
  },
  // Add more deployed apps here as:
  // {
  //   title: "App Name",
  //   description: "Brief description of the app",
  //   tags: ["Tech1", "Tech2"],
  //   liveUrl: "https://your-live-url.com",
  //   image: null,
  // },
];

export const certifications = [
  { name: "AWS Cloud Practitioner Certification", link: "https://drive.google.com/file/d/1-s0JXjooZffo4Zt121YRoRhznPBLnJrh/view?usp=sharing" },
  { name: "NPTEL - Programming in C, Internet of Things, Leadership and Team Effectiveness", link: null },
  { name: "Certified in Data Structures and Algorithms by Smart Interviews", link: null },
  { name: "PEC and BEC Certifications by Cambridge University", link: null },
  { name: "Career Essentials in Software Development by Microsoft and LinkedIn", link: null },
];

export const achievements = [
  {
    title: "Conference Paper Publication",
    description: "Published a research paper in IEEE Xplore.",
    year: "2024",
    link: "https://ieeexplore.ieee.org/abstract/document/10575035",
  },
  {
    title: "LeetCode Problem Solving",
    description: "Solved 200+ Data Structures and Algorithms problems on LeetCode.",
    year: "2025",
    link: "https://leetcode.com/u/ajay001298/",
  },
  {
    title: "TCS CodeVita Season 11",
    description: "Cleared Round 1 in TCS CodeVita Season 11 and received a certificate.",
    year: "2023",
    link: "https://drive.google.com/file/d/1IU-gMEJkMsUA88BwLbUr-S2axOidOfh2/view?usp=sharing",
  },
];

export const extracurriculars = [
  {
    title: "Vignan Mahotsav 2K23",
    description: "Contributed as a Registration Coordinator for Vignan Mahotsav 2K23.",
    year: "2023",
  },
  {
    title: "Hackathon - Vignan Srujanankura 2K23",
    description: "Participated in the Hackathon event held at Vignan Srujanankura 2K23.",
    year: "2023",
  },
  {
    title: "Sports Participation - Vignan Fests",
    description: "Actively participated in chess, badminton and kabaddi during Vignan Fests.",
    year: "2024",
  },
];

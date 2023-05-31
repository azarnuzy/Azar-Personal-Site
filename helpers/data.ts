// import { AboutData, ResumeData } from '../types';

const aboutData = {
  title: 'Student and Freelancer Web Development',
  description:
    'I am computer science student who has enthusiasm for something new about technology and highly motivated to become lifelong learner. Proficient in team collaboration, problem solving, good communication, likes to find new challenges and experiences.',
  profile: [
    {
      title: 'Full Name',
      value: 'Muhammad Azar Nuzy',
      icon: 'user',
    },
    {
      title: 'Location',
      value: 'Bandung, West Java, Indonesia',
      icon: 'map',
    },
    {
      title: 'Email',
      value: 'Muhammad Azar Nuzy',
      icon: 'mail',
    },
    {
      title: 'Hobbies',
      value: 'Sports, read novels, and read comics',
      icon: 'ball',
    },
  ],
  skills: [
    'HTML',
    'CSS',
    'Javascript',
    'NextJs',
    'Typescript',
    'Vue Js',
    'TailwindCSS',
    'Laravel',
    'Bootstrap',
    'C++',
    'C',
    'Flutter',
    'Figma',
    'Git',
    'Github',
    'Gitlab',
  ],
}

const resume = [
  {
    title: 'Education',
    icon: 'bookOpen',
    items: [
      {
        title: 'Bachelor Degree, Universitas Pendidikan Indonesia',
        date: 'Sept 2020 – Present',
        gpa: 'Current GPA: 3.81',
        description:
          'Activities and Societies: Google Developer Students Clubs UPI, BEM Kemakom, Competitive Programming Club, Generasi Baru Indonesia (GenBI).',
      },
      {
        title: 'SMA Negeri Cahaya Madani Banten Boarding School',
        date: 'July 2017 – July 2020',
        gpa: '',
        description:
          'Responsible to create a landing page site for a competition event held by the school.',
      },
    ],
  },
  {
    title: 'Experiences',
    icon: 'suitCase',
    items: [
      {
        title: 'Front End Web Developer Internship, Sagara Technology',
        date: 'March 2023 – May 2023',
        gpa: '',
        description: `Handle new features for the original content platform teknologi.id. Fixed bugs and optimized the platform's performance. Resliced the admin dashboard with a new design. Utilized Vue.js with the Quasar framework for development. \n Worked on bug fixes and improved the functionality of techconsulta.com. Implemented responsive design for better user experience. Developed new features to enhance the website. Utilized Next.js as the main tool for server-side rendering.`,
      },
      {
        title: 'Front End Web Developer Internship, Library UPI',
        date: 'February 2023 – April 2023',
        gpa: '',
        description:
          'Developed a responsive chatbot website using React.js during my internship at Library UPI. Integrated the chatbot with API services to enable seamless interaction with the library, information retrieval, and service access. Implemented a night mode feature.',
      },
      {
        title: 'Freelance Web Developer, Bandung',
        date: 'January 2022 – Present',
        gpa: '',
        description:
          'Developed new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using some languages to create the web page.',
      },
    ],
  },
  {
    title: 'Courses',
    icon: 'graduationCap',
    items: [
      {
        title: 'Front-End Javascript React, Binar Academy',
        date: 'July 2022 – Jan 2023',
        gpa: '',
        description: '',
      },
      {
        title: 'Front-End Web Developer Expert, Dicoding Indonesia',
        date: 'Dec 2021 – Jan 2022',
        gpa: '',
        description: '',
      },
      {
        title:
          'Junior Web Developer, Badan Nasional Sertifikasi dan Profesi (BNSP)',
        date: 'Sept 2021 – Oct 2021',
        gpa: '',
        description: '',
      },
    ],
  },
  {
    title: 'Volunteering',
    icon: 'star',
    items: [
      {
        title: 'Core Team, Google Developer Student Clubs UPI',
        date: 'Sept 2022 – Present',
        gpa: '',
        description:
          'Create and plan an event that held by Google Developer Student Clubs UPI and also stream that event with OBS platform',
      },
      {
        title: 'Streaming Division, P3RI Salman ITB 1443 H Bandung',
        date: 'March 2022 – May 2022',
        gpa: '',
        description:
          'Streaming during ramadhan activities at Masjid Salman ITB Using OBS as the main tool for streaming',
      },
    ],
  },
  {
    title: 'Honors & Rewards',
    icon: 'trophy',
    items: [
      {
        title: 'Top 10 Warriors in Code Run Frontend Warriors, Algobash ',
        date: 'Dec 2022',
        gpa: '',
        description: '',
      },
      {
        title:
          '3rd Place Competitive Programming Competition Dimas-TI AMLI 2022, Asosiasi MIPA LPTK Indonesia',
        date: 'June 2022 ',
        gpa: '',
        description: '',
      },
      {
        title: 'Awardee Bank Indonesia Scholarships 2022, Bank Indonesia',
        date: 'April 2022 - Present',
        gpa: '',
        description: '',
      },
      {
        title:
          '1st Place Competitive Programming Competition DoIt 2021, Universitas Singaperbangsa',
        date: 'June 2021',
        gpa: '',
        description: '',
      },
    ],
  },
  {
    title: 'Organizations',
    icon: 'star',
    items: [
      {
        title: 'Generasi Baru Indonesia UPI',
        date: 'April 2022 – Present',
        gpa: '',
        description:
          'Generasi Baru Indonesia (GenBI) is a community consisting of students receiving Bank Indonesia scholarships under Bak Indonesia. Successfully run a program to develop UMKM in one of the villages in Bandung in order to support the G20 and I was in charge of logistic division',
      },
      {
        title: 'BEM Kemakom FPMIPA UPI',
        date: 'Jan 2022 – Jan 2023',
        gpa: '',
        description:
          'Succeeded in holding a public lecture with the theme of cyber security by presenting one of the competent speakers in that field and I was the head of the event',
      },
    ],
  },
]

const projects = [
  {
    title: 'Tax Consultant Website',
    type: 'Website',
    description:
      'Build using Next.js, website for tax consultants using Next.js. This website provides users with a seamless experience to inquire about consultation schedules. There is admin page for manage the consultation schedules',
    linkProject: 'https://konsultan-pajak.netlify.app/',
    linkGithub: 'https://github.com/azarnuzy/konsultan-pajak',
    techStack: '',
    imgUrl: 'taxconsultant.png',
  },
  {
    title: 'Chatbot Library UPI',
    type: 'Website',
    description:
      'A responsive chatbot website using React.js. Integrated the chatbot with API services to enable seamless interaction with the library, information retrieval, and service access. Implemented a night mode feature',
    linkProject: 'https://v1-dev-chatbot-upi.netlify.app/',
    linkGithub: 'https://github.com/azarnuzy/chatbot-library-upi',
    techStack: 'React JS',
    imgUrl: 'chatbot.png',
  },
  {
    title: 'SDN Ciwaregu Website',
    type: 'Website',
    description:
      'Build using Next.js, the SDN Ciwaregu website provides information about the school and includes a registration feature for new students. It also features an admin page for managing content and registrations.',
    linkProject: 'https://v1-dev-sdciwaregu.netlify.app/',
    linkGithub: 'https://github.com/azarnuzy/sd-ciwaregu-1-fe',
    techStack: '',
    imgUrl: 'sdciwaregu.png',
  },
  {
    title: 'Personal Portofolio Website',
    type: 'Website',
    description:
      'Personal portfolio that can be easily used by anyone by following the instructions in the GitHub repository. Built with Next.js, this portfolio template features a dark mode and responsive design.',
    linkProject: 'https://azar-personal-site.netlify.app/',
    linkGithub: 'https://github.com/azarnuzy/Personal-Website',
    techStack: '',
    imgUrl: 'personalsite.png',
  },
  {
    title: 'E-Flight Web App',
    type: 'Website',
    description:
      'A website to book flights was built using react for frontend and java for backend. My role for this project as a frontend lead.',
    linkProject: 'https://flyket.netlify.app/',
    linkGithub: 'https://github.com/azarnuzy/E-Flight-Final-Project',
    techStack: '',
    imgUrl: 'eflight.png',
  },
  {
    title: 'SiManuk (Sistem Informasi Peminjaman Ruangan Kampus)',
    type: 'Website',
    description:
      'A website to provide availability room in campus so people inside campus can rent the room easily. This website was built using Laravel and bootstrap.',
    linkProject: '',
    linkGithub: 'https://github.com/azarnuzy/Rent-Room-App',
    techStack: '',
    imgUrl: 'simanuk.jpg',
  },
  {
    title: 'Chatbot Library UPI',
    type: 'Website',
    description:
      'A responsive chatbot website using React.js. Integrated the chatbot with API services to enable seamless interaction with the library, information retrieval, and service access. Implemented a night mode feature',
    linkProject: 'https://v1-dev-chatbot-upi.netlify.app/',
    linkGithub: 'https://github.com/azarnuzy/chatbot-library-upi',
    techStack: 'React JS',
    imgUrl: 'chatbot.png',
  },
  {
    title: 'Movie Catalog',
    type: 'Website',
    description:
      'A website to provide up to date movie catalog. The source movie data are from https://developers.themoviedb.org/3 and this web app was built by ReactJs and Redux',
    linkProject: 'http://new-react-movie-db-app-with-redux.vercel.app/',
    linkGithub: 'https://github.com/azarnuzy/New-React-Movie-DB-App-with-Redux',
    techStack: 'React JS',
    imgUrl: 'movielist.png',
  },
  {
    title: 'Recipe Catalog',
    type: 'Website',
    description:
      'A website to provide recipe catalog. The source recipe data are from https://www.themealdb.com/api.php and this web app was built by ReactJs',
    linkProject: 'https://meal-db-reactjs.netlify.app/',
    linkGithub: 'https://github.com/azarnuzy/meal-db-react-js',
    techStack: 'React JS',
    imgUrl: 'recipe.png',
  },
  {
    title: 'Restaurant Catalog',
    type: 'Website',
    description:
      'A website to provide restaurant catalog. This project is built to completed expert front end course in dicoding and the tech stack is using html, css, and vanilla javascript',
    linkProject: 'https://azarnuzy.github.io/Restaurant-Apps/',
    linkGithub: 'https://github.com/azarnuzy/Restaurant-Apps',
    techStack: '',
    imgUrl: 'resto.png',
  },
  {
    title: 'Online Course Landing Page',
    type: 'Website',
    description:
      'Landing page website to offer online course to student who want to test to join the high school',
    linkProject: 'https://azarnuzy.github.io/courseMateBundle/',
    linkGithub: 'https://github.com/azarnuzy/CourseMate',
    techStack: '',
    imgUrl: 'coursemate.jpg',
  },
]

export { resume, projects, aboutData }

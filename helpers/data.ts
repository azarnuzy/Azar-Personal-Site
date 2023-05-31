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
    type: '',
    description:
      'Build using Next.js, website for tax consultants using Next.js. This website provides users with a seamless experience to inquire about consultation schedules. There is admin page for manage the consultation schedules',
    linkProject: '',
    linkGithub: '',
    techStack: '',
    imgUrl: '',
  },
  {
    title: 'SDN Ciwaregu Website',
    type: '',
    description:
      'Build using Next.js, the SDN Ciwaregu website provides information about the school and includes a registration feature for new students. It also features an admin page for managing content and registrations.',
    linkProject: '',
    linkGithub: '',
    techStack: '',
    imgUrl: '',
  },
  {
    title: 'Personal Portofolio Website',
    type: '',
    description:
      'Personal portfolio that can be easily used by anyone by following the instructions in the GitHub repository. Built with Next.js, this portfolio template features a dark mode and responsive design.',
    linkProject: '',
    linkGithub: '',
    techStack: '',
    imgUrl: '',
  },
  {
    title: 'E-Flight Web App',
    type: '',
    description:
      'A website to book flights was built using react for frontend and java for backend. My role for this project as a frontend lead.',
    linkProject: '',
    linkGithub: '',
    techStack: '',
    imgUrl: '',
  },
  {
    title: 'SiManuk (Sistem Informasi Peminjaman Ruangan Kampus)',
    type: '',
    description:
      'A website to provide availability room in campus so people inside campus can rent the room easily. This website was built using Laravel and bootstrap.',
    linkProject: '',
    linkGithub: '',
    techStack: '',
    imgUrl: '',
  },
]

export { resume, projects, aboutData }

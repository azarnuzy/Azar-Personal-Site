declare namespace MyProject {
  interface Profile {
    fullName: string
    location: string
    email: string
    hobbies: string
    languages: string
  }

  interface Education {
    title: string
    date: string
    gpa: string
    description: string
  }

  interface Experience {
    title: string
    date: string
    descriptions: string[]
  }

  interface Course {
    title: string
    date: string
  }

  interface Volunteering {
    title: string
    date: string
    description: string
  }

  interface HonorReward {
    title: string
    date: string
  }

  interface Organization {
    title: string
    date: string
    description: string
  }

  interface Project {
    title: string
    type: string
    description: string
    linkProject: string
    linkGithub: string
    techStack: string
    imgUrl: string
  }

  interface AboutData {
    title: string
    description: string
    profile: Profile
    skills: string[]
  }

  interface ResumeData {
    education: Education[]
    experiences: Experience[]
    courses: Course[]
    volunteering: Volunteering[]
    honorsRewards: HonorReward[]
    organizations: Organization[]
  }
}

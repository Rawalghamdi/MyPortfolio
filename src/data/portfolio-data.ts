// Portfolio data

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github?: string;
  website?: string;
}

export interface Skill {
  name: string;
  category: 'programming' | 'web' | 'devops' | 'tools' | 'languages';
  icon?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  honors?: string[];
  description?: string;
}

export interface Course {
  name: string;
  provider: string;
  date: string;
  description?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  type: 'web' | 'mobile' | 'desktop' | 'system' | 'network';
  status: 'completed' | 'in-progress' | 'planning';
  link?: string;
  github?: string;
}

export interface VolunteerWork {
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface PortfolioData {
  contact: ContactInfo;
  bio: string;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  courses: Course[];
  projects: Project[];
  volunteer: VolunteerWork[];
}

export const portfolioData: PortfolioData = {
  contact: {
    name: "Rawan Alghamdi",
    title: "Software Developer",
    email: "raw.alghamdii@gmail.com",
    phone: "+966509020051",
    linkedin: "https://linkedin.com/in/rawanalghamdi1",
    github: "https://github.com/Rawalghamdi",
  },

  bio: "Recent Computer Science graduate with hands-on experience in full-stack development and DevOps through internships and academic projects. Comfortable building responsive web applications with React, ASP.NET Core, and Laravel, and deploying cloud infrastructure with Docker, Kubernetes, Terraform, and Azure.",

  skills: [
    // Programming
    { name: "Python", category: "programming" },
    { name: "Java", category: "programming" },
    { name: "JavaScript", category: "programming" },

    // Web Development
    { name: "React", category: "web" },
    { name: "HTML", category: "web" },
    { name: "CSS", category: "web" },
    { name: "Tailwind CSS", category: "web" },
    { name: "Bootstrap", category: "web" },
    { name: "ASP.NET Core MVC", category: "web" },
    { name: "Laravel", category: "web" },
    { name: "REST APIs", category: "web" },

    // DevOps & Cloud
    { name: "Docker", category: "devops" },
    { name: "Kubernetes", category: "devops" },
    { name: "Terraform", category: "devops" },
    { name: "Microsoft Azure", category: "devops" },
    { name: "Azure DevOps", category: "devops" },
    { name: "CI/CD Pipelines", category: "devops" },
    { name: "Git", category: "devops" },

    // Languages
    { name: "Arabic (Native)", category: "languages" },
    { name: "English (C1 — IELTS)", category: "languages" },
  ],

  experience: [
    {
      title: "DevOps Engineering Intern",
      company: "Saudi Digital Academy",
      location: "Saudi Arabia",
      startDate: "Feb 2025",
      endDate: "May 2025",
      description: [
        "Designed and maintained CI/CD pipelines using Azure DevOps, streamlining build and deployment workflows and removing error-prone manual release steps.",
        "Containerized and orchestrated a 3-tier application using Docker and Kubernetes; provisioned Azure infrastructure with Terraform (IaC) for consistent, repeatable deployments.",
        "Configured Prometheus and Grafana monitoring dashboards to track real-time system health metrics, improving visibility and incident response.",
        "Collaborated with a team of engineers to apply DevOps best practices across the software delivery lifecycle, including Git-based version control workflows.",
      ],
      technologies: ["Azure DevOps", "Docker", "Kubernetes", "Terraform", "Prometheus", "Grafana", "Git"],
    },
    {
      title: "Web Development Intern",
      company: "Deanship of Graduate Studies, King Abdulaziz University",
      location: "Jeddah, Saudi Arabia",
      startDate: "Jun 2023",
      endDate: "Aug 2023",
      description: [
        "Developed and launched a chatbot-integrated web platform that reduced incoming support requests by 40%, lowering staff workload and average response time.",
        "Designed responsive, accessible UIs across multiple breakpoints using HTML, CSS, and Bootstrap, improving usability and cross-device compatibility.",
        "Worked with stakeholders to gather and translate requirements into deployable features, delivering all milestones on schedule.",
      ],
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    },
  ],

  education: [
    {
      degree: "B.Sc. Computer Science",
      institution: "King Abdulaziz University",
      location: "Jeddah, Saudi Arabia",
      startDate: "Sep 2019",
      endDate: "Jun 2024",
      gpa: "4.78 / 5.00",
      honors: ["First-Class Honors"],
    },
  ],

  courses: [
    { name: "Azure AI Fundamentals (AI-900)", provider: "Microsoft", date: "Dec 2025" },
    { name: "DevOps Bootcamp", provider: "Saudi Digital Academy", date: "May 2025" },
    { name: "ASP.NET Core MVC", provider: "Tuwaiq Academy", date: "Jan 2025" },
    { name: "Advanced React", provider: "Meta", date: "Sep 2024" },
  ],

  projects: [
    {
      title: "ADMS — Academic Department Management System",
      description:
        "Role-based web application for KAU's Computer Science Department supporting 5 user roles, automating administrative workflows and improving operational efficiency by 30%.",
      type: "web",
      status: "completed",
      technologies: ["Laravel", "Bootstrap", "MySQL"],
      features: [
        "Five distinct user roles with tailored permissions",
        "Automated common departmental administrative workflows",
        "Improved operational efficiency by around 30%",
      ],
    },
    {
      title: "Cloud-Native Three-Tier Application",
      description:
        "Migrated a 3-tier application to Azure with fully containerized services, automated provisioning, and pipeline-driven deployment.",
      type: "system",
      status: "completed",
      technologies: ["Azure", "Docker", "Kubernetes", "Terraform", "Azure DevOps"],
      features: [
        "Containerized all services and orchestrated them with Kubernetes",
        "Automated infrastructure provisioning with Terraform",
        "100% pipeline-driven deployment via Azure DevOps CI/CD",
      ],
    },
  ],

  volunteer: [],
};

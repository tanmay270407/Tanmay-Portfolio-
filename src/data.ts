import { Github, Linkedin, Mail } from 'lucide-react';
import { PortfolioData } from './types';
import profilephoto from './assets/images/profilepic.jpg';
import smartindiahackathon from './assets/images/SIH2025.jpg';
import digitalindiatalkshow from './assets/images/talkshow.jpg';
import cyberpeace from './assets/images/cyberpeace_summit_26.jpg';

export const PORTFOLIO_DATA: PortfolioData = {
  header: {
    name: "Tanmay Kumar",
    logoText: "T.",
    navLinks: [
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Milestones", href: "#moments" },
      { name: "Education", href: "#education" },
      { name: "Contact", href: "#contact" },
    ],
  },
  hero: {
    name: "Tanmay Kumar",
    title: "AI/ML Enthusiast | CSE Student",
    university: "Galgotias University",
    pitch: "CSE student, final stretch of degree. Spend my time building systems and web apps, learning as go.",
    resumeUrl: "/Tanmay_Kumar_Resume.pdf", // Add your resume link here
    photoUrl: profilephoto, // Replace with your real photo path
    socials: [
      { name: "GitHub", url: "https://github.com/tanmay270407", icon: Github },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/tanmay-kumar-219a322a9/", icon: Linkedin },
      { name: "Email", url: "mailto:tanmay270504@gmail.com", icon: Mail },
    ]
  },
  about: {
    paragraphs: [
      "B.Tech CSE (AI/ML) student graduating in 2028, passionate about software development, AI, and building practical technology solutions.",
      "I have hands-on experience with Java, Python, SQL, JavaScript, HTML/CSS, AI/ML, and REST APIs. I enjoy developing applications, solving problems, and exploring new technologies to strengthen my technical skills.",
      "I actively participate in hackathons and technical activities, where I get opportunities to turn ideas into working solutions, collaborate with teams, and continuously learn and grow as a developer."
    ],
    department: "B.Tech CSE(AIML) Galgotias University"
  },
  skills: [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C", "SQL"]
    },
    {
      category: "AI & ML",
      items: [
        "TensorFlow",
        "PyTorch",
        "Scikit-Learn",
        "OpenCV",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Hugging Face",
        "Generative AI"
      ]
    },
    {
      category: "Web & Tools",
      items: [
        "React",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Node.js",
        "REST APIs",
        "Git",
        "GitHub",
        "Docker",
        "MySQL",
        "PostgreSQL",
        "Supabase"
      ]
    }
  ],
  projects: [
    {
      title: "SpeakEase — AI-Assisted Stammering Support Platform",
      description: "SpeakEase is an AI-assisted platform supporting people who stammer through speech practice, AI-assisted analysis, progress tracking, and SLP guidance. Key features include structured exercises, SLP review, live therapy sessions, and an AI-assisted Clinical Assistant. AI assists, humans validate, and clinicians remain responsible for decisions.",
      tags: ["AI/ML", "Speech AI", "TypeScript", "Healthcare"],
      category: "AI/ML",
      githubUrl: "https://github.com/tanmay270407/SpeakEase",
      liveUrl: ""
    },
    {
      title: "Foundly",
      description: "Foundly is a college-specific Lost & Found platform that helps students report, discover, and recover lost items securely. It uses AI-assisted matching to identify potential item matches, while College Admins verify claims and manage safe handovers. Built with Supabase, Gemini AI, Resend, and Vercel, Foundly provides secure, college-based access with role-based authentication and RLS.",
      tags: ["AI/ML", "Supabase", "Gemini AI", "React"],
      category: "AI/ML",
      githubUrl: "https://github.com/tanmay270407/Foundly",
      liveUrl: ""
    },
    {
      title: "Library Management System",
      description: "Library Management System is a software application designed to manage library operations digitally. It allows librarians to manage books, students, issue and return records, due dates, and fines efficiently. It reduces manual work, keeps records organized, and makes searching and tracking books faster and easier.",
      tags: ["Java", "SQL", "Systems"],
      category: "Java",
      githubUrl: "https://github.com/tanmay270407/library-management-system",
      liveUrl: ""
    }
  ],
  moments: [
    {
      image: cyberpeace,
      title: "at the Nagarro Office, Gurgaon",
      event: "(Runner-Up) at Hack & Build 2026",
      date: "",
      link: "https://www.linkedin.com/posts/tanmay-kumar-219a322a9_hackandbuild2026-tech4hack-hackathon-ugcPost-7506935591381573632-d66-/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEpeibUBBFGsOZ7HP1LAEGNShcygJdXavTU"
    },
    {
      image: digitalindiatalkshow,
      title: "Quiz winner",
      event: "Digital India Talk Show at Galgotias University",
      date: "",
      link: "https://www.linkedin.com/posts/tanmay-kumar-219a322a9_galgotiasuniversity-digitalindiashowtalk-activity-7397951186852687872-KX9T?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEpeibUBBFGsOZ7HP1LAEGNShcygJdXavTU"
    },
    {
      image: smartindiahackathon,
      title: "Selected internal round in Galgotias University",
      event: "Smart India Hackathon",
      date: "2025",
      link: "https://www.linkedin.com/posts/tanmay-kumar-219a322a9_smartindiahackathon-innovation-teamwork-activity-7375852127392321536-_J-4?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEpeibUBBFGsOZ7HP1LAEGNShcygJdXavTU"
    }
  ],
  education: [
    {
      college: "Galgotias University",
      degree: "B.Tech in Computer Science & Engineering (AI/ML)",
      cgpa: "",
      year: "2024 - 2028"
    },
    {
      college: "Jaypee Public School",
      degree: "Senior Secondary",
      cgpa: "",
      year: "2021 - 2024"
    },
    {
      college: "Ideal Public School",
      degree: "Secondary",
      cgpa: "",
      year: "2019 - 2021"
    }
  ],
  contact: {
    email: "tanmay270504@gmail.com",
    github: "https://github.com/tanmay270407",
    linkedin: "https://www.linkedin.com/in/tanmay-kumar-219a322a9/",
    message: "I'm currently looking for new opportunities and collaborations. Feel free to reach out!"
  },
  footer: {
    text: "© 2026 Tanmay Kumar. Built with React and Tailwind CSS."
  }
};

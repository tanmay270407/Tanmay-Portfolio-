import { Github, Linkedin, Mail } from 'lucide-react';
import profilephoto from './assets/images/profilepic.jpg';
import smartindiahackathon from './assets/images/SIH2025.jpg';
import digitalindiatalkshow from './assets/images/talkshow.jpg';
import cyberpeace from './assets/images/cyberpeace.jpg';

export const PORTFOLIO_DATA = {
  header: {
    name: "Tanmay Kumar",
    logoText: "T.",
    navLinks: [
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Moments", href: "#moments" },
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
    bio: "I'm a B.Tech student in Computer Science & Engineering with a specialization in AI and Machine Learning. I am passionate about exploring the intersection of data, algorithms, and human-centric design.",
    focus: "Currently focusing on deep learning models, natural language processing, and building robust full-stack applications to deploy AI solutions."
  },
  skills: [
    {
      category: "Languages",
      items: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C", "SQL"]
    },
    {
      category: "ML & Data Science",
      items: ["TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "NumPy"]
    },
    {
      category: "Web & Tools",
      items: ["React", "Tailwind CSS", "Node.js", "Git", "Docker"]
    }
  ],
  projects: [
    {
      title: "CampusFind_AI",
      description: "An AI-powered platform to help students navigate campus facilities, optimize routes, and discover university resources intelligently.",
      tags: [],
      githubUrl: "https://github.com/tanmay270407/CampusFind_AI",
      liveUrl: ""
    },
    {
      title: "Online Fitness Training Platform",
      description: "A comprehensive platform for online fitness training with workout tracking and personalized plans.",
      tags: [],
      githubUrl: "https://github.com/tanmay270407/online-fitness-training-platform",
      liveUrl: "" // Leave empty if no live demo
    },
    {
      title: "Library Management System",
      description: "A comprehensive system to manage library inventory, track book borrowing, and handle student records efficiently.",
      tags: [],
      githubUrl: "https://github.com/tanmay270407/library-management-system",
      liveUrl: ""
    }
  ],
  moments: [
    {
      image: smartindiahackathon,
      title: "Selected internal round in Galgotias University",
      event: "Smart India Hackathon",
      date: "2025"
    },
    {
      image: digitalindiatalkshow,
      title: "Quiz winner",
      event: "Digital India Talk Show at Galgotias University",
      date: ""
    },
    {
      image: cyberpeace,
      title: "CyberPeace Summit 26",
      event: "At Bharat Mandapam, New Delhi",
      date: ""
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
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    message: "I'm currently looking for new opportunities and collaborations. Feel free to reach out!"
  },
  footer: {
    text: "© 2026 Tanmay Kumar. Built with React and Tailwind CSS."
  }
};

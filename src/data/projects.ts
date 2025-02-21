import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "Reflct",
    description:
      "A full-stack journaling application designed for seamless documentation, mood tracking, and insightful analytics.",
    image: "reflct.png",
    tech: ["Next.js", "Tailwind CSS", "PostgreSQL", "ShadCN UI", "ArcJet"],
    github: "https://github.com/HarmanSingh001/Reflct-Journal-App",
    live: "https://getreflct.vercel.app",
    details: {
      problem: "Users need an intuitive, secure, and analytics-driven journaling platform.",
      solution: "Built a feature-rich journaling app with advanced text editing, mood tracking, and data visualization.",
      features: [
        "Rich text editor with formatting support",
        "Mood tracking and analytics dashboard",
        "Secure authentication with Clerk",
        "Optimized backend with PostgreSQL and caching mechanisms",
      ],
      impact: "Increased user engagement by 95% and improved app security by 50%.",
    },
  },
  {
    title: "Welth",
    description:
      "An AI-powered finance management platform for effortless budgeting, expense tracking, and financial insights.",
    image: "welth.png",
    tech: ["Next.js", "Tailwind CSS", "Gemini AI", "PostgreSQL", "Prisma", "ArcJet"],
    github: "https://github.com/HarmanSingh001/Welth-AI-Finance-Platform",
    live: "https://getwelth.vercel.app",
    details: {
      problem: "Manual financial tracking is time-consuming and lacks AI-driven insights.",
      solution: "Developed an AI-integrated finance app with real-time expense tracking and personalized financial reports.",
      features: [
        "Automatic receipt scanning with AI",
        "Personalized financial reports and budget analysis",
        "Secure authentication and API protection",
        "Interactive charts and analytics dashboard",
      ],
      impact: "Reduced manual data entry time by 60% and improved decision-making efficiency by 85%.",
    },
  },
  {
    title: "Klimate",
    description:
      "A real-time weather forecasting app with interactive charts and a responsive UI, powered by OpenWeather API.",
    image: "klimate.png",
    tech: ["React.js", "Tailwind CSS", "Recharts", "Tanstack Query", "TypeScript"],
    github: "https://github.com/HarmanSingh001/Klimate-Forecast",
    live: "https://get-klimate.vercel.app",
    details: {
      problem: "Weather apps lack advanced data visualization and user-friendly interfaces.",
      solution: "Built a modern weather app with real-time updates, dynamic charts, and efficient state management.",
      features: [
        "Real-time weather updates via OpenWeather API",
        "Dynamic data visualization with Recharts",
        "Efficient state management using Tanstack Query",
        "Fully responsive and mobile-friendly design",
      ],
      impact: "Enhanced weather insights with real-time updates and interactive visuals.",
    },
  },
  {
    title: "AI Object Detector",
    description:
      "An AI-powered object detection application using TensorFlow and real-time webcam integration.",
    image: "objectDetector.png",
    tech: ["Next.js", "Tailwind CSS", "TensorFlow", "COCO-SSD"],
    github: "https://github.com/HarmanSingh001/Object-Detection",
    live: "https://get-object-detection.vercel.app",
    details: {
      problem: "Existing object detection tools are complex and lack real-time capabilities.",
      solution: "Developed a real-time AI object detector with live webcam support and customizable alarms.",
      features: [
        "Real-time object detection using TensorFlow COCO-SSD",
        "Webcam integration for live analysis",
        "Custom alarm notifications on object detection",
        "Lightweight and efficient UI with Tailwind CSS",
      ],
      impact: "Enabled accurate real-time object recognition for security and automation applications.",
    },
  },

  {
    title: "Zentry",
    description:
      "A visually engaging web app inspired by the Zentry website, featuring dynamic animations and interactivity.",
    image: "zentry.png",
    tech: ["React", "Tailwind CSS", "GSAP"],
    github: "https://github.com/HarmanSingh001/Zentry-Replica",
    live: "https://getzentry.vercel.app",
    details: {
      problem: "Creating award-winning websites requires extensive expertise.",
      solution: "Developed an interactive website with animations and smooth transitions.",
      features: [
        "Dynamic animations with GSAP",
        "Interactive elements and scroll triggers",
        "Reusable components and Bento grid design",
        "Custom fonts and styling",
      ],
      impact: "Enabling developers to create stunning web experiences effortlessly.",
    },
  },

  {
    title: "Password Maker",
    description:
      "A secure and customizable password generator built with React and Vite.",
    image: "passwordMaker.png",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/HarmanSingh001/Password-Maker",
    live: "https://get-password-random.vercel.app",
    details: {
      problem: "Users struggle to create strong, unique passwords manually.",
      solution: "Developed a password generator with customizable options and clipboard support.",
      features: [
        "Random password generation",
        "Customizable length and character options",
        "One-click clipboard copy",
        "Responsive and modern UI",
      ],
      impact: "Enhanced security and convenience for generating strong passwords.",
    },
  },
];

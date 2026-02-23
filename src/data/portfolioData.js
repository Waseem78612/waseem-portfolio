// src/data/portfolioData.js
// ⭐ Edit THIS file to update your entire portfolio!

import myPhoto from "../assets/photo.jpg";

export const OWNER = {
  name:     "Waseem Sajjad",
  initials: "WS",
  tagline:  "Fresher Frontend Developer — learning by building.",
  bio:      "I'm a fresher frontend web developer from Pakistan, currently focused on building real projects with React. I started with HTML and CSS, picked up JavaScript, and now I'm working hard to grow into a professional developer. Every project I ship is a step forward.",
  location: "Pakistan 🇵🇰",
  email:    "waseem2gk@gmail.com",
  github:   "https://github.com/Waseem78612",

  photo: myPhoto,
};

export const TYPING_TITLES = [
  "Fresher Frontend Developer",
  "React Learner",
  "Learning by Building",
  "Open to Opportunities 🚀",
];

// React Router paths
export const NAV_LINKS = [
  { label: "Home",     path: "/"         },
  { label: "About",    path: "/about"    },
  { label: "Skills",   path: "/skills"   },
  { label: "Projects", path: "/projects" },
  { label: "Contact",  path: "/contact"  },
];

export const SKILLS = [
  { id: "html",      name: "HTML5",      icon: "🌐", color: "#E34F26", level: 85, tag: "Comfortable writing semantic, structured HTML for real pages."     },
  { id: "css",       name: "CSS3",       icon: "🎨", color: "#1572B6", level: 80, tag: "Building responsive layouts with Flexbox, Grid and media queries."  },
  { id: "bootstrap", name: "Bootstrap",  icon: "⚡", color: "#7952B3", level: 75, tag: "Speeding up UI work with Bootstrap's grid system and components."   },
  { id: "js",        name: "JavaScript", icon: "✨", color: "#F7DF1E", level: 65, tag: "Understanding the core language — DOM, events, arrays, and logic."   },
  { id: "react",     name: "React",      icon: "⚛️", color: "#61DAFB", level: 55, tag: "Actively learning — components, hooks, state, and React Router."    },
];

export const PROJECTS = [
  {
    id:          "react-router",
    title:       "React Router App",
    description: "A multi-page React app built while learning client-side routing with React Router v6. Clean navigation, dynamic routes, the works.",
    tech:        ["React", "React Router", "CSS"],
    accent:      "#A78BFA",
    emoji:       "🗺️",
    github:      "https://github.com/Waseem78612/react-router",
    live:        "https://react-router-es0.pages.dev/",
  },
  {
    id:          "dom-with-ref",
    title:       "DOM with useRef",
    description: "Hands-on project exploring React's useRef hook — manipulating the DOM directly without triggering unnecessary re-renders.",
    tech:        ["React", "useRef", "Hooks"],
    accent:      "#818CF8",
    emoji:       "🎯",
    github:      "https://github.com/Waseem78612/manipulating-dom-with-useref",
    live:        "https://manipulating-dom-with-ref.pages.dev/",
  },
  {
    id:          "updating-arrays",
    title:       "Updating Arrays in State",
    description: "A focused React project practicing immutable array updates in state — adding, removing, and editing items the React way.",
    tech:        ["React", "useState", "Immutability"],
    accent:      "#67E8F9",
    emoji:       "📋",
    github:      "https://github.com/Waseem78612/updating-arrays",
    live:        "https://updating-arrays.pages.dev/",
  },
];

export const STATS = [
  { value: "3",  label: "Live Projects" },
  { value: "5",  label: "Tech Skills"   },
  { value: "1",  label: "Year Learning" },
];

export const ABOUT_TAGS = [
  "🎓 Fresher Developer",
  "🤝 Team Player",
  "📚 Self-taught",
  "⚛️ React Learner",
  "🇵🇰 From Pakistan",
];

export const FAVORITE_QUOTE = {
  text:   "First, solve the problem. Then, write the code.",
  author: "John Johnson",
};

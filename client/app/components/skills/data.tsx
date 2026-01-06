import {
  FaBootstrap,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiCanva,
  SiFigma,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export interface Deta {
  name: string;
  icon: React.ReactNode;
}

export interface Category {
  id: number;
  name: string;
  details: Deta[];
}

export const skillsData: Category[] = [
  {
    id: 1,
    name: "Frameworks & Libraries",
    details: [
      {
        name: "React",
        icon: (
          <SiReact className="text-blue-400 group-hover:text-white transition-all duration-500" />
        ),
      },
      { name: "Next.js", icon: <SiNextdotjs /> },
      {
        name: "Bootstrap CSS",
        icon: (
          <FaBootstrap className="text-purple-600 group-hover:text-white transition-all duration-500" />
        ),
      },
      {
        name: "Tailwind CSS",
        icon: (
          <SiTailwindcss className="text-cyan-400 group-hover:text-white transition-all duration-500" />
        ),
      },
    ],
  },
  {
    id: 2,
    name: "Tools",
    details: [
      {
        name: "Figma",
        icon: (
          <SiFigma className="transition-all duration-500 text-purple-500 group-hover:text-white" />
        ),
      },
      {
        name: "Canva",
        icon: (
          <SiCanva className="text-cyan-600 group-hover:text-white transition-all duration-500" />
        ),
      },
      {
        name: "Git",
        icon: (
          <FaGitAlt className="text-orange-600 group-hover:text-white transition-all duration-500" />
        ),
      },
      { name: "GitHub", icon: <FaGithub /> },
      {
        name: "Docker",
        icon: (
          <FaDocker className="text-blue-700 group-hover:text-white transition-all duration-500" />
        ),
      },
    ],
  },
  {
    id: 3,
    name: "Programming Languages",
    details: [
      {
        name: "JavaScript",
        icon: (
          <RiJavascriptFill className="text-yellow-400 group-hover:text-white transition-all duration-500" />
        ),
      },
      {
        name: "TypeScript",
        icon: (
          <SiTypescript className="text-blue-700 group-hover:text-white transition-all duration-500" />
        ),
      },
      {
        name: "Python",
        icon: (
          <FaPython className="text-yellow-400 group-hover:text-white transition-all duration-500" />
        ),
      },
      {
        name: "C++",
        icon: (
          <img
            src="/c++.svg"
            alt="C++"
            className="size-10 transition-all duration-500 group-hover:brightness-0 group-hover:invert"
          />
        ),
      },
    ],
  },
];

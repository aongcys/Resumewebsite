export interface Project {
  name: string;
  description: string;
  date: string;
  tag?: string;
}

export interface Category {
  id: number;
  role: string;
  slogan: string;
  items: Project[];
}

export const experienceData: Category[] = [
  {
    id: 1,
    role: "UX/UI Designer",
    slogan:
      "Focusing on design websites that balance beautiful design with seamless UX.",
    items: [
      {
        name: "Maily Space",
        tag: "Figma",
        description:
          "Design a website that provides temporary email developed as part of a project by RDCW Co., Ltd.",
        date: "Freelance 2025",
      },
      {
        name: "3D Map Thaiwater",
        tag: "Figma",
        description:
          "Intuitive web platform for KML route management, featuring seamless 2D and immersive 3D visualizations.",
        date: "1 Aug 2025 - Present",
      },
      {
        name: "Nami massage",
        tag: "Figma",
        description:
          "Designing website featuring an intuitive booking system and role-specific dashboards for clients, therapists, and venue owners.",
        date: "15 Dec 2024 - 1 Apr 2025",
      },
      {
        name: "Kabshop",
        tag: "Figma",
        description:
          "An intuitive end-to-end E-commerce platform featuring organized product categories and a seamless path from browsing to checkout.",
        date: "24 Sep 2024 - 3 Nov 2024",
      },
    ],
  },
  {
    id: 2,
    role: "Frontend Developer",
    slogan:
      "Bringing beautiful designs to life through high-performance code and seamless UX.",
    items: [
      {
        name: "Kabshop",
        tag: "Figma",
        description:
          "An intuitive end-to-end E-commerce platform featuring organized product categories and a seamless path from browsing to checkout.",
        date: "24 Sep 2024 - 3 Nov 2024",
      },
    ],
  },
  {
    id: 3,
    role: "Education",
    slogan: "Continuous learning and academic excellence.",
    items: [
      {
        name: "King Mongkut’s University of Technology North Bangkok",
        description: "Bachelor of science (B.SC.) in Computer Science",
        date: "2023 - Present",
      },
      {
        name: "Saint Gabriel’s college",
        description:
          "Graduated with a High School Diploma in the Math-Computing Branch",
        date: "2011 - 2023",
      },
    ],
  },
];

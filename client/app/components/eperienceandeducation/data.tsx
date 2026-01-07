export interface Project {
  name: string;
  description: string;
  date: string;
  photo?: string;
  link?: string;
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
        description:
          "Design a website that provides temporary email developed as part of a project by RDCW Co., Ltd.",
        date: "Freelance 2025",
        photo: "/maily.png",
        link: "https://maily.space/",
      },
      {
        name: "3D Map Thaiwater",
        description:
          "Intuitive web platform for KML route management, featuring seamless 2D and immersive 3D visualizations.",
        date: "1 Aug 2025 - Present",
      },
      {
        name: "Nami massage",
        description:
          "Designing website featuring an intuitive booking system and role-specific dashboards for clients, therapists, and venue owners.",
        date: "15 Dec 2024 - 1 Apr 2025",
        photo: "/massage.png",
      },
      {
        name: "Kabshop",
        description:
          "An intuitive end-to-end E-commerce platform featuring organized product categories and a seamless path from browsing to checkout.",
        date: "24 Sep 2024 - 3 Nov 2024",
        photo: "/kabshop.png",
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
        name: "Nami massage",
        description:
          "Developed an intuitive booking system using Next.js, featuring specialized multi-role dashboards for clients, therapists, and administrators. Optimized data flow through robust RESTful API integration.",
        date: "15 Dec 2024 - 1 Apr 2025",
      },
      {
        name: "Kabshop",
        description:
          "An intuitive end-to-end E-commerce platform featuring organized product categories and a seamless path from browsing to checkout. Using React NextJs",
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

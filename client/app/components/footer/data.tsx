import { FaInstagram, FaFacebook, FaLine } from "react-icons/fa";

export interface Deta {
  id: number;
  name: string;
  icon: React.ReactNode;
  link: string;
}

export const footerData: Deta[] = [
  {
    id: 1,
    name: "instragram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/axng_cys/",
  },
  {
    id: 2,
    name: "facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/Aongsrr",
  },
  {
    id: 3,
    name: "Line",
    icon: <FaLine />,
    link: "http://line.me/ti/p/~aong_...",
  },
];

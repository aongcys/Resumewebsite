"use client";
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const useScrollActive = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useGSAP(() => {
    sectionIds.forEach((id, index) => {
      const isLast = index === sectionIds.length - 1;

      ScrollTrigger.create({
        trigger: `#${id}`,
        start: isLast ? "top 70%" : "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(id),
        onEnterBack: () => setActiveSection(id),
      });
    });
  }, [sectionIds]);

  return activeSection;
};

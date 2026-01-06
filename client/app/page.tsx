"use client";
import Desktopnavbar from "./components/navbar/desktopnavnar";
import Aboutme from "./components/aboutme";
import ExperienceAndEducation from "./components/eperienceandeducation";
import SkillAndTool from "./components/skills";
import Footer from "./components/footer";
import { useScrollActive } from "./components/navbar/scoractive";

export default function Home() {
  const activeSection = useScrollActive([
    "about",
    "experience",
    "skills",
    "contact",
  ]);
  return (
    <div className="flex flex-col gap-10">
      <Desktopnavbar activeSection={activeSection} />
      <section id="about">
        <Aboutme />
      </section>
      <section id="experience">
        <ExperienceAndEducation />
      </section>
      <section id="skills">
        <SkillAndTool />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

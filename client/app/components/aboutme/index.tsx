import React from "react";
import Img from "next/image";
import { SiNextdotjs, SiVite, SiNestjs } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

function Aboutme() {
  return (
    <div id="about" className="flex flex-col w-full gap-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20 mt-5">
        <div className="flex flex-col justify-between">
          <div className="text-6xl md:text-8xl font-semibold self-start mt-15">
            <p>Frontend</p>
            <p>Developer</p>
          </div>
          <div className="flex flex-col gap-2 pb-8">
            <p className="text-xl font-semibold">
              Hi, I am Chayaphat Srisiriwat
            </p>
            <p className="text-lg w-8/12 font-[family-name:var(--font-nunito-sans)]">
              Computer Science student passionate about Frontend Development and
              UX/UI design. I enjoy building clean, user-friendly interfaces and
              turning ideas into real web experiences.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Img
            src="/photo.png"
            alt="About me"
            width={500}
            height={500}
            className="w-full h-auto max-w-120"
          />
        </div>
        <div className="text-6xl md:text-8xl pb-8 font-semibold self-end justify-end items-end text-right">
          <p>UX/UI</p>
          <p>Designer</p>
        </div>
      </div>
      <div className="bg-gray-100 h-auto w-full p-10 px-15">
        <div className="relative flex flex-col gap-3 p-5 px-15">
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-black"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-black"></div>

          <div className="flex justify-between">
            <p className="text-3xl font-semibold">About Me</p>
            <div className="flex gap-2 mr-2 mt-2">
              <SiNextdotjs size={30} />
              <SiVite size={30} />
              <FaFigma size={28} />
              <SiNestjs size={30} />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p className="w-2/4 text-lg font-[family-name:var(--font-nunito-sans)]">
              As a Computer Science student with a passion for Frontend
              Development and UX/UI design, I focus on crafting clean,
              user-friendly interfaces that turn creative ideas into functional
              digital experiences.
            </p>
            <p className="w-2/4 text-lg font-[family-name:var(--font-nunito-sans)]">
              I am currently seeking an internship opportunity where I can
              contribute to a professional team, take on real-world challenges,
              and further refine my skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;

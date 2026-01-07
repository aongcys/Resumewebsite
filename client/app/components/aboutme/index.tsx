"use client";
import React, { useRef } from "react";
import Img from "next/image";
import { SiNextdotjs, SiVite, SiNestjs } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import TextType from "./texttype";
import Particles from "./background";
import EnterAnimation from "./motion";

function Aboutme() {
  return (
    <div id="about" className="flex flex-col w-full gap-10">
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#000000", "#3b82f6"]}
          particleCount={250}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={180}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>
      <div className="relative grid lg:grid-cols-3 lg:gap-10 px-5 lg:px-20 lg:mt-5 w-full">
        <div className="flex flex-col lg:justify-between gap-2">
          <div>
            <div className="text-5xl lg:text-8xl font-semibold md:mt-15 min-h-10 lg:min-h-55">
              <TextType
                text="Frontend"
                as="p"
                typingSpeed={100}
                loop={false}
                showCursor={false}
              />
              <TextType
                text="Developer"
                as="p"
                typingSpeed={100}
                initialDelay={800}
                loop={false}
                showCursor={true}
                cursorCharacter="_"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 pb-8">
            <p className="hidden md:block text-xl font-semibold">
              Hi, I am Chayaphat Srisiriwat
            </p>
            <p className="hidden lg:block text-lg w-8/12 font-[family-name:var(--font-nunito-sans)]">
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
            className="w-full h-auto max-w-60 md:max-w-120"
          />
        </div>
        <div className="text-6xl md:text-8xl pb-8 font-semibold self-end justify-end items-end text-right">
          <div>
            <div className="grid text-5xl lg:text-8xl font-semibold md:mt-15 min-h-10 lg:min-h-55">
              <TextType
                text="UX/UI"
                as="p"
                typingSpeed={100}
                loop={false}
                showCursor={false}
              />
              <TextType
                text="Designer"
                as="p"
                typingSpeed={100}
                initialDelay={800}
                loop={false}
                showCursor={true}
                cursorCharacter="_"
              />
            </div>
          </div>
          <p className="md:hidden text-xl font-semibold mt-2">
            Hi, I am Chayaphat Srisiriwat
          </p>
        </div>
      </div>
      <div className="bg-gray-100 h-auto w-full p-10 px-5 md:px-15">
        <div className="relative flex flex-col gap-3 p-5 px-15">
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-black"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-black"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-black"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-black"></div>

          <div className="flex md:flex-row flex-col justify-between">
            <p className="text-3xl font-semibold">About Me</p>
            <div className="flex gap-2 mr-2 mt-2">
              <SiNextdotjs size={30} />
              <SiVite size={30} />
              <FaFigma size={28} />
              <SiNestjs size={30} />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p className="w-full lg:w-2/4 text-lg font-[family-name:var(--font-nunito-sans)]">
              As a Computer Science student with a passion for Frontend
              Development and UX/UI design, I focus on crafting clean,
              user-friendly interfaces that turn creative ideas into functional
              digital experiences.
            </p>
            <p className="lg:w-2/4 text-lg font-[family-name:var(--font-nunito-sans)]">
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

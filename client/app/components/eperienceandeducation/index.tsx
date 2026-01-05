"use client";
import React, { useState } from "react";
import { experienceData } from "./data";
import { MdOutlineArrowForwardIos } from "react-icons/md";

function ExperienceAndEducation() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <div id="experience" className="flex flex-col w-full items-center gap-10">
      <div className="relative w-full text-center p-5 px-15">
        <div className="absolute top-0 left-0 w-5/12 h-16 border-t border-black"></div>
        <p className="text-3xl font-semibold">Experience & Education</p>
        <div className="absolute bottom-0 right-0 w-5/12 h-16 border-b border-black"></div>
      </div>
      <div className="w-full max-w-7xl flex flex-col gap-8">
        {experienceData.map((category) => (
          <div
            key={category.id}
            className="border border-black overflow-hidden"
          >
            <button
              onClick={() =>
                setOpenId(openId === category.id ? null : category.id)
              }
              className={`w-full flex justify-between items-center p-6 text-left transition-colors duration-300 ${
                openId === category.id
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-black hover:text-white"
              }`}
            >
              <div>
                <h3 className="text-3xl font-bold">{category.role}</h3>
                <p>{category.slogan}</p>
              </div>
              <div className="flex items-center gap-4 border-l pl-4">
                <span className="text-xs uppercase hidden md:inline">
                  More information
                </span>
                <span
                  className={`size-4 transition-transform duration-500 ${
                    openId === category.id ? "-rotate-90" : "rotate-90"
                  }`}
                >
                  <MdOutlineArrowForwardIos />
                </span>
              </div>
            </button>

            <div
              className={`transition-all duration-1500 ease-in-out ${
                openId === category.id ? "max-h-500 opacity-100" : "max-h-0"
              }`}
            >
              <div className="p-8 flex flex-col gap-5 bg-white">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col md:flex-row justify-between gap-4 border-b border-gray-300 pb-8 last:border-0"
                  >
                    <div className="px-4 flex-1">
                      <div className=" flex items-center gap-2 mb-2">
                        <h4 className="text-2xl font-bold ">{item.name}</h4>
                      </div>
                      <p className="text-black max-w-xl font-[family-name:var(--font-nunito-sans)]">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-gray-600 text-base md:text-right border-l md:border-l-2 border-gray-600 pl-4 min-w-[300px] flex items-center">
                      {item.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceAndEducation;

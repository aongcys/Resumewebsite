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
      <div className="w-full max-w-7xl flex flex-col gap-8 px-10">
        {experienceData.map((category) => (
          <div
            key={category.id}
            className="border border-black overflow-hidden w-full"
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
              className={`grid transition-all duration-1500 ease-in-out ${
                openId === category.id ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-8 flex flex-col bg-white">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      {idx !== 0 && (
                        <div className="w-4xl border-t border-neutral-300 my-6"></div>
                      )}
                      <div className="flex flex-col md:flex-row justify-between gap-4 w-full px-5 md:px-10">
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold mb-2 flex gap-2">
                            {item.name}
                            {item.link !== undefined && (
                              <a
                                href={item.link}
                                target="_blank"
                                className="text-sm flex items-end underline underline-offset-1 text-black font-medium hover:text-blue-800"
                              >
                                Visit website
                              </a>
                            )}
                          </h4>
                          <p className="text-black max-w-xl font-[family-name:var(--font-nunito-sans)]">
                            {item.description}
                          </p>
                        </div>
                        <div className="text-neutral-500 text-base md:text-right flex items-center md:justify-end">
                          <div className="border-l border-neutral-500 pl-4 h-5 flex items-center min-w-60">
                            {item.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceAndEducation;

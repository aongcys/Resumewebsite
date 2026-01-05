import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

function Desktopnavbar() {
  return (
    <div className="flex items-center p-5 px-10 justify-between">
      <p className="text-lg">
        <span className="font-medium">Chayaphat </span>
        Sr
      </p>
      <div className="flex gap-8">
        {["About", "Experience", "Skills", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative group py-1 hover:cursor-pointer hover:font-medium"
          >
            {item}
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </a>
        ))}
      </div>
      <div className="flex flex-row gap-3 justify-center items-center mb-2">
        <button className="">
          <FaGithub size={32} />
        </button>
        <button className="flex gap-2 justify-center items-center rounded-full bg-white text-black px-4 py-1 border border-black hover:bg-black hover:text-white hover:border-white transition-all duration-500 cursor-pointer">
          <FiDownload size={18} className="" />
          <p className="font-semibold">Resume</p>
        </button>
      </div>
    </div>
  );
}

export default Desktopnavbar;

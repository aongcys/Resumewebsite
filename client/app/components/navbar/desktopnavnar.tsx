import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

function Desktopnavbar({ activeSection }: { activeSection: string }) {
  const navItems = ["About", "Experience", "Skills", "Contact"];
  return (
    <div className="flex items-center p-5 px-10 justify-between sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-black/5">
      <a className="flex gap-1" href="#about">
        <p className="text-lg font-medium">Chayaphat </p>
        <p className="text-lg font-light">Sr</p>
      </a>
      <div className=" gap-8 hidden lg:flex">
        {navItems.map((item) => {
          const id = item.toLowerCase();
          const isActive = activeSection === id;

          return (
            <a key={item} href={`#${id}`} className="relative group py-1">
              {item}
              <span
                className={`absolute left-0 bottom-0 h-0.5 bg-black transition-all duration-500 
                ${
                  isActive
                    ? "w-full scale-x-100"
                    : "w-0 scale-x-0 group-hover:w-full group-hover:scale-x-100"
                }`}
              />
            </a>
          );
        })}
      </div>
      <div className="flex flex-row gap-3 justify-center items-center mb-2">
        <a
          className="hover:text-shadow-lg"
          href="https://github.com/aongcys"
          target="_blank"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://drive.google.com/drive/folders/1hIaptp4URZnjMXNU3kWkIfuh9uavsP4H?usp=sharing"
          target="_blank"
          className="flex gap-2 justify-center items-center rounded-full bg-white text-black p-2 md:px-4 py-2 border border-black hover:bg-black hover:text-white hover:border-white transition-all duration-500 cursor-pointer"
        >
          <FiDownload size={18} className="" />
          <p className="font-semibold hidden md:block">Resume</p>
        </a>
      </div>
    </div>
  );
}

export default Desktopnavbar;

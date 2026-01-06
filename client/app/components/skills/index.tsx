import React from "react";
import { skillsData } from "./data";

function SkillAndTool() {
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="relative w-full text-center p-5 px-15">
        <div className="absolute top-0 left-0 w-5/12 h-16 border-t border-black"></div>
        <p className="text-3xl font-semibold">Skills & Tools</p>
        <div className="absolute bottom-0 right-0 w-5/12 h-16 border-b border-black"></div>
      </div>
      <div className="grid w-full max-w-7xl items-center px-20">
        {skillsData.map((category) => (
          <div key={category.id} className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">{category.name}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.details.map((skill, idx) => (
                <div
                  key={idx}
                  className="group transition-all flex flex-col items-center p-4 border border-gray-300 rounded-lg hover:shadow-lg duration-500 hover:bg-black hover:text-white hover:border-black"
                >
                  <div className="text-4xl mb-2">{skill.icon}</div>
                  <p className="text-center text-sm font-medium">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillAndTool;

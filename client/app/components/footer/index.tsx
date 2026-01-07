import React from "react";
import { footerData } from "./data";
import { IoIosArrowRoundForward } from "react-icons/io";

function Footer() {
  return (
    <div className=" flex w-full border-t bg-black h-auto p-10 px-20">
      <div className="relative w-full flex flex-col p-10 justify-between items-center gap-5 border-[0.5px] border-gray-800">
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-10 md:gap-20 items-start">
          <div className="flex flex-col gap-4 w-full max-w-sm">
            {footerData.map((contract) => (
              <a
                key={contract.id}
                href={contract.link}
                target="_blank"
                className="group flex justify-between items-center w-full text-white border-b border-white/20 pb-2 hover:border-white transition-all duration-300"
              >
                <div className="flex flex-row gap-4">
                  <span className="text-2xl transition-transform group-hover:scale-110 duration-300">
                    {contract.icon}
                  </span>
                  <p className="text-lg font-light tracking-wide capitalize">
                    {contract.name}
                  </p>
                </div>
                <IoIosArrowRoundForward className="size-8 transform group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            ))}
          </div>
          <div className="flex flex-col md:justify-between h-auto">
            <p className="text-base text-gray-500 ">CONTACT</p>
            <div className="text-white w-auto flex flex-col md:flex-row md:gap-1">
              <p>Email: </p>
              <a
                href="mailto:chayaphat.srisiriwat@gmail.com"
                className="no-underline hover:underline break-all text-white text-lg"
              >
                chayaphat.srisiriwat@gmail.com
              </a>
            </div>
            <div className="text-white text-lg flex flex-col md:flex-row md:gap-1">
              <p>Phone:</p>
              <p>+66 95-529-7478</p>
            </div>
            <p className="text-gray-500 hover:text-white transition-all duration-300">
              © 2026 CHAYAPHAT SRISIRIWAT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

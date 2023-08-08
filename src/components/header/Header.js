import React from "react";
import { AiOutlineHome, AiOutlineCompass } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";

export default function Header() {
  const navLinks = [
    {
      link: "",
      label: "Home",
      icon: <AiOutlineHome />,
    },
    {
      link: "",
      label: "Discovery",
      icon: <AiOutlineCompass />,
    },
    {
      link: "",
      label: "Community",
      icon: <BsPeopleFill />,
    },
    {
      link: "",
      label: "Search",
      icon: <BiSearch />,
    },
  ];

  return (
    <div className="min-w-[200px] z-30 h-[100vh] absolute left-0 top-0 bg-[#1A161F] pt-5">
      <div className="flex justify-center">
        <h2 className="text-white font-bold text-2xl">LOGO</h2>
      </div>
      <div className="flex flex-col  items-center mt-8">
        <p className="text-[#D9D9D9] pr-[60px] text-sm">MENU</p>
        <div className="flex flex-col gap-3 ">
          {navLinks.map((link) => (
            <a
              href="#"
              className="text-white hover:text-[#6680C0] border-l-4 border-solid border-[#6680C0] flex items-center gap-2 pl-1"
            >
              {link.icon} {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

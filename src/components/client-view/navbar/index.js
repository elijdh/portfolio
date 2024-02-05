"use client";

import { useEffect, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";
import {
  FaHome,
  FaInfo,
  FaCode,
  FaEnvelope,
  FaRegLightbulb,
} from "react-icons/fa";

const menuItems = [
  {
    id: "home",
    label: "Home",
    icon: <FaHome />,
  },
  {
    id: "about",
    label: "About",
    icon: <FaInfo />,
  },
  {
    id: "experience",
    label: "Experience",
    icon: <FaRegLightbulb />,
  },
  {
    id: "project",
    label: "Projects",
    icon: <FaCode />,
  },
  {
    id: "contact",
    label: "Contact",
    icon: <FaEnvelope />,
  },
];

function MenuItem({ item, isActive, setActiveLink }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LinkScroll
      activeClass="active"
      to={item.id}
      spy={true}
      smooth={true}
      duration={1000}
      onSetActive={() => setActiveLink(item.id)}
      className={`hover:text-red-main cursor-pointer inline-block relative transition duration-300 ease-in-out
        ${isActive ? "text-red-main font-bold" : "font-bold"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(false)}
    >
      <div className="items-center">
        <div
          className={`drop-shadow-[0_0_10px_rgba(0,0,0,1)] hidden xl:flex absolute top-[-3px] right-12 transform opacity-0 ${
            isHovered ? "opacity-100 translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          {item.label}
        </div>
        {item.icon}
      </div>
    </LinkScroll>
  );
}

function CreateMenus({ activeLink, getMenuItems, setActiveLink }) {
  return getMenuItems.map((item) => (
    <MenuItem
      key={item.id}
      item={item}
      isActive={activeLink === item.id}
      setActiveLink={setActiveLink}
    />
  ));
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.screenY > 20);
    });
  }, []);

  return (
    <>
      <nav className="flex flex-col items-center gap-y-4 md:px-[8px] lg:px-[8px] xl:px-[8px] fixed h-max bottom-0 mt-auto z-50 top-0 w-full md:right-[2%] md:justify-center md:w-16 md:max-w-md md:h-screen l:right-[2%] l:justify-center l:w-16 l:max-w-md xl:right-[2%] xl:justify-center xl:w-16 xl:max-w-md xl:h-screen ">
        <div className="transition duration-300 ease-in-out flex w-full items-center justify-between gap-y-10 px-4 py-4 md:py-6 lg:py-6 xl:py-6 bg-foreground/20 opacity-80 hover:opacity-100 backdrop-blur-sm text-3xl md:justify-center md:flex-col md:px-0 md:h-max md:text-xl md:rounded-full l:justify-center l:flex-col l:px-0 l:h-max l:text-xl l:rounded-full xl:justify-center xl:flex-col xl:px-0 xl:h-max xl:text-xl xl:rounded-full ">
          <CreateMenus
            setActiveLink={setActiveLink}
            activeLink={activeLink}
            getMenuItems={menuItems}
          />
        </div>
      </nav>
    </>
  );
}

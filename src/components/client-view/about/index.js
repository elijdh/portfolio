"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";
import AnimationWrapper from "../animation-wrapper";
function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

const skillItemVariant = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function ClientAboutView({ data }) {
  const setVariants = useMemo(() => variants(), []);
  /*
  const aboutDataInfo = [
    {
      label: "Client",
      value: data?.noofclients || "0",
    },
    {
      label: "Projects",
      value: data?.noofprojects || "0",
    },
    {
      label: "Experience",
      value: data?.yearofexperience || "0",
    },
  ];*/

  const headingText = "Why Elijah?";

  return (
    <div
      className="flex flex-col justify-center items-center h-screen pb-20 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="about"
    >
      {/*<div className="w-full flex">
        <AnimationWrapper className="rounded-lg w-full grid-flow-row grid grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-red-main z-10">
          {aboutDataInfo.map((infoItem, index) => (
            <motion.div
              className={`flex items-center justify-start
              ${
                index === 0
                  ? "sm:justify-start"
                  : index === 1
                  ? "sm:justify-center"
                  : "sm:justify-end"
              } py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0
              `}
              key={index}
              custom={{ duration: 2 + index }}
              variants={setVariants}
            >
              <div className="flex m-0 w-40 sm:w-auto">
                <div className="flex flex-col">
                  <p className="text-[50px] text-red-main font-bold">
                    {infoItem.value}+
                  </p>
                  <p className="text-[25px] font-bold text-foreground">
                    {infoItem.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimationWrapper>
      </div>*/}
      <AnimationWrapper className={"pt-6"}>
        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
          <motion.div variants={setVariants}>
            <h1 className="leading-[70px] mb-4 text-xl lg:text-4xl xl:text-5xl font-bold">
              {headingText.split(" ").map((item, index) => (
                <span
                  className={`${
                    index === 1 ? "text-red-main" : "text-foreground"
                  }`}
                >
                  {item}{" "}
                </span>
              ))}
            </h1>
            <p className="text-foreground text-center mt-4 mb-8 font-semibold">
              {data?.aboutme}
            </p>
          </motion.div>
        </div>
      </AnimationWrapper>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 gap-8  max-w-2xl">
        <AnimationWrapper className={"flex items-center w-full p-4"}>
          <motion.div
            variants={setVariants}
            className="flex flex-wrap justify-center items-center gap-4"
          >
            {data?.skills.split(",").map((skill, index) => (
              <motion.div key={index} className="flex-shrink-0">
                <button className="whitespace-nowrap text-ellipsis overflow-hidden py-3 px-6 border-[2px] border-red-main bg-[#fff] text-[#000] font-semibold rounded-lg tracking-widest hover:shadow-red-main transition-all outline-none ">
                  {skill}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimationWrapper>
      </div>
    </div>
  );
}

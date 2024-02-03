"use client";

import { useMemo, useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa6";

function variants() {
  return {
    offscreen: {
      y: 100,
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

const socialIcons = [
  {
    id: "facebook",
    icon: (
      <FaFacebookF
        color="rgba(177, 41, 41, 1)"
        className="w-[30px] h-[35px] "
      />
    ),
  },
  {
    id: "linkedin",
    icon: (
      <FaLinkedinIn
        color="rgba(177, 41, 41, 1)"
        className="w-[40px] h-[40px] "
      />
    ),
  },
  {
    id: "github",
    icon: (
      <FaGithub color="rgba(177, 41, 41, 1)" className="w-[40px] h-[40px] " />
    ),
  },
];

export default function ClientHomeView({ data }) {
  const setVariants = useMemo(() => variants(), []);
  const containerRef = useRef(null);

  return (
    <>
      <div
        className="flex flex-col inner justify-center items-center h-screen px-8 xl:px-16 mx-auto"
        id="home"
      >
        <AnimationWrapper>
          <motion.div
            className={
              "grid grid-flow-row sm:grid-flow-col justify-center grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            }
            variants={setVariants}
          >
            <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-6xl font-bold leading-normal">
                {data && data.length
                  ? data[0].heading
                      .split(" ")
                      .map((item, index) => (
                        <span
                          className={`${
                            index === 2 || index === 3
                              ? "text-red-main"
                              : "text-foreground"
                          }`}
                        >
                          {item}{" "}
                        </span>
                      ))
                  : null}
              </h1>
              <p className="text-foreground mt-4 mb-8 font-bold">
                {data && data.length ? data[0]?.summary : null}
              </p>
              <motion.div className="flex gap-3 cursor-pointer">
                {socialIcons.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                      type: "spring",
                      damping: 20,
                      stiffness: 80,
                      duration: 4,
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{
                      scale: 0.8,
                      rotate: 0,
                      borderRadius: "100%",
                    }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <motion.div ref={containerRef} className="flex w-full justify-end">
              <motion.div
                drag
                dragConstraints={containerRef}
                className="w-[400px] h-[400px] relative bg-red-main"
              >
                <div className="w-[400px] h-[400px] top-[40px] left-[-30px] rounded-lg border-[6px] border-foreground relative ">
                  {" "}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimationWrapper>
      </div>
    </>
  );
}

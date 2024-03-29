"use client";

import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";

export default function ClientExperienceAndEducationView({
  educationData,
  experienceData,
}) {
  console.log(educationData, experienceData, "experienceData");

  return (
    <div
      className="max-w-screen-xl h-screen pt-10 mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="experience"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex flex-col gap-5">
          <AnimationWrapper className={"py-6 sm:py-16"}>
            <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
              <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground">
                {"Experience".split(" ").map((item, index) => (
                  <span
                    className={`${
                      index === 0
                        ? "text-red-main"
                        : "text-foreground font-bold"
                    }`}
                  >
                    {item}{" "}
                  </span>
                ))}
              </h1>
            </div>
          </AnimationWrapper>
          <AnimationWrapper>
            <div className="flex w-full">
              <motion.div className="container">
                <Timeline position="right">
                  {experienceData && experienceData.length
                    ? experienceData.map((experienceItem) => (
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot className="bg-red-main" />
                            <TimelineConnector className="bg-red-main" />
                          </TimelineSeparator>
                          <TimelineContent>
                            <div className="border-[2px] p-4 rounded-[8px] border-red-main mt-[14px] ml-[16px]">
                              <p className="font-bold text-foreground">
                                {experienceItem.duration}
                              </p>
                              <h3 className="font-extrabold text-foreground mt-2">
                                {experienceItem.company},{" "}
                                {experienceItem.location}
                              </h3>
                              <p className="font-extrabold text-foreground mt-2">
                                {experienceItem.position}
                              </p>
                              <p className="font-extralight text-foreground mt-2">
                                {experienceItem.jobprofile}
                              </p>
                            </div>
                          </TimelineContent>
                        </TimelineItem>
                      ))
                    : null}
                </Timeline>
              </motion.div>
            </div>
          </AnimationWrapper>
        </div>
        <div className="flex flex-col gap-5">
          <AnimationWrapper className={"py-6 sm:py-16"}>
            <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
              <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
                {"Education".split(" ").map((item, index) => (
                  <span
                    className={`${
                      index === 1 ? "text-red-main" : "text-foreground"
                    }`}
                  >
                    {item}{" "}
                  </span>
                ))}
              </h1>
            </div>
          </AnimationWrapper>
          <AnimationWrapper>
            <div className="flex w-full">
              <motion.div className="container">
                <Timeline position="right">
                  {educationData && educationData.length
                    ? educationData.map((educationItem) => (
                        <TimelineItem>
                          <TimelineSeparator>
                            <TimelineDot className="bg-red-main" />
                            <TimelineConnector className="bg-red-main" />
                          </TimelineSeparator>
                          <TimelineContent>
                            <div className="border-[2px] p-4 rounded-[8px] border-red-main mt-[14px] ml-[16px] ">
                              <p className="font-bold text-foreground">
                                {educationItem.year}
                              </p>
                              <h3 className="font-extrabold mt-2 text-foreground">
                                {educationItem.college}
                              </h3>
                              <p className="font-extrabold mt-2 text-foreground">
                                {educationItem.degree}
                              </p>
                            </div>
                          </TimelineContent>
                        </TimelineItem>
                      ))
                    : null}
                </Timeline>
              </motion.div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </div>
  );
}

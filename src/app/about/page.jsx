"use client";
import BrainSkeleton from "@/components/BrainSkeleton";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const skills = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "SCSS",
  "Tailwind CSS",
  "MongoDB",
  "Node.js",
  "Express.js",
  "Framer Motion",
  "Vite",
  "Firebase",
  "Git",
  "Figma",
];

const About = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-auto lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/samiul_pic.jpg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              I am Md Samiul Islam, a 25 year old full-stack developer who is deeply passionate about coding and building cool stuff on the web. Over the past three years, I have dived headfirst into the world of JavaScript, React, Node.js, MongoDB, and more, honing my skills and working on a ton of exciting projects along the way. From crafting sleek user interfaces to wrangling data on the backend, I love the challenge of bringing ideas to life through code. Currently, I am juggling my professional work with studies at the National University.
            </p>
            <div>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Amidst the chaos of existence, find solace in the melody of your own heartbeat.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="flex justify-end md:justify-center">
              <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 100" width="200" height="100"><defs><image  width="136" height="77" id="img1" href="data:image/png;base64,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"/></defs><style></style><use  href="#img1" x="32" y="0"/></svg>
            </div>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
            >
              <ul className="flex gap-4 flex-wrap">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                >
                  {skill}
                </li>
              ))}
            </ul>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
            >
              {/* EXPERIENCE LIST ITEM 1st */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Co-Founder
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Noxakar
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM 2nd */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior React Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I spearheaded React-based application development,
                    leveraging advanced skills.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    NoxaBoi
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM 3rd */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Supervisor 
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  NoxaFood
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-1 xl:w-1/2">
          <BrainSkeleton scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default About;

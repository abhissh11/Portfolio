"use client";
import { BringToFront } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";
import projectData from "@/data/projects.json";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

export default function Project() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <>
      <div className="mt-10 md:px-32 mx-5">
        <h2 className="text-4xl font-bold tracking-widest text-center  ">
          <span className="text-emerald-300">code</span>:
          <span className="text-blue-300">projects</span>
        </h2>
        <div className="mt-10 flex flex-col justify-center items-center md:flex-row gap-14 flex-wrap">
          {projectData.projects.map((project) => {
            const stack = project.techStack[0].split(",   ");
            return (
              <ProjectCard
                key={project.projectId}
                title={project.projectName}
                id={project.projectId}
                img={project.projectImg}
                gitHub={project.projectGithubLink}
                liveLink={project.liveLink}
                stack={stack}
                desc={project.description}
              />
            );
          })}
        </div>
        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center"
        >
          <div
            className="flex my-10 gap-3 px-2 text-sky-300 bg-indigo-950 max-w-[12rem] py-2 rounded-lg 
        border border-b-4 border-r-4 border-r-emerald-400 border-b-emerald-400 hover:scale-125 transition-all cursor-pointer "
          >
            <Link
              href={"https://github.com/dev-abhishekkr?tab=repositories"}
              className="flex gap-1"
            >
              <>
                <h2 className="text-xl">More Projects</h2>
                <BringToFront />
              </>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}

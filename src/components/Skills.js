"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="mt-10 ">
      <h2 className="text-5xl font-bold tracking-widest text-center  ">
        <span className="text-emerald-300">tech</span>:
        <span className="text-blue-300">skills</span>
      </h2>
      <motion.div
        className="flex flex-col gap-5 mt-10"
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="flex flex-row flex-wrap justify-center items-center gap-5">
          <h2>C++</h2>
          <h2>JavaScript</h2>
          <h2>TypeScript</h2>
          <h2>Python</h2>
          <h2>HTML</h2>
          <h2>CSS</h2>
        </div>
        <div className="flex flex-row flex-wrap  justify-center items-center gap-5">
          <h2>ReactJS</h2>
          <h2>NextJS</h2>
          <h2>NodeJS</h2>
          <h2>ExpressJS</h2>
          <h2>Tailwind</h2>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center gap-5">
          <h2>MongoDB</h2>
          <h2>PostgreSQL</h2>
          <h2>Redis</h2>
        </div>
        <div className="flex flex-row flex-wrap  justify-center items-center gap-5">
          <h2>Git</h2>
          <h2>Postman</h2>
          <h2>Vercel</h2>
        </div>
        <div className="flex justify-center items-center gap-5">
          <h2>&more</h2>
        </div>
      </motion.div>
    </div>
  );
}

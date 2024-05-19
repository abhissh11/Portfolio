"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { Icon } from "@iconify/react";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="mt-10 mx-5">
      <h2 className="text-4xl font-bold tracking-widest text-center  ">
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
        <div className="text-white flex flex-row flex-wrap justify-center items-center gap-5">
          <h2
            className="text-md font-semibold flex items-center gap-2 px-5 md:px-8 py-2 bg-indigo-950  hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-emerald-400 border-b-emerald-400 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            <Icon icon="logos:c-plusplus" className="size-8" />
            C++
          </h2>
          <h2
            className="text-md font-semibold bg-indigo-950 px-5 md:px-8  py-2 flex gap-2 hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-emerald-400 border-b-emerald-400 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            <Icon icon="logos:javascript" className="size-8" />
            Javascript
          </h2>
          <h2
            className="text-md font-semibold flex items-center gap-2 px-5 md:px-8 py-2 bg-indigo-950  hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-emerald-400 border-b-emerald-400 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            <Icon icon="logos:typescript-icon" className="size-8" />
            TypeScript
          </h2>
          <h2
            className="text-md font-semibold flex items-center gap-2 px-5 md:px-8 py-2 bg-indigo-950  hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-emerald-400 border-b-emerald-400 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            <Icon icon="logos:python" className="size-8" />
            Python
          </h2>
          <h2
            className="text-md font-semibold flex items-center gap-2 px-5 md:px-8 py-2 bg-indigo-950 hover:scale-110 transition-all cursor-pointer 
            border border-b-8 border-r-8  border-r-emerald-400 border-b-emerald-400 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            <Icon icon="logos:html-5" className="size-8" />
            HTML
          </h2>
        </div>
        <div className="text-white flex flex-row flex-wrap  justify-center items-center gap-5">
          <h2
            className="text-md font-semibold flex items-center gap-2 px-5 md:px-8 py-2 bg-indigo-950 hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-fuchsia-400 border-b-fuchsia-400 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            <Icon icon="logos:react" className="size-8" />
            ReactJS
          </h2>
          <h2
            className="text-md font-semibold flex items-center gap-2 px-5 md:px-8 py-2 bg-indigo-950  hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-fuchsia-400 border-b-fuchsia-400 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            <Icon icon="logos:nextjs-icon" className="size-8" />
            NextJS
          </h2>
          <h2
            className="text-md font-semibold flex items-center gap-2 px-5 md:px-8 py-2 bg-indigo-950  hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-fuchsia-400 border-b-fuchsia-400 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            <Icon icon="logos:nodejs-icon" className="size-8" />
            NodeJS
          </h2>
          <h2
            className="text-md font-semibold flex items-center gap-2 px-5 md:px-8 py-2 bg-indigo-950  hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-fuchsia-400 border-b-fuchsia-400 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            <Icon icon="simple-icons:express" className="size-8" />
            ExpressJS
          </h2>
          <h2
            className="text-md font-semibold flex items-center gap-2 px-5 md:px-8 py-2 bg-indigo-950  hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-fuchsia-400 border-b-fuchsia-400 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            <Icon icon="logos:tailwindcss-icon" className="size-8" />
            Tailwind
          </h2>
        </div>
        <div className="text-white flex flex-row flex-wrap justify-center items-center gap-5">
          <h2
            className="text-md font-semibold flex items-center gap-2 px-5 md:px-8 py-2 bg-indigo-950  hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-yellow-300 border-b-yellow-300 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            <Icon icon="logos:mongodb" className="size-8" />
            MongoDB
          </h2>
          <h2
            className="text-md font-semibold flex items-center gap-2 px-5 md:px-8 py-2 bg-indigo-950  hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-yellow-300 border-b-yellow-300 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            <Icon icon="logos:postgresql" className="size-8" />
            PostgreSQL
          </h2>
          <h2
            className="text-md font-semibold flex items-center gap-2 px-5 md:px-8 py-2 bg-indigo-950  hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-yellow-300 border-b-yellow-300 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            <Icon icon="logos:redis" className="size-8" />
            Redis
          </h2>
        </div>
        <div className="text-white flex flex-row flex-wrap  justify-center items-center gap-5">
          <h2
            className="text-md font-semibold flex items-center gap-2 px-5 md:px-8 py-2 bg-indigo-950  hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-blue-500 border-b-blue-500 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            <Icon icon="logos:git-icon" className="size-8" />
            Git
          </h2>
          <h2
            className="text-md font-semibold flex items-center gap-2 px-5 md:px-8 py-2 bg-indigo-950  hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-blue-500 border-b-blue-500 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            <Icon icon="logos:postman" className="size-8" />
            Postman
          </h2>
          <h2
            className="text-md font-semibold flex items-center gap-2 px-5 md:px-8 py-2 bg-indigo-950  hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-blue-500 border-b-blue-500 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            <Icon icon="logos:vercel-icon" className="size-8" />
            Vercel
          </h2>
        </div>
      </motion.div>
    </div>
  );
}

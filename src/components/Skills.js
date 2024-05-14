"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

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
            className="text-xl font-bold bg-indigo-950 px-7 md:px-14 py-2 hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-emerald-400 border-b-emerald-400 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            C++
          </h2>
          <h2
            className="text-xl font-bold bg-indigo-950 px-7 md:px-14 py-2 hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-emerald-400 border-b-emerald-400 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            JavaScript
          </h2>
          <h2
            className="text-xl font-bold bg-indigo-950 px-7 md:px-14 py-2 hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-emerald-400 border-b-emerald-400 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            TypeScript
          </h2>
          <h2
            className="text-xl font-bold bg-indigo-950 px-7 md:px-14 py-2 hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-emerald-400 border-b-emerald-400 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            Python
          </h2>
          <h2
            className="text-xl font-bold bg-indigo-950 px-7 md:px-14 py-2 hover:scale-110 transition-all cursor-pointer 
            border border-b-8 border-r-8  border-r-emerald-400 border-b-emerald-400 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            HTML
          </h2>
        </div>
        <div className="text-white flex flex-row flex-wrap  justify-center items-center gap-5">
          <h2
            className="text-xl font-bold bg-indigo-950 px-7 md:px-14 py-2 hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-fuchsia-400 border-b-fuchsia-400 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            ReactJS
          </h2>
          <h2
            className="text-xl font-bold bg-indigo-950 px-7 md:px-14 py-2 hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-fuchsia-400 border-b-fuchsia-400 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            NextJS
          </h2>
          <h2
            className="text-xl font-bold bg-indigo-950 px-7 md:px-14 py-2 hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-fuchsia-400 border-b-fuchsia-400 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            NodeJS
          </h2>
          <h2
            className="text-xl font-bold bg-indigo-950 px-7 md:px-14 py-2 hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-fuchsia-400 border-b-fuchsia-400 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            ExpressJS
          </h2>
          <h2
            className="text-xl font-bold bg-indigo-950 px-7 md:px-14 py-2 hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-fuchsia-400 border-b-fuchsia-400 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            Tailwind
          </h2>
        </div>
        <div className="text-white flex flex-row flex-wrap justify-center items-center gap-5">
          <h2
            className="text-xl font-bold bg-indigo-950 px-7 md:px-14 py-2 hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-yellow-300 border-b-yellow-300 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            MongoDB
          </h2>
          <h2
            className="text-xl font-bold bg-indigo-950 px-7 md:px-14 py-2 hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-yellow-300 border-b-yellow-300 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            PostgreSQL
          </h2>
          <h2
            className="text-xl font-bold bg-indigo-950 px-7 md:px-14 py-2 hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-yellow-300 border-b-yellow-300 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            Redis
          </h2>
        </div>
        <div className="text-white flex flex-row flex-wrap  justify-center items-center gap-5">
          <h2
            className="text-xl font-bold bg-indigo-950 px-7 md:px-14 py-2 hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-blue-500 border-b-blue-500 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            Git
          </h2>
          <h2
            className="text-xl font-bold bg-indigo-950 px-7 md:px-14 py-2 hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-blue-500 border-b-blue-500 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            Postman
          </h2>
          <h2
            className="text-xl font-bold bg-indigo-950 px-7 md:px-14 py-2 hover:scale-110 transition-all cursor-pointer
            border border-b-8 border-r-8  border-r-blue-500 border-b-blue-500 border-t-indigo-900 border-l-indigo-900 rounded-tr-xl rounded-bl-xl rounded-md"
          >
            Vercel
          </h2>
        </div>
      </motion.div>
    </div>
  );
}

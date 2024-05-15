"use client";
import { motion, useInView } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div className="mx-5 my-10">
      <motion.div
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.9 }}
        className=" flex flex-col gap-5 justify-center items-center"
      >
        <h1 className="text-center text-sky-300">
          Want to cllaborate on a new project <br /> Or have work <br />
          <span className="text-emerald-400 ">Hire Me</span>
        </h1>
        <div
          className="flex justify-between items-center h-14 md:w-[30rem] bg-fuchsia-800
          border-fuchsia-700 border-2  rounded-lg"
        >
          <input
            type="email"
            className="md:w-4/5 h-full px-5 bg-indigo-950 rounded-lg focus:outline-none"
            placeholder="yourmail@company.com"
          />
          <Link href="mailto:dev.abhishekkr@gmail.com" target="_blank">
            <div className="flex gap-2 items-center cursor-pointer text-emerald-400 px-1 font-bold ">
              <h2 className="md:text-xl ">Email</h2>
              <Mail />
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

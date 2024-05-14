"use client";
import React from "react";
import { Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="flex justify-around mt-10 mx-5">
        <motion.div
          className=" flex flex-col gap-3"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1>Hello World!</h1>
          <p className="text-xl font-semibold ">I'm</p>
          <h1 className="text-sky-300 font-bold text-6xl">Abhishek</h1>
          <h2 className="text-2xl font-semibold tracking-wider">Freelancer.</h2>
          <h2 className="text-2xl font-semibold tracking-wider">
            MERN Stack Developer.
          </h2>
          <p className="text-2xl font-semibold tracking-wider">
            Transforming <span className="text-emerald-300">entropy</span> into
            <span className="text-emerald-300"> realities.</span>
          </p>
          <div className="flex gap-8 mt-5 text-yellow-500">
            <Github />
            <Linkedin />
            <Mail />
            <Twitter />
          </div>
          <button
            className="mt-5 flex gap-3  justify-center items-center py-2 px-3 w-64  text-xl font-bold
         text-sky-300 border border-l-8  border-sky-300 rounded-lg hover:bg-sky-300 hover:text-fuchsia-500"
          >
            <Link href="https://drive.google.com/file/d/1C28HQtz24dk1eSjL3u2j-vgroazD2ufN/view">
              Download Resume
            </Link>
            <Download />
          </button>
        </motion.div>
        <motion.div
          className="hidden md:inline"
          whileHover={{ scale: 1.1 }}
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://cdn.dribbble.com/users/1675281/screenshots/15396018/media/9cba0d19ccaee8ee821822f1e86f1f36.gif"
            alt=""
            className="max-w-[30rem] rounded-3xl hover:scale-110 transition-all delay-200"
          />
        </motion.div>
      </div>
    </>
  );
}

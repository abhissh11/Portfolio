"use client";
import React, { useRef } from "react";
import { Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <>
      <div className="flex justify-around mt-10 mx-5  ">
        <motion.div
          className=" flex flex-col gap-3"
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1>Hello World!</h1>
          <p className="text-xl font-semibold ">I'm</p>
          <h1
            className=" font-bold text-6xl "
            style={{
              background: "-webkit-linear-gradient(45deg, #AC94FA, #1A56DB)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Abhishek
          </h1>
          <h2 className="text-2xl font-semibold tracking-wider">Freelancer.</h2>
          <h2 className="text-2xl font-semibold tracking-wider">
            MERN Stack Developer.
          </h2>
          <p className="text-2xl font-semibold tracking-wider">
            Transforming <span className="text-emerald-300">entropy</span> into
            <span className="text-emerald-300"> code </span> realities.
          </p>
          <div className="flex gap-8 mt-5 text-yellow-500">
            <Link href="https://github.com/dev-abhishekkr" target="_blank">
              <div>
                <Github />
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/abhishek-kumar-0b6b1a211/"
              target="_blank"
            >
              <div>
                <Linkedin />
              </div>
            </Link>
            <Link href="mailto:dev.abhishekkr@gmail.com" target="_blank">
              <div>
                <Mail />
              </div>
            </Link>
            <Link href="https://x.com/dev_abhishekkr" target="_blank">
              <div>
                <Twitter />
              </div>
            </Link>
          </div>
          <button
            className="mt-5 flex gap-3  justify-center items-center py-2 px-3 w-64  text-xl font-bold
         text-sky-300 border border-r-4 border-b-4 border-indigo-900 border-r-emerald-400 border-b-emerald-400 
          rounded-lg hover:scale-125 transition-all "
          >
            <Link
              href="https://drive.google.com/file/d/1uhQVXd1yA_-hLu5iYZQ5VATtzp4fPohy/view"
              target="_blank"
            >
              <h1 className="text-xl">Download Resume</h1>
            </Link>
            <Download />
          </button>
        </motion.div>
        <motion.div
          className="hidden md:inline"
          whileHover={{ scale: 1.1 }}
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9 }}
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

"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <>
      <div className="mt-10 mx-5">
        <div className="flex flex-col md:flex-row gap-10  justify-around items-center">
          <motion.div
            className=""
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.9 }}
          >
            <img
              src="https://cdn.dribbble.com/users/1675281/screenshots/15396018/media/9cba0d19ccaee8ee821822f1e86f1f36.gif"
              alt=""
              className="max-w-[20rem] rounded-3xl hover:scale-110 transition-all delay-200"
            />
          </motion.div>
          <motion.div
            className="flex justify-center items-center max-w-[25rem]"
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-xl ">
              Hey there, I'm <span className="text-emerald-400">Abhishek,</span>{" "}
              a MERN stack developer hailing from India. With a focus on user
              experience and performance optimization, I strive to create
              seamless digital experiences. Let's connect and create something
              remarkable!
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

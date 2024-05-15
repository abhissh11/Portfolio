"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export default function BlogCard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div>
      <motion.div
        ref={ref}
        whileHover={{ scale: 1.1 }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-xl flex flex-col gap-3 border-indigo-900 border p-5 hover:bg-indigo-950 rounded-lg cursor-pointer"
      >
        <h1 className="text-sky-300 text-3xl">
          Asynchronous nature of JavaScript
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime saepe
          quasi nesciunt exercitationem quibusdam odit velit? Qui voluptates
          repellat atque deserunt esse odit assumenda sit. Quaerat perferendis
          consectetur tempora repudiandae.
        </p>
      </motion.div>
    </div>
  );
}

"use client";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
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
        <h2 className="text-center text-sky-300 text-2xl">
          Want to collaborate on a new project <br />{" "}
          <span className="text-emerald-400">Or </span> have work <br />
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <h2>Contact at </h2>
          <Link href="mailto:dev.abhishekkr@gmail.com" target="_blank">
            <div className=" flex items-center gap-1 cursor-pointer text-emerald-400 hover:underline  ">
              <h2 className="">dev.abhishekkr@gmail.com </h2>
              <ExternalLink size={16} />
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

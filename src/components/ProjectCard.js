"use client";
import { motion, useInView } from "framer-motion";
import { ExternalLinkIcon, Github } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";

export default function ProjectCard({
  title,
  img,
  gitHub,
  liveLink,
  stack,
  desc,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <>
      <div className="">
        <motion.div
          ref={ref}
          whileHover={{ scale: 1.1 }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[22rem] h-[25rem] overflow-hidden p-2 border border-indigo-900 rounded-lg hover:scale-110 transition-all cursor-pointer
         hover:bg-indigo-950"
        >
          <div className="flex flex-col gap-4">
            <img src={img} alt="project-img" className="w-full" />
            <div className="text-sky-300 flex justify-between items-center">
              <h1 className=" text-3xl">{title}</h1>
              <div className="flex gap-4">
                <div className="">
                  <Link href={gitHub}>
                    <Github />
                  </Link>
                </div>
                <div className="">
                  <Link href={liveLink}>
                    <ExternalLinkIcon />
                  </Link>
                </div>
              </div>
            </div>
            <p className="text-emerald-300">
              <span className="text-fuchsia-500">tech:</span> {stack}
            </p>
            <p>{desc}</p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

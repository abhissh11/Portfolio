"use client";
import { Code } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <>
      <motion.div
        className="px-2 py-1 mt-4 text-2xl flex justify-around shadow-md md:shadow-none"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className=" flex justify-around items-center gap-2 md:gap-10 ">
          <h2 className="px-4 py-1 rounded-full hover:bg-sky-900 hover:cursor-pointer hover:scale-105 transition-all">
            <Code />
          </h2>
          <h2 className="px-4 py-1 rounded-full hover:bg-sky-900 hover:cursor-pointer hover:scale-105">
            blogs
          </h2>
        </div>
        <div className="bg-slate-700 p-3 font-bold rounded-full hover:bg-sky-800">
          <Link href="https://drive.google.com/file/d/1C28HQtz24dk1eSjL3u2j-vgroazD2ufN/view">
            CV
          </Link>
        </div>
      </motion.div>
    </>
  );
}

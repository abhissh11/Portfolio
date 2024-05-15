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
          <Link href="/">
            <h2 className="px-4 py-1 rounded-full hover:bg-sky-950 hover:cursor-pointer hover:scale-105 transition-all">
              <Code />
            </h2>
          </Link>
          <Link href="/blogs">
            <h2 className="px-4 py-1 rounded-full hover:bg-sky-950 hover:cursor-pointer hover:scale-105">
              blogs
            </h2>
          </Link>
        </div>
        <div className="bg-slate-700 p-1 font-bold rounded-full hover:bg-sky-800">
          <Link
            href="https://drive.google.com/file/d/1C28HQtz24dk1eSjL3u2j-vgroazD2ufN/view"
            target="_blank"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-indigo-950 border-none cursor-pointer relative overflow-hidden"
              style={{
                rotate: 0,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              CV
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </>
  );
}

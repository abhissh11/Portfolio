"use client";
import { BringToFront, ExternalLinkIcon, Github } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Project() {
  return (
    <>
      <div className="mt-10 mx-5">
        <h2 className="text-4xl font-bold tracking-widest text-center  ">
          <span className="text-emerald-300">code</span>:
          <span className="text-blue-300">projects</span>
        </h2>
        <div className="mt-10 flex flex-col justify-center items-center md:flex-row gap-14 flex-wrap">
          <div className="max-w-[20rem] p-2 border border-indigo-800 rounded-lg hover:scale-110 transition-all cursor-pointer hover:bg-violet-900">
            <div className="flex flex-col gap-4">
              <img
                src="https://media.sproutsocial.com/uploads/2017/01/Instagram-Post-Ideas.png"
                alt="project-img"
                className="w-full"
              />
              <div className="text-sky-300 flex justify-between items-center">
                <h1 className=" text-3xl">BlogSphere</h1>
                <div className="flex gap-4">
                  <div className="">
                    <Link href={""}>
                      <Github />
                    </Link>
                  </div>
                  <div className="">
                    <Link href={""}>
                      <ExternalLinkIcon />
                    </Link>
                  </div>
                </div>
              </div>
              <p className="text-emerald-300">
                <span className="text-fuchsia-500">tech:</span> ReactJS, NodeJS,
                ExpressJS, MongoDB, Tailwind
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div
            className="flex my-10 gap-3 px-2 text-sky-300 bg-indigo-950 max-w-[12rem] py-2 rounded-lg 
        border border-b-4 border-r-4 border-r-emerald-400 border-b-emerald-400 hover:scale-125 transition-all cursor-pointer "
          >
            <Link
              href={"https://github.com/dev-abhishekkr?tab=repositories"}
              className="flex gap-1"
            >
              <>
                <h2 className="text-xl">More Projects</h2>
                <BringToFront />
              </>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

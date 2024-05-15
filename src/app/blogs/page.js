import BlogCard from "@/components/BlogCard";
import ScrollToTopButton from "@/components/ScrollTopBtn";
import { BringToFront } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="mt-10 mx-5 ">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-center text-sky-300 max-w-fit py-1 border-b-4  border-b-emerald-400">
            Blogs
          </h1>
          <BlogCard />
          <BlogCard />
        </div>
        <div className="flex justify-center">
          <div
            className="flex my-10 gap-3 px-2 text-sky-300 bg-indigo-950 max-w-[12rem] py-2 rounded-lg 
        border border-b-4 border-r-4 border-r-emerald-400 border-b-emerald-400 hover:scale-125 transition-all cursor-pointer "
          >
            <Link
              href="https://github.com/dev-abhishekkr?tab=repositories"
              className="flex gap-3"
            >
              <h2>Read More blogs</h2>
              <BringToFront />
            </Link>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
}

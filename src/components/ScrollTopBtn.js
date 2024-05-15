"use client";
import React from "react";
import { ArrowUpCircle, ChevronsUp } from "lucide-react";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-10 bg-indigo-900  p-4 rounded-full shadow-md hover:bg-indigo-800 focus:outline-none focus:ring focus:ring-blue-300"
    >
      {/* <ArrowUpCircle size={24} /> */}
      <ChevronsUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;

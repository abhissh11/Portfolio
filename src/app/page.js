import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import Project from "@/components/Project";
import ScrollToTopButton from "@/components/ScrollTopBtn";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="">
      <HomePage />
      <About />
      <Skills />
      <Project />
      <Contact />
      <ScrollToTopButton />
    </main>
  );
}

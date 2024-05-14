import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HomePage />
      <About />
      <Skills />
      <Footer />
    </main>
  );
}

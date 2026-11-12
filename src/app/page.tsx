import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Work from "@/sections/Work";
import Experience from "@/sections/Experience";
import Toolkit from "@/sections/Toolkit";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import Education from "@/sections/Education";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import { TechStackStacked } from "@/sections/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Education />
      <TechStackStacked />
      <Contact/>
    </>
  );
}

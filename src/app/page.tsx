import Education from "@/sections/Education";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import { TechStack } from "@/sections/TechStack";
import Project from "@/sections/Project";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Project />
      <TechStack />
      <Education />
      <Contact/>
    </>
  );
}

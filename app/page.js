import Image from "next/image";
import Landing from "./components/homepage/landing";
import About from "./components/homepage/about";
import Skills from "./components/homepage/skills";
import Experience from "./components/homepage/experience";
import Contact from "./components/homepage/contact";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}

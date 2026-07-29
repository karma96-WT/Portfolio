import Image from "next/image";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import EducationPage from "./Components/Education";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects"
import Projects_2 from "./Components/Projects_2"
import Project_3 from "./Components/Project_3"
import TechStack from "./Components/TechStacks";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomePage/>
      <EducationPage/>
      <AboutMe/>
      <Projects/>
      <Projects_2/>
      <Project_3/>
      <TechStack/>
    </>
  );
}

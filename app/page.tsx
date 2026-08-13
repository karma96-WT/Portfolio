"use client"
import { useState } from "react";

import Image from "next/image";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import EducationPage from "./Components/Education";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects"
import Projects_2 from "./Components/Projects_2"
import Project_3 from "./Components/Project_3"
import TechStack from "./Components/TechStacks";

const pageComponents = [HomePage,EducationPage, AboutMe, Projects, Projects_2, Project_3, TechStack]

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext= ()=> {
    if(currentPage<pageComponents.length - 1){
      setCurrentPage((prev) => prev +1);
    }
  }

  const handlePrevious =()=>{
    if(currentPage>0){
      setCurrentPage((prev) => prev -1);
    }
  }
  const ActivePage = pageComponents[currentPage];
  return (
    <>
      <NavBar />
      <ActivePage onNext={handleNext} onPrevious={handlePrevious} />
    </>
  );
}

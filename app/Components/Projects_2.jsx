import React from "react";
import { FaGraduationCap, FaCode, FaAward, FaBookOpen } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function Projects_2({onNext, onPrevious}) {
  const projects1 = [
    {
      icon: <FaCode className="w-4 h-4 text-cyan-400" />,
      year: "2026",
      title: "Todo using React",
      desc: "A dynamic task manager built with React, featuring real-time filtering and persistent state management. This project is a fully functional todo application that allows users to efficiently organize their daily tasks. It leverages React's component-based architecture to provide a seamless user experience with zero page reloads. Users can easily add new tasks, toggle between viewing all, active, or completed items, and delete tasks once they are finished. The application's state is managed to ensure the UI updates instantly in response to every user action, making it a reliable tool for personal productivity.",
      tech_stack:
        "React.js, Tailwind CSS, Local Storage, vercel",
      live_link: "https://react-todo-7s18.vercel.app/",
      git_link: "https://github.com/karma96-WT/React-Todo.git",
    },
  ];
  const projects2 = [
    {
      icon: <FaCode className="w-4 h-4 text-cyan-400" />,
      year: "2026",
      title: "Travel Agent Website",
      desc: "A visually immersive landing page for a Bhutanese travel agency. Built with Next.js, Tailwind CSS and gmail, it showcases the kingdom's pristine beauty, Gross National Happiness philosophy, and sustainable tourism ethos through a serene, responsive design.",
      tech_stack: "Next.js, Tailwind CSS, Gmail",
      live_link: "https://travel-agent-website-brown.vercel.app/",
      git_link: "https://github.com/karma96-WT/travel-agent-website.git",
    },
    {
      icon: <FaCode className="w-4 h-4 text-cyan-400" />,
      year: "2026",
      title: "Groq API chatbot",
      desc: "A real-time AI chat interface built with Next.js. Features dynamic UI resizing, API integration, and secure Groq API integration with Meta's Llama 3. Fully responsive and free-tier optimized.",
      tech_stack: "Next.js, Tailwind CSS, groq api",
      live_link: "https://groq-api-chat-bot.vercel.app/",
      git_link: "https://github.com/karma96-WT/groq-API-chat-bot.git",
    },
  ];
  return (
    <div className="min-h-screen bg-white py-6 md:py-12 px-2 sm:px-4 flex flex-col items-center justify-center">
      {/* 1. Main Book Container (Identical proportions and shadow parameters) */}
      <div className="w-full max-w-5xl h-auto md:aspect-[16/10] bg-green-900 rounded-2xl shadow-2xl shadow-cyan-950/20 overflow-hidden grid grid-cols-1 md:grid-cols-2 relative border border-slate-800">
        {/* 2. Middle Spine Crease */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-slate-950/40 via-black/40 to-slate-950/40 z-10" />

        {/* 3. LEFT PAGE (Page 03) // Primary Milestone Overview */}
        <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800 bg-green-950 text-white font-sans min-h-0">
          <h2 className="flex justify-start items-start text-2xl md:text-2xl font-black mt-2 md:mt-4 mb-4 text-white tracking-tight">
            Projects
          </h2>

          <div className="relative border-l-2 border-emerald-900/60 pl-6 space-y-6 ml-2">
            {projects1.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot Node */}
                <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-green-950 border-2 border-cyan-400 flex items-center justify-center group-hover:bg-cyan-400 transition-colors duration-300 shadow-[0_0_8px_rgba(34,211,238,0.3)]" />

                {/* Timeline Node Context Content */}
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {item.year}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight transition-colors group-hover:text-cyan-400 duration-300">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
                    <span className="text-cyan-400">TechStack:</span>{" "}
                    {item.tech_stack}
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
                    <span className="text-cyan-400">Live URL:</span>{" "}
                    <a
                      href={`${item.live_link}`}
                      className="text-white hover:text-cyan-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      {item.live_link}
                    </a>
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
                    <span className="text-cyan-400">Git link:</span>{" "}
                    <a
                      href={`${item.git_link}`}
                      className="text-white hover:text-cyan-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      {item.git_link}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Backwards Link infrastructure */}
          <div className="sticky bottom-0 flex items-center justify-between pt-4 mt-6 md:mt-8 border-t border-emerald-900/30">
            <button
            onClick={onPrevious} 
            className="group flex items-center gap-2 cursor-pointer text-sm font-semibold tracking-wide text-emerald-400 hover:text-cyan-400 transition-colors">
              <FiArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Previous
            </button>
            <span className="text-slate-600 text-sm font-mono">page 09</span>
          </div>
        </div>

        {/* 4. RIGHT PAGE (Page 04) // Detailed Academic Track Timeline */}
        <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-between bg-green-950 text-white font-sans min-h-0">
          <div className="relative border-l-2 border-emerald-900/60 pl-6 space-y-6 ml-2">
            {projects2.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot Node */}
                <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-green-950 border-2 border-cyan-400 flex items-center justify-center group-hover:bg-cyan-400 transition-colors duration-300 shadow-[0_0_8px_rgba(34,211,238,0.3)]" />

                {/* Timeline Node Context Content */}
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {item.year}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight transition-colors group-hover:text-cyan-400 duration-300">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
                    <span className="text-cyan-400">TechStack:</span>{" "}
                    {item.tech_stack}
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
                    <span className="text-cyan-400">Live URL:</span>{" "}
                    <a href={`${item.live_link}`}
                      className="text-white hover:text-cyan-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer">
                      {item.live_link}
                    </a>
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
                    <span className="text-cyan-400">Git link:</span>{" "}
                    <a
                      href={`${item.git_link}`}
                      className="text-white hover:text-cyan-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      {item.git_link}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Forward Link infrastructure */}
          <div className="sticky bottom-0 flex items-center justify-between pt-1 mt-6 md:mt-1 border-t border-emerald-900/30">
            <span className="text-slate-600 text-sm font-mono">page 10</span>
            <button
            onClick={onNext} 
            className="group flex items-center gap-2 cursor-pointer text-sm font-semibold tracking-wide text-cyan-400 bg-emerald-900/40 hover:bg-cyan-400 hover:text-emerald-950 px-4 py-2 rounded-xl transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.1)] hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              Next Page
              <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

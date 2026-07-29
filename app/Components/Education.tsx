import React from "react";
import { FaGraduationCap, FaCode, FaAward, FaBookOpen } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function EducationPage() {
  // Timeline data for the right page layout
  const milestones1 = [
    {
      icon: <FaCode className="w-4 h-4 text-cyan-400" />,
      year: "2010 - 2018",
      title: "Tashiding Lower Secondary School, Dagana",
      desc: "Achievements: Served as House Captain (2018), Student of the Year (2018)",
    },
    
  ];
  const milestones2 = [
    {
      icon: <FaAward className="w-4 h-4 text-cyan-400" />,
      year: "2019 - 2020",
      title: "Gesarling Central School, Dagana",
      desc: "Achievements: Secured 85% in class 10 BCSEA",
    },
    {
      icon: <FaAward className="w-4 h-4 text-cyan-400" />,
      year: "2021 - 2022",
      title: "Damphu Central School, Tsirang",
      desc: "Achievements: 3rd overall section topper in mid-term (Class 12), 90% in pure Mathematics, secured 80% in BCSEA (class 12).",
    },
    {
      icon: <FaAward className="w-4 h-4 text-cyan-400" />,
      year: "2023 - present",
      title: "College of Science and Technology, Chhukha",
      desc: "Achievements: Winner of Inter-college programming contest (2026); Developer of the official RUB faculty meet room booking system, currently live and operational at CST (2026); Best of CST winner (2026); active satellite development group (2025-present)",
    }
  ];

  return (
    <div className="min-h-screen bg-white py-6 md:py-12 px-2 sm:px-4 flex flex-col items-center justify-center">
      {/* 1. Main Book Container (Identical proportions and shadow parameters) */}
      <div className="w-full max-w-5xl h-auto md:aspect-[16/10] bg-green-900 rounded-2xl shadow-2xl shadow-cyan-950/20 overflow-hidden grid grid-cols-1 md:grid-cols-2 relative border border-slate-800">
        {/* 2. Middle Spine Crease */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-slate-950/40 via-black/40 to-slate-950/40 z-10" />

        {/* 3. LEFT PAGE (Page 03) // Primary Milestone Overview */}
        <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800 bg-green-950 text-white font-sans min-h-0">
          <div className="flex flex-col justify-center flex-1 my-auto">
            
            <h2 className="text-2xl md:text-4xl font-black mt-2 md:mt-4 mb-4 text-white tracking-tight">
              Qualification
            </h2>

            {/* Degree Card Presentation Layout */}
            <div className="bg-emerald-900/30 border border-emerald-800/40 p-5 rounded-2xl space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                <FaGraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  Bachelor's Degree
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5 leading-tight">
                  BE in Information Technology
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                  Specialized program track focused on engineering robust data
                  systems, production network layouts, and adaptive application
                  frameworks.
                </p>
              </div>
            </div>
            <div className="mt-5">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                Education History
              </h2>
            </div>

            {/* Timeline Wrapper Layout Block */}
            <div className="relative border-l-2 border-emerald-900/60 pl-6 space-y-6 ml-2">
              {milestones1.map((item, idx) => (
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Backwards Link infrastructure */}
          <div className="flex items-center justify-between pt-4 mt-6 md:mt-8 border-t border-emerald-900/30">
            <button className="group flex items-center gap-2 cursor-pointer text-sm font-semibold tracking-wide text-emerald-400 hover:text-cyan-400 transition-colors">
              <FiArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Previous
            </button>
            <span className="text-slate-600 text-sm font-mono">page 03</span>
          </div>
        </div>

        {/* 4. RIGHT PAGE (Page 04) // Detailed Academic Track Timeline */}
        <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-between bg-green-950 text-white font-sans min-h-0">
          <div className="flex flex-col justify-center flex-1 space-y-4 md:space-y-6 my-auto">
            
            {/* Timeline Wrapper Layout Block */}
            <div className="relative border-l-2 border-emerald-900/60 pl-6 space-y-6 ml-2">
              {milestones2.map((item, idx) => (
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Forward Link infrastructure */}
          <div className="flex items-center justify-between pt-4 mt-6 md:mt-8 border-t border-emerald-900/30">
            <span className="text-slate-600 text-sm font-mono">page 04</span>
            <button className="group flex items-center gap-2 cursor-pointer text-sm font-semibold tracking-wide text-cyan-400 bg-emerald-900/40 hover:bg-cyan-400 hover:text-emerald-950 px-4 py-2 rounded-xl transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.1)] hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              Next Page
              <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

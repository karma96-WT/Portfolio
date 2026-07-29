import React from "react";
import { FaGraduationCap, FaCode, FaAward, FaBookOpen } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function Projects_2() {
  const projects1 = [
    {
      icon: <FaCode className="w-4 h-4 text-cyan-400" />,
      year: "2026",
      title: "E-Voting System",
      desc: "This project is done during week long Block chain bootcamp organized by GovTech Agency. A full-stack prototype for a hybrid e-voting system. Features include multi-role dashboards (Voter, Admin, Officer, Results), secure HMAC-based vote verification, and a modular architecture supporting mock or live NDI integration and public EVM testnets. Built with Next.js, Neon/Postgres, and Web3 libraries.",
      tech_stack:
        "Next.js, React, TypeScript, Tailwind CSS, Neon/PostgreSQL, scrypt, Solidity, Web3.js, Sepolia, NDI (National Digital Identity) API, HMAC-SHA256, Vercel",
      live_link: "https://e-voting-blockchain-seven.vercel.app/",
      git_link: "https://github.com/karma96-WT/e-voting_blockchain.git",
    },
  ];
  const projects2 = [
    {
      icon: <FaCode className="w-4 h-4 text-cyan-400" />,
      year: "2026",
      title: "Druk Funding App",
      desc: "A full-featured mobile application that connects project creators with backers, built with Flutter for cross-platform compatibility. This app provides a complete crowdfunding ecosystem where users can register, create funding campaigns, and contribute to projects they believe in. The platform features a robust admin panel for verifying and approving projects to maintain quality and trust. Users have full transparency over their activity, with dedicated dashboards to track both their own projects and their contribution history. The application leverages Flutter's rich widget library to deliver a smooth, native-like experience on both iOS and Android devices. ",
      tech_stack: "Flutter, Firebase",
      live_link: "",
      git_link: "https://github.com/karma96-WT/DrukFunding_flutter_App",
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
            <button className="group flex items-center gap-2 cursor-pointer text-sm font-semibold tracking-wide text-emerald-400 hover:text-cyan-400 transition-colors">
              <FiArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Previous
            </button>
            <span className="text-slate-600 text-sm font-mono">page 11</span>
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
            <span className="text-slate-600 text-sm font-mono">page 12</span>
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

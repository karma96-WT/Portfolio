import React from "react";
import { FaGraduationCap, FaCode, FaAward, FaBookOpen } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

interface PageProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

export default function TechStack({ onNext, onPrevious }: PageProps) {
  return (
    <div className="min-h-screen bg-white py-6 md:py-12 px-2 sm:px-4 flex flex-col items-center justify-center">
      {/* 1. Main Book Container (Identical proportions and shadow parameters) */}
      <div className="w-full max-w-5xl h-auto md:aspect-[16/10] bg-green-900 rounded-2xl shadow-2xl shadow-cyan-950/20 overflow-hidden grid grid-cols-1 md:grid-cols-2 relative border border-slate-800">
        {/* 2. Middle Spine Crease */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-slate-950/40 via-black/40 to-slate-950/40 z-10" />

        {/* 3. LEFT PAGE (Page 03) // Primary Milestone Overview */}
        <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800 bg-green-950 text-white font-sans min-h-0">
          <h2 className="flex justify-start items-start text-2xl md:text-2xl font-black mt-2 md:mt-4 mb-4 text-white tracking-tight">
            Teck Stacks
          </h2>

          <div className="relative border-l-2 border-emerald-900/60 pl-6 space-y-6 ml-2">
            <h1>Front End</h1>
            <div className="flex gap-3">
              <img
                src="html.png"
                alt="HTML icon"
                title="HTML"
                className="w-10 h-10"
              />
              <img
                src="css.png"
                alt="CSS icon"
                title="CSS"
                className="w-10 h-10"
              />
              <img
                src="javascript.webp"
                alt="JS icon"
                title="JavaScript"
                className="w-10 h-10"
              />
              <img
                src="typescript.webp"
                alt="JS icon"
                title="TypeScript"
                className="w-10 h-10"
              />
              <img
                src="react.webp"
                alt="React icon"
                title="React"
                className="w-10 h-10"
              />
              <img
                src="tailwindcss.webp"
                alt="Tailwindcss icon"
                title="Tailwind CSS"
                className="w-10 h-10"
              />
              <img
                src="bootstrap.webp"
                alt="Bootstrap icon"
                title="Bootstrap"
                className="w-10 h-10"
              />
            </div>
          </div>
          <div className="relative border-l-2 border-emerald-900/60 pl-6 space-y-6 ml-2">
            <h1>Backend End</h1>
            <div className="flex gap-3">
              <img
                src="javascript.webp"
                alt="JS icon"
                title="JavaScript"
                className="w-10 h-10"
              />
              <img
                src="typescript.webp"
                alt="TS icon"
                title="TypeScript"
                className="w-10 h-10"
              />
              <img
                src="nextjs.jpeg"
                alt="Nextjs icon"
                title="Next.js"
                className="w-10 h-10 rounded-2xl"
              />
              <img
                src="restapi.png"
                alt="REST API icon"
                title="REST API"
                className="w-10 h-10 rounded-2xl"
              />
              <img
                src="postman.webp"
                alt="Post man icon"
                title="Postman"
                className="w-10 h-10"
              />
              <img
                src="nodejs.webp"
                alt="Node.js icon"
                title="Node.js"
                className="w-10 h-10"
              />
              <img
                src="cloudinary.png"
                alt="Cloudinary icon"
                title="Cloudinary"
                className="w-25 h-10"
              />
            </div>
          </div>
          <div className="relative border-l-2 border-emerald-900/60 pl-6 space-y-6 ml-2">
            <h1>Design</h1>
            <div className="flex gap-3">
              <img
                src="figma.svg"
                alt="Figma icon"
                title="Figma"
                className="w-10 h-10"
              />
              <img
                src="canva.jpeg"
                alt="Figma icon"
                title="Canva"
                className="w-20 h-10 rounded-2xl"
              />
            </div>
          </div>
          <div className="relative border-l-2 border-emerald-900/60 pl-6 space-y-6 ml-2">
            <h1>App developement</h1>
            <div className="flex gap-3">
              <img
                src="flutter.png"
                alt="Figma icon"
                title="Flutter"
                className="w-20 h-10"
              />
            </div>
          </div>

          {/* Footer Backwards Link infrastructure */}
          <div className="sticky bottom-0 flex items-center justify-between pt-4 mt-6 md:mt-8 border-t border-emerald-900/30">
            <button
              onClick={onPrevious}
              className="group flex items-center gap-2 cursor-pointer text-sm font-semibold tracking-wide text-emerald-400 hover:text-cyan-400 transition-colors"
            >
              <FiArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Previous
            </button>
            <span className="text-slate-600 text-sm font-mono">page 13</span>
          </div>
        </div>

        {/* 4. RIGHT PAGE (Page 04) // Detailed Academic Track Timeline */}
        <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-between bg-green-950 text-white font-sans min-h-0">
          <div className="relative border-l-2 border-emerald-900/60 pl-6 space-y-6 ml-2">
            <h1>Deployment</h1>
            <div className="flex gap-3">
              <img
                src="vercel.webp"
                alt="Vercel icon"
                title="Vercel"
                className="w-10 h-10 rounded-2xl"
              />
              <img
                src="githubpages.jpeg"
                alt="GitHub icon"
                title="GitHub Pages"
                className="w-10 h-10 rounded-2xl"
              />
            </div>
          </div>
          <div className="relative border-l-2 border-emerald-900/60 pl-6 space-y-6 ml-2">
            <h1>Programming Language</h1>
            <div className="flex gap-3">
              <img
                src="javascript.webp"
                alt="Vercel icon"
                title="JavaScript"
                className="w-10 h-10"
              />
              <img
                src="python.webp"
                alt="GitHub icon"
                title="Python"
                className="w-10 h-10"
              />
              <img
                src="java.png"
                alt="GitHub icon"
                title="Java"
                className="w-10 h-10"
              />
              <img
                src="c.png"
                alt="GitHub icon"
                title="C"
                className="w-10 h-10"
              />
            </div>
          </div>
          <div className="relative border-l-2 border-emerald-900/60 pl-6 space-y-6 ml-2">
            <h1>Data Base</h1>
            <div className="flex gap-3">
              <img
                src="mysql.png"
                alt="Vercel icon"
                title="MySQL"
                className="w-10 h-10 rounded-2xl"
              />
              <img
                src="postgresql.png"
                alt="GitHub icon"
                title="PostgreSQL"
                className="w-20 h-10 rounded-2xl"
              />
              <img
                src="firebase.jpeg"
                alt="GitHub icon"
                title="Firebase"
                className="w-10 h-10 rounded-2xl"
              />
            </div>
          </div>
          <div className="relative border-l-2 border-emerald-900/60 pl-6 space-y-6 ml-2">
            <h1>Framework and Libraries</h1>
            <div className="flex gap-3">
              <img
                src="react.webp"
                alt="React icon"
                title="React"
                className="w-10 h-10"
              />
              <img
                src="nextjs.jpeg"
                alt="Nextjs icon"
                title="Next.js"
                className="w-10 h-10 rounded-2xl"
              />
              <img
                src="tailwindcss.webp"
                alt="Tailwindcss icon"
                title="Tailwind CSS"
                className="w-10 h-10"
              />
              <img
                src="bootstrap.webp"
                alt="Bootstrap icon"
                title="Bootstrap"
                className="w-10 h-10"
              />
            </div>
          </div>

          {/* Footer Forward Link infrastructure */}
          <div className="sticky bottom-0 flex items-center justify-between pt-1 mt-6 md:mt-1 border-t border-emerald-900/30">
            <span className="text-slate-600 text-sm font-mono">page 14</span>
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

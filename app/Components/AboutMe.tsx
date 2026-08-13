import React from "react";
import { FaGraduationCap, FaCode, FaAward, FaBookOpen } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

interface PageProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

export default function AboutMe({ onNext, onPrevious }: PageProps) {
  return (
    <div className="min-h-screen bg-white py-6 md:py-12 px-2 sm:px-4 flex flex-col items-center justify-center">
      {/* 1. Main Book Container (Identical proportions and shadow parameters) */}
      <div className="w-full max-w-5xl h-auto md:aspect-[16/10] bg-green-900 rounded-2xl shadow-2xl shadow-cyan-950/20 overflow-hidden grid grid-cols-1 md:grid-cols-2 relative border border-slate-800">
        {/* 2. Middle Spine Crease */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-slate-950/40 via-black/40 to-slate-950/40 z-10" />

        {/* 3. LEFT PAGE (Page 03) // Primary Milestone Overview */}
        <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800 bg-green-950 text-white font-sans min-h-0">
          <h2 className="flex justify-start items-start text-2xl md:text-6xl font-black mt-2 md:mt-4 mb-4 text-white tracking-tight">
            ALL
          </h2>

          <h2 className="flex justify-center items-center text-2xl md:text-6xl font-black mt-2 md:mt-4 mb-4 text-white tracking-tight">
            ABOUT
          </h2>
          <h2 className=" flex justify-end text-2xl md:text-6xl font-black mt-2 md:mt-4 mb-4 text-white tracking-tight">
            ME
          </h2>

          {/* Footer Backwards Link infrastructure */}
          <div className="flex items-center justify-between pt-4 mt-6 md:mt-8 border-t border-emerald-900/30">
            <button
              onClick={onPrevious}
              className="group flex items-center gap-2 cursor-pointer text-sm font-semibold tracking-wide text-emerald-400 hover:text-cyan-400 transition-colors"
            >
              <FiArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Previous
            </button>
            <span className="text-slate-600 text-sm font-mono">page 05</span>
          </div>
        </div>

        {/* 4. RIGHT PAGE (Page 04) // Detailed Academic Track Timeline */}
        <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-between bg-green-950 text-white font-sans min-h-0">
          <div className="flex flex-col justify-center flex-1 space-y-4 md:space-y-6 my-auto">
            {/* Timeline Wrapper Layout Block */}
            <div className="relative border-l-2 border-emerald-900/60 pl-6 space-y-6 ml-2">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo nihil quas odio nesciunt quasi reprehenderit ducimus
                tenetur neque! Velit eum excepturi dolorem nostrum voluptatum
                nam earum doloribus reiciendis reprehenderit quam. Quod minima a
                porro distinctio quam inventore tenetur deserunt error molestias
                repudiandae ipsam maiores laudantium sit quis harum neque dolore
                iusto sed, quo consequuntur necessitatibus, quas perferendis?
                Autem, impedit dolores? Totam, obcaecati inventore. Autem velit
                voluptas voluptatibus. Deserunt eveniet minima ab voluptatum
                suscipit cum laborum quos, odit consectetur quas labore deleniti
                ipsum veniam, ullam veritatis, ipsa molestiae architecto
                laudantium possimus.
              </p>
            </div>
          </div>

          {/* Footer Forward Link infrastructure */}
          <div className="flex items-center justify-between pt-4 mt-6 md:mt-8 border-t border-emerald-900/30">
            <span className="text-slate-600 text-sm font-mono">page 06</span>
            <button
              onClick={onNext}
              className="group flex items-center gap-2 cursor-pointer text-sm font-semibold tracking-wide text-cyan-400 bg-emerald-900/40 hover:bg-cyan-400 hover:text-emerald-950 px-4 py-2 rounded-xl transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.1)] hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
            >
              Next Page
              <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

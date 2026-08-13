import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Standard modern replacement for Twitter icon
import { SiTiktok } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

interface PageProps {
  onNext?: () => void;
  onPrevious?: () => void;
}

export default function HomePage({ onNext, onPrevious }: PageProps) {
  const socials = [
    { icon: <FaFacebookF className="w-4 h-4" />, url: "#" },
    { icon: <FaInstagram className="w-4 h-4" />, url: "#" },
    { icon: <SiTiktok className="w-4 h-4" />, url: "#" },
    { icon: <FaLinkedinIn className="w-4 h-4" />, url: "#" },
    { icon: <FaGithub className="w-4 h-4" />, url: "#" },
    { icon: <IoMdMail className="w-4 h-4" />, url: "#" },
  ];

  return (
    <div className="min-h-screen bg-white py-6 md:py-12 px-2 sm:px-4 flex flex-col items-center justify-center">
      {/* 2. Main Book Container 
          - mobile: aspect ratio removed, height grows dynamically with content (h-auto)
          - md: locks into a fixed, beautiful book aspect ratio (md:aspect-[16/10])
      */}
      <div className="w-full max-w-5xl h-auto md:aspect-[16/10] bg-green-900 rounded-2xl shadow-2xl shadow-cyan-950/20 overflow-hidden grid grid-cols-1 md:grid-cols-2 relative border border-slate-800">
        {/* 3. Middle Spine Crease - Only visible when side-by-side (md and up) */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-slate-950/40 via-black/40 to-slate-950/40 z-10" />

        {/* 4. LEFT PAGE (Gallery)
            - mobile: p-6 to save space
            - md: p-12 for professional breathing room
        */}
        <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800 bg-green-950 text-white font-sans">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 md:mt-4 mb-4 md:mb-8 text-white tracking-tight">
              Welcome
            </h2>

            {/* Image scales down perfectly using max-w-[240px] on mobile to leave room for content */}
            <div className="flex items-center justify-center pt-2 md:pt-4">
              <img
                src="profile_picture.jpeg"
                alt="Profile Picture"
                className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-xs aspect-[3/4] object-cover rounded-2xl border-2 border-slate-800 shadow-xl"
              />
            </div>
          </div>
          {/* Page indicator alignment adjusts based on screen setup */}
          <div className="text-slate-600 text-sm font-mono mt-6 md:mt-8">
            page 01
          </div>
        </div>

        {/* 5. RIGHT PAGE (Your Reference UI Layout) */}
        <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-between bg-green-950 text-white font-sans">
          {/* Content Wrapper - gaps scale down dynamically on mobile */}
          <div className="space-y-4 md:space-y-6">
            {/* Intro Typography - Font sizes scale fluidly from small to large screens */}
            <div>
              <h3 className="text-lg md:text-2xl font-bold text-slate-300 mb-1 tracking-tight">
                Hello, It's Me
              </h3>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-1">
                Karma Wangchuk Titung
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                And I'm a{" "}
                <span className="text-cyan-400">Full-Stack Developer</span>
              </h2>
            </div>

            {/* Description Paragraph */}
            <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
              I am a Full-Stack Developer with a Bachelor’s Degree in
              Information Technology, specializing in building high-performance
              web solutions and scalable digital architectures.
            </p>

            {/* Social Media Icons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border-2 border-cyan-400 flex items-center justify-center text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-emerald-950 hover:scale-110 cursor-pointer"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Neon Glowing Download CV Button */}
            <div className="pt-2 md:pt-4">
              <button className="cursor-pointer bg-cyan-400 text-slate-950 font-bold text-sm sm:text-base px-5 py-2.5 sm:px-6 sm:py-3 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]">
                Download CV
              </button>
            </div>
          </div>

          {/* Book Page Number Indicator */}
          <div className="flex items-center justify-between pt-4 mt-auto border-t border-emerald-900/30">
            <span className="text-slate-600 text-sm font-mono">page 02</span>

            <button
              onClick={onNext}
              className="group flex items-center gap-2 cursor-pointer text-sm font-semibold tracking-wide text-cyan-400 bg-emerald-900/40 hover:bg-cyan-400 hover:text-emerald-950 px-4 py-2 rounded-xl transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.1)] hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
            >
              Next Page
              {/* This class animates the arrow sliding out slightly on hover */}
              <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

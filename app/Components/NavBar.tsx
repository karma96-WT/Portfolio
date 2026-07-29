"use client"; // Required for client-side state hooks in Next.js App Router
import React, { useState } from "react";

function NavBar() {
  // State to track whether the mobile dropdown menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Education", "About Me", "Projects", "Tech Stacks"];

  return (
    <nav className="w-full bg-green-950 border-b border-slate-800 text-white relative z-50">
      {/* Primary Navigation Bar Container */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Left Side: Logo & Dynamic Titles */}
        <div className="flex items-center space-x-3">
          <img
            className="h-11 w-11 rounded-full cursor-pointer border border-slate-700 object-cover"
            src="/logo.png"
            alt="Logo"
          />
          <div className="flex flex-col">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-cyan-400 pr-1 text-sm sm:text-base font-bold font-mono max-w-max text-white">
              Karma Wangchuk Titung
            </h1>
            <h2 className="text-[10px] sm:text-xs font-mono text-slate-400 max-w-max hidden xs:block">
              Passionate Software Developer
            </h2>
          </div>
        </div>

        {/* Center/Right Side: Desktop Navigation Menu Links */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item}
              className="px-4 py-2 text-sm font-semibold rounded-xl text-slate-300 transition-all duration-300 hover:bg-white hover:text-green-900 cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right Side: Mobile Hamburger Menu Button Toggle Trigger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-400 hover:text-white focus:outline-none cursor-pointer p-2 rounded-lg hover:bg-slate-900"
            aria-label="Toggle Menu"
          >
            {/* Conditional SVG Rendering: Change ☰ into ✕ depending on state */}
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel (Only visible when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 px-4 py-3 space-y-2 absolute top-16 left-0 w-full shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setIsOpen(false)} // Auto-close menu when a link is clicked
              className="block w-full text-left px-4 py-3 text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-cyan-400 rounded-xl transition-colors cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
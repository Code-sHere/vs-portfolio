import React, { useState } from "react";
import { Moon, Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 z-50 transition-all duration-300 
      bg-transparent backdrop-blur-sm bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-pink-500/30 
      shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
      <nav className="flex items-center justify-between px-6 py-3 md:px-10">

        {/* Logo + Links */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              className="w-6"
              src="https://nadhir.dev/nadhir.svg"
              alt="Logo"
            />
            <span className="font-semibold text-gray-800">Vansh.Dev</span>
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <li><a href="#" className="hover:text-purple-500 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-purple-500 transition-colors">Projects</a></li>
            <li><a href="#" className="hover:text-purple-500 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Button */}
          <button
            className="p-3 bg-[#111] rounded-lg shadow-sm hover:shadow-md border border-gray-700 hover:border-gray-500 transition-all duration-200"
            style={{ width: "40px", height: "40px" }}
          >
            <Moon className="text-white w-4 h-4 mx-auto" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-all duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-6 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu with smooth animation */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 shadow-md overflow-hidden transform transition-all duration-500 ease-in-out bg-transparent backdrop-blur-sm bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-pink-500/30 
      shadow-[0_2px_10px_rgba(0,0,0,0.15)]
          ${menuOpen ? "max-h-60 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-5"}
        `}
      >
        <ul className="flex flex-col items-center gap-5 px-6 py-4 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-purple-500 transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-purple-500 transition-colors">Projects</a></li>
          <li><a href="#" className="hover:text-purple-500 transition-colors">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

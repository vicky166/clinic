"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Home, Info, Briefcase, Phone, Search } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black fixed shadow-md top-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
        <img src="/img/logo.png" alt="Nexus Clinic Logo" className="w-36 h-auto mb-4" /> 

        </div>

        <div className="flex items-center bg-white ml-2 rounded-lg px-3 py-1">
          <Search size={20} className="text-gray-600" />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 outline-none bg-transparent text-black"
          />
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-white hidden md:block">
            <Search size={24} />
          </button>

          <div className="relative group">
            <button className="text-white">Explore</button>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg w-40 transform transition-transform duration-300 ease-in-out">
              <Link
                href="/explore/option1"
                className="block px-4 py-2 text-gray-700 items-center gap-2 hover:bg-gray-100"
              >
                Option 1
              </Link>
              <Link
                href="/explore/option2"
                className="block px-4 py-2 text-gray-700 items-center gap-2 hover:bg-gray-100"
              >
                Option 2
              </Link>
              <Link
                href="/explore/option3"
                className="block px-4 py-2 text-gray-700 items-center gap-2 hover:bg-gray-100"
              >
                Option 3
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <div
              className={`absolute right-0 top-10 bg-white shadow-lg rounded-lg w-40 transform transition-transform duration-300 ease-in-out ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0 pointer-events-none"
              }`}
            >
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 items-center gap-2 hover:bg-gray-100"
              >
                <Home size={20} /> Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-gray-700 items-center gap-2 hover:bg-gray-100"
              >
                <Info size={20} /> About
              </Link>
              <Link
                href="/services"
                className="block px-4 py-2 text-gray-700 items-center gap-2 hover:bg-gray-100"
              >
                <Briefcase size={20} /> Services
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-700 items-center gap-2 hover:bg-gray-100"
              >
                <Phone size={20} /> Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

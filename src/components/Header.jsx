// components/Navbar.js
"use client"
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="overflow-x-hidden fixed bg-black text-white p-4">
      <div className="flex justify-between items-center">
        
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
       
      </div>
      <div
          className={`md:flex justify-center items-center  ${isOpen ? "max-h-40 flex-col" : "max-h-0"}  overflow-hidden justify-center items-center w-screen transition-max-height duration-500 ease-in-out space-x-6 md:max-h-full`}
        >
         <ul className=" md:flex gap-4">
         <li><Link href="/" className="hover:text-gray-400 transition-colors duration-300">
            Home
          </Link></li>
          <li><Link href="https://www.linkedin.com/in/mohit-singh-33a41a263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-gray-400 transition-colors duration-300">
            LinkedIn
          </Link></li>
          <li><span  className="hover:text-gray-400 transition-colors duration-300">
            mohit02170@gmail.com
          </span></li>
         </ul>
          
        </div>
    </nav>
  );
}

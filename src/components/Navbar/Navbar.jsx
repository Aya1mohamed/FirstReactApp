
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className="bg-slate-700 text-white p-9 text-lg fixed top-0 left-0 w-full z-50">
      <div className=" mx-auto flex md:justify-around justify-between items-center">
        <a href="#" className="text-2xl md:text-3xl font-bold">START FRAMEWORK</a>
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white focus:outline-none">
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor" >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <ul
          className={`${isOpen ? "block" : "hidden"} absolute lg:static bg-slate-700 lg:bg-transparent w-full lg:w-auto lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 text-center lg:text-left top-16 left-0 p-6 lg:p-0`}>
          <li>
            <NavLink to="/About" className=" font-bold">ABOUT</NavLink>
            
          </li>
          <li>
            <NavLink to="/Portfolio" className=" font-bold">PORTFOLIO</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className=" font-bold">CONTACT</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

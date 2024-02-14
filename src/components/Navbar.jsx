import React, { useState } from "react";
import logo from "../assets/SD.png";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="w-full h-11 fixed flex justify-between items-center px-4 bg-teal-950 text-gray-400">
      <div>
        <img src={logo} alt="logo" className="w-10" />
      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li className="hover:scale-125 hover:text-lime-500">Home</li>
        <li className="hover:scale-125 hover:text-lime-500">About</li>
        <li className="hover:scale-125 hover:text-lime-500">Skills</li>
        <li className="hover:scale-125 hover:text-lime-500">Works</li>
        <li className="hover:scale-125 hover:text-lime-500">Contact</li>
      </ul>

      {/* hamburger */}
      <div onClick={() => setShowNav(!showNav)} className="md:hidden z-50">
        {showNav ? <RxCross2 size={22} /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      <ul
        className={`${
          showNav
            ? "absolute  top-0 left-0 w-full h-screen z-40 bg-teal-950 flex flex-col justify-center items-center *:py-6 *:text-4xl *:text-lime-500  animate-dropdown"
            : "hidden"
        } `}
      >
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>

      {/* Social icons */}
      <div className="hidden xl:flex fixed flex-col top-[35%] left-0">
        <ul className="">
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 text-gray-300">
            <a href="https://www.linkedin.com/in/sivasisdas1994" target="_blank" className="flex justify-between items-center w-full ">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800 text-gray-300">
            <a href="https://github.com/sivasis-das" target="_blank" className="flex justify-between items-center w-full ">
              GitHub
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-teal-600 text-gray-300">
            <a href="mailto:daspov@gmail.com" target="_blank" className="flex justify-between items-center w-full ">
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-600 text-gray-300">
            <a href="https://docs.google.com/document/d/1c8suWDp25YBNrZEWeqbAO8Xhl0WHWCe08t1NXW8zKsc/edit?usp=drive_link" target="_blank" className="flex justify-between items-center w-full ">
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

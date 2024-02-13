import React, { useState } from "react";
import logo from "../assets/SD.png";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [showNav, setShowNav] = useState(false)
  return (
    <div className="w-full h-11 fixed flex justify-between items-center px-4 bg-teal-950 text-gray-400">
      <div>
        <img src={logo} alt="logo" className="w-10" />
      </div>

      {/* menu */}
      
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Works</li>
          <li>Contact</li>
        </ul>
      

      {/* hamburger */}
      <div onClick={()=>setShowNav(!showNav)} className="md:hidden z-10">
        {showNav?<RxCross2 size={22} />:<FaBars />}
        
      </div>

      {/* Mobile menu */}
      <ul className={`${showNav?"absolute top-0 left-0 w-full h-screen bg-teal-950 flex flex-col justify-center items-center *:py-6 *:text-4xl   animate-dropdown":"hidden"} `}>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Works</li>
        <li>Contact</li>
      </ul>

      {/* Social icons */}
      <div className="hidden"></div>
    </div>
  );
}

export default Navbar;

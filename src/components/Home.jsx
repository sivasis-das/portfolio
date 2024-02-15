import React from "react";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../assets/Sivasis Resume 2023 pdf.pdf"

function Home() {
  return (
    <div name="home" className="h-screen w-full bg-teal-950">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-lime-500 font-bold sm:text-xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-300">
          Sivasis Das
        </h1>
        <h2 className="text-4xl sm:7xl font-bold text-gray-500">
          I'm a Full Stack Developer
        </h2>
        <p className="text-gray-500 py-4 max-w-[700px]">
          I'm a full-stack developer specialized in building and designing
          exceptional digital experiences. Currently I'm focused on building
          responsive full stack web applications.
        </p>
        <div className="flex justify-between items-center">
          <a href={resume} target="_blank">
            <button className="text-lime-500 border-2 border-lime-500 px-6 py-3 my-2 flex items-center gap-2 hover:bg-lime-500 hover:text-white shadow-md group duration-500">
              View Resume{" "}
              <span>
                <FaArrowRight className="group-hover:-rotate-90 group-hover:duration-300" />
              </span>{" "}
            </button>
          </a>

          <div className="xl:hidden flex space-x-4">
            <a
              href="https://www.linkedin.com/in/sivasisdas1994"
              target="_blank"
              className="text-lime-500"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/sivasis-das"
              target="_blank"
              className="text-lime-500"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

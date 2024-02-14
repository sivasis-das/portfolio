import React from "react";
import { FaArrowRight } from "react-icons/fa";

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
        <div>
          <button className="text-lime-500 border-2 border-lime-500 px-6 py-3 my-2 flex items-center gap-2 hover:bg-lime-500 hover:text-white shadow-md group duration-500">
            View Works{" "}
            <span>
              <FaArrowRight className="group-hover:rotate-90 group-hover:duration-300" />
            </span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

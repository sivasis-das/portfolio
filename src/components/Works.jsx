import React from "react";
import work1 from "../assets/work1.jpeg";
import work2 from "../assets/work2.jpg";
import weather from '../assets/weather.png'

function Works() {
  return (
    <div name="works" className="w-full md:h-screen bg-lime-500 text-teal-950 ">
      <div className="max-w-[1000px] mx-auto p-4 flex- flex-col justify-center w-full h-full">
        <div className=" pt-6">
          <div className="py-4">
            <p className="text-4xl font-bold  inline border-b-4 border-teal-950 text-gray-300">
              Works
            </p>
          </div>
          <p className="py-3">Check out some of my recent works</p>
        </div>
        {/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-hidden rounded-md  ">
          {/* card */}
          <div
            style={{ backgroundImage: `url(${work1})` }}
            className="hover:shadow-lg shadow-teal-950 group container rounded-md flex justify-center items-center mx-auto bg-no-repeat h-[250px] bg-cover bg-top overflow-hidden m-3"
          >
            {/* hover effect */}
            <div className="group-hover:bg-teal-950/80 transition duration-700 ease-in-out w-full h-full flex justify-center items-center">
              <div className="opacity-0 group-hover:opacity-100  duration-700 ease-in-out group-hover:transition-opacity text-center">
                <span className="text-2xl font-bold text-gray-400 tracking-wider">
                  React JS app
                </span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="py-3 m-2 bg-white text-gray-700 font-bold text-lg px-4 rounded-lg text-center hover:bg-lime-500 hover:text-white duration-300">
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className="py-3 m-2 bg-white text-gray-700 font-bold text-lg px-4 rounded-lg text-center hover:bg-lime-500 hover:text-white duration-300">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div
            style={{ backgroundImage: `url(${work2})` }}
            className="hover:shadow-lg shadow-teal-950 group container rounded-md flex justify-center items-center mx-auto bg-no-repeat h-[250px] bg-cover bg-top overflow-hidden m-3"
          >
            {/* hover effect */}
            <div className="group-hover:bg-teal-950/80 transition duration-700 ease-in-out w-full h-full flex justify-center items-center">
              <div className="opacity-0 group-hover:opacity-100   duration-700 transition-opacity ease-in-out ">
                <span className="text-2xl font-bold text-gray-400 tracking-wider">
                  Real Estate app
                </span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="py-3 m-2 bg-white text-gray-700 font-bold text-lg px-4 rounded-lg text-center hover:bg-lime-500 hover:text-white duration-300">
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className="py-3 m-2 bg-white text-gray-700 font-bold text-lg px-4 rounded-lg text-center hover:bg-lime-500 hover:text-white duration-300">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${weather})` }}
            className="hover:shadow-lg shadow-teal-950 group container rounded-md flex justify-center items-center mx-auto  bg-no-repeat h-[250px] bg-cover bg-top overflow-hidden m-3"
          >
            {/* hover effect */}
            <div className="group-hover:bg-teal-950/80 transition duration-700 ease-in-out w-full h-full flex justify-center items-center">
              <div className="opacity-0 group-hover:opacity-100   duration-700 transition-opacity ease-in-out text-center">
                <span className="text-2xl font-bold text-gray-400 tracking-wider ">
                  Weather app
                </span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="py-3 m-2 bg-white text-gray-700 font-bold text-lg px-4 rounded-lg text-center hover:bg-lime-500 hover:text-white duration-300">
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className="py-3 m-2 bg-white text-gray-700 font-bold text-lg px-4 rounded-lg text-center hover:bg-lime-500 hover:text-white duration-300">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;

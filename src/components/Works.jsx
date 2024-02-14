import React from "react";
import work1 from "../assets/work1.jpeg";
import work2 from "../assets/work2.jpg";

function Works() {
  return (
    <div name="works" className="w-full md:h-screen bg-lime-500 text-teal-950 ">
      <div className="max-w-[1000px] mx-auto p-4 flex- flex-col justify-center w-full h-full">
        <div className="pb-8 pt-6">
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
            <div className="group-hover:bg-teal-950/80 transition duration-700 w-full h-full flex justify-center items-center">
              <div className="opacity-0 group-hover:opacity-100   group-hover:duration-700 group-hover:transition-opacity">
                <span className="text-2xl font-bold text-gray-400 tracking-wider">
                  React JS app
                </span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="py-3 m-2 bg-white text-gray-700 font-bold text-lg px-4 rounded-lg text-center">
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className="py-3 m-2 bg-white text-gray-700 font-bold text-lg px-4 rounded-lg text-center">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${work2})` }}
            className="hover:shadow-lg shadow-teal-950 group container rounded-md flex justify-center items-center mx-auto bg-no-repeat h-[250px] bg-cover bg-top overflow-hidden m-3"
          >
            {/* hover effect */}
            <div className="group-hover:bg-teal-950/80 transition duration-700 w-full h-full flex justify-center items-center">
              <div className="opacity-0 group-hover:opacity-100   group-hover:duration-700 group-hover:transition-opacity">
                <span className="text-2xl font-bold text-gray-400 tracking-wider">
                  Real Estate app
                </span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="py-3 m-2 bg-white text-gray-700 font-bold text-lg px-4 rounded-lg text-center">
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className="py-3 m-2 bg-white text-gray-700 font-bold text-lg px-4 rounded-lg text-center">
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

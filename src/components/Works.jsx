import React from "react";
import recipe from "../assets/recipe.png";
import realtor from "../assets/realtor.png";
import weather from "../assets/weather.png";

function Works() {
  return (
    <div name="works" className="w-full  bg-lime-500 text-teal-950 ">
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
          <div className="relative hover:shadow-lg shadow-teal-950 group container rounded-md flex justify-center items-center mx-auto bg-no-repeat min-h-[250px]  bg-cover bg-top overflow-hidden m-3">
            <img src={recipe} alt="" className=" w-full  h-full " />
            {/* hover effect */}
            <div className="absolute group-hover:bg-teal-950/80 transition duration-700 ease-in-out w-full h-full flex justify-center items-center">
              <div className="opacity-0 group-hover:opacity-100  duration-700 ease-in-out group-hover:transition-opacity text-center">
                <span className="text-2xl font-bold text-gray-400 tracking-wider">
                  FlavorVerse
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
          <div className="relative hover:shadow-lg shadow-teal-950 group container rounded-md flex justify-center items-center mx-auto  overflow-hidden m-3">
            <img src={realtor} alt="" className=" w-full  h-full " />
            {/* hover effect */}
            <div className="absolute group-hover:bg-teal-950/80 transition duration-700 ease-in-out w-full h-full flex justify-center items-center">
              <div className="opacity-0 group-hover:opacity-100   duration-700 transition-opacity ease-in-out text-center">
                <span className="text-2xl font-bold text-gray-400 tracking-wider">
                  Realtor.com
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

          {/* card 3 */}
          <div className="relative hover:shadow-lg shadow-teal-950 group container rounded-md flex justify-center items-center mx-auto overflow-hidden m-3  ">
            <img src={weather} alt="" className=" w-full  h-full " />
            {/* hover effect */}
            <div className="absolute group-hover:bg-teal-950/80 transition duration-700 ease-in-out w-full h-full flex justify-center items-center ">
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

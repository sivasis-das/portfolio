import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import firebase from "../assets/firebase.png";
import node from "../assets/node.png";
import mongo from "../assets/mongo.png";
import github from '../assets/github.png'
function Skills() {
  return (
    <div name='skills' className="bg-teal-950  text-gray-400 h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="">
            <div className="py-4 ">
                <p className="text-4xl font-bold  inline border-b-4 border-lime-500 text-gray-300">Skills</p>
            </div>
            
            <p className="py-3" >These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-4 sm:grid-cols-4 gap-4 text-center">
            <div className="shadow-md shadow-emerald-950 hover:scale-110 duration-500">
                <img src={html} alt="html logo" className="w-20 mx-auto" />
                <p className="my-4 ">HTML</p>
            </div>
            <div className="shadow-md shadow-emerald-950 hover:scale-110 duration-500">
                <img src={css} alt="html logo" className="w-20 mx-auto" />
                <p className="my-4 ">CSS</p>
            </div>
            <div className="shadow-md shadow-emerald-950 hover:scale-110 duration-500">
                <img src={javascript} alt="html logo" className="w-20 mx-auto" />
                <p className="my-4 ">Javascript</p>
            </div>
            <div className="shadow-md shadow-emerald-950 hover:scale-110 duration-500">
                <img src={react} alt="html logo" className="w-20 mx-auto" />
                <p className="my-4 ">React</p>
            </div>
            <div className="shadow-md shadow-emerald-950 hover:scale-110 duration-500">
                <img src={tailwind} alt="html logo" className="w-20 mx-auto" />
                <p className="my-4 ">Tailwind</p>
            </div>
            <div className="shadow-md shadow-emerald-950 hover:scale-110 duration-500">
                <img src={node} alt="html logo" className="w-20 mx-auto" />
                <p className="my-4 ">Node</p>
            </div>
            <div className="shadow-md shadow-emerald-950 hover:scale-110 duration-500">
                <img src={mongo} alt="html logo" className="w-20 mx-auto" />
                <p className="my-4 ">Mongo DB</p>
            </div>
            <div className="shadow-md shadow-emerald-950 hover:scale-110 duration-500">
                <img src={github} alt="html logo" className="w-20 mx-auto" />
                <p className="my-4 ">GitHub</p>
            </div>
            <div className="shadow-md shadow-emerald-950 hover:scale-110 duration-500">
                <img src={firebase} alt="html logo" className="w-20 mx-auto" />
                <p className="my-4 ">Firebase</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

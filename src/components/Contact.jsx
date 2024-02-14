import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-teal-950 flex justify-center items-center p-4"
    >
      <form action="https://getform.io/f/1aMRvObW" method="POST" className="flex flex-col max-w-[1000px] w-full">
        <div className="pb-6 text-gray-400">
          <p className="text-4xl font-bold inline border-b-4 border-lime-500 text-gray-300">
            Contact
          </p>
          <p className="pt-3">
            Submit the form below <br />
            or send email at -{" "}
            <a
              href="mailto:sivasisd7@gmail.com"
              className="text-lime-500 hover:text-lime-300 lining-nums tracking-wider"
            >
              sivasisd7@gmail.com
            </a>
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="p-2 bg-teal-800 font-bold outline-none focus:ring-lime-500 focus:ring-2 duration-300 text-gray-300 caret-lime-500 "
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="my-4 p-2 bg-teal-800 font-bold outline-none focus:ring-lime-500 focus:ring-2 duration-300 text-gray-300 caret-lime-500  lining-nums"
        />
        <textarea
          name="message"
          placeholder="Write your message here..."
          cols="30"
          rows="8"
          className="p-2 bg-teal-800 resize-none font-bold outline-none focus:ring-lime-500 focus:ring-2 duration-300 text-gray-300 caret-lime-500 lining-nums"
        ></textarea>
        <button type="submit" className="text-lime-500 font-bold border-2 border-lime-500 hover:bg-lime-500 hover:text-white px-4 py-3 mt-8 duration-500">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;

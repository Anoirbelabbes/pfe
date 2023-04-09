import React from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function ContactUs() {

  const handleClose = (e) => {
    e.stopPropagation();
    // Code pour fermer la fenêtre ou naviguer vers une autre page si nécessaire
  };
  return (
    <div className="bg-[#000300] h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-lg max-w-md">
        <div className="flex justify-end mb-4">
          <button className="text-[#1b1d1c] text-xl" onClick={handleClose}>
            <Link to="/App"><AiOutlineClose size={24} /></Link>
          </button>
        </div>
        <h2 className="text-2xl font-bold text-[#00df9a] mb-4">
          Contact Us
        </h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your message"
              rows="6"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-[#00df9a] hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;


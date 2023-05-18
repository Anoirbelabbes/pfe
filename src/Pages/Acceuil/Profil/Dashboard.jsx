import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

function Dashboard({ onClose }) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Code pour mettre à jour les paramètres du compte
    };


  return (
        <div className="bg-[#000300] h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg px-10 py-8 shadow-lg w-96 relative">
              <h2 className="text-[#00df9a] text-2xl font-bold mb-5">Dashboard
                <button
                  className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 focus:outline-none"
                  onClick={onClose}
                >
                  <Link to="/UserProfile"><AiOutlineClose size={24} /></Link>
                </button>
              </h2>

              <div className="mb-5">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  First name
                </label>
                <input
                  type="text"
                  id="name"
                  className="border border-gray-300 p-2 w-full rounded"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="border border-gray-300 p-2 w-full rounded"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 p-2 w-full rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="border border-gray-300 p-2 w-full rounded"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-5">
                <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="border border-gray-300 p-2 w-full rounded"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="bg-[#00df9a] text-white font-bold py-2 px-4 rounded hover:bg-[#009f6b]" >Submit</button>
            </form>
        </div>

  );
}

export default Dashboard;

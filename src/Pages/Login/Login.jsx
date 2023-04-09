import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';


const Login = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[#000300] bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg px-10 py-8 shadow-lg w-96 relative">
        <button
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 focus:outline-none"
          onClick={onClose}
        >
          <Link to="/App"><AiOutlineClose size={24} /></Link>
        </button>
        <h2 className="text-2xl text-[#00df9a] font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border rounded-lg px-3 py-2 w-full"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2 text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border rounded-lg px-3 py-2 w-full"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          
          <Link to="/Navbar2" type="submit"
            className="bg-[#00df9a] text-white rounded-lg px-3 py-2 w-full font-bold text-center hover:bg-[#009f6b]">Login</Link>
        </form>
        <p className="text-gray-700 text-sm mt-2">
          You don't have an account?{' '}
          <Link to="/Signup" className="text-[#00df9a] font-bold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login

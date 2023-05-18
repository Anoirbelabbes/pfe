import React from 'react'
import { useState , useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';


const Signup = () => {

  const [users, setUsers] = useState([]);

  const api = "http://localhost:3001";
  const [firstname, setFirstname] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();

    // Check if any field is empty
    if (!firstname || !lastName || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    // Check if email is valid
    const validEmail = /\S+@\S+\.\S+/;
    if (!validEmail.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    createUser();
  };

  const createUser = () => {
    Axios.post(`${api}/createUser`, { firstname, lastName, email, password, confirmPassword })
      .then(res => {
        console.log(res.data);
        setFirstname('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');
        navigate('/Navbar2');
      })
      .catch(error => {
        console.log(error);
        setError('An error occurred');
      });
  }

  

  return (
    <div className="bg-[#000300] h-screen flex justify-center items-center">
      <form onSubmit={handleSignup} className="bg-white rounded-lg px-10 py-8 shadow-lg w-96">
        <div className="flex justify-end">
          <button className="focus:outline-none" type="button">
            <Link to="/App"><AiOutlineClose size={24} /></Link>
          </button>
        </div>
        <h2 className="text-[#00df9a] text-2xl font-bold mb-5">Sign up</h2>
        {error && <div className="text-red-500 mb-3">{error}</div>}
        <div className="mb-5">
          <label htmlFor="firstname" className="block text-gray-700 font-bold mb-2">
            First name
          </label>
          <input
            type="text"
            id="firstname"
            className="border border-gray-300 p-2 w-full rounded"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
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

        <button
          type="submit"
          className="bg-[#00df9a] text-white font-bold py-2 px-4 rounded hover:bg-[#009f6b]"
          onClick={handleSignup}
        >
          Sign up
        </button>

        <p className="text-gray-700 text-sm mt-2">
        Already have an account? 
        <Link to="/Login" className='text-[#00df9a]'>Log in</Link>
    </p>
  </form>
</div>
    
  )
}

export default Signup

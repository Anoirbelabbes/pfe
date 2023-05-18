import React from 'react'
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';



const api = "http://localhost:3001";

const Login = () => {

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    Axios.get(`${api}/users`).then((res) => setUsers(res.data));
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const user = users.find((user) => user.email === email && user.password === password);

    if (email === "" || password === "") {
      setError("Please fill in all fields");
      return;
    }

    if (user) {
      console.log("User authenticated");
      setError("");
      navigate("/Navbar2"); // Redirect to the dashboard page
    } else {
      setError("Invalid email or password");
    }
  };
  

  return (
    <div className="bg-[#000300] h-screen flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        action="/Navbar2"
        className="bg-white rounded-lg px-10 py-8 shadow-lg w-96"
      >
        <div className="flex justify-end">
          <button className="focus:outline-none" type="button">
            <Link to="/App">
              <AiOutlineClose size={24} />
            </Link>
          </button>
        </div>
        <h2 className="text-[#00df9a] text-2xl font-bold mb-5">Log in</h2>
        {error && <div className="text-red-500 mb-5">{error}</div>}
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
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
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

        <button
          type="submit"
          className="bg-[#00df9a] text-white font-bold py-2 px-4 rounded hover:bg-[#009f6b]"
        >
          Log in
        </button>

        <p className="text-gray-700 text-sm mt-2">
          Don't have an account?
          <Link to="/Signup" className="text-[#00df9a]">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};







export default Login

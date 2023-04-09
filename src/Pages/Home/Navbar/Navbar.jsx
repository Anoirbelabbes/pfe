import { useState, useRef, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {TbBooks} from 'react-icons/tb'
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setNav(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <TbBooks size="40%" className='text-[#00df9a] text-2xl animate-pulse mr-2' />
      <h1 className='w-full text-3xl font-bold text-[#00df9a] pr-9  hover:cursor-pointer'>BookTracker</h1>
      <ul className='hidden md:flex space-x-8 mr-80 hover:cursor-pointer'>
        <li ><a className='text-white hover:text-[#00df9a] transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer' href="#Home">Home</a> </li>
        <li ><a className='text-white hover:text-[#00df9a] transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer' href="#about">About</a> </li>
        <Link to="/ContactUs" className='text-white hover:text-[#00df9a] transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer'>Contact</Link>
        
      </ul>

      <div className=' justify-center space-x-2 hidden md:block'>
        <Link to='/Login' className='inline-block rounded-full px-6 pt-2.5 pb-2 text-xs font-medium leading-normal text-primary transition duration-150 ease-in-out hover:text-[#00df9a] hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700'>
          Login
        </Link>
      </div>

      <Link to='/Signup' className='hidden md:inline-block bg-[#00df9a] hover:bg-teal-600 text-black font-bold py-2 px-4 rounded-full'>
        Signup
      </Link>

      <div ref={ref} className='relative'>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>BookTracker</h1>
          <li className='p-4'><a href="#Home"> Home </a></li>
          <li  className='p-4 '><a href="#about">About</a></li>
          <li className='p-4 mb-4'><Link to='/ContactUs'>Contact</Link></li>
          <div className='flex justify-center space-x-2 md:hidden'>
            <Link to='/Login' className='inline-block rounded-full px-6 pt-2.5 pb-2 text-xs font-medium leading-normal text-primary transition duration-150 ease-in-out hover:text-[#00df9a] hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 login-button'>
              Login
            </Link>
            <Link to='/Signup' className='inline-block bg-[#00df9a] hover:bg-teal-600 text-black font-bold py-2 px-4 rounded-full signup-button'>
              Signup
            </Link>
          </div>
        </ul>
      </div> 
      
    </div>
  );
};

export default Navbar;
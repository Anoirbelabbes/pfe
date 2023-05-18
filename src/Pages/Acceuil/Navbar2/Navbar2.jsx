import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {TbBooks} from 'react-icons/tb';
import Hero2 from './Hero2';
import Profil from '../Profil/Profil';
import LastBookReads from './LastBookReads';
import Recommended from './Recommended';
import Footer2 from '../Footer2';
import axios from "axios";


const Navbar2 = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
    setNav(!nav);
    };

  return (
    <>
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white md:px-8'>
      <TbBooks size="35%" className='text-[#00df9a] text-2xl animate-pulse mr-2' />
      <div className='flex items-center'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] pr-24  hover:cursor-pointer'>BookTracker</h1>
        <div onClick={handleNav} className='block md:hidden'> {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}</div>
      </div>
      <ul className='hidden md:flex space-x-9 mr-60 mt-3 hover:cursor-pointer'>
        <Link to="/Navbar2" className='text-[#00df9a] hover:text-[#00df9a] transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer'>Home</Link>
        <Link to="/Challenges" className='text-white hover:text-[#00df9a] transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer'>Challenges</Link> 
        <Link to="/BookList" className='text-white hover:text-[#00df9a] transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer'> Booklist</Link>
        <Link to='/Feeds' className='text-white hover:text-[#00df9a] transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer'>Feeds</Link>
        <Link to="/Books" className='text-white hover:text-[#00df9a] transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer'>Books</Link>
      </ul>
      
      <div className='hidden md:block'>
        <Profil className='flex items-center mr-4 md:mr-8' />
      </div>

      
      
          <ul className={ nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'> BookTracker</h1>
            <div className='md:hidden'>
              <Profil className='flex items-center mr-4 md:mr-8 p-4' />
            </div>
              <li className='p-4 border-b border-gray-600 text-[#00df9a]'><Link to="/Navbar2">Home</Link></li>
              <li className='p-4 border-b border-gray-600'><Link to="/Challenges">Challenges</Link></li>
              <li className='p-4 border-b border-gray-600'><Link to="/Booklist">Booklist</Link></li>
              <li className='p-4 border-b border-gray-600'><Link to="/Feeds">Feeds</Link></li>
              <li className='p-4 border-b border-gray-600'><Link to="/Books">Books</Link></li>
          </ul>
    </div>

    <section className='py-10'>
      <Hero2 />
    </section>


    <section className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-20'>
      <LastBookReads  className="w-32 break-all"
      books={[
        { id: '1' ,title: "Le Seigneur des Anneaux", image :"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71W7lUtrBUL.jpg " },
        { id: '2' ,title: "Harry Potter",image :"https://m.media-amazon.com/images/P/059035342X.01._SCLZZZZZZZ_SX500_.jpg" },
        { id: '3' ,title: "1984" ,image :"https://m.media-amazon.com/images/I/71NvkZxn-fL.jpg" },
        { id: '4' ,title: "RAMADAN planner",image :"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/31-r+h4+ncL.jpg" },
        { id: '5' ,title: "tome 2" ,image :"https://m.media-amazon.com/images/P/B0BCWQX3N8.01._SCLZZZZZZZ_SX500_.jpg" },
        { id: '6' ,title: "Kindred" ,image :"https://m.media-amazon.com/images/I/91pIF5zxBVL.jpg" },
        { id: '7' ,title: "The Fae Princes" ,image :"https://m.media-amazon.com/images/I/71a7d-nzA7L.jpg" },
        { id: '8' ,title: "Ugly Love" ,image :"https://m.media-amazon.com/images/I/71E8VNPC1dL.jpg" },
        
      ]} />
    </section>

    <section className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-20'>
      <Recommended  className="w-32 break-all" />
    </section>

    <section>
      <Footer2 />
    </section>
    
</>

  )
}

export default Navbar2

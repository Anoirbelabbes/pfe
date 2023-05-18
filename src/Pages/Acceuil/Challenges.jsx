import React, { useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {TbBooks} from 'react-icons/tb';
import Profil from './Profil/Profil';
import { Link } from 'react-router-dom';
import { GoClock } from 'react-icons/go';
import Footer2 from './Footer2'

    const Challenges = () => {

      const [nav, setNav] = useState(false);

      const handleNav = () => {
        setNav(!nav);
      };
    
      const [challenges, setChallenges] = useState([]);
    
      useEffect(() => {
        fetch('https://www.googleapis.com/books/v1/volumes?q=subject:fiction')
          .then(response => response.json())
          .then(data => {
            const randomBooks = getRandomBooks(data.items, 3); // Génère 3 livres aléatoires
            const newChallenges = randomBooks.map(book => ({
              name: book.volumeInfo.title,
              streak: Math.floor(Math.random() * 10),
              longestStreak: Math.floor(Math.random() * 20)
            }));
            setChallenges(newChallenges);
          });
      }, []);
    
      // Fonction pour générer des livres aléatoires
      const getRandomBooks = (books, count) => {
        const shuffled = books.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
      }
  

   
  return (
    <div>
        <section>
          <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white md:px-8'>
            <TbBooks size="35%" className='text-[#00df9a] text-2xl animate-pulse mr-2' />
            <div className='flex items-center'>
              <h1 className='w-full text-3xl font-bold text-[#00df9a] pr-24  hover:cursor-pointer'>BookTracker</h1>
              <div onClick={handleNav} className='block md:hidden'> {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}</div>
            </div>
            <ul className='hidden md:flex space-x-9 mr-60 mt-3 hover:cursor-pointer'>
              <Link to="/Navbar2" className='hover:text-[#00df9a] transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer'>Home</Link>
              <Link to="/Challenges" className='text-[#00df9a] hover:text-[#00df9a] transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer'>Challenges</Link> 
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
                    <li className='p-4 border-b border-gray-600'><Link to="/Navbar2">Home</Link></li>
                    <li className='p-4 border-b border-gray-600 text-[#00df9a]'><Link to="/Challenges">Challenges</Link></li>
                    <li className='p-4 border-b border-gray-600'><Link to="/Booklist">Booklist</Link></li>
                    <li className='p-4 border-b border-gray-600'><Link to="/Feeds">Feeds</Link></li>
                    <li className='p-4 border-b border-gray-600'><Link to="/Books">Books</Link></li>
                </ul>
          </div>
        </section>
      




        <section>
        <div className="bg-[#000300] mt-6 mx-4 md:mx-20 lg:mx-40">
          <div className="flex flex-col items-start justify-between mb-4 ">
            <h1 className="text-2xl font-bold text-[#00df9a]">Challenges</h1>
            <span class="text-sm font-normal ml-4 md:ml-10 mt-3">
              <span class="text-gray-400">Level:</span>
              <span class="text-green-200 ml-2">Notice</span>
            </span>
          </div>
          {challenges.map((challenge, index) => (
            <div className="bg-gray-700 rounded-lg flex flex-col sm:flex-row items-center justify-between w-full h-auto sm:h-16 mb-4 text-white" key={index}>
              <div className="flex flex-row items-center justify-center w-full sm:w-1/3">
                <span className="text-sm font-bold">{challenge.name}</span>
                <GoClock size={24} color="#00df9a" className='pl-2' />
              </div>
              <div className="flex flex-row items-center justify-center w-full sm:w-1/3">
                <span className="text-sm font-bold">Streak:</span>
                <span className="text-sm font-bold ml-3">{challenge.streak}</span>
              </div>
              <div className="flex flex-row items-center justify-center w-full sm:w-1/3">
                <span className="text-sm font-bold">Longest Streak:</span>
                <span className="text-sm font-bold ml-3">{challenge.longestStreak}</span>
              </div>
            </div>
          ))}
          <div className="flex justify-center sm:justify-end mr-2 sm:mr-24">
            <span className="text-sm font-normal text-yellow-400 cursor-pointer">more&gt;&gt;</span>
          </div>
        </div>

          
        <div className="bg-[#000300] mt-6 mx-4 md:mx-20 lg:mx-40">
        <div className="flex flex-col items-start justify-between mb-4 ">
          <span className="text-sm font-normal ml-4 md:ml-10 mt-3">
            <span className="text-gray-400">Level:</span>
            <span className="text-green-400 ml-2">Intermédiaire</span>
          </span>
        </div>
        {challenges.map((challenge, index) => (
          <div className="bg-gray-700 rounded-lg flex flex-col sm:flex-row items-center justify-between w-full h-auto sm:h-16 mb-4 text-white" key={index}>
            <div className="flex flex-row items-center justify-center w-full sm:w-1/3">
              <span className="text-sm font-bold">{challenge.name}</span>
              <GoClock size={24} color="#00df9a" className='pl-2' />
            </div>
            <div className="flex flex-row items-center justify-center w-full sm:w-1/3">
              <span className="text-sm font-bold">Streak:</span>
              <span className="text-sm font-bold ml-3">{challenge.streak}</span>
            </div>
            <div className="flex flex-row items-center justify-center w-full sm:w-1/3">
              <span className="text-sm font-bold">Longest Streak:</span>
              <span className="text-sm font-bold ml-3">{challenge.longestStreak}</span>
            </div>
          </div>
        ))}
        <div className="flex justify-end mr-24">
          <span className="text-sm font-normal text-yellow-400 cursor-pointer">more&gt;&gt;</span>
        </div>
      </div>

      <div className="bg-[#000300] mt-6 mx-4 md:mx-20 lg:mx-40">
        <div className="flex flex-col items-start justify-between mb-4 ">
          <span className="text-sm font-normal ml-4 md:ml-10 mt-3">
            <span className="text-gray-400">Level:</span>
              <span class="text-green-600 ml-2">advenced</span>
            </span>
          </div>
          {challenges.map((challenge, index) => (
            <div className="bg-gray-700 rounded-lg flex flex-col sm:flex-row items-center justify-between w-full h-auto sm:h-16 mb-4 text-white" key={index}>
              <div className="flex flex-row items-center justify-center w-full sm:w-1/3">
                <span className="text-sm font-bold">{challenge.name}</span>
                <GoClock size={24} color="#00df9a" className='pl-2' />
              </div>
              <div className="flex flex-row items-center justify-center w-full sm:w-1/3">
                <span className="text-sm font-bold">Streak:</span>
                <span className="text-sm font-bold ml-3">{challenge.streak}</span>
              </div>
              <div className="flex flex-row items-center justify-center w-full sm:w-1/3">
                <span className="text-sm font-bold">Longest Streak:</span>
                <span className="text-sm font-bold ml-3">{challenge.longestStreak}</span>
              </div>
            </div>
          ))}
          <div className="flex justify-end mr-24">
            <span className="text-sm font-normal text-yellow-400 cursor-pointer">more&gt;&gt;</span>
          </div>
        </div>
          
        <div className="bg-[#000300] mt-6 mx-4 md:mx-20 lg:mx-40">
          <div className="flex flex-col items-start justify-between mb-4 ">
            <span class="text-sm font-normal ml-4 md:ml-10 mt-3">
              <span class="text-gray-400">Level:</span>
              <span class="text-green-800 ml-2">expert</span>
            </span>
          </div>
          {challenges.map((challenge, index) => (
            <div className="bg-gray-700 rounded-lg flex flex-col sm:flex-row items-center justify-between w-full h-auto sm:h-16 mb-4 text-white" key={index}>
              <div className="flex flex-row items-center justify-center w-full sm:w-1/3">
                <span className="text-sm font-bold">{challenge.name}</span>
                <GoClock size={24} color="#00df9a" className='pl-2' />
              </div>
              <div className="flex flex-row items-center justify-center w-full sm:w-1/3">
                <span className="text-sm font-bold">Streak:</span>
                <span className="text-sm font-bold ml-3">{challenge.streak}</span>
              </div>
              <div className="flex flex-row items-center justify-center w-full sm:w-1/3">
                <span className="text-sm font-bold">Longest Streak:</span>
                <span className="text-sm font-bold ml-3">{challenge.longestStreak}</span>
              </div>
            </div>
          ))}
          <div className="flex justify-end mr-24">
            <span className="text-sm font-normal text-yellow-400 cursor-pointer">more&gt;&gt;</span>
          </div>
        </div>

        </section>


        <section>
          <Footer2 />
        </section>

    </div>
  )
}

export default Challenges

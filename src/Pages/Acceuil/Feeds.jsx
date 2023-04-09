import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {TbBooks} from 'react-icons/tb';
import Profil from './Profil/Profil';
import { Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
import { AiFillStar } from 'react-icons/ai';
import Footer2 from './Footer2'

const booksData = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    img: 'https://m.media-amazon.com/images/I/811cbiQy2vL.jpg',
    rating: 5,
    comments: [
      { id: 1, userName: 'Alice', userImg: 'https://randomuser.me/api/portraits/women/68.jpg', text: '"The Great Gatsby" is a classic novel by F. Scott Fitzgerald, set in the 1920s, that explores themes of decadence, love, and the American Dream. It is a beautifully written and thought-provoking work that has become a staple in American literature.' },
    ],
  },
  {
    id: 2,
    title: 'The Wisdom of the Bullfrog',
    author: 'Admiral William H. McRaven ',
    img: 'https://m.media-amazon.com/images/I/71cFEKPANuL.jpg',
    rating: 5,
    comments: [
      { id: 1, userName: 'Alice', userImg: 'https://randomuser.me/api/portraits/women/68.jpg', text: '"The Great Gatsby" is a classic novel by F. Scott Fitzgerald, set in the 1920s, that explores themes of decadence, love, and the American Dream. It is a beautifully written and thought-provoking work that has become a staple in American literature.' },
    ],
  },
  {
    id: 3,
    title: 'Built to Move',
    author: 'Kelly Starrett',
    img: 'https://m.media-amazon.com/images/I/81r+MMv5wYL.jpg',
    rating: 5,
    comments: [
      { id: 1, userName: 'Alice', userImg: 'https://randomuser.me/api/portraits/women/68.jpg', text: '"The Great Gatsby" is a classic novel by F. Scott Fitzgerald, set in the 1920s, that explores themes of decadence, love, and the American Dream. It is a beautifully written and thought-provoking work that has become a staple in American literature.' },
    ],
  },
  
  
 
  
  // add more books here
];

const Feeds = () => {

  
    const [nav, setNav] = useState(false);

    const handleNav = () => {
    setNav(!nav);
    };

    const [selectedBook, setSelectedBook] = useState(null);


  return (
    <div>
      <section> 
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white md:px-8'>
        <TbBooks size="35%" className='text-[#00df9a] text-2xl animate-pulse mr-2' />
        <div className='flex items-center'>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] pr-9  hover:cursor-pointer'>BookTracker</h1>
          <div onClick={handleNav} className='block md:hidden'> {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}</div>
        </div>
        <ul className='hidden md:flex space-x-9 mr-60 mt-3 hover:cursor-pointer'>
          <Link to="/Navbar2" className='hover:text-[#00df9a] transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer'>Home</Link>
          <Link to="/Challenges" className='text-white hover:text-[#00df9a] transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer'>Challenges</Link> 
          <Link to="/BookList" className='text-white hover:text-[#00df9a] transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer'> Booklist</Link>
          <Link to='/Feeds' className='text-[#00df9a] hover:text-[#00df9a] transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer'>Feeds</Link>
          <Link to="/Books" className='text-white hover:text-[#00df9a] transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer'>Books</Link>
        </ul>

        <div className='hidden md:block'>
          <Profil className='flex items-center mr-4 md:mr-8' />
        </div>



            <ul className={ nav ? 'z-40 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
              <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'> BookTracker</h1>
              <div className='md:hidden'>
                <Profil className='flex items-center mr-4 md:mr-8 p-4' />
              </div>
                <li className='p-4 border-b border-gray-600'><Link to="/Navbar2">Home</Link></li>
                <li className='p-4 border-b border-gray-600'><Link to="/Challenges">Challenges</Link></li>
                <li className='p-4 border-b border-gray-600'><Link to="/Booklist">Booklist</Link></li>
                <li className='p-4 border-b border-gray-600 text-[#00df9a]'><Link to="/Feeds">Feeds</Link></li>
                <li className='p-4 border-b border-gray-600'><Link to="/Books">Books</Link></li>
            </ul>
      </div>

        </section>


        <section>
        <div className="bg-[#000300] text-[#00df9a]">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-semibold mb-4 flex justify-between items-center">Last friends reviews <a href="#" className="text-yellow-400 text-sm self-end ">More &raquo;</a></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {booksData.map((book) => (
                <div
                  key={book.id}
                  className="bg-white p-4 rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition duration-300"
                  onClick={() => setSelectedBook(book)}
                >
                  <div className="flex">
                    <img src={book.img} alt={book.title} className="w-20 h-28 object-cover rounded-lg" />
                    <div className="ml-4">
                      <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
                      <div className="flex items-center">
                        <span className="text-yellow-400">
                          <div className='flex items-center'>
                            {Array.from({ length: book.rating }).map((_, index) => (
                              <AiFillStar key={index} className="w-5 h-5" />
                            ))}
                          </div>
                        </span>
                        <span className="ml-2">{book.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {selectedBook && (
              <div className="mt-8">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex mb-4">
                    <img src={selectedBook.img} alt={selectedBook.title} className="w-32 h-auto object-cover rounded-lg" />
                    <div className="ml-4">
                      <h2 className="text-xl font-semibold mb-2">{selectedBook.title}</h2>
                      <p className="text-gray-500 mb-2">{selectedBook.author}</p>
                      <div className="flex items-center mb-2">
                        <span className="text-yellow-400">
                          <div className="flex items-center">
                            {Array.from({ length: selectedBook.rating }).map((_, index) => (
                              <AiFillStar key={index} className="w-5 h-5" />
                            ))}
                          </div>
                        </span>
                        <span className="ml-2">{selectedBook.rating}</span>
                      </div>
                      <h3 className="text-lg font-medium mb-2">Reviews</h3>
                      <ul>
                        {selectedBook.comments.map((comment) => (
                          <li key={comment.id} className="mb-4">
                            <div className="flex items-center">
                              <img src={comment.userImg} alt={comment.userName} className="w-8 h-8 rounded-full object-cover" />
                              <p className="ml-2">{comment.text}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <button className="px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition duration-300">
                        Add a comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>


        </section>

        <section>

        <div className="bg-[#000300] text-[#00df9a]">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-semibold mb-4 flex justify-between items-center">Community reviews <a href="#" className="text-yellow-400 text-sm self-end ">More &raquo;</a></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {booksData.map((book) => (
                <div
                  key={book.id}
                  className="bg-white p-4 rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition duration-300"
                  onClick={() => setSelectedBook(book)}
                >
                  <div className="flex">
                    <img src={book.img} alt={book.title} className="w-20 h-28 object-cover rounded-lg" />
                    <div className="ml-4">
                      <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
                      <div className="flex items-center">
                        <span className="text-yellow-400">
                          <div className='flex items-center'>
                            {Array.from({ length: book.rating }).map((_, index) => (
                              <AiFillStar key={index} className="w-5 h-5" />
                            ))}
                          </div>
                        </span>
                        <span className="ml-2">{book.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {selectedBook && (
              <div className="mt-8">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex mb-4">
                    <img src={selectedBook.img} alt={selectedBook.title} className="w-32 h-auto object-cover rounded-lg" />
                    <div className="ml-4">
                      <h2 className="text-xl font-semibold mb-2">{selectedBook.title}</h2>
                      <p className="text-gray-500 mb-2">{selectedBook.author}</p>
                      <div className="flex items-center mb-2">
                        <span className="text-yellow-400">
                          <div className="flex items-center">
                            {Array.from({ length: selectedBook.rating }).map((_, index) => (
                              <AiFillStar key={index} className="w-5 h-5" />
                            ))}
                          </div>
                        </span>
                        <span className="ml-2">{selectedBook.rating}</span>
                      </div>
                      <h3 className="text-lg font-medium mb-2">Reviews</h3>
                      <ul>
                        {selectedBook.comments.map((comment) => (
                          <li key={comment.id} className="mb-4">
                            <div className="flex items-center">
                              <img src={comment.userImg} alt={comment.userName} className="w-8 h-8 rounded-full object-cover" />
                              <p className="ml-2">{comment.text}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <button className="px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition duration-300">
                        Add a comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        </section>

        <section>

        <div className="bg-[#000300] text-[#00df9a]">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Friend achievements</h2>
              <a href="#" className="text-yellow-400 text-sm">
                More <FaAngleRight className="inline-block ml-1" />
              </a>
            </div>
            <div className="bg-[#333333] rounded-lg shadow-md py-4 px-8 mb-4">
              <p>
                <a className="text-white font-medium hover:underline">
                  User2
                </a>{" "}
                reached level 20
              </p>
            </div>
            <div className="bg-[#222222] rounded-lg shadow-md py-4 px-8 mb-4">
              <p>
                <a className="text-white font-medium hover:underline">
                  User1
                </a>{" "}
                completed the monthly challenge
              </p>
            </div>
            <div className="bg-[#333333] rounded-lg shadow-md py-4 px-8 mb-4">
              <p>
                <a  className="text-white font-medium hover:underline">
                  User1
                </a>{" "}
                completed the daily challenge
              </p>
            </div>
            <div className="bg-[#222222] rounded-lg shadow-md py-4 px-8">
              <p>
                <a className="text-white font-medium hover:underline">
                  User3
                </a>{" "}
                completed the daily challenge
              </p>
            </div>
          </div>
        </div>

        </section>

        <section>
          <Footer2 />
        </section>

        
    </div>
  )
}

export default Feeds

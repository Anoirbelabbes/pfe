import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {TbBooks} from 'react-icons/tb';
import Profil from './Profil/Profil';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { GrAdd } from 'react-icons/gr';
import Footer2 from './Footer2';

const BookList = () => {
  
  const [nav, setNav] = useState(false);
  
  const [activeTab, setActiveTab] = useState("bookList");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const [categories] = useState([
    { id: 1, name: "All", notifications: 5 },
    { id: 2, name: "Reading", notifications: 2 },
    { id: 3, name: "Read", notifications: 3 },
    { id: 4, name: "Planning", notifications: 1 },
  ]);

  const [books, setBooks] = useState([
    {
      id: 1,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      author: "J.R.R. Tolkien",
      image:
        "https://m.media-amazon.com/images/I/91hnJZ0xM4L.jpg",
      pages: 423,
      pagesRead: 206,
      pagesTotal:250,
      rating: 4.5,
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image:
        "https://m.media-amazon.com/images/I/81lNLjBSg-L.jpg",
      pages: 281,
      pagesRead: 281,
      pagesTotal:310,
      rating: 5,
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      image: "https://m.media-amazon.com/images/I/61+Ofr8coCL.jpg",
      pages: 328,
      pagesRead: 246,
      pagesTotal:400,
      rating: 4,
    },
    {
      id: 4,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image:
        "https://m.media-amazon.com/images/I/81Yq91qaMmL.jpg",
      pages: 180,
      pagesRead: 180,
      pagesTotal:250,
      rating: 3.5,
    },
    
  ]);

     
  return (
    <>
    <div>
      <section>
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white md:px-8'>
        <TbBooks size="35%" className='text-[#00df9a] text-2xl animate-pulse mr-2 hover:cursor-pointer' />
        <div className='flex items-center'>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] pr-24 hover:cursor-pointer'>BookTracker</h1>
          <div onClick={handleNav} className='block md:hidden'> {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}</div>
        </div>
        <ul className='hidden md:flex space-x-9 mr-60 mt-3 hover:cursor-pointer'>
          <Link to="/Navbar2" className='hover:text-[#00df9a] transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer'>Home</Link>
          <Link to="/Challenges" className='text-white hover:text-[#00df9a] transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer'>Challenges</Link> 
          <Link to="/BookList" className='text-[#00df9a] hover:text-[#00df9a] transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer'> Booklist</Link>
          <Link to='/Feeds' className='text-white hover:text-[#00df9a] transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer'>Feeds</Link>
          <Link to="/Books" className='text-white hover:text-[#00df9a] transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer'>Books</Link>
        </ul>

        <div className='hidden md:block'>
          <Profil className='flex items-center mr-4 md:mr-8' />
        </div>



            <ul className={ nav ? ' z-40 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
              <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'> BookTracker</h1>
              <div className='md:hidden'>
                <Profil className='flex items-center mr-4 md:mr-8 p-4' />
              </div>
                <li className='p-4 border-b border-gray-600'><Link to="/Navbar2">Home</Link></li>
                <li className='p-4 border-b border-gray-600'><Link to="/Challenges">Challenges</Link></li>
                <li className='p-4 border-b border-gray-600 text-[#00df9a]'><Link to="/Booklist">Booklist</Link></li>
                <li className='p-4 border-b border-gray-600'><Link to="/Feeds">Feeds</Link></li>
                <li className='p-4 border-b border-gray-600'><Link to="/Books">Books</Link></li>
            </ul>
      </div>
     </section>

        {/* image and user name */}
        <section>
          <div class="relative">
            <img class="w-full md:h-56 object-cover" src="https://www.couverturefb.com/upload/2015/11/24/20151124183848-110233a0.jpg" alt="Cover" />
            <div class="absolute bottom-0 left-0 md:left-40 p-4 flex items-center">
              <img class="w-24 h-24 rounded-full border-4 border-white" src="https://randomuser.me/api/portraits/men/71.jpg" alt="Profile" />
              <h1 class="ml-4 text-white text-3xl font-bold">Anouar Belabbes</h1>
            </div>
          </div>
        </section>


        {/* BookList and Profil */}
       <section>
          <div className="flex">
            {/* La première colonne occupe la moitié de l'écran */}
            <div className="flex-1 bg-transparent h-12 flex items-center justify-center px-4">
              <div
                className={`cursor-pointer text-white font-medium ${
                  activeTab === "bookList" ? "border-b-2 border-white" : ""
                }`}
                onMouseOver={() => handleTabClick("bookList")}
              >
                <Link to="/BookList">BookList</Link>
              </div>
            </  div>
              
            {/* La deuxième colonne occupe la moitié de l'écran */}
            <div className="flex-1 bg-transparent h-12 flex items-center justify-center px-4">
              <div
                className={`cursor-pointer text-white font-medium ${
                  activeTab === "profil" ? "border-b-2 border-white" : ""
                }`}
                onMouseOver={() => handleTabClick("profil")}
              >
                <Link to="/UserProfile">Profil</Link>
              </div>
            </div>
          </div>
        </section>


    <section>
    
    <div className="flex flex-col md:flex-row h-screen mt-4 mx-4 md:mx-16">
      {/* Première section */}
      <div className="w-full md:w-1/4 h-screen text-[#00df9a] bg-[#000300] flex flex-col">
        <div className="p-4 flex flex-row items-center justify-center">
          <div className="flex-grow-0">
            <button className="px-2 py-1 bg-[#00df9a] text-[#000300] rounded-l-full hover:bg-green-600 focus:outline-none">
              <AiOutlineSearch />
            </button>
          </div>
          <div className="flex-grow ml-2">
            <input
              type="text"
              placeholder="Filter.."
              className="w-full text-[#00df9a] px-2 py-1 rounded-r-full bg-transparent border-none focus:outline-none"
            />
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-gray-500 text-lg mb-4">Listes</h2>
          {/* Category List */}
          <div className="mb-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex flex-row items-center mb-4 hover:bg-gray-600 hover:rounded-lg hover:cursor-pointer"
              >
                <span className="text-gray-700 flex-1 pl-4">{category.name}</span>
                <div className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full">
                  <span className="text-gray-600 text-sm font-medium">{category.notifications}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
            
      {/* Deuxième section */}
      <div className="w-full md:w-3/4 h-screen p-4 md:p-8 bg-[#000300]">
      <h2 className="text-[#00df9a] text-3xl font-bold mb-8">Reading</h2>
        <div className="flex flex-row items-center space-x-4 overflow-x-auto mb-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="w-full md:w-1/2 lg:w-1/4 max-w-xs bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105"
            >
              <img
                className="w-full h-auto md:h-60"
                src={book.image}
                alt={book.title}
              />
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-gray-800 text-xl font-medium mb-2">
                    <div className="flex items-center justify-between">
                      <div className="text-sm">{book.pagesRead}/{book.pagesTotal}</div>
                      <div onClick={() => {
                        const updatedBooks = books.map(b => {
                          if (b.id === book.id) {
                            const pagesRead = b.pagesRead + 1;
                            if (pagesRead > b.pagesTotal) return b;
                            return {...b, pagesRead};
                          }
                          return b;
                        });
                        setBooks(updatedBooks);
                      }}>
                        <GrAdd className="cursor-pointer" />
                      </div>
                    </div>
                  </h3>
                  <p className="text-gray-600 text-sm">Evaluation: {book.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>



                <h2 className="text-[#00df9a] text-3xl font-bold mb-8">Read</h2>
                <div className="flex flex-row items-center space-x-4 overflow-x-auto mb-8">
                  {books.map((book) => (
                    <div
                      key={book.id}
                      className="w-full md:w-1/2 lg:w-1/4 max-w-xs bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105"
                    >
                      <img
                        className="w-full h-auto md:h-60"
                        src={book.image}
                        alt={book.title}
                      />
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <h3 className="text-gray-800 text-xl font-medium mb-2">
                            <div className="flex items-center justify-between">
                              <div className='text-sm'>{book.pagesTotal}/{book.pagesTotal}</div>
                            </div>
                          </h3>
                          <p className="text-gray-600 text-sm">Evaluation: {book.rating}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 class="text-[#00df9a] text-3xl font-bold mb-8">Planning</h2>
                <div className="flex flex-row items-center space-x-4 overflow-x-auto mb-8">
                  {books.map((book) => (
                    <div
                      key={book.id}
                      className="w-full md:w-1/2 lg:w-1/4 max-w-xs bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105"
                    >
                      <img
                        className="w-full h-auto md:h-60"
                        src={book.image}
                        alt={book.title}
                      />
                      <div className="p-4 flex justify-between items-center">
                        <div>
                          <h3 className="text-gray-800 text-xl font-medium mb-2">
                            <div className="flex items-center justify-between">
                              <div className='text-sm'>---/{book.pagesTotal}</div>
                            </div>
                          </h3>
                          <p className="text-gray-600 text-sm">Evaluation: {book.rating}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
        </div>
    </div>
    
    </section>

    </div>

    <div className=' pt-96'>
      <Footer2/>
    </div>
    </>
    
  )
}

export default BookList

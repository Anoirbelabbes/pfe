import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {TbBooks} from 'react-icons/tb';
import Profil from './Profil/Profil';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdAddCircleOutline } from "react-icons/io";
import Footer2 from './Footer2'
import axios from 'axios';
import { BsCheckCircle } from "react-icons/bs";

    const Books = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
    setNav(!nav);
    };




    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');

    const handleSearch = async (event) => {
      event.preventDefault();
      let url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&printType=books&maxResults=40`;
      if (selectedGenre !== '') {
        url += `+subject:${selectedGenre}`;
      }
      const result = await axios.get(url);
      setBooks(result.data.items);
    };

    const handleGenreChange = (event) => {
      setSelectedGenre(event.target.value);
      if (event.target.value === '') {
        // si l'utilisateur a sélectionné "All genres", afficher tous les livres
        setSearchTerm('');
        axios.get(`https://www.googleapis.com/books/v1/volumes?printType=books&maxResults=40`)
          .then((result) => {
            setBooks(result.data.items);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        // si l'utilisateur a sélectionné un genre, rechercher des livres avec ce genre
        let url = `https://www.googleapis.com/books/v1/volumes?q=subject:${event.target.value}&printType=books&maxResults=40`;
        if (searchTerm !== '') {
          url += `+${searchTerm}`;
        }
        axios.get(url)
          .then((result) => {
            setBooks(result.data.items);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };

    useEffect(() => {
      // Recherche aléatoire lors de la première visite de la page
      const randomGenres = ['biography', 'comics', 'fantasy', 'fiction', 'history', 'horror', 'mystery', 'romance', 'science', 'travel'];
      const randomGenre = randomGenres[Math.floor(Math.random() * randomGenres.length)];
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:${randomGenre}&printType=books&maxResults=40`)
        .then((result) => {
          setBooks(result.data.items);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);



    const [isClicked, setIsClicked] = useState(false);

  function handleIconClick() {
    setIsClicked(!isClicked);
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
            <Link to="/Challenges" className='text-white hover:text-[#00df9a] transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer'>Challenges</Link> 
            <Link to="/BookList" className='text-white hover:text-[#00df9a] transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer'> Booklist</Link>
            <Link to='/Feeds' className='text-white hover:text-[#00df9a] transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer'>Feeds</Link>
            <Link to="/Books" className='text-[#00df9a] hover:text-[#00df9a] transition-all duration-300 transform hover:-translate-y-1 hover:cursor-pointer'>Books</Link>
          </ul>

          <div className='hidden md:block'>
            <Profil className='flex items-center mr-4 md:mr-8' />
            </div>



              <ul className={ nav ? 'z-40 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'> BookTracker</h1>
                <div className='md:hidden'>
                  <Profil className='flex items-center mr-4 md:mr-8 p-4' />
                </div>
                  <li className='p-4 border-b border-gray-600 '><Link to="/Navbar2">Home</Link></li>
                  <li className='p-4 border-b border-gray-600'><Link to="/Challenges">Challenges</Link></li>
                  <li className='p-4 border-b border-gray-600'><Link to="/Booklist">Booklist</Link></li>
                  <li className='p-4 border-b border-gray-600'><Link to="/Feeds">Feeds</Link></li>
                  <li className='p-4 border-b border-gray-600 text-[#00df9a]'><Link to="/Books">Books</Link></li>
              </ul>
        </div>

        </section>







        
        <section className='flex justify-center pt-6 px-12'>
          <div className="bg-[#000300] min-h-screen">
            <form onSubmit={handleSearch} className="flex justify-center pt-6">
              <div className="flex items-center bg-[#000300] rounded-full p-2 pr-10">
                <div className="flex-grow-0">
                  <button className="px-2 py-1 bg-[#00df9a] text-white rounded-l-full hover:bg-green-800 focus:outline-none">
                    <AiOutlineSearch />
                  </button>
                </div>
                <div className="flex-grow ml-2">
                  <input
                    type="text"
                    placeholder="Search your book.."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full text-white px-2 py-1 rounded-r-full bg-transparent border-none focus:outline-none"
                  />
                </div>
                <div className="flex-grow-0 ml-2">
                  <select
                    value={selectedGenre}
                    onChange={handleGenreChange}
                    className="px-2 py-1 bg-transparent text-white focus:outline-none">
                    <option className='text-black' value="fiction">All genres</option>
                    <option className='text-black' value="art">Art</option>
                    <option className='text-black' value="biography">Biography</option>
                    <option className='text-black' value="comics">Comics</option>
                    <option className='text-black' value="computers">Computers</option>
                    <option className='text-black' value="history">History</option>
                    <option className='text-black' value="horror">Horror</option>
                    <option className='text-black' value="mystery">Mystery</option>
                    <option className='text-black' value="romance">Romance</option>
                    <option className='text-black' value="science">Science</option>
                    <option className='text-black' value="travel">Travel</option>
                  </select>
                </div>
              </div>
            </form>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                  {books.map((book) => {
                    return (
                      <div key={book.id} className="flex flex-col items-center justify-center bg-[#000300] rounded-md p-4">
                        {book.volumeInfo.imageLinks ? (
                      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} className="mb-2" />
                      ) : (
                        <div className="h-48 w-32 bg-gray-400 mb-2"></div>
                          )}
                        <h2 className="text-white font-bold text-center mb-2 break-all max-w-full">{book.volumeInfo.title}</h2>
                        <p className="text-gray-400 text-sm text-center">{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown author'}</p>
                      </div>
                    );
                    })}
                </div>
              </div>
        </section>

                
        
        <section>
          <Footer2 />
        </section>





      </div>
    
  )
}




export default Books

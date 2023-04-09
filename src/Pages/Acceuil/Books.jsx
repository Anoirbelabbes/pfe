import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {TbBooks} from 'react-icons/tb';
import Profil from './Profil/Profil';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdAddCircleOutline } from "react-icons/io";
import Footer2 from './Footer2'
import { BsCheckCircle } from "react-icons/bs";

const Books = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
    setNav(!nav);
    };

    const [isClicked, setIsClicked] = useState(false);

  function handleIconClick() {
    setIsClicked(!isClicked);
  }

    const bookData = [
      {
        imageSrc: 'https://m.media-amazon.com/images/I/81fyoFoaxlL.jpg',
        title: 'Dog Man',
        description:
          'DOG MAN IS BACK! The highly anticipated new graphic novel in the #1 worldwide bestselling Dog Man series starring everyones favorite canine superhero by award-winning author and illustrator Dav Pilkey is coming March 28, 2023!...',
      },
      {
        imageSrc: 'https://m.media-amazon.com/images/I/71IJiOOyb1L.jpg',
        title: 'Outlive',
        description:
          'A groundbreaking manifesto on living better and longer that challenges the conventional medical thinking on aging and reveals a new approach to preventing chronic disease...',
      },
      {
        imageSrc: 'https://m.media-amazon.com/images/I/71HsLc-TNlL.jpg',
        title: 'Things We Never Got Over',
        description:
          'Bearded, bad-boy barber Knox prefers to live his life the way he takes his coffee: Alone. Unless you count his basset hound, Waylon...',
      },
      {
        imageSrc: 'https://m.media-amazon.com/images/I/51Hot+3TFfL.jpg',
        title: 'Birnam Wood',
        description:
          '“Birnam Wood is terrific. As a multilayered, character-driven thriller, it’s as good as it gets. Ruth Rendell would have loved it. A beautifully textured work—what a treat.”...',
      },
      {
        imageSrc: 'https://m.media-amazon.com/images/I/713F+ivM9NL.jpg',
        title: 'Saved',
        description:
          '"An affecting, singular story...a bracing tale of life on the edge of death...',
      },
      {
        imageSrc: 'https://m.media-amazon.com/images/I/A16NFakAgML.jpg',
        title: 'Superpower in Peril',
        description:
          'Discover a groundbreaking vision for how to unlock America’s full potential for greatness from one of the country’s foremost conservative leaders...',
      },
      {
        imageSrc: 'https://m.media-amazon.com/images/I/81KAAvSlB3L.jpg',
        title: 'Start, Stay, or Leave',
        description:
          'The Fox News host and #1 New York Times bestselling author of Doesn’t Hurt to Ask shares his trusted framework for decision making...',
      },
      {
        imageSrc: 'https://m.media-amazon.com/images/I/71cLFOjw8dL.jpg',
        title: 'Walk the Blue Line',
        description:
          'Police officers risk their lives every day to protect and serve our homes, families and communities. Here is “a notable collection of heartfelt stories from the front line told with honesty and compassion...',
      },
    ];
  

    
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







        
        <section className='flex justify-center pt-6'>
            <div className="flex items-center bg-[#000300] rounded-full p-2 pr-10">
              <div className="flex-grow-0">
                <button className="px-2 py-1 bg-[#00df9a] text-[#000300] rounded-l-full hover:bg-green-600 focus:outline-none">
                  <AiOutlineSearch />
                </button>
              </div>
              <div className="flex-grow ml-2">
                <input
                  type="text"
                  placeholder="Serach your book.."
                  className="w-full text-[#00df9a] px-2 py-1 rounded-r-full bg-transparent border-none focus:outline-none"
                />
              </div>
              <div className="flex-grow-0 ml-2">
                <select className="px-2 py-1 bg-transparent text-[#00df9a] rounded-full border-none focus:outline-none hover:bg-gray-600 transition-colors duration-500">
                  <option value="" className='text-black'>Tous les genres</option>
                  <option value="romance" className='text-black'>Romance</option>
                  <option value="thriller" className='text-black'>Thriller</option>
                  <option value="fantasy" className='text-black'>Fantasy</option>
                </select>
              </div>

          </div>
        </section>





        <section>

        <div className="flex justify-center mt-10">
      <div className="flex flex-wrap justify-center gap-10">
        {bookData.map((book, index) => (
          (index % 2 === 0) ? (
            <div key={book.title} className="w-80 md:w-96 p-2">
              <div className="relative rounded-lg overflow-hidden hover:transform hover:scale-110 transition-all duration-500">
                <img src={book.imageSrc} alt={book.title} className="w-80 h-80 rounded-3xl" />
                <div className="absolute bottom-0 w-80 h-16 bg-black bg-opacity-75 flex justify-between items-center px-4">
                  <span className="text-[#00df9a]">{book.title}</span>
                  <div>
                    <IoMdAddCircleOutline className={`text-[#00df9a] cursor-pointer ${isClicked ? 'hidden' : ''}`} size={24} onClick={handleIconClick} />
                    <BsCheckCircle className={`text-[#00df9a] cursor-pointer ${!isClicked ? 'hidden' : ''}`} size={24} onClick={handleIconClick} />
                  </div>
                </div>
              </div>
              <div className="py-4">
                <p className="text-sm text-gray-400">{book.description}</p>
              </div>
            </div>
          ) : (
            <div key={book.title} className="w-80 md:w-96 p-2">
              <div className="relative rounded-lg overflow-hidden hover:transform hover:scale-110 transition-all duration-500">
                <img src={book.imageSrc} alt={book.title} className="w-80 h-80 rounded-3xl" />
                <div className="absolute bottom-0 w-80 h-16 bg-black bg-opacity-75 flex justify-between items-center px-4">
                  <span className="text-[#00df9a]">{book.title}</span>
                  <div>
                    <IoMdAddCircleOutline className={`text-[#00df9a] cursor-pointer ${isClicked ? 'hidden' : ''}`} size={24} onClick={handleIconClick} />
                    <BsCheckCircle className={`text-[#00df9a] cursor-pointer ${!isClicked ? 'hidden' : ''}`} size={24} onClick={handleIconClick} />
                  </div>
                </div>
              </div>
              <div className="py-4">
                <p className="text-sm text-gray-400">{book.description}</p>
              </div>
            </div>
          )
        ))}
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

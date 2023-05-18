import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {TbBooks} from 'react-icons/tb';
import { FaStar } from 'react-icons/fa';
import Profil from './Profil/Profil';

const BookInfos = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
    setNav(!nav);
    };

    const bookData = [
        {
          imageSrc: 'https://m.media-amazon.com/images/I/81fyoFoaxlL.jpg',
          title: 'Dog Man',
          author: 'Dav Pilkey',
          genre: 'Children\'s Graphic Novels',
          rating: 5,
          publicationDate: 'March 28, 2023',
          description:
            'DOG MAN IS BACK! The highly anticipated new graphic novel in the #1 worldwide bestselling Dog Man series starring everyones favorite canine superhero by award-winning author and illustrator Dav Pilkey is coming March 28, 2023!...',
        },
        {
          imageSrc: 'https://m.media-amazon.com/images/I/71IJiOOyb1L.jpg',
          title: 'Outlive',
          author: 'Dr. Mithu Storoni',
          genre: 'Healthy Living',
          rating: 4,
          publicationDate: 'September 7, 2021',
          description:
            'A groundbreaking manifesto on living better and longer that challenges the conventional medical thinking on aging and reveals a new approach to preventing chronic disease...',
        },
        {
          imageSrc: 'https://m.media-amazon.com/images/I/71HsLc-TNlL.jpg',
          title: 'Things We Never Got Over',
          author: 'Megan Hart',
          genre: 'Contemporary Romance',
          rating: 4,
          publicationDate: 'September 7, 2021',
          description:
            'Bearded, bad-boy barber Knox prefers to live his life the way he takes his coffee: Alone. Unless you count his basset hound, Waylon...',
        },
        {
          imageSrc: 'https://m.media-amazon.com/images/I/51Hot+3TFfL.jpg',
          title: 'Birnam Wood',
          author: 'David Hopen',
          genre: 'Literary Fiction',
          rating: 5,
          publicationDate: 'September 14, 2021',
          description:
            '“Birnam Wood is terrific. As a multilayered, character-driven thriller, it’s as good as it gets. Ruth Rendell would have loved it. A beautifully textured work—what a treat.”...',
        },
        {
          imageSrc: 'https://m.media-amazon.com/images/I/713F+ivM9NL.jpg',
          title: 'Saved',
          author: 'David Jackson',
          genre: 'Crime Thrillers',
          rating: 4,
          publicationDate: 'September 14, 2021',
          description:
            '"An affecting, singular story...a bracing tale of life on the edge of death...',
        },
        {
          imageSrc: 'https://m.media-amazon.com/images/I/A16NFakAgML.jpg',
          title: 'Superpower in Peril',
          author: 'Lt. Col. Oliver North',
          genre: 'Conservatism & Liberalism',
          rating: 3,
          publicationDate: 'September 14, 2021',
          description:
            'Discover a groundbreaking vision for how to unlock America’s full potential for greatness from one of the country’s foremost conservative leaders...',
        },
        {
          imageSrc: 'https://m.media-amazon.com/images/I/81KAAvSlB3L.jpg',
          title: 'Start, Stay, or Leave',
          author: 'Brian Kilmeade',
          genre: 'Business Decision Making',
          rating: 4,
          publicationDate: 'September 14, 2021',
          description:
            'The Fox News host and #1 New York Times bestselling author of Doesn’t Hurt to Ask shares his trusted framework for decision making...',
        },
        {
          imageSrc: 'https://m.media-amazon.com/images/I/71cLFOjw8dL.jpg',
          title: 'Walk the Blue Line',
          author: 'Edward Conlon',
          genre: 'Biographies & Memoirs',
          rating: 5,
          publicationDate: 'September 14, 2021',
          description:
            'Police officers risk their lives every day to protect and serve our homes, families and communities. Here is “a notable collection of heartfelt stories from the front line told with honesty and compassion...',
        },
      ];
      
  return (
    <>
    <div>
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
    

    <section>
    <div className="book-container flex flex-wrap justify-between text-white bg-[#000300]">
    {bookData.map((book, index) => {
        return (
            <div key={index} className="book-card w-full mb-4 flex items-center">
                <div className="book-image mr-4">
                    <img className=" w-80 h-80 rounded-3xl" src={book.imageSrc} alt={book.title} />
                </div>
                <div className="book-info">
                    <h2 className="text-lg font-bold mb-2 text-[#00df9a]">{book.title}</h2>
                    <p><span className="font-bold text-[#00df9a]">Author:</span> {book.author}</p>
                    <p><span className="font-bold text-[#00df9a]">Genre:</span> {book.genre}</p>
                    <p><span className="font-bold text-[#00df9a]">Rating:</span> {book.rating}</p>
                    <p><span className="font-bold text-[#00df9a]">Publication Date:</span> {book.publicationDate}</p>
                    
                    {nav && (
                        <div className="book-description mt-4">
                            <p>{book.description}</p>
                        </div>
                    )}
                </div>
            </div>
        );
    })}
</div>





    </section>


    </div>
    </>
    
  )
}

export default BookInfos

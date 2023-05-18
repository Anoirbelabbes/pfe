import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {TbBooks} from 'react-icons/tb';
import Profil from './Profil';
import { GrAdd } from 'react-icons/gr';
import Footer2 from '../Footer2';
import { Link } from 'react-router-dom';
import { FaUserFriends } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';

const UserProfile = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
    setNav(!nav);
    };

    const [activeTab, setActiveTab] = useState("bookList");

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

    const [users] = useState([
      { id: 1, age: 28, favGenre: 'Science Fiction', numFriends: 10, level: 7, numBooksRead: 42 },
    ]);

    const [books, setBooks] = useState([
      {
        id: 1, title: "The Lord of the Rings: The Fellowship of the Ring", author: "J.R.R. Tolkien", image:"https://m.media-amazon.com/images/I/91hnJZ0xM4L.jpg", pages: 423, pagesRead: 206, pagesTotal:250, rating: 4.5,
        comments: [
          { id: 1, userName: 'Alice', userImg: 'https://randomuser.me/api/portraits/women/68.jpg', text: '"The Great Gatsby" is a classic novel by F. Scott Fitzgerald, set in the 1920s, that explores themes of decadence, love, and the American Dream. It is a beautifully written and thought-provoking work that has become a staple in American literature.' },
        ],
      },
      {
        id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", image:"https://m.media-amazon.com/images/I/81lNLjBSg-L.jpg", pages: 281, pagesRead: 281, pagesTotal:310, rating: 5,
        comments: [
          { id: 1, userName: 'Alice', userImg: 'https://randomuser.me/api/portraits/women/68.jpg', text: '"The Great Gatsby" is a classic novel by F. Scott Fitzgerald, set in the 1920s, that explores themes of decadence, love, and the American Dream. It is a beautifully written and thought-provoking work that has become a staple in American literature.' },
        ],
      },
      {
        id: 3, title: "1984", author: "George Orwell", image: "https://m.media-amazon.com/images/I/61+Ofr8coCL.jpg", pages: 328, pagesRead: 246, pagesTotal:400, rating: 4,
        comments: [
          { id: 1, userName: 'Alice', userImg: 'https://randomuser.me/api/portraits/women/68.jpg', text: '"The Great Gatsby" is a classic novel by F. Scott Fitzgerald, set in the 1920s, that explores themes of decadence, love, and the American Dream. It is a beautifully written and thought-provoking work that has become a staple in American literature.' },
        ],
      },
      {
        id: 4, title: "1984", author: "George Orwell", image: "https://m.media-amazon.com/images/I/61+Ofr8coCL.jpg", pages: 328, pagesRead: 246, pagesTotal:400, rating: 4,
        comments: [
          { id: 1, userName: 'Alice', userImg: 'https://randomuser.me/api/portraits/women/68.jpg', text: '"The Great Gatsby" is a classic novel by F. Scott Fitzgerald, set in the 1920s, that explores themes of decadence, love, and the American Dream. It is a beautifully written and thought-provoking work that has become a staple in American literature.' },
        ],
      },
    ]);
    
    const [selectedBook, setSelectedBook] = useState(null);


    const achievements = [
      "First achievement",
      "Second achievement",
      "Third achievement",
      "Fourth achievement",
      "Fifth achievement",
      "Sixth achievement",
      "Seventh achievement",
      "Eighth achievement",
    ];
  
    const numberOfAchievements = achievements.length;
    const splitIndex = numberOfAchievements > 4 ? numberOfAchievements - 4 : null;
  

    {/*fRiends */}
    const friends = [
      {
        id: 1, name: "John", image: "https://picsum.photos/seed/1/200/200"
      },
      {
        id: 2, name: "Jane", image: "https://picsum.photos/seed/2/200/200"
      },
      {
        id: 3, name: "Bob", image: "https://picsum.photos/seed/3/200/200"
      },
      {
        id: 4, name: "Alice", image: "https://picsum.photos/seed/4/200/200"
      },
      {
        id: 5, name: "Sam", image: "https://picsum.photos/seed/5/200/200"
      },
    ];

  return (
    <div > 
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
                    <li className='p-4 border-b border-gray-600 '><Link to="/Booklist">Booklist</Link></li>
                    <li className='p-4 border-b border-gray-600'><Link to="/Feeds">Feeds</Link></li>
                    <li className='p-4 border-b border-gray-600'><Link to="/Books">Books</Link></li>
                </ul>
          </div>
        </section>


        
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
       

        <section>  {/* info users + level */}

        <div className="flex flex-col md:flex-row justify-center px-4 md:px-20 mt-4">
          <div className="w-full md:w-1/3 bg-gray-800 rounded-md p-4 md:mr-8 mb-4 md:mb-0">
            {users.map((user) => (
              <div key={user.id} className="text-sm text-white mb-4">
                <div className="font-medium text-white mb-4 md:text-center md:ml-0">Age : <span className="ml-6">{user.age}</span></div>
                <div className="font-medium mb-4 md:text-center md:ml-0">Genre préféré : <span className="ml-6">{user.favGenre}</span></div>
                <div className="mt-1 flex items-center">
                  <FaUserFriends className="ml-20" />
                  <span className='ml-3'>{user.numFriends}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/3 bg-gray-800 rounded-md p-4 md:ml-8">
            <h2 className="text-lg font-medium text-white mb-2">Level</h2>
            {users.map((user) => (
              <div key={user.id} className="text-sm text-white mb-4">
                <div className="h-2 bg-green-500 mt-2">
                  <div className="h-full bg-white" style={{width: `${user.level * 10}%`}}></div>
                </div>
                <div className="font-medium mt-3">Read {user.numBooksRead} Books</div>
              </div>
            ))}
          </div>
        </div>
            



            {/* Reading */}
            <section className='w-full md:w-3/4 mx-auto md:ml-56 mt-8 bg-[#000300]'>
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
        </section>


                      {/*Last friends reviews */}
          <section>
          <div className="bg-[#000300] text-[#00df9a] w-full md:w-3/4 mx-auto md:ml-56 mt-8">
            <div className="">
              <h2 className="text-3xl font-bold mb-4 flex justify-between items-center px-4 md:px-0">
                Last friends reviews
                <a className="text-yellow-400 text-sm self-end" href="#">
                  More &raquo;
                </a>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
                {books.map((book) => (
                  <div
                    key={book.id}
                    className="bg-white p-4 rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition duration-300"
                    onClick={() => setSelectedBook(book)}
                  >
                    <div className="flex">
                      <img src={book.image} alt={book.title} className="w-20 h-28 object-cover rounded-lg" />
                      <div className="ml-4">
                        <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
                        <div className="flex items-center">
                          <span className="text-yellow-400">
                            <div className="flex items-center">
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
                <div className="mt-8 px-4 md:px-0">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row mb-4">
                      <img src={selectedBook.image} alt={selectedBook.title} className="w-full md:w-32 h-auto object-cover rounded-lg mb-4 md:mb-0 md:mr-4" />
                      <div className="flex-1">
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

        </section>
  
                      {/*Achivements*/}
        <section>
        <div className="flex flex-col mt-8">
          <h1 className="text-3xl font-bold text-[#00df9a] mb-8 ml-4 md:ml-56">Achievements</h1>
          <div className="w-full md:w-2/3 mx-auto bg-gray-700 flex flex-col md:flex-row justify-center rounded-lg">
            <div className="w-full md:w-1/3 h-56 bg-gray-700 flex flex-col justify-center items-center rounded-lg md:pl-2">
              <ul className="list-disc list-inside text-lg text-green-500">
                {achievements.slice(0, 4).map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/3 h-56 bg-gray-700 flex flex-col justify-center items-center rounded-lg md:pl-2">
              <ul className="list-disc list-inside text-lg text-green-500">
                {achievements.slice(4).map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </section>

            {/* Friends*/}

        <section>
        <div className="bg-[#000300] text-[#00df9a] pt-9 flex flex-col">
          <h1 className="text-4xl font-bold mb-8 ml-4 md:ml-56">Friends</h1>
          <div className="flex flex-wrap ml-4 md:ml-56">
            {friends.map((friend) => (
              <a key={friend.id} className="m-2">
                <img src={friend.image} alt={friend.name} className="w-16 h-16 rounded-full cursor-pointer" />
              </a>
            ))}
          </div>
        </div>
        </section>

    <Footer2 />
    </div>
  );
};

export default UserProfile;
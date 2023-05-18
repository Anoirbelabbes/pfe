import { useState, useRef, useEffect } from "react";
import { FiLogOut, FiUser, FiBarChart2 } from 'react-icons/fi';
import { Link } from "react-router-dom";


const Profil = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex items-center mr-10 z-50">
      <img
        src="https://randomuser.me/api/portraits/men/71.jpg"
        alt="Avatar"
        className="w-10 h-10 rounded-full cursor-pointer animate-fade-in animate-zoom-in"
        onClick={toggleDropdown}
      />
      {showDropdown && (
        <div
        className={`absolute top-full right-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity ${
          showDropdown ? "opacity-100" : "opacity-0"
        }`}
        ref={dropdownRef}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link to="/Dashboard" className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center" role="menuitem">
              <FiBarChart2 className="w-4 h-4 mr-2" />
              Dashboard
            </Link>

            <Link to='/UserProfile' className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center"
                  role="menuitem"
            >
              <FiUser className="w-4 h-4 mr-2" />
              Show Profile
            </Link>

            <Link to='/App' className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center"
                  role="menuitem"
            >
              <FiLogOut className="w-4 h-4 mr-2" />
              Log out
            </Link>
            
          </div>
        </div>
      )}
      <h1
        className="text-zinc-500 font-medium cursor-pointer ml-2 animate-fade-in animate-zoom-in"
        onClick={toggleDropdown}
      >
        Anouar Belabbes
      </h1>
    </div>
  );
};


export default Profil

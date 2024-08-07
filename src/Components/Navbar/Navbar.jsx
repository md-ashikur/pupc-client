import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaCaretDown } from "react-icons/fa";
import pupc from "../../images/pupc.png";
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
    setIsSubmenuOpen(false); // Close submenu when mobile menu is closed
  };

  const handleSubmenuToggle = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <div className='fixed top-0 w-full z-50'>
   
    

      {/* Main nav */}
      <nav className="bg-[#0A0A13] shadow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center justify-around">
              <div className="flex-shrink-0 ">
               <Link to="/"> <img className="h-auto w-12" src={pupc} alt="Logo" /></Link>
              </div>
              <div className="hidden md:flex md:ml-10 space-x-4">
                <NavLink to="/" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-900">Home</NavLink>
                <NavLink to="/about" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-900">About</NavLink>
                <NavLink to="/notice" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-900">Notice</NavLink>

                <div className="relative">
                  <button onClick={handleSubmenuToggle} className="px-3 py-2 flex items-center gap-2 rounded-md text-sm font-medium text-white hover:text-gray-900 focus:outline-none">
                   Archive <FaCaretDown/>
                  </button>
                  {isSubmenuOpen && (
                    <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl">
                      <NavLink to="/events" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">News & Events</NavLink>
                      <NavLink to="/achievements" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Achievements</NavLink>
                      <NavLink to="/gallery" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Gallery</NavLink>
                    </div>
                  )}
                </div>
                <NavLink to="/committee" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-900">Committee</NavLink>
                <NavLink to="/alumni" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-900">Our Alumni</NavLink>
                <NavLink to="/contact" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-900">Contact</NavLink>
                <NavLink to="/login" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-gray-900">Login</NavLink>
              </div>

             
            </div>
            <div className="flex md:hidden">
              <button onClick={handleMenuToggle} className="text-white hover:text-gray-900 focus:outline-none focus:text-gray-900">
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <FaTimes className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <FaBars className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div>
           
            {/* Mobile menu */}
            <div className="md:hidden relative top-0 left-0 right-0 bg-white shadow-md z-10">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             
                <NavLink to="/" className="block px-3 py-2 rounded-md font-medium text-gray-900 hover:bg-gray-50">Home</NavLink>
                <NavLink to="/about" className="block px-3 py-2 rounded-md font-medium text-gray-900 hover:bg-gray-50">About</NavLink>
                <NavLink to="/notice" className="block px-3 py-2 rounded-md font-medium text-gray-900 hover:bg-gray-50">Notice</NavLink>

                <div>
                  <button onClick={handleSubmenuToggle} className="block w-full text-left px-3 py-2 rounded-md  font-medium text-gray-900 hover:bg-gray-50">
                    Archive <FaCaretDown/>
                  </button>
                  {isSubmenuOpen && (
                    <div className="pl-4">
                      <NavLink to="/event" className="block px-3 py-2 rounded-md font-medium text-gray-900 hover:bg-gray-50">News & Events</NavLink>
                      <NavLink to="/achievements" className="block px-3 py-2 rounded-md font-medium text-gray-900 hover:bg-gray-50">Achievements</NavLink>
                      <NavLink to="/gallery" className="block px-3 py-2 rounded-md font-medium text-gray-900 hover:bg-gray-50">Gallery</NavLink>
                    </div>
                  )}
                </div>
                <NavLink to="/committee" className="block px-3 py-2 rounded-md font-medium text-gray-900 hover:bg-gray-50">Committee</NavLink>
                <NavLink to="/alumni" className="block px-3 py-2 rounded-md font-medium text-gray-900 hover:bg-gray-50">Our Alumni</NavLink>
                <NavLink to="/contact" className="block px-3 py-2 rounded-md font-medium text-gray-900 hover:bg-gray-50">Contact</NavLink>
                <NavLink to="/login" className="block px-3 py-2 rounded-md font-medium text-gray-900 hover:bg-gray-50">Login</NavLink>

              </div>
              <div className="relative md:hidden inset-0 bg-black opacity-50" onClick={handleCloseMenu}></div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

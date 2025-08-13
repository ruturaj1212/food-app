import React from "react";
import { Link } from "react-scroll";



const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      {/* Logo & Brand */}
      <div className="flex items-center gap-2 w-50 h-14 overflow-hidden flex items-center justify-center">
        <img
           src="./japanese-food.svg" alt="Japanese Food" 
          className="w-15 h-15"
        />
         <img
          src="./Cuisine.svg" alt="Cuisine" // Replace with your actual logo path
          className="w-30 h-30"
        />

      </div>

      {/* Menu Links */}
      <ul className="hidden md:flex gap-8 items-center text-gray-700">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className=" text-sm  text-gray-800 cursor-pointer hover:bg-[#DBDFD0]  px-3 py-1 rounded-full"
            
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-gray-900 cursor-pointer hover:bg-[#DBDFD0] px-3 py-1 rounded-full"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="menu"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-gray-900 cursor-pointer hover:bg-[#DBDFD0] px-3 py-1 rounded-full"
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            to="pages"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-gray-900 cursor-pointer hover:bg-[#DBDFD0] px-3 py-1 rounded-full"
          >
            Pages
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="hover:text-gray-900 cursor-pointer hover:bg-[#DBDFD0] px-3 py-1 rounded-full"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Button */}
      <Link
        to="book"
        smooth={true}
        duration={500}
        offset={-70}
        className="hidden md:inline-block border border-gray-500 rounded-full px-4 py-2 text-sm hover:bg-[#DBDFD0] px-3 py-1 rounded-full cursor-pointer"
      >
        Book A Table
      </Link>
    </nav>
  );
};

export default Navbar;
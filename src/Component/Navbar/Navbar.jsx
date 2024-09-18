import React, { useState } from "react";
import logo from "../../assets/4.png";
import "@fortawesome/fontawesome-free/css/all.min.css"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let touchStartX = 0;
  let touchEndX = 0;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    if (touchEndX - touchStartX > 100) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed w-full h-16 flex justify-between items-center px-6 bg-white shadow-md z-50">
      <a href="home.html">
        <img src={logo} alt="Logo" className="w-16 h-16" />
      </a>

      <ul className="hidden md:flex md:space-x-6 text-gray-800 font-semibold">
        <li>
          <a href="home.html" className="hover:text-yellow-600">
            Home
          </a>
        </li>
        <li>
          <a href="about.html" className="hover:text-yellow-600">
            About
          </a>
        </li>
        <li>
          <a href="blog.html" className="hover:text-yellow-600">
            Blog
          </a>
        </li>
        <li>
          <a href="courses.html" className="hover:text-yellow-600">
            Courses
          </a>
        </li>
        <li>
          <a href="contact.html" className="hover:text-yellow-600">
            Contact
          </a>
        </li>
        <li>
          <a
            href="#"
            className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700"
          >
            Login
          </a>
        </li>
      </ul>

      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          <i
            className={`fas ${
              isMenuOpen ? "fa-times" : "fa-bars"
            } text-2xl text-gray-800`}
          ></i>
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg p-6 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <ul className="flex flex-col space-y-6 text-gray-800 font-semibold">
          <li>
            <a
              href="home.html"
              className="hover:text-yellow-600"
              onClick={handleLinkClick}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="about.html"
              className="hover:text-yellow-600"
              onClick={handleLinkClick}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="blog.html"
              className="hover:text-yellow-600"
              onClick={handleLinkClick}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="courses.html"
              className="hover:text-yellow-600"
              onClick={handleLinkClick}
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href="contact.html"
              className="hover:text-yellow-600"
              onClick={handleLinkClick}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700"
              onClick={handleLinkClick}
            >
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

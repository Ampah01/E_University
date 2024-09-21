import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/4.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navBg, setNavBg] = useState("bg-slate-50 shadow-md");

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

  useEffect(() => {
    const handleScroll = () => {
      const homeSectionHeight = 550;

      if (window.scrollY > homeSectionHeight) {
        setNavBg("bg-[#09131f] shadow-md");
      } else {
        setNavBg("bg-slate-50 shadow-md");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkColor =
    navBg === "bg-[#09131f] shadow-md" ? "text-slate-50" : "text-gray-800";

  return (
    <nav
      className={`fixed w-full h-16 flex justify-between items-center px-6 z-50 transition-colors duration-300 ${navBg}`}
    >
      <NavLink to="/" onClick={handleLinkClick}>
        <img src={logo} alt="Logo" className="md:w-14 md:h-16 h-12 " />
      </NavLink>

      <ul className={`hidden md:flex md:space-x-6 font-semibold ${linkColor}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-600" : "hover:text-yellow-600"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-yellow-600" : "hover:text-yellow-600"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-yellow-600" : "hover:text-yellow-600"
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? "text-yellow-600" : "hover:text-yellow-600"
            }
          >
            Courses
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-yellow-600" : "hover:text-yellow-600"
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "bg-yellow-600 text-gray-800 px-4 py-2 rounded-md"
                : "bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-yellow-700 hover:text-yellow-600"
            }
            onClick={handleLinkClick}
          >
            Login
          </NavLink>
        </li>
      </ul>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          <i
            className={`fas ${
              isMenuOpen ? "fa-times" : "fa-bars"
            } text-2xl ${linkColor}`}
          ></i>
        </button>
      </div>

      <div
        className={`fixed top-16 right-0 h-40vh w-[45%] bg-slate-500 bg-opacity-60 backdrop-blur-md border-gray-200 shadow-lg px-4 text-center py-12 rounded-bl-lg transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <ul className="flex flex-col space-y-6 text-white font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-300"
              }
              onClick={handleLinkClick}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-300"
              }
              onClick={handleLinkClick}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-300"
              }
              onClick={handleLinkClick}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-300"
              }
              onClick={handleLinkClick}
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-300"
              }
              onClick={handleLinkClick}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "bg-yellow-600 text-white px-4 py-2 rounded-md"
                  : "bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-yellow-700"
              }
              onClick={handleLinkClick}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthPRovider";
import image from "./../../assets/logo (2).jpg";
import "./Navbar.css";

const Navbar = () => {
  const { user, handleLogout } = useContext(authContext);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [scrollY, setScrollY] = useState(0); // Tracks current scroll position
  const [scrollDirection, setScrollDirection] = useState("up"); // Tracks scroll direction
  const [isVisible, setIsVisible] = useState(true); // Tracks visibility of navbar

  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      setScrollDirection(direction);

      if (direction === "down") {
        setIsVisible(false); // Hide navbar when scrolling down
        console.log("down")
      } else {
        setIsVisible(true); // Show navbar when scrolling up
        console.log("up")
      }

      lastScrollY = currentScrollY;
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-medium ${isActive ? "text-yellow-500" : "text-white"}`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-medium ${isActive ? "text-yellow-500" : "text-white"}`
          }
          to="/allReviews"
        >
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="">All Reviews</div>
            <ul tabIndex={0} className="dropdown-content menu mt-2 bg-black rounded-box z-[1] w-52 p-2 shadow">
              <li><a>Genera</a></li>
              <li><a>Rating</a></li>
            </ul>
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-medium ${isActive ? "text-yellow-500" : "text-white"}`
          }
          to="/addReview"
        >
          Add Review
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-medium ${isActive ? "text-yellow-500" : "text-white"}`
          }
          to="/myReviews"
        >
          My Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-medium ${isActive ? "text-yellow-500" : "text-white"}`
          }
          to="/gameWatchList"
        >
          Game WatchList
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-medium ${isActive ? "text-yellow-500" : "text-white"}`
          }
          to="/myProfile"
        >
          Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className={`navbar bg-black px-4 md:px-8 sticky transition-transform duration-300 z-[100] top-0 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}>
      {/* Navbar Start */}
      <div className="">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-warning lg:hidden"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box"
          >
            {links}
          </ul>
        </div>
        <img className="h-16 w-20" src={image} alt="logo" />
      </div>

      {/* Navbar Center */}
      <div className="navbar-center text-center hidden ml-40 lg:flex">
        <ul className="menu menu-horizontal text-white gap-4">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className={`btn ${isDarkMode ? "btn-warning" : "btn-neutral"
            } rounded-full`}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>

        {user?.email ? (
          <div className="flex items-center gap-4">
            <span className="text-white font-medium hidden sm:block">
              {user?.displayName}
            </span>
            <img
              className="rounded-full w-10 h-10"
              src={user?.photoURL}
              alt="user"
            />
            <button
              onClick={handleLogout}
              className="btn btn-primary rounded-full"
            >
              LogOut
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-neutral rounded-full">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;




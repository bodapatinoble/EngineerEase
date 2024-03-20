import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import "./navBar.css";
import { Link } from "react-router-dom"; // Import Link from React Router



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); // State to track menu visibility

  // Reference to the menu icon and the side menu
  const menuIconRef = useRef(null);
  const sideMenuRef = useRef(null);

  useEffect(() => {
    // Function to close the menu when clicking outside of it
    const handleClickOutside = (event) => {
      if (
        sideMenuRef.current &&
        !sideMenuRef.current.contains(event.target) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    // Add event listener to detect clicks outside of the menu
    window.addEventListener("click", handleClickOutside);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar2">
      <div className="menu-icon" onClick={toggleMenu} ref={menuIconRef}>
        <FaBars />
      </div>
      <div className="brand">
        <img src="purpletalk.png" alt="Company Logo" className="logo1" />
      </div>
      <div className="profile2">
        <img src="avatar_25.jpg" alt="Profile" className="profile-pic" />
      </div>
      {/* Side menu */}
      <div className={`side-menu ${showMenu ? 'show' : ''}`} ref={sideMenuRef}>
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

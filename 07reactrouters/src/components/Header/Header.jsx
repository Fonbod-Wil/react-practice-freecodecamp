import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="shadow sticky top-0 z-50 bg-white">
  <nav className="max-w-screen-xl mx-auto px-4 lg:px-6 py-2.5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            className="h-10 w-10 object-contain mr-2"   // 👈 small logo
            alt="Logo"
          />
          <span className="text-xl font-bold text-gray-800">MySite</span>
        </Link>

        {/* Nav Links */}
        <ul className="hidden lg:flex space-x-8 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-orange-700 ${
                  isActive ? "text-orange-700 font-bold" : "text-gray-800"
                }`
              }
            >

            Home

            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-orange-700 ${
                  isActive ? "text-orange-700 font-bold" : "text-gray-800"
                }`
              }
            >
              About
            </NavLink>
          </li>
           <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-orange-700 ${
                  isActive ? "text-orange-700 font-bold" : "text-gray-800"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
           <li>
            <NavLink
              to="/github"
              className={({ isActive }) =>
                `hover:text-orange-700 ${
                  isActive ? "text-orange-700 font-bold" : "text-gray-800"
                }`
              }
            >
              GitHup
            </NavLink>
          </li>
           <li>
            <NavLink
              to="/user"
              className={({ isActive }) =>
                `hover:text-orange-700 ${
                  isActive ? "text-orange-700 font-bold" : "text-gray-800"
                }`
              }
            >
              User
            </NavLink>
          </li>
          
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <Link
            to="#"
            className="text-gray-800 hover:bg-gray-50
             focus:ring-4 focus:ring-gray-300 font-medium 
             rounded-lg text-sm px-4 py-2"
          >
            Log in
          </Link>
          <Link
            to="#"
            className="text-white bg-orange-700 hover:bg-orange-800 
            focus:ring-4 focus:ring-orange-300 font-medium 
            rounded-lg text-sm px-4 py-2"
          >
            Get started
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

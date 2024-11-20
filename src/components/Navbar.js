import React from "react";
import Logo from "./Logo";
import NotificationIcon from "../assets/bell-notification.png";
import ProfileFill from "../assets/Profile.fill.png";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto">
        {/* Row 1: Logo and Employers */}
        <div className="flex items-center justify-between p-4">
          {/* Logo */}
          <Logo />

          {/* Hamburger Menu for Mobile */}
          <button
            type="button"
            className="block md:hidden text-gray-500 hover:text-green-500"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Notification Icon */}
            <button
              type="button"
              className="text-gray-500 hover:text-green-500"
              aria-label="Notifications"
            >
              <img src={NotificationIcon} alt="Notifications" className="w-6 h-6" />
            </button>

            {/* Profile Icon */}
            <button
              type="button"
              className="text-gray-500 hover:text-green-500"
              aria-label="Profile"
            >
              <img src={ProfileFill} alt="Profile" className="w-6 h-6" />
            </button>

            {/* Employers Button */}
            <a
              href="#"
              className="text-green-500 px-4 py-2 rounded-lg hover:bg-green-500 hover:text-white transition"
            >
              Employers
            </a>
          </div>
        </div>

        {/* Row 2: Navigation Links */}
        <div className="hidden md:flex justify-center border border-gray-200">
          <a
            href="#"
            className="text-gray-700 hover:text-green-500 text-sm font-medium px-4 py-2"
          >
            Jobs
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-green-500 text-sm font-medium px-4 py-2"
          >
            Companies
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-green-500 text-sm font-medium px-4 py-2"
          >
            Create CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto">
        {/* Row 1: Logo and Employers */}
        <div className="flex items-center justify-between p-4">
          {/* Logo */}
          <Logo />

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Notification Icon */}
            <button
              type="button"
              className="text-gray-500 hover:text-green-500"
              aria-label="Notifications"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5a2.25 2.25 0 01-4.5 0m4.5 0a6 6 0 10-4.5 0m4.5 0H6.75"
                />
              </svg>
            </button>

            {/* Profile Icon */}
            <button
              type="button"
              className="text-gray-500 hover:text-green-500"
              aria-label="Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 7.5a3.75 3.75 0 11-7.5 0m7.5 0a3.75 3.75 0 11-7.5 0m0 0a3.75 3.75 0 11-7.5 0m15 0a3.75 3.75 0 11-7.5 0"
                />
              </svg>
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
        <div className="flex justify-center border border-gray-200">
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

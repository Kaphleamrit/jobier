import React from "react";
import Recruiter1 from "../assets/recruiter1.jpg";

const RecruiterCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-3 max-w-xs">
      {/* Profile Section */}
      <div className="flex items-center space-x-4">
        {/* Profile Image */}
        <img
          src={Recruiter1}
          alt="Susan Jeans"
          className="w-14 h-14 rounded-full object-cover"
        />

        {/* Name */}
        <div>
          <h3 className="font-bold text-base">Susan Jeans</h3>
        </div>
      </div>

      {/* Rating and Hiring Pill */}
      <div className="flex items-center justify-between mt-2">
        {/* Hiring Pill */}
        <span className="bg-purple-100 text-purple-600 text-xs font-semibold px-2 py-1 rounded-full ml-0">
          Hiring
        </span>

        {/* Rating */}
        <div className="flex items-center text-yellow-500 space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.175 6.673a1 1 0 00.95.69h7.025c.967 0 1.371 1.24.588 1.81l-5.7 4.148a1 1 0 00-.364 1.118l2.175 6.673c.3.921-.755 1.688-1.54 1.118l-5.7-4.148a1 1 0 00-1.176 0l-5.7 4.148c-.784.57-1.838-.197-1.54-1.118l2.175-6.673a1 1 0 00-.364-1.118l-5.7-4.148c-.783-.57-.379-1.81.588-1.81h7.025a1 1 0 00.95-.69l2.175-6.673z"
            />
          </svg>
          <span className="text-gray-600 text-sm">3.8</span>
        </div>
      </div>

      {/* Details Section */}
      <div className="mt-3">
        <p className="text-sm text-gray-500">
          Talent Acquisition Manager, Hays
        </p>
        <p className="text-sm text-gray-400">Recruiter For Position At Hays</p>
      </div>

      {/* Statistics Section with Vertical Lines */}
      <div className="mt-4 border-t pt-2 flex justify-between text-sm text-gray-500">
        <div className="flex flex-col items-center">
          <span className="font-semibold">+100</span>
          <span>Company</span>
        </div>
        <div className="flex flex-col items-center border-l border-gray-300 px-2">
          <span className="font-semibold">+100</span>
          <span>Hired</span>
        </div>
        <div className="flex flex-col items-center border-l border-gray-300 px-2">
          <span className="font-semibold">Technology</span>
          <span>Field</span>
        </div>
      </div>
    </div>
  );
};

export default RecruiterCard;

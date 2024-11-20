import React from "react";
import Recruiter1 from "../assets/recruiter1.jpg";
import Star from "../assets/star.png";
const RecruiterCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-3 max-w-xs mx-auto md:mx-0">
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
          <img src={Star} alt="Star" className="w-4 h-4" />
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

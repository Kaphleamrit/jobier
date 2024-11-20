import React from "react";
import Company1 from "../assets/company1.png";

const CompanyCard = ({ name, role, rating, location, jobs, employees, logo }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-xs">
      {/* Company Logo */}
      <img
        src={Company1}
        alt={name}
        className="w-20 h-20 rounded-full object-cover mx-auto"
      />

      {/* Company Info */}
      <div className="mt-4">
        {/* Company Name and Rating */}
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg text-left">{name}</h3>
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
                d="M12 4.5l2.813 5.75 6.375.938-4.625 4.5L18.625 21 12 17.813 5.375 21l1.062-5.313L2 11.188l6.188-.938L12 4.5z"
              />
            </svg>
            <span className="text-sm">{rating}</span>
          </div>
        </div>

        {/* Role and Location */}
        <div className="mt-2">
          <p className="text-sm text-gray-500">{role}</p>
          <p className="text-sm text-gray-400">{location}</p>
          <p className="text-sm text-gray-400">{employees} Employees</p>
        </div>

        {/* Jobs Button */}
        <div className="mt-4">
          <button className="bg-purple-100 text-purple-500 text-sm font-medium px-4 py-2 rounded-full">
            {jobs} Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;

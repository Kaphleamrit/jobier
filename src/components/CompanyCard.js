import React from "react";
import Company1 from "../assets/company1.png";
import Star from "../assets/star.png";

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
            <img src={Star} alt="Star" className="w-4 h-4" />
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

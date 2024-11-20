import React from "react";
import Company1 from "../assets/company1.png";
import Star from "../assets/star.png";

const CompanyCard = ({ name, role, rating, location, jobs, employees, logo }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-xs mx-auto md:mx-0">
      {/* Company Logo */}
      <div className="flex justify-center">
        <img
          src={Company1}
          alt={name}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
        />
      </div>

      {/* Company Info */}
      <div className="mt-4">
        {/* Company Name and Rating */}
        <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between">
          <h3 className="font-bold text-lg text-center md:text-left">{name}</h3>
          <div className="flex items-center text-yellow-500 space-x-1 mt-2 md:mt-0">
            <img src={Star} alt="Star" className="w-4 h-4" />
            <span className="text-sm">{rating}</span>
          </div>
        </div>

        {/* Role and Location */}
        <div className="mt-2 text-center md:text-left">
          <p className="text-sm text-gray-500">{role}</p>
          <p className="text-sm text-gray-400">{location}</p>
          <p className="text-sm text-gray-400">{employees} Employees</p>
        </div>

        {/* Jobs Button */}
        <div className="mt-4 flex justify-center md:justify-start">
          <button className="bg-purple-100 text-purple-500 text-sm font-medium px-4 py-2 rounded-full">
            {jobs} Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;

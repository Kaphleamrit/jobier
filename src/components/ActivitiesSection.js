import React from "react";
import { FaBookmark, FaEllipsisV } from "react-icons/fa";
import MetaLogo from "../assets/metaCompany.jpg";
import ArrowRight from "../assets/arrow-right-circle.png";
const ActivitiesSection = () => {
  const activities = [
    {
      companyLogo: MetaLogo, // Replace with actual logo URL or import
      companyName: "Meta Company",
      role: "Product Designer",
      location: "Porto, Portugal (On Site)",
      archived: "Archived 5 Days Ago",
    },
    {
      companyLogo: MetaLogo, // Replace with actual logo URL or import
      companyName: "Meta Company",
      role: "Product Designer",
      location: "Porto, Portugal (On Site)",
      archived: "Archived 5 Days Ago",
    },
  ];

  return (
    <div id="activities-section" className="p-6 bg-white rounded-lg">
      <h3 className="text-lg font-semibold mb-4" style={{ color: "#8C8F8E" }}>My Activities</h3>

      {/* Activity Cards */}
      <div className="grid grid-cols-2 gap-4">
        {activities.map((activity, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-sm bg-white relative">
            {/* Top Section */}
            <div className="flex justify-between items-start">
              {/* Logo and Name */}
              <div className="flex items-center space-x-3">
                <img
                  src={activity.companyLogo}
                  alt={activity.companyName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-sm">{activity.companyName}</h4>
                </div>
              </div>
              {/* Icons */}
              <div className="flex space-x-2">
                <FaBookmark className="text-gray-500 hover:text-black" />
                <FaEllipsisV className="text-gray-500 hover:text-black" />
              </div>
            </div>

            {/* Role and Location */}
            <div className="mt-2">
              <p className="text-gray-600 text-sm">{activity.role}</p>
              <p className="text-gray-400 text-sm">{activity.location}</p>
            </div>

            {/* Bottom Section */}
            <div className="mt-3">
              <span className="text-green-500 text-xs border border-green-500 px-2 py-1 rounded-full">
                {activity.archived}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Show All Info */}
      <div className="flex justify-end mt-4">
        <button className="flex items-center text-purple-500 hover:text-purple-700 font-medium text-sm">
          Show All Info
          <img src={ArrowRight} alt="Show All Info" className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default ActivitiesSection;

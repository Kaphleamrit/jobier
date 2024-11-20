import React from "react";
import HiChevronRight from "../assets/arrow-right-circle.png"; // Icon for Show All Info
import Write from "../assets/write.png"; // Icon for Write a Review

const AboutSection = () => {
  return (
    <div
      id="about-section"
      className="p-4 md:p-6 bg-white rounded-lg relative border-b-2"
    >
      {/* About Header */}
      <div className="flex justify-between items-center">
        <h3
          className="text-lg font-semibold mb-4"
          style={{ color: "#8C8F8E" }}
        >
          About
        </h3>
        {/* Edit Icon */}
        <button className="text-gray-500 hover:text-gray-700">
          <img src={Write} alt="Edit" />
        </button>
      </div>

      {/* About Content */}
      <p className="text-gray-500 mb-4">
        Updating your information will offer you the most relevant content.
      </p>

      {/* Grid Content */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <p className="text-sm font-bold text-gray-500">Employment Status *</p>
          <p className="">Not Employed</p>
        </div>
        <div>
          <p className="text-sm font-bold text-gray-500">Full Name *</p>
          <p className="text-sm">Philip Maya</p>
        </div>
        <div>
          <p className="text-sm font-bold text-gray-500">Job Title *</p>
          <p className="text-sm">UI/UX Designer</p>
        </div>
        <div>
          <p className="text-sm font-bold text-gray-500">Location *</p>
          <p className="text-sm">Porto, Portugal</p>
        </div>
      </div>

      {/* Show All Info */}
      <div className="flex justify-end mt-4">
        <button className="flex items-center text-purple-500 hover:text-purple-700 font-medium text-sm">
          Show All Info
          <img src={HiChevronRight} alt="Show All Info" className="ml-1 w-4" />
        </button>
      </div>
    </div>
  );
};

export default AboutSection;

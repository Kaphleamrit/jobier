import React from "react";
import RecruiterCard from "./RecruiterCard";
import CompanyCard from "./CompanyCard";

const RightSidebar = () => {
  return (
    <div className="w-full md:w-1/3 bg-gray-50 p-4 space-y-6">
      {/* Best Recruiters Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Best Recruiters for you</h2>
        <div className="space-y-4">
          <RecruiterCard
            name="Susan Jeans"
            role="Talent Acquisition Manager, Hays"
            rating="3.8"
            company="100"
            fields="Technology"
            image="https://via.placeholder.com/64"
          />
          <RecruiterCard
            name="Susan Jeans"
            role="Talent Acquisition Manager, Hays"
            rating="3.8"
            company="100"
            fields="Technology"
            image="https://via.placeholder.com/64"
          />
        </div>
      </div>

      {/* Best Companies Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Best Company for you</h2>
        <div className="space-y-4">
          <CompanyCard
            name="Bluefox"
            role="Graphic Designer"
            rating="4.2"
            location="Netherlands"
            employees="7K+"
            jobs="18"
            logo="https://via.placeholder.com/64"
          />
          <CompanyCard
            name="Carvana"
            role="UI/UX Designer"
            rating="4.1"
            location="Italy"
            employees="4K+"
            jobs="12"
            logo="https://via.placeholder.com/64"
          />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;

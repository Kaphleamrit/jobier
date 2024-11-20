import React from "react";

const AboutSection = () => {
  return (
    <div id="about-section" className="p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-lg font-semibold mb-4">About</h3>
      <p className="text-gray-500 mb-4">
        Updating your information will offer you the most relevant content.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Employment Status</p>
          <p className="font-semibold">Not Employed</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Full Name</p>
          <p className="font-semibold">Philip Maya</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Job Title</p>
          <p className="font-semibold">UI/UX Designer</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Location</p>
          <p className="font-semibold">Porto, Portugal</p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

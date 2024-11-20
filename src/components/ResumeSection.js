import React from "react";

const ResumeSection = () => {
  return (
    <div id="resume-section" className="p-6 bg-white shadow-md rounded-lg mt-6">
      <h3 className="text-lg font-semibold mb-4">Resume</h3>
      <div className="border border-gray-200 p-4 rounded-lg flex items-center justify-between">
        <p className="text-gray-500">Philip Resume.Pdf</p>
        <button className="text-gray-400">•••</button>
      </div>
      <button className="text-green-500 mt-4">+ Add More</button>
    </div>
  );
};

export default ResumeSection;

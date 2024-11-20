import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("about-section");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveTab(id); // Set active tab
    }
  };

  return (
    <div className="flex space-x-4 border-b pb-2">
      {/* About Tab */}
      <button
        onClick={() => scrollToSection("about-section")}
        className={`text-sm font-medium px-2 py-1 ${
          activeTab === "about-section"
            ? "text-green-500 border-b-2 border-green-500"
            : "text-gray-500 hover:text-green-500"
        }`}
      >
        About
      </button>

      {/* Resume Tab */}
      <button
        onClick={() => scrollToSection("resume-section")}
        className={`text-sm font-medium px-2 py-1 ${
          activeTab === "resume-section"
            ? "text-green-500 border-b-2 border-green-500"
            : "text-gray-500 hover:text-green-500"
        }`}
      >
        Resume
      </button>

      {/* Activities Tab */}
      <button
        onClick={() => scrollToSection("activities-section")}
        className={`text-sm font-medium px-2 py-1 ${
          activeTab === "activities-section"
            ? "text-green-500 border-b-2 border-green-500"
            : "text-gray-500 hover:text-green-500"
        }`}
      >
        My Activities
      </button>
    </div>
  );
};

export default Tabs;

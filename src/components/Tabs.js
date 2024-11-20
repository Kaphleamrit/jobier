import React from "react";

const Tabs = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex border-b border-gray-200">
      {[
        { name: "About", id: "about-section" },
        { name: "Resume", id: "resume-section" },
        { name: "My Activities", id: "activities-section" },
      ].map((tab, index) => (
        <button
          key={index}
          className="flex-1 py-2 text-center text-gray-500 hover:text-green-500"
          onClick={() => scrollToSection(tab.id)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;

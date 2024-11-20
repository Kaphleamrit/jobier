import React from "react";
import ProfileHeader from "./ProfileHeader";
import Tabs from "./Tabs";
import AboutSection from "./AboutSection";
import ResumeSection from "./ResumeSection";
import ActivitiesSection from "./ActivitiesSection";

const MainContent = () => {
  return (
    <div className="p-4 bg-white">
      {/* Profile Header */}
      <div className="mb-4">
        <ProfileHeader />
      </div>

      {/* Tabs */}
      <div className="mt-4">
        <Tabs />
      </div>

      {/* Content Sections */}
      <div className="mt-4 space-y-6">
        <AboutSection />
        <ResumeSection />
        <ActivitiesSection />  
      </div>
    </div>
  );
};

export default MainContent;

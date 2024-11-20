import React from "react";
import ProfileHeader from "./ProfileHeader";
import AboutSection from "./AboutSection";
import ResumeSection from "./ResumeSection";
import ActivitiesSection from "./ActivitiesSection";
import BestRecruiters from "./BestRecruiters";

const MainContent = () => {
  return (
    <div>
      {/* Profile Header */}
      <ProfileHeader />

      {/* Content Sections */}
      <div className="mt-6 space-y-6">
        <AboutSection />
        <ResumeSection />
        <ActivitiesSection />

        {/* Best Recruiters Section */}
        <div>
          <BestRecruiters />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
  
import React from "react";
import ProfilePic from "../assets/profile.png";
import Write from "../assets/write.png";

const ProfileHeader = () => {
  return (
    <div className="bg-white rounded-lg p-6 flex justify-between items-start relative">
      {/* Profile Image */}
      <div className="flex flex-col items-center mr-4">
        <div className="relative">
          <img
            src={ProfilePic}
            alt="Philip Maya"
            className="w-24 h-24 rounded-full object-cover"
          />
          <button
            className="absolute bottom-0 right-1  text-white rounded-full w-7 h-7"
            aria-label="Edit Profile Picture"
          >
            <img src={Write} alt="Edit" />
          </button>
        </div>

        {/* Profile Info */}
        <div className="ml-4 flex-grow">
          <h2 className="text-lg font-bold">Philip Maya</h2>
          <p className="text-gray-500">UI/UX Designer</p>
          <p className="text-gray-400">Porto, Portugal</p>
        </div>
      </div>

      {/* Right Section: Open to & Options */}
      <div className="flex flex-col items-end space-y-20">
        {/* Options Menu */}
        <button
          className="text-gray-400 hover:text-gray-600"
          aria-label="More options"
        >
          <button className="text-gray-400">•••</button>
        </button>

        {/* Open To Button */}
        <button className="border-2 border-black text-black px-4 py-1 rounded-full hover:bg-black hover:text-white transition">
          Open to
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;

import React from "react";
import ProfilePic from "../assets/profile.png";

const ProfileHeader = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex justify-between items-start relative">
      {/* Profile Image */}
      <div className="flex flex-col items-center mr-4">
      <div className="relative">
        <img
          src={ProfilePic}
          alt="Philip Maya"
          className="w-24 h-24 rounded-full object-cover"
        />
        <button
          className="absolute bottom-0 right-0 bg-green-500 text-white p-2 rounded-full"
          aria-label="Edit Profile Picture"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.232 5.232l3.536 3.536m-2.036-1.036a2.5 2.5 0 11-3.536-3.536L18.732 2.732a2.5 2.5 0 013.536 3.536l-3.536 3.536z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.5 12.5L6 19m6.5-6.5H10m2.5 0v2.5"
            />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </button>

        {/* Open To Button */}
        <button className="border border-green-500 text-green-500 px-4 py-2 rounded-full hover:bg-green-500 hover:text-white transition">
          Open to
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;

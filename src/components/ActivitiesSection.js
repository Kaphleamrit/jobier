import React from "react";

const ActivitiesSection = () => {
  return (
    <div id="activities-section" className="p-6 bg-white shadow-md rounded-lg mt-6">
      <h3 className="text-lg font-semibold mb-4">My Activities</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-gray-200 p-4 rounded-lg">
          <h4 className="font-semibold">Meta Company</h4>
          <p className="text-gray-500">Product Designer</p>
          <p className="text-green-500 text-sm">Archived 5 Days Ago</p>
        </div>
        <div className="border border-gray-200 p-4 rounded-lg">
          <h4 className="font-semibold">Meta Company</h4>
          <p className="text-gray-500">Product Designer</p>
          <p className="text-green-500 text-sm">Archived 5 Days Ago</p>
        </div>
      </div>
      <button className="text-green-500 mt-4">Show All Info</button>
    </div>
  );
};

export default ActivitiesSection;

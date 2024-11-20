import React from "react";
import Navbar from "./components/Navbar";
import RightSidebar from "./components/RightSidebar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row mt-4">
        {/* Main Content */}
        <div className="flex-grow p-4">
          <MainContent />
        </div>
          <RightSidebar />
          
        </div>
      </div>
  );
}

export default App;

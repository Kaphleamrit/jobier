import React from "react";

const Logo = () => {
  return (
    <a
      href="/"
      className="flex items-center justify-center md:justify-start"
    >
      <span
        className="text-2xl font-bold"
        style={{
          color: "#00E676",
          fontFamily: "Righteous",
        }}
      >
        Jobior
      </span>
    </a>
  );
};

export default Logo;

import React from "react";

interface GradientProps {
  colorArray: string[];
}

const Gradient = ({ colorArray }: GradientProps) => {
  return (
    <div
      className="h-[10vh] w-full m-0 p-0"
      style={{
        background: `linear-gradient(to bottom, ${
          colorArray ? colorArray.join(", ") : ""
        }`,
      }}
    ></div>
  );
};

export default Gradient;

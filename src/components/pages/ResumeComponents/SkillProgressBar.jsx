/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { ResumeContext } from "../../../context/ResumeContext";
import { useContext } from "react";
const SkillProgressBar = ({ skillName, rating }) => {
  const { resumeInfo } = useContext(ResumeContext);
  return (
    <div className="flex justify-between items-center my-3 gap-2">
      <h3 className="font-bold text-sm">{skillName}</h3>
      <div
        style={{
          backgroundColor: "#e0e0df",
          borderRadius: "3px",
          overflow: "hidden",
          width: "80%",
          height: "10px",
        }}
      >
        <div
          style={{
            width: `${rating}%`,
            backgroundColor: resumeInfo?.themeColor,
            height: "100%",
            transition: "width 0.3s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillProgressBar;

/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import PersonalDetail from "./ResumeComponents/PersonalDetail";
import Summary from "./ResumeComponents/Summary";
import Experience from "./ResumeComponents/Experience";

const ResumePreview = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeContext);

  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{
        borderColor: resumeInfo?.themeColor,
        fontSize: resumeInfo?.fontSize,
      }}
    >
      {/* Personal Details */}
      <PersonalDetail resumeInfo={resumeInfo} />
      {/* Summary  */}
      <Summary resumeInfo={resumeInfo} />
      {/* Work Experience */}
      <Experience resumeInfo={resumeInfo} />
      {/* Education */}
      {/* Skills */}
      {/* Achievements */}
    </div>
  );
};

export default ResumePreview;

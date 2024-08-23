/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

// eslint-disable-next-line react/prop-types
const Experience = ({ resumeInfo }) => {
  return (
    <div className="my-6">
      <h2 className="text-center font-bold text-xl mb-2">Work Experience</h2>
      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
      {resumeInfo?.experience.map((exp) => {
        return (
          <div key={exp.id} className="my-5">
            <div className="flex justify-between">
              <h1 className="text-sm text-center font-bold">{exp.title}</h1>
              <h2 className="text-sm text-center font-bold">
                {exp.companyName}
              </h2>
            </div>
            <div className="flex justify-end">
              <p className="text-xs text-center mt-1">
                {exp?.startDate + " - " + exp?.endDate}
              </p>
            </div>
            <p className="text-xs mt-2">{exp?.workSummary}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;

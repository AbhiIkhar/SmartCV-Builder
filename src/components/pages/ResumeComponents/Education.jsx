/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

// id: 1,
//       UniversityName: "VIT Pune",
//       startDate: "June 2020",
//       endDate: "June 2024",
//       degree: "Bachelors",
//       major: "Computer Engineering",
//       CGPA: 8.74,
const Education = ({ resumeInfo }) => {
  return (
    <div>
      <h1 className="text-xl font-bold text-center mb-2">Education</h1>
      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />

      {resumeInfo?.education?.map((education) => {
        return (
          <div key={education?.id} className="my-2">
            <div className="flex justify-between">
              <h1 className="text-sm font-bold text-center">
                {education?.UniversityName}
              </h1>
              <h3 className="text-xs font-normal text-center">
                {education?.startDate + " " + education?.endDate}
              </h3>
            </div>
            <div className="flex justify-between">
              <h3 className="text-xs font-normal text-center">
                {education?.degree + " in " + education?.major}
              </h3>
              <h3 className="text-xs font-normal text-center">
                {education?.CGPA}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;

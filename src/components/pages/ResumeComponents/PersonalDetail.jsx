/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const PersonalDetail = ({ resumeInfo }) => {
  return (
    <div>
      <h1
        className="font-bold text-2xl text-center"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        {resumeInfo?.firstName + " " + resumeInfo?.lastName}
      </h1>
      <h2 className="font-medium text-sm text-center">
        {resumeInfo?.jobTitle}
      </h2>
      <h2
        className="font-normal text-xs text-center"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        {resumeInfo?.address}
      </h2>

      <div className="flex justify-between">
        <h2
          className="font-normal text-xs text-center"
          style={{
            color: resumeInfo?.themeColor,
          }}
        >
          {resumeInfo?.phone}
        </h2>
        <h2
          className="font-normal text-xs text-center"
          style={{
            color: resumeInfo?.themeColor,
          }}
        >
          {resumeInfo?.email}
        </h2>
      </div>
      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
    </div>
  );
};

export default PersonalDetail;

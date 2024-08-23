/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Notebook } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ResumeCardItem = ({ resumeObj }) => {
  return (
    <Link to={"/dashboard/resume/" + resumeObj.resumeId + "/edit"}>
      <div className="flex flex-col">
        <div
          key={resumeObj.resumeId}
          className="mx-5 mt-10 p-14 py-24 border flex justify-center items-center bg-purple-400 rounded-lg h-[280px]
      hover:scale-105 transition-all hover:shadow-md cursor-pointer"
        >
          <Notebook />
        </div>
        <h1 className="text-center">{resumeObj.title}</h1>
      </div>
    </Link>
  );
};

export default ResumeCardItem;

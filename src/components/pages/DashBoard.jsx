/* eslint-disable no-unused-vars */
import React from "react";
import AddResume from "./AddResume";

const DashBoard = () => {
  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p>Build the Resume quickly by the power of AI </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10">
        <AddResume />
      </div>
    </div>
  );
};

export default DashBoard;

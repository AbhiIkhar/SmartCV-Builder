/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Summary = ({ resumeInfo }) => {
  return <p className="font-normal text-xs">{resumeInfo?.summary}</p>;
};

export default Summary;

/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import data from "../utils/data";

const FormSection = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeContext);
  useEffect(() => {
    setResumeInfo(data);
  }, []);

  return <div>FormSection</div>;
};

export default FormSection;

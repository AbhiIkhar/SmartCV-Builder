/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getResumeById } from "../../server/getResume";
import FormSection from "./FormSection";
import ResumePreview from "./ResumePreview";
import { ResumeContext } from "../../context/ResumeContext";
const EditResume = () => {
  const { resumeId } = useParams();
  const [resumeInfo, setResumeInfo] = useState(null);
  console.log(resumeId);

  const getData = async () => {
    const resumeData = await getResumeById(resumeId);
    console.log("ResumeData: " + resumeData.title);
  };

  getData();

  return (
    <ResumeContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="grid grid-cols-1 md:grid-cols-2 m-10 p-10">
        <FormSection />
        <ResumePreview />
      </div>
    </ResumeContext.Provider>
  );
};

export default EditResume;

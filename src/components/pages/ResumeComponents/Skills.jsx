/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import SkillProgressBar from "./SkillProgressBar";

const Skills = ({ resumeInfo }) => {
  return (
    <div>
      <h1 className="font-bold text-xl mb-2 text-center">Skills</h1>
      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
      <div className="grid grid-cols-2 gap-3">
        {resumeInfo?.skills?.map((skill) => {
          return (
            <SkillProgressBar
              key={skill.id}
              skillName={skill.name}
              rating={skill.rating}
              className="mb-2"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

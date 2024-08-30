/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { ResumeContext } from "../../context/ResumeContext";
import data from "../utils/data";
import PersonalDetails from "./Form/PersonalDetails";
import { Button } from "../ui/button";
import { ArrowBigLeft, ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import Summary from "./Form/Summary";

const FormSection = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeContext);
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  useEffect(() => {
    setResumeInfo(data);
  }, []);
  console.log(activeFormIndex);
  return (
    <div className="mx-2">
      <div className="flex justify-between items-center">
        <Button variant="outline" size="sm" className="flex gap-2">
          <LayoutGrid /> Theme
        </Button>
        <div className="flex gap-2">
          {activeFormIndex > 1 && (
            <Button onClick={() => setActiveFormIndex(activeFormIndex - 1)}>
              <ArrowLeft />
            </Button>
          )}
          <Button
            onClick={() => setActiveFormIndex(activeFormIndex + 1)}
            disabled={!enableNext}
          >
            Next
            <ArrowRight />
          </Button>
        </div>
      </div>

      {activeFormIndex === 1 ? (
        <PersonalDetails enableNext={(v) => setEnableNext(v)} />
      ) : activeFormIndex === 2 ? (
        <Summary enableNext={(v) => setEnableNext(v)} />
      ) : null}

      {/* Work Experience */}
      {/* Education */}
      {/* Skills */}
    </div>
  );
};

export default FormSection;

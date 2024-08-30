/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { ResumeContext } from "../../../context/ResumeContext";
import { Button } from "../../ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useParams } from "react-router-dom";
import { BrainIcon, LoaderCircleIcon } from "lucide-react";
import updateResume from "../../../server/updateResume";
import { toast } from "sonner";

const Summary = ({ enableNext }) => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeContext);
  const [summaryData, setSummaryData] = useState("");
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const { resumeId } = useParams();
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    enableNext(true);
    updateResume({ resumeId, formData })
      .then((resp) => {
        setLoading(false);
        console.log("Updated successfully");
        toast("Summary Updated Successfully", {
          description: Date(),
          action: {
            label: "Undo",
          },
        });
      })
      .catch(() => {
        setLoading(true);
        console.log("Error in Updating");
      });
  };
  useEffect(() => {
    summaryData &&
      setResumeInfo({
        ...resumeInfo,
        summary: summaryData,
      });
    setFormData({
      summary: summaryData,
    });
  }, [summaryData]);

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-black border-t-4 mt-10">
        <h2 className="font-bold text-lg">Summary</h2>
        <p>Add the summary for your job title</p>
        <form className="mt-7" onSubmit={handleSubmit}>
          <div className="flex justify-between items-end">
            <label>Add Summary</label>
            <Button variant="outline" size="sm" className="border-primary">
              <BrainIcon className="mr-2" /> Generate from AI
            </Button>
          </div>
          <Textarea
            className="mt-5"
            required
            onChange={(e) => {
              enableNext(false);
              setSummaryData(e.target.value);
            }}
          />
          <div className="flex justify-end mt-3">
            <Button type="submit" disabled={loading}>
              {loading ? <LoaderCircleIcon className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Summary;

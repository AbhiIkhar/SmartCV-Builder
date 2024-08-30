/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { ResumeContext } from "../../../context/ResumeContext";
import { Input } from "@/components/ui/input";
import { Button } from "../../ui/button";
import { useParams } from "react-router-dom";
import updateResume from "../../../server/updateResume";
import { LoaderCircleIcon } from "lucide-react";
import { toast } from "sonner";

const PersonalDetails = ({ enableNext }) => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeContext);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const { resumeId } = useParams();
  const handleChange = (e) => {
    enableNext(false);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    enableNext(true);

    updateResume({ resumeId, formData })
      .then((resp) => {
        setLoading(false);
        console.log("Updated successfully");
        toast("Personal Details has been successfully updated", {
          description: Date(),
          action: {
            label: "Undo",
          },
        });
      })
      .catch(() => {
        console.log("Error in Updating");
      });
  };
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-black border-t-4 mt-10">
      <h2 className="font-bold text-lg">Personal Details</h2>
      <p>Get Started with basic Information</p>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div>
            <label className="text-sm">First Name</label>
            <Input
              name="firstName"
              defaultValue={resumeInfo?.firstName}
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-sm">Last Name</label>
            <Input
              name="lastName"
              defaultValue={resumeInfo?.lastName}
              required
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Job Title</label>
            <Input
              name="jobTitle"
              defaultValue={resumeInfo?.jobTitle}
              required
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2">
            <label className="text-sm">Address</label>
            <Input
              name="address"
              defaultValue={resumeInfo?.address}
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <Input
              name="email"
              defaultValue={resumeInfo?.email}
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-sm">Phone</label>
            <Input
              name="phone"
              defaultValue={resumeInfo?.phone}
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-end mt-3">
          <Button type="submit" disabled={loading}>
            {loading ? <LoaderCircleIcon className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;

/* eslint-disable no-unused-vars */
import { Loader2, PlusSquare } from "lucide-react";
import React, { useState } from "react";
import Dialog from "../utils/Dialog";
import { Button } from "../ui/button";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/clerk-react";
import addResume from "../../server/AddResume";

const AddResume = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [resumeTitle, setResumeTitle] = useState(null);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);
  const { isloading, setIsLoading } = useState(true);

  const { user } = useUser();

  const onCreate = () => {
    const uuid = uuidv4();

    console.log(uuid, resumeTitle, user.emailAddresses[0].emailAddress);

    addResume(
      user.fullName,
      user.emailAddresses[0].emailAddress,
      resumeTitle,
      uuid
    )
      .then(() => {
        console.log("Resume Added successfully");
        setIsLoading(false);
      })
      .catch(() => {
        console.log("Error");
        setIsLoading(true);
      });
  };
  return (
    <div>
      <div
        className="p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg  h-[280px]
      hover:scale-105 transition-all hover:shadow-md cursor-pointer"
      >
        <PlusSquare onClick={openDialog} />
      </div>
      <Dialog isOpen={isDialogOpen} onClose={closeDialog}>
        <h2 className="text-xl font-bold mb-4">Create New Resume</h2>
        <p>Add Title for your new Resume</p>
        <input
          className="my-2 focus:outline-none border-2 rounded-sm p-2 w-full"
          placeholder="Ex - Frontend Developer"
          onChange={(e) => setResumeTitle(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <Button variant="ghost" onClick={closeDialog}>
            Cancel
          </Button>
          <Button
            disabled={!resumeTitle || isloading}
            onClick={() => onCreate()}
          >
            {isloading ? Loader2 : "Create"}
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default AddResume;

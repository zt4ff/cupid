import { useState } from "react";

import { Typography } from "@mui/material";
import { AttractivenessForm } from "../components/forms/AttractivenessForm";

export const CreateProfile = () => {
  const [editMode, setEditMode] = useState(true);

  return (
    <>
      <div className="flex items-center justify-center h-[85vh]">
        <div className="w-full flex flex-col items-center mx-auto md:px-8 lg:px-16 xl:px-[92px]">
          <div className="w-full h-full">
            <AttractivenessForm />
          </div>
        </div>
      </div>
    </>
  );
};

import React from "react";
import { LinearProgress } from "@mui/material";

export default function StorageItem({ title, icon, spaceUsed, spaceLimit }) {
  const progress = (spaceUsed / spaceLimit) * 100;
  return (
    <div className="p-16 px-24 bg-slate-200 rounded-3xl shadow-xl">
      <div className="mb-16 flex items-center">
        {icon}
        <p className="ml-8 mr-32 text-3xl font-bold">{title}</p>
      </div>
      <p className="mb-4 text-2xl text-slate-800 font-bold">
        {`${spaceUsed} MB of ${spaceLimit} MB used`}
      </p>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ height: "1rem", borderRadius: "1rem" }}
      />
    </div>
  );
}

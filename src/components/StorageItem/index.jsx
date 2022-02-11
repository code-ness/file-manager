import React from "react";
import { LinearProgress } from "@mui/material";

export default function StorageItem({ title, icon }) {
  return (
    <div className="p-16 px-24 bg-slate-200 rounded-3xl">
      <div className="mb-16 flex items-center">
        {icon}
        <p className="ml-8 mr-32 text-3xl font-bold">{title}</p>
      </div>
      <p className="mb-4 text-2xl text-slate-800 font-bold">
        15 of 100 images used
      </p>
      <LinearProgress
        variant="determinate"
        value={15}
        sx={{ height: "1rem", borderRadius: "1rem" }}
      />
    </div>
  );
}

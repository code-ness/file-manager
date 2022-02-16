import React from "react";
import FilesTable from "../FilesTable";
import Header from "../Header";

export default function FilesLayout({ title, files }) {
  return (
    <div className="p-16">
      <Header title={title} />
      <FilesTable allFiles={files} />
    </div>
  );
}

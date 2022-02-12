import React from "react";
import FilesTable from "../../components/FilesTable";
import Header from "../../components/Header";

export default function FilesLayout({ title, files }) {
  return (
    <div className="p-16">
      <Header title={title} />
      <FilesTable allFiles={files} />
    </div>
  );
}

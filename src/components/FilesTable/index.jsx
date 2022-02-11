import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import store from "../../redux/store";
import { Table } from "antd";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";
import { loadAllFiles } from "../../redux/loadThunk";
import extensionHandler from "../../utils/extensionHandler";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Date Created",
    dataIndex: "createDate",
  },
  {
    title: "Size",
    dataIndex: "size",
  },
  {
    title: "Last Modified",
    dataIndex: "modifyDate",
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}

export default function FilesTable() {
  const [allReadyFiles, setAllReadyFiles] = useState([]);
  const didUpload = useSelector((state) => state.upload.didUpload);
  const allFiles = useSelector((state) => state.allFiles.files);

  useEffect(() => {
    if (allFiles.length === 0) return;

    setAllReadyFiles(convertDataToRow(allFiles));
  }, [allFiles]);

  useEffect(() => {
    store.dispatch(loadAllFiles());
  }, [didUpload]);

  return (
    <>
      {allReadyFiles.length > 0 ? (
        <Table
          style={{ fontSize: "2rem" }}
          columns={columns}
          dataSource={allReadyFiles}
          onChange={onChange}
        />
      ) : (
        <SkeletonTheme>
          <Skeleton style={{ marginBottom: "1rem", height: "5rem" }} />
          <Skeleton
            style={{
              marginTop: "0.8rem",
              marginBottom: "0.8rem",
              height: "10rem",
            }}
            count={4}
          />
        </SkeletonTheme>
      )}
    </>
  );
}

function convertDataToRow(arr) {
  const array = arr.map((md) => {
    const ext = extensionHandler(md.name);

    const d1 = new Date(md.timeCreated);
    const d2 = new Date(md.updated);

    return {
      key: md.generation,
      name: (
        <div className="flex items-center">
          <div
            className={`p-6 ${fileStyleHandler(
              ext
            )} rounded-xl text-4xl font-bold w-32 aspect-square flex justify-center items-center`}
          >
            {ext.toUpperCase()}
          </div>
          <p className="ml-4">{md.name}</p>
        </div>
      ),
      createDate: d1.toDateString().slice(4),
      size: `${(md.size / 1048576).toFixed(2)} MB`,
      modifyDate: d2.toDateString().slice(4),
    };
  });
  return array;
}

function fileStyleHandler(type) {
  if (type === "img") {
    return "bg-blue-200 text-blue-700";
  } else if (type === "doc") {
    return "bg-orange-200 text-orange-700";
  } else if (type === "vid") {
    return "bg-violet-200 text-violet-700";
  } else if (type === "msc") {
    return "bg-green-200 text-green-700";
  }
}

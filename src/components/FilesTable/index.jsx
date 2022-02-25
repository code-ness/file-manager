import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import store from "../../redux/store";
import { Table, Empty } from "antd";

import { columns } from "./columns";
import "react-loading-skeleton/dist/skeleton.css";
import { loadAllFiles } from "../../redux/loadThunk";
import extensionHandler from "../../utils/extensionHandler";

export default function FilesTable() {
  const [allReadyFiles, setAllReadyFiles] = useState([]);
  const didUpload = useSelector((state) => state.upload.didUpload);
  const location = useLocation();
  const path = location.pathname;

  let allFiles = useSelector((state) => state.allFiles.files);
  const images = useSelector((state) => state.allFiles.images);
  const docs = useSelector((state) => state.allFiles.docs);
  const videos = useSelector((state) => state.allFiles.videos);
  const music = useSelector((state) => state.allFiles.music);

  if (path === "/images") {
    allFiles = images;
  } else if (path === "/docs") {
    allFiles = docs;
  } else if (path === "/videos") {
    allFiles = videos;
  } else if (path === "/music") {
    allFiles = music;
  }

  useEffect(() => {
    if (allFiles.length === 0) return;

    setAllReadyFiles(convertDataToRow(allFiles));
  }, [allFiles]);

  useEffect(() => {
    store.dispatch(loadAllFiles());
  }, [didUpload]);

  return (
    <div className="text-xl">
      <Table
        loading={allReadyFiles.length > 0 ? false : true}
        columns={columns}
        dataSource={allReadyFiles.length > 0 ? allReadyFiles : [<Empty />]}
        pagination={path === "/" ? false : true}
      ></Table>
    </div>
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

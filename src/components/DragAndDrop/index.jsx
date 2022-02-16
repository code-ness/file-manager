import React, { useMemo } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { useDispatch } from "react-redux";
import { uploadActions } from "../../redux/store";
import { useDropzone } from "react-dropzone";
import extensionHandler from "../../utils/extensionHandler";

import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import FolderIcon from "../../assets/folder.png";

export default function DragAndDrop({ onClose }) {
  const dispatch = useDispatch();

  function dispatchUpload() {
    dispatch(uploadActions.upload());
    console.log("UPLOAD");
  }

  function onDrop(files) {
    const file = files[0];
    const ext = extensionHandler(file.name);
    let isInvalid = false;
    (async function () {
      if (ext === "img") {
        const imgRef = ref(storage, `images/${file.name}`);
        await uploadBytes(imgRef, file).then(() => {
          console.log("UPLOADED");
          dispatchUpload();
        });
      } else if (ext === "doc") {
        const docRef = ref(storage, `docs/${file.name}`);
        await uploadBytes(docRef, file).then(() => dispatchUpload());
      } else if (ext === "vid") {
        const videoRef = ref(storage, `videos/${file.name}`);
        await uploadBytes(videoRef).then(() => dispatchUpload());
      } else if (ext === "msc") {
        const musicRef = ref(storage, `music/${file.name}`);
        await uploadBytes(musicRef, file).then(() => dispatchUpload());
      } else {
        isInvalid = true;
        alert("Invalid File Type");
      }
    })();
    if (isInvalid) return;
    onClose();
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  function modalCloseHandler(e) {
    e.stopPropagation();
    onClose();
  }

  const dropArea = useMemo(
    () => (
      <div
        className={`${
          isDragActive ? "bg-blue-100" : ""
        } w-full h-full flex flex-col items-center justify-center border-4 border-dashed border-blue-500 rounded-[4rem] transition-colors`}
      >
        <img className="mb-8 w-[10rem]" src={FolderIcon} />
        <p
          className={`mb-8 ${
            isDragActive ? "text-[4rem]" : "text-4xl"
          }  font-bold text-blue-500`}
        >
          {isDragActive
            ? "Release to upload your files"
            : "Drag and drop your files here"}
        </p>
        {!isDragActive && <p className="text-5xl text-blue-300">OR</p>}
        {!isDragActive && (
          <p className="font-extrabold text-[4rem] opacity-[.15]">
            Click inside the area to select files
          </p>
        )}
      </div>
    ),
    [isDragActive]
  );

  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-10 flex justify-center items-center bg-overlay">
      <div
        className="p-12 w-[40%] h-[45%] relative rounded-[4rem] bg-white"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {dropArea}
        <button
          onClick={modalCloseHandler}
          className="absolute top-[-4rem] right-[-4rem]"
        >
          <CancelRoundedIcon sx={{ fontSize: "4rem", color: "#fff" }} />
        </button>
      </div>
    </div>
  );
}

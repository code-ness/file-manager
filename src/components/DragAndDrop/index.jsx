import React, { useMemo, useState } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { useDispatch } from "react-redux";
import { uploadActions } from "../../redux/store";
import { useDropzone } from "react-dropzone";
import extensionHandler from "../../utils/extensionHandler";
import { Alert } from "@mui/material";

import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import FolderIcon from "../../assets/folder.png";
import { display } from "@mui/system";

export default function DragAndDrop({ onClose }) {
  const [isInvalid, setIsInvalid] = useState(false);
  const dispatch = useDispatch();

  function dispatchUpload() {
    dispatch(uploadActions.upload());
  }

  function dispatchIsUploading() {
    dispatch(uploadActions.isUploading());
  }

  function onDrop(files) {
    let isFileTypeValid = true;
    dispatchIsUploading();
    const file = files[0];
    const ext = extensionHandler(file.name);
    (async function () {
      if (ext === "img") {
        const imgRef = ref(storage, `images/${file.name}`);
        await uploadBytes(imgRef, file).then(() => {
          dispatchUpload();
          dispatchIsUploading();
        });
      } else if (ext === "doc") {
        const docRef = ref(storage, `docs/${file.name}`);
        await uploadBytes(docRef, file).then(() => {
          dispatchUpload();
          dispatchIsUploading();
        });
      } else if (ext === "vid") {
        const videoRef = ref(storage, `videos/${file.name}`);
        await uploadBytes(videoRef).then(() => {
          dispatchUpload();
          dispatchIsUploading();
        });
      } else if (ext === "msc") {
        const musicRef = ref(storage, `music/${file.name}`);
        await uploadBytes(musicRef, file).then(() => {
          dispatchUpload();
          dispatchIsUploading();
        });
      } else {
        dispatchIsUploading();
        isFileTypeValid = false;
        setIsInvalid(true);
      }
    })();
    if (!isFileTypeValid) return;
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
        {isInvalid && (
          <Alert
            onClick={(e) => e.stopPropagation()}
            className="fixed top-32 left-1/2 -translate-x-1/2 w-1/6"
            severity="error"
            variant="filled"
            onClose={(e) => {
              e.stopPropagation();
              setIsInvalid(false);
            }}
            sx={{ fontSize: "1.6rem", display: "flex", alignItems: "center" }}
          >
            Invalid file type!
          </Alert>
        )}
      </div>
    </div>
  );
}

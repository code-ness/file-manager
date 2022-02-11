import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { uploadActions } from "../../redux/store";
import extensionHandler from "../../utils/extensionHandler";

const Input = styled("input")({
  display: "none",
});

export default function UploadButton() {
  const dispatch = useDispatch();

  function dispatchUpload() {
    dispatch(uploadActions.upload());
    console.log("UPLOAD");
  }

  function onFileChangeHandler(e) {
    const file = e.target.files[0];
    const ext = extensionHandler(file.name);
    (async function () {
      if (ext === "img") {
        const imgRef = ref(storage, `images/${file.name}`);
        await uploadBytes(imgRef, file).then(() => dispatchUpload());
      } else if (ext === "doc") {
        const docRef = ref(storage, `docs/${file.name}`);
        await uploadBytes(docRef, file).then(() => dispatchUpload());
      } else if (ext === "vid") {
        const videoRef = ref(storage, `videos/${file.name}`);
        await uploadBytes(videoRef, file).then(() => dispatchUpload());
      } else if (ext === "msc") {
        const musicRef = ref(storage, `music/${file.name}`);
        await uploadBytes(musicRef, file).then(() => dispatchUpload());
      } else {
        alert("Invalid File Type");
      }
    })();
  }

  return (
    <label htmlFor="contained-button-file">
      <Input
        onChange={onFileChangeHandler}
        id="contained-button-file"
        multiple
        type="file"
      />
      <Button
        variant="contained"
        component="span"
        sx={{
          padding: "1rem 2rem",
          fontSize: "1.6rem",
          backgroundColor: "#303654",
          borderRadius: "2rem",
        }}
      >
        <CloudUploadRoundedIcon
          sx={{ fontSize: "3rem", marginRight: "1rem" }}
        />
        Upload
      </Button>
    </label>
  );
}

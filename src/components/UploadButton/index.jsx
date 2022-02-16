import Button from "@mui/material/Button";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";

export default function UploadButton({ onAddModal }) {
  function modalHandler() {
    onAddModal();
  }
  return (
    <Button
      onClick={modalHandler}
      variant="contained"
      component="span"
      sx={{
        padding: "1rem 2rem",
        fontSize: "1.6rem",
        backgroundColor: "#303654",
        borderRadius: "2rem",
      }}
    >
      <CloudUploadRoundedIcon sx={{ fontSize: "3rem", marginRight: "1rem" }} />
      Upload
    </Button>
  );
}

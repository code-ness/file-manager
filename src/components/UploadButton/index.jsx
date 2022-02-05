import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";

const Input = styled("input")({
  display: "none",
});

export default function index() {
  return (
    <label htmlFor="contained-button-file">
      <Input accept="image/*" id="contained-button-file" multiple type="file" />
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

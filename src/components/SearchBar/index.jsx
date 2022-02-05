import React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import InputBase from "@mui/material/InputBase";

export default function Index() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "1.6rem",
    backgroundColor: "#e3eaf2",
    width: "30%",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      fontSize: "1.6rem",
    },
  }));
  return (
    <Search>
      <SearchIconWrapper>
        <SearchRoundedIcon sx={{ fontSize: "2.5rem" }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}

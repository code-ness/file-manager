import { useState } from "react";
import { storage } from "../../firebase";
import { IconButton, Menu, MenuItem } from "@mui/material";
import {
  MoreVert,
  DeleteRounded,
  CloudDownloadRounded,
} from "@mui/icons-material";

export default function TableMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  return (
    <>
      <IconButton
        sx={{ svg: { width: "2em", height: "2em" } }}
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem
          className="flex items-center"
          sx={{ fontSize: "1.6rem" }}
          onClick={() => {}}
        >
          <CloudDownloadRounded
            color="primary"
            className="mr-4"
            fontSize="large"
          />
          Download
        </MenuItem>
        <MenuItem
          sx={{ fontSize: "1.6rem" }}
          onClick={(e) => console.log(e.target.closest("div"))}
        >
          <DeleteRounded color="error" className="mr-4" fontSize="large" />
          Delete
        </MenuItem>
      </Menu>
    </>
  );
}

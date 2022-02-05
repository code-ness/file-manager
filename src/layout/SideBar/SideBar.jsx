import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import ImageRoundedIcon from "@mui/icons-material/ImageRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";
import PlayCircleFilledWhiteRoundedIcon from "@mui/icons-material/PlayCircleFilledWhiteRounded";

export default function SideBar() {
  const customStyles = { color: "#c7cce8", fontSize: "3rem" };
  const itemStyles = "my-4 p-4 rounded-xl cursor-pointer hover:bg-blue-dark-2";
  return (
    <nav className="px-6">
      <ul className="mt-16 flex flex-col items-center">
        <li className={itemStyles}>
          <HomeRoundedIcon sx={customStyles} />
        </li>
        <li className={itemStyles}>
          <ImageRoundedIcon sx={customStyles} />
        </li>
        <li className={itemStyles}>
          <ArticleRoundedIcon sx={customStyles} />
        </li>
        <li className={itemStyles}>
          <LibraryMusicRoundedIcon sx={customStyles} />
        </li>
        <li className={itemStyles}>
          <PlayCircleFilledWhiteRoundedIcon sx={customStyles} />
        </li>
        <li className={itemStyles}>
          <BookmarkRoundedIcon sx={customStyles} />
        </li>
      </ul>
    </nav>
  );
}

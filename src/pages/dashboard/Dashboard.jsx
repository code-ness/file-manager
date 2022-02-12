import { useSelector } from "react-redux";

import StorageItem from "../../components/StorageItem";
import PhotoLibraryRoundedIcon from "@mui/icons-material/PhotoLibraryRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import FilesTable from "../../components/FilesTable";
import Header from "../../components/Header";

export default function Dashboard() {
  const iconStyles = {
    color: "#fff",
    fontSize: "8rem",
    padding: "1.5rem",
    borderRadius: "2rem",
  };

  return (
    <div className="p-16 pb-8">
      <Header title="Dashboard" />
      <div className="my-12">
        <p className="mb-8 text-4xl font-semibold">Storage</p>
        <div className="grid grid-cols-4 gap-16">
          <StorageItem
            title="Images"
            icon={
              <PhotoLibraryRoundedIcon
                sx={{ ...iconStyles, backgroundColor: "#656DFA" }}
              />
            }
          />
          <StorageItem
            title="Documents"
            icon={
              <ArticleRoundedIcon
                sx={{ ...iconStyles, backgroundColor: "#FFB369" }}
              />
            }
          />
          <StorageItem
            title="Music"
            icon={
              <MusicNoteRoundedIcon
                sx={{ ...iconStyles, backgroundColor: "#D566FF" }}
              />
            }
          />
          <StorageItem
            title="Videos"
            icon={
              <VideocamRoundedIcon
                sx={{ ...iconStyles, backgroundColor: "#1cd854" }}
              />
            }
          />
        </div>
      </div>
      <div className="my-12">
        <p className="text-4xl font-semibold">Recent Files</p>
        <FilesTable />
      </div>
    </div>
  );
}

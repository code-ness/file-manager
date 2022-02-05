import StorageItem from "../../components/StorageItem";
import UploadButton from "../../components/UploadButton";

import PhotoLibraryRoundedIcon from "@mui/icons-material/PhotoLibraryRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";

export default function Dashboard() {
  const iconStyles = {
    color: "#fff",
    fontSize: "8rem",
    padding: "1.5rem",
    borderRadius: "2rem",
  };

  return (
    <div className="p-24">
      <div className="flex justify-between items-center">
        <h2 className="text-5xl font-bold text-blue-dark">Dashboard</h2>
        <UploadButton />
      </div>
      <div className="my-12">
        <p className="mb-8 text-4xl font-semibold">Storage</p>
        <div className="flex justify-between">
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
        <p className="mb-8 text-4xl font-semibold">Recent Files</p>
        <div className="w-3/4 grid grid-cols-[2fr_1fr_1fr_1fr]">
          <h1>WOW</h1>
          <h1>WOW</h1>
          <h1>WOW</h1>
          <h1>WOW</h1>
        </div>
      </div>
    </div>
  );
}

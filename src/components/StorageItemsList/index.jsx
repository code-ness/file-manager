import { useSelector } from "react-redux";

import StorageItem from "../../components/StorageItem";
import PhotoLibraryRoundedIcon from "@mui/icons-material/PhotoLibraryRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import memoryUsedHandler from "../../utils/memoryUsedHandler";

export default function StorageItemsList() {
  const images = useSelector((state) => state.allFiles.images);
  const docs = useSelector((state) => state.allFiles.docs);
  const videos = useSelector((state) => state.allFiles.videos);
  const music = useSelector((state) => state.allFiles.music);

  const iconStyles = {
    color: "#fff",
    fontSize: "8rem",
    padding: "1.5rem",
    borderRadius: "2rem",
  };

  return (
    <div className="grid grid-cols-4 gap-16">
      <StorageItem
        title="Images"
        spaceUsed={memoryUsedHandler(images)}
        spaceLimit={20}
        icon={
          <PhotoLibraryRoundedIcon
            sx={{ ...iconStyles, backgroundColor: "#656DFA" }}
          />
        }
      />
      <StorageItem
        title="Documents"
        spaceUsed={memoryUsedHandler(docs)}
        spaceLimit={50}
        icon={
          <ArticleRoundedIcon
            sx={{ ...iconStyles, backgroundColor: "#FFB369" }}
          />
        }
      />
      <StorageItem
        title="Music"
        spaceUsed={memoryUsedHandler(music)}
        spaceLimit={50}
        icon={
          <MusicNoteRoundedIcon
            sx={{ ...iconStyles, backgroundColor: "#D566FF" }}
          />
        }
      />
      <StorageItem
        title="Videos"
        spaceUsed={memoryUsedHandler(videos)}
        spaceLimit={100}
        icon={
          <VideocamRoundedIcon
            sx={{ ...iconStyles, backgroundColor: "#1cd854" }}
          />
        }
      />
    </div>
  );
}

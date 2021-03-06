import { allFilesActions } from "./store";
import { ref, listAll, getMetadata } from "firebase/storage";
import { storage } from "../firebase";
import sortByDate from "../utils/sortByDate";

export function loadAllFiles() {
  return async function (dispatch) {
    try {
      const listRefImg = ref(storage, "images");
      const listRefDoc = ref(storage, "docs");
      const listRefVid = ref(storage, "videos");
      const listRefMsc = ref(storage, "music");

      const resImg = await listAll(listRefImg);
      const resDoc = await listAll(listRefDoc);
      const resVid = await listAll(listRefVid);
      const resMsc = await listAll(listRefMsc);

      const images = await Promise.all(
        resImg.items.map((item) => getMetadata(item))
      );
      const docs = await Promise.all(
        resDoc.items.map((item) => getMetadata(item))
      );
      const videos = await Promise.all(
        resVid.items.map((item) => getMetadata(item))
      );
      const music = await Promise.all(
        resMsc.items.map((item) => getMetadata(item))
      );
      dispatch(
        allFilesActions.addFiles(
          sortByDate("desc", [...images, ...docs, ...videos, ...music]).slice(
            0,
            3
          )
        )
      );
      dispatch(allFilesActions.addImages(images));
      dispatch(allFilesActions.addDocs(docs));
      dispatch(allFilesActions.addVideos(videos));
      dispatch(allFilesActions.addMusic(music));
    } catch (err) {
      console.error(err);
    }
  };
}

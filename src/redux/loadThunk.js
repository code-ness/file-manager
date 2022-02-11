import {
  imagesActions,
  docsActions,
  videosActions,
  musicActions,
  allFilesActions,
} from "./store";
import { ref, listAll, getMetadata } from "firebase/storage";
import { storage } from "../firebase";

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
      dispatch(allFilesActions.add([...images, ...docs, ...videos, ...music]));
    } catch (err) {
      console.error(err);
    }
  };
}

export function loadImages() {
  return async function (dispatch) {
    try {
      const listRef = ref(storage, "images");
      const res = await listAll(listRef);
      const images = await Promise.all(
        res.items.map((item) => getMetadata(item))
      );
      dispatch(imagesActions.add(images));
    } catch (err) {
      console.error(err);
    }
  };
}

export function loadDocs() {
  return async function (dispatch) {
    try {
      const listRef = ref(storage, "docs");
      const res = await listAll(listRef);
      const docs = await Promise.all(
        res.items.map((item) => getMetadata(item))
      );
      dispatch(docsActions.add(docs));
    } catch (err) {
      console.error(err);
    }
  };
}
export function loadVideos() {
  return async function (dispatch) {
    try {
      const listRef = ref(storage, "videos");
      const res = await listAll(listRef);
      const videos = await Promise.all(
        res.items.map((item) => getMetadata(item))
      );
      dispatch(videosActions.add(videos));
    } catch (err) {
      console.error(err);
    }
  };
}
export function loadMusic() {
  return async function (dispatch) {
    try {
      const listRef = ref(storage, "music");
      const res = await listAll(listRef);
      const music = await Promise.all(
        res.items.map((item) => getMetadata(item))
      );
      dispatch(musicActions.add(music));
    } catch (err) {
      console.error(err);
    }
  };
}

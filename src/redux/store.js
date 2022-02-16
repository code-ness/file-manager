import { configureStore, createSlice } from "@reduxjs/toolkit";

const uploadSlice = createSlice({
  name: "upload",
  initialState: { didUpload: false, isUploading: false },
  reducers: {
    upload(state) {
      state.didUpload = !state.didUpload;
    },
    isUploading(state) {
      state.isUploading = !state.isUploading;
    },
  },
});

const allFilesSlice = createSlice({
  name: "files",
  initialState: { files: [], images: [], docs: [], videos: [], music: [] },
  reducers: {
    addFiles(state, action) {
      state.files = action.payload;
    },
    addImages(state, action) {
      state.images = action.payload;
    },
    addDocs(state, action) {
      state.docs = action.payload;
    },
    addVideos(state, action) {
      state.videos = action.payload;
    },
    addMusic(state, action) {
      state.music = action.payload;
    },
  },
});

const imagesSlice = createSlice({
  name: "images",
  initialState: { images: [] },
  reducers: {
    add(state, action) {
      state.images = action.payload;
    },
  },
});

const docsSlice = createSlice({
  name: "docs",
  initialState: { docs: [] },
  reducers: {
    add(state, action) {
      state.docs = action.payload;
    },
  },
});
const videosSlice = createSlice({
  name: "videos",
  initialState: { videos: [] },
  reducers: {
    add(state, action) {
      state.videos = action.payload;
    },
  },
});
const musicSlice = createSlice({
  name: "music",
  initialState: { music: [] },
  reducers: {
    add(state, action) {
      state.music = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    upload: uploadSlice.reducer,
    allFiles: allFilesSlice.reducer,
    images: imagesSlice.reducer,
    docs: docsSlice.reducer,
    videos: videosSlice.reducer,
    music: musicSlice.reducer,
  },
});

export const uploadActions = uploadSlice.actions;
export const allFilesActions = allFilesSlice.actions;
export const imagesActions = imagesSlice.actions;
export const docsActions = docsSlice.actions;
export const videosActions = videosSlice.actions;
export const musicActions = musicSlice.actions;

export default store;

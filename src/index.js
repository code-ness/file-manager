import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import store from "./redux/store";
import Dashboard from "./pages/dashboard/Dashboard";
import FilesLayout from "./layout/FilesLayout";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
          <Route path="/images" element={<App />}>
            <Route path="/images" element={<FilesLayout title="Images" />} />
          </Route>
          <Route path="/docs" element={<App />}>
            <Route path="/docs" element={<FilesLayout title="Documents" />} />
          </Route>
          <Route path="/music" element={<App />}>
            <Route path="/music" element={<FilesLayout title="Music" />} />
          </Route>
          <Route path="/videos" element={<App />}>
            <Route path="/videos" element={<FilesLayout title="Videos" />} />
          </Route>
          <Route path="/favs" element={<App />}>
            <Route path="/favs" element={<FilesLayout title="Favourites" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

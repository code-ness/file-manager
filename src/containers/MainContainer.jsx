import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../layout/SideBar";

export default function MainContainer() {
  return (
    <div className="w-full grid grid-cols-[80px_1fr]">
      <header className="bg-blue-dark fixed top-0 bottom-0">
        <SideBar />
      </header>
      <main className="w-full col-start-2 col-end-3">
        <div className="px-12 py-8 bg-blue-dark border-l border-blue-dark-2">
          <h1 className="text-5xl font-bold text-slate-400">File Manager</h1>
        </div>
        <Outlet />
      </main>
    </div>
  );
}

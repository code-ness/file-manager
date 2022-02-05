import React from "react";
import SideBar from "../layout/SideBar/SideBar";
import Dashboard from "../pages/dashboard/Dashboard";

export default function MainContainer() {
  return (
    <div className="flex w-full h-screen">
      <header className="bg-blue-dark">
        <SideBar />
      </header>
      <main className="w-full">
        <div className="px-12 py-8 bg-blue-dark border-l border-blue-dark-2">
          <h1 className="text-5xl font-bold text-slate-400">File Manager</h1>
        </div>
        <Dashboard />
      </main>
    </div>
  );
}

import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";

export default function LayoutPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen z-50 transition-all duration-300 ${
          isOpen ? "w-48" : "w-16"
        }`}
      >
        <Sidebar toggle={isOpen} setToggle={setIsOpen} />
      </div>

      {/* Outlet content */}
      <div
        className={`w-full transition-all duration-300 min-h-screen p-6 bg-[#1a1a28]`}
        style={{ marginLeft: isOpen ? "12rem" : "4rem" }} // 48px vs 192px
      >
        <Outlet />
      </div>
    </div>
  );
}

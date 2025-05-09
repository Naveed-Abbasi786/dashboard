import React, { useState, useEffect, useRef } from "react";
import { Icon1, Icon10, Icon2, Icon9 } from "../assets";
import { Icons, bottomNav } from "../constant/data.js";
import { useNavigate } from "react-router-dom";

export default function Sidebar({toggle,setToggle}) {
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        toggle &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggle]);

  return (
    <div
      ref={sidebarRef}
      className={`h-screen p-4 bg-[#14141f] flex flex-col justify-between transition-all duration-300 ${
        toggle ? 'w-48' : 'w-16'
      }`}
    >
      {/* Top Area */}
      <div className="flex flex-col gap-4">
        <button className="bg-[#e9674b] text-white rounded-md p-2 px-2 text-sm">
          V
        </button>

        {!toggle && (
          <button className="p-1" onClick={() => setToggle(!toggle)}>
            <img src={Icon1} alt="icon1" className="w-full" />
          </button>
        )}

        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-2 hover:bg-[#1f1f2e] p-2 rounded-md transition-all"
        >
          <img src={Icon2} alt="icon2" className="w-5 h-5" />
          {toggle && <span className="text-white text-sm">Dashboard</span>}
        </button>

        <span className="w-full h-[1px] bg-gray-600 my-2"></span>

        <div className="flex flex-col gap-2">
          {Icons.map((item, idx) => (
            <button
              key={idx}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 p-2 rounded-md transition-all hover:bg-[#1f1f2e] ${
                idx === 0 ? "bg-gray-600" : ""
              }`}
            >
              <img src={item.icon} alt={`icon-${idx}`} className="w-5 h-5" />
              {toggle && (
                <span className="text-white text-sm">{item.name}</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Area */}
      <div className="flex flex-col gap-2">
        <button
          onClick={() => navigate("#")}
          className="flex items-center gap-3 p-2 rounded-md hover:bg-[#1f1f2e] transition-all"
        >
          <img src={Icon9} alt={`bottom-icon`} className="w-5 h-7 " />
          {toggle && <span className="text-white text-sm">Setting</span>}
        </button>
        <button
          onClick={() => navigate("#")}
          className="flex items-center gap-3 p-2 rounded-md hover:bg-[#1f1f2e] transition-all"
        >
          <img src={Icon9} alt={`bottom-icon`} className="w-5 h-7 " />
          {toggle && <span className="text-white text-sm">Setting</span>}
        </button>
        <button className="bg-[#3368b3] text-white rounded-md p-2 px-2">
          Ak
        </button>
      </div>
    </div>
  );
}

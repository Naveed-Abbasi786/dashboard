import React from "react";
import DropdownButton from "./dropdown";
import { Avatar } from "../assets/index";

export default function Table() {
  const data = [
    {
      name: "Perfume Ad",
      impressions: 100,
      clicks: 10,
      ctr: "2.5%",
      status: "Active",
    },
    {
      name: "Red Charlie ",
      impressions: 500,
      clicks: 50,
      ctr: "3.8%",
      status: "Active",
    },
    {
      name: "Prime Perfume Ad",
      impressions: 1000,
      clicks: 80,
      ctr: "4.6%",
      status: "Active",
    },
  ];

  return (
    <div className="bg-[#1c1c2e] rounded-lg px-6 py-5 w-full">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h5 className="text-white text-lg font-semibold">Best Performing ADs</h5>
          <p className="text-sm text-gray-400">Top-Performing Ads by Engagement & ROI</p>
        </div>
        <DropdownButton label="Monthly" options={["Monthly", "Weekly", "Daily"]} />
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-5 text-gray-400 text-sm border-b border-[#2c2c3c] pb-2">
        <span className="text-start">Ads</span>
        <span className="text-center">Impressions</span>
        <span className="text-center">Clicks</span>
        <span className="text-center">CTR</span>
        <span className="text-center">Status</span>
      </div>

      {/* Table Rows */}
      {data.map((row, index) => (
        <div
          key={index}
          className={`grid grid-cols-5 items-center  rounded-md my-1 px-2 text-sm text-white py-3 ${
            index % 2 === 0 ? "bg-[#2c2c3c] " : ""
          }`}
        >
          {/* Ad Info */}
          <div className="flex items-center gap-3 text-start">
            <img src={Avatar} alt="ad" className="w-7 h-7 rounded-full" />
            <span className="font-medium text-[12px]">{row.name}</span>
          </div>

          {/* Metrics */}
          <span className="text-center">{row.impressions}</span>
          <span className="text-center">{row.clicks}</span>
          <span className="text-center">{row.ctr}</span>

          {/* Status */}
          <span className="text-center">
            <span className="bg-green-900/30 text-green-400 text-xs px-4 py-1 rounded-full">
              {row.status}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

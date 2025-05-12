import React from "react";
import { Avatar, DeleteIcon, EditIcon } from "../assets/index";
import { listBrandData } from "../constant/data";

export default function ListBrands() {
  return (
    <div className="w-full p-4">
      {/* Table Header */}
      <div className="grid grid-cols-5 text-gray-300 text-sm border-b border-[#2c2c3c] pb-2">
        <span className="text-start">Brand Name</span>
        <span className="text-start">Brand Description</span>
        <span className="text-start">Brand Created</span>
        <span className="text-start">Last Activity</span>
        <span className="text-start">Action</span>
      </div>

      {/* Table Rows */}
      {listBrandData.map((row, index) => (
        <div
          key={index}
          className={`grid grid-cols-5 items-center rounded-md my-1 px-2 text-sm text-white py-3 ${
            index % 2 === 0 ? "bg-[#2c2c3c]" : ""
          }`}
        >
          {/* Brand Name */}
          <div className="flex items-center gap-3 text-start">
            <img src={Avatar} alt="avatar" className="w-7 h-7 rounded-full" />
            <span className="font-medium text-[12px]">{row.name}</span>
          </div>

          {/* Description */}
          <span className="text-start text-xs">{row.dis}</span>

          {/* Created Date */}
          <span className="text-start text-xs">{row.date}</span>

          {/* Last Activity */}
          <span className="text-start text-xs">{row.activity}</span>

          {/* Action */}
          <div className="flex justify-start gap-2">
            <button className="flex items-center gap-2  bg-[#283d31] text-[#1F9254] px-4  py-2 rounded-lg text-sm ">
              <img src={EditIcon} alt="" className="w-4" />
              Edit
            </button>
            <button className="flex items-center gap-2 bg-[#3c2626] text-[#F35252] px-4 py-2 rounded-lg text-sm ">
              <img src={DeleteIcon} alt="" className="w-4" />
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

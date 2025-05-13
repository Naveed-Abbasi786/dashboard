import React, { useState } from "react";
import {
  Avatar,
  ButtonIcon,
  Close,
  Search,
  SettingIcon,
  TagIcon,
  WorldIcon,
} from "../assets";
import BrandCards from "../components/brandCards";
import { connetAccount } from "../constant/data";

export default function BrandManegment() {
  const [isFocused, setIsFocused] = useState(false);
  const [val, setVal] = useState("https://veriorinc.com/");
  return (
    <div className="">
      <div className="flex justify-between items-center ">
        <div>
          <h1 className="text-white text-2xl font-bold">Brand Management</h1>
          <h5 className="text-gray-300 text-sm">
            Manage and customize your brand in one place.
          </h5>
        </div>

        <div className="flex justify-center items-center gap-6">
          <button className="bg-[#222230] p-[9px] rounded-md">
            <img src={Search} alt="" className="w-6" />
          </button>

          <button className="bg-[#e75050] p-2 rounded-md flex gap-2 justify-center items-center text-white">
            <img src={ButtonIcon} alt="" className="w-4" /> Generate Now
          </button>

          <button className="rounded-full w-9 ">
            <img src={Avatar} alt="" className="object-cover" />
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <div className="flex justify-center items-center gap-2">
          <img src={TagIcon} alt="" className="w-12 h-15" />
          <div>
            <h1 className="text-[#F35252] text-2xl  font-bold">
              Let’s Set Up Your Brand
            </h1>
            <h5 className="text-gray-300 text-sm">
              Enter your brand info once to auto-generate tailored ad assets
              with AI.
            </h5>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6">
          <button className="bg-[#2f2f3c] p-2 px-4 rounded-md flex gap-2 !justify-around items-center text-white">
            <span className="block">Close</span>{" "}
            <img src={Close} alt="" className="w-4" />
          </button>
        </div>
      </div>

      <div className="bg-[#222230] mt-4 w-full rounded-md p-4 flex items-center gap-4">
        <img src={WorldIcon} alt="" />
        <h2 className="text-gray-300 font-bold text-nowrap">
          Extract Data from Web
        </h2>

        <div className="relative w-full">
          <input
            type="text"
            id="website"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="peer bg-[#2f2f3c] rounded-md p-2 text-gray-400 outline-none px-2 py-3 w-full"
          />

          <label
            htmlFor="website"
            className={`absolute left-2 px-1 text-gray-400 transition-all duration-200
          ${isFocused || val ? "top-[-10px] text-sm" : "top-3 text-base"}
        `}
          >
            Your Landing Page or Website
          </label>
        </div>

        <button className="bg-[#e75050] px-2 p-2 rounded-md text-nowrap text-white ">
          Import Brand
        </button>
      </div>

      {/* Cards */}
      <BrandCards />

      <div className="bg-[#222230] mt-4 w-full rounded-md p-4 flex  justify-between items-center gap-4">
        <div className="flex gap-2 items-center">
          <img src={SettingIcon} alt="" />
          <h2 className="text-gray-300 font-bold text-nowrap">
            Set Up More Options
          </h2>
        </div>

        <button className="p-4 px-12  bg-[#2f2f3c] text-[#F35252] py-2 rounded-md hover:bg-[#3a3a4a] transition-all duration-200">
          + Add
        </button>
      </div>

      <div className="grid grid-cols-2 w-full gap-3 items-center mt-4">
        {connetAccount.map((val, idx) => (
          <div
            key={idx}
            className="bg-[#2F2F3C] flex justify-between p-3 rounded-lg"
          >
            <div className="flex justify-center items-center text-white gap-2">
              <div className="bg-[#2F2F3C]">
                <img src={val.icon} alt="" className="" />
              </div>
              <h1>{val.name}</h1>
            </div>

            <button className="p-12 px-4  bg-[#e75050] text-gray-300 py-2 rounded-md transition-all duration-200">
              Add Account Connect +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

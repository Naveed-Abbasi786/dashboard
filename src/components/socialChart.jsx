import React from "react";
import DropdownButton from "./dropdown";
import { SocialChartsData } from "../constant/data";
export default function SocialChart() {
  return (
    <div className="bg-[#1c1c2e] rounded-lg p-4 w-full h-[320px]">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h5 className="text-white text-xl font-semibold">
           Social Media Usage
          </h5>
          <h6 className="text-gray-300 text-sm">Audience Engagement</h6>
        </div>
        <div className="flex items-center gap-2">
          <DropdownButton
            label="Monthly"
            options={["Facebook", "YouTube", "Instagram", "Instagram", "LinkedIn"]}
          />
        </div>
      </div>

      <div className="space-y-6">
        {SocialChartsData.map((item, index) => (
          <div
            key={index}
            className="w-full bg-[#2f2f3c] rounded-xl h-12 relative overflow-hidden"
          >
            <div
              className="bg-[#e75050] h-full rounded-xl"
              style={{ width: `${item.percentage}%` }}
            ></div>

            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white font-medium">
              {item.label}
            </span>

            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white font-semibold">
              {item.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

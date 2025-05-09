import React from "react";
import DropdownButton from "./dropdown";
import { progressData } from "../constant/data";
export default function BarChart() {
  return (
    <div className="bg-[#1c1c2e] rounded-lg p-4 w-full h-[320px]">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h5 className="text-white text-xl font-semibold">
            Ad Fatigue Trends
          </h5>
          <h6 className="text-gray-300 text-sm">Additive Engagement Details</h6>
        </div>
        <div className="flex items-center gap-2">
          <DropdownButton
            label="Monthly"
            options={["Monthly", "Weekly", "Daily"]}
          />
        </div>
      </div>

      <div className="space-y-6">
        {progressData.map((item, index) => (
          <div
            key={index}
            className="w-full bg-[#2f2f3c] rounded-xl h-12 relative overflow-hidden"
          >
            {/* Red progress bar */}
            <div
              className="bg-[#e75050] h-full rounded-xl"
              style={{ width: `${item.percentage}%` }}
            ></div>

            {/* Text on top of red bar */}
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white font-medium">
              {item.label}
            </span>

            {/* Value at the end */}
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white font-semibold">
              {item.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Icon } from "@iconify/react";
import React from "react";
import { Avatar, ButtonIcon, Search, Sort } from "../assets";
import { OverViewcardsData } from "../constant/data";
import LineChart from "../components/lineChart";
import Doughnut from "../components/Doughnut";
import Table from "../components/table";
import BarChart from "../components/barChart";
export default function Overview() {
  return (
    <div className="!w-full p-4">
      <div className="flex justify-between items-center ">
        <h1 className="text-white text-2xl">Overview</h1>

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

      <div className="mt-2 flex justify-between items-center gap-2">
        <div>
          <h1 className="text-white text-xl">Analysics</h1>
          <h6 className="text-gray-400 text-sm">
            This information is from October 30 - November 30
          </h6>
        </div>
        <div>
          <button className="flex justify-center items-center gap-2 p-2 rounded-lg px-4 text-white bg-[#222230]">
            {" "}
            <img src={Sort} alt="" />
            Filter
          </button>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap justify-between mt-4">
        {OverViewcardsData.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#222230] flex flex-col justify-between w-[23%] h-[30vh] p-4 rounded-md text-white"
          >
            <h5 className="w-max bg-[#2f2f3c] mb-2 px-2 py-1 text-left rounded text-sm">
              {card.title}
            </h5>

            <h1 className="text-3xl font-semibold ">{card.value}%</h1>
            <h6 className="flex items-center text-sm gap-1 mt-2 text-gray-400">
              <span>SSH</span>
              <Icon icon={card.icon} className="text-lg" />
              <span className="text-green-400">{card.trend}</span>
              <span>Last Week</span>
            </h6>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="flex justify-between gap-2 !w-full h-[80vh] mt-6">
        <div className="flex-1">
          <LineChart />
        </div>

        <div className="!flex-1">
          <Doughnut />
        </div>
      </div>

      {/* Table */}
      <div className="!flex justify-between gap-2 w-full h-[80vh] -mt-32">
        <div className="flex-1">
          <Table />
        </div>

        <div className="flex-1">
          <BarChart />
        </div>
      </div>
    </div>
  );
}

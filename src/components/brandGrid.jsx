import React from "react";
import {
  Avatar,
  ButtonIcon,
  DeleteIcon,
  EditIcon,
  GridIcon,
  ListIcon,
  PlusIcon,
  Search,
  VeriorBanner,
} from "../assets";
import { generateCards, gridBrandViews } from "../constant/data";

export default function brands2() {
  return (
    <div className="w-full p-4">
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
            <img src={ButtonIcon} alt="" className="w-4" /> Add New Brand
          </button>

          <button className="rounded-full w-9 ">
            <img src={Avatar} alt="" className="object-cover" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {gridBrandViews.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#1e1e2f] rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="w-full  h-36 bg-[#2f2f3c]">
              <img
                src={item.banner}
                alt={item.titile}
                className="w-full p-14 h-[160px]"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h1 className="text-white font-semibold text-lg">
                {item.titile}
              </h1>
              <p className="text-gray-400 text-sm line-clamp-3">{item.dis}</p>

              <div className="flex gap-2 mt-4">
                <button className="flex items-center gap-2  bg-[#283d31] text-[#1F9254] px-8  py-2 rounded-lg text-sm ">
                  <img src={EditIcon} alt="" className="w-4" />
                  Edit
                </button>
                <button className="flex items-center gap-2 bg-[#3c2626] text-[#F35252] px-8 py-2 rounded-lg text-sm ">
                  <img src={DeleteIcon} alt="" className="w-4" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>



 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-start mt-6">
                {generateCards.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#1e1e2f] rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
                  >
                    <div className="w-full  h-36 bg-[#2f2f3c]">
                      <img
                        src={item.banner}
                        alt={item.titile}
                        className="w-full h-[160px]"
                      />
                    </div>
                    <div className="p-6 flex flex-col gap-2">
                      <h1 className="text-white font-semibold text-lg">
                        {item.titile}
                      </h1>
                      <p className="text-gray-400 text-sm line-clamp-3">{item.dis}</p>
        
                
                    </div>
                  </div>
                ))}
              </div>

    </div>
  );
}

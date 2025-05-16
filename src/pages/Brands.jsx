import React, { useState } from "react";
import {
  Avatar,
  ButtonIcon,
  GridIcon,
  ListIcon,
  PlusIcon,
  Search,
} from "../assets";
import ListBrands from "../components/listBrands";
import BrandGrid from "../components/brandGrid";

const Brands = () => {
  const [isGrid, setIsGrid] = useState(true);
  const [isList, setIsList] = useState(false);

  const handleGrid = () => {
    setIsGrid(true);
    setIsList(false);
  };

  const handleList = () => {
    setIsGrid(false);
    setIsList(true);
  };

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-white text-2xl font-bold">Brand Management</h1>
          <h5 className="text-gray-300 text-sm">
            Manage and customize your brand in one place.
          </h5>
        </div>

        <div className="flex items-center gap-6">
          <button className="bg-[#222230] p-[9px] rounded-md">
            <img src={Search} alt="search" className="w-6" />
          </button>

          <button className="bg-[#e75050] p-2 rounded-md flex gap-2 text-sm items-center text-white">
            <img src={ButtonIcon} alt="add" className="w-4" />
            Add New Brand
          </button>

          <button className="rounded-full w-9">
            <img src={Avatar} alt="avatar" className="object-cover rounded-full" />
          </button>
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex justify-between items-center border border-gray-700 mt-10 p-4 rounded-md">
        <div>
          <h1 className="text-white text-xl">List of Brands</h1>
          <h6 className="text-gray-400">
            View your projects and start new ones within the chosen brand
          </h6>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-[#222230] p-[9px] rounded-md">
            <img src={Search} alt="search" className="w-6" />
          </button>

          <button className="bg-[#e75050] p-2 text-md px-6 rounded-md flex gap-2 items-center text-white">
            <img src={PlusIcon} alt="plus" className="w-4" />
            Add New Brand
          </button>

          <div className="flex gap-2 bg-[#222230] rounded-lg p-2">
            <button
              onClick={handleGrid}
              className={`${
                isGrid ? "bg-[#e75050]" : "bg-[#2f2f3c]"
              } p-1 px-3 rounded-lg flex gap-2 items-center text-white`}
            >
              <img src={GridIcon} alt="grid" className="w-3" />
              Grid
            </button>
            <button
              onClick={handleList}
              className={`${
                isList ? "bg-[#e75050]" : "bg-[#2f2f3c]"
              } p-1 px-3 rounded-lg flex gap-2 items-center text-white`}
            >
              <img src={ListIcon} alt="list" className="w-3" />
              List
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-6">
        {isGrid && <BrandGrid />}
        {isList && <ListBrands />}
      </div>
    </div>
  );
};

export default Brands;

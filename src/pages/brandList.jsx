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

const  BrandList = () => {

const [isGrid, setisGrid] = useState(true);
const [islist, setIsList] = useState(false);

const handlegrid = () => {
  setisGrid(true);
  setIsList(false);
};

const handleList = () => {
  setisGrid(false); 
  setIsList(true);
};
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

          <button className="bg-[#e75050] p-2 rounded-md flex gap-2 text-sm justify-center items-center text-white">
            <img src={ButtonIcon} alt="" className="w-4" /> Add New Brand
          </button>

          <button className="rounded-full w-9 ">
            <img src={Avatar} alt="" className="object-cover" />
          </button>
        </div>
      </div>

      <div className="w-full border-1 flex justify-between border-gray-700 mt-10 p-3">
        <div className="">
          <h1 className="text-white text-xl">List of Brands</h1>
          <h6 className="text-gray-400">
            View your projects and start new ones within the chosen brand
          </h6>
        </div>
        <div className="flex justify-center items-center gap-6">
          <button className="bg-[#222230] p-[9px] rounded-md">
            <img src={Search} alt="" className="w-6" />
          </button>

          <button className="bg-[#e75050] p-2  text-md px-6 rounded-md flex gap-2 justify-center items-center text-white">
            <img src={PlusIcon} alt="" className="w-4" /> Add New brand
          </button>
          
          <div className="flex gap-2 bg-[#222230] rounded-lg p-2">
  <button
    onClick={handlegrid}
    className={`${
      isGrid ? "bg-[#e75050]" : "bg-[#2f2f3c]"
    } p-1 !text-sm px-3 rounded-lg flex gap-2 justify-center items-center text-white`}
  >
    <img src={GridIcon} alt="" className="w-3" /> Grid
  </button>
  <button
    onClick={handleList}
    className={`${
      islist ? "bg-[#e75050]" : "bg-[#2f2f3c]"
    } p-1  px-3 rounded-lg flex gap-2 justify-center items-center text-white`}
  >
    <img src={ListIcon} alt="" className="w-3" />
    List
  </button>
</div>

        </div>
      </div>
{isGrid && <BrandGrid />}
{islist && <ListBrands />}


    </div>
  );
}

export default BrandList
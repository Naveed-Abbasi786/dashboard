import React, { useState } from "react";
import Header from "../../components/reusableComponents/header";
import Header2 from "../../components/reusableComponents/header2";
import {
  BulbIcon,
  Convert,
  StockSizeActive,
  StockStyleActive,
  VisualLibrary,
  GalleryActiveIcon,
  SelectActive
} from "../../assets";
import {
  aIGeneratedAssets,
  creative,
  stockImageSizes,
  visualLibrary,
} from "../../constant/data";
import ButtonWithIcon from "../../components/reusableComponents/ButtonWithIcon";
import ImageStyle from "../../components/ImageStyle";
import InputWithBg from "../../components/reusableComponents/inputWithBg";

export default function EngagingProduct() {
  const [activeStep, setActiveStep] = useState(0);
  const [final, setFinal] = useState(false);
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [productShow, setProductShow] = useState(true);
  const [aiShow, setAiShow] = useState(false);
  const [advanceShow, setAdvanceShow] = useState(false);
  const handleDelete = (index) => {
    const updated = [...backgroundImages];
    updated.splice(index, 1);
    setBackgroundImages(updated);
  };

  return (
    <div>
      <Header
        title="Generate"
        subTitle="Manage and customize your brand in one place"
        btnTitle="Generate Now"
      />
      <Header2
        title="Curated Visual Library"
        subTitle="Create high-quality stock images licensed for commercial use."
        Icon={VisualLibrary}
      />

      <div className="flex lg:flex-row md:flex-col flex-col gap-3  mt-6">
        {/* Sidebar */}
        <div className="bg-[#222230] rounded-md p-4  gap-12 flex flex-col relative justify-start items-start lg:w-[30%] md:w-full w-full">
          {visualLibrary.map((val, idx) => (
            <div
              key={val.id}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setActiveStep(idx)}
            >
              {/* ICON + TITLE */}
              <div className="flex justify-center gap-3 items-center ">
                {/* ICON CONTAINER */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center relative">
                  <img
                    src={idx <= activeStep ? val.activeIcon : val.unActiveIcon}
                    alt=""
                    className="w-12 h-12"
                  />

                  {/* VERTICAL LINE */}
                  {idx !== creative.length - 1 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full h-12 w-[5px] bg-[#E75050]"></div>
                  )}
                </div>

                {/* TITLE */}
                <p
                  className={`text-md !font-semibold ${
                    idx <= activeStep ? "text-[#E75050]" : "text-white"
                  }`}
                >
                  {val.title}
                </p>
              </div>
            </div>
          ))}

          {/* Bottom content */}
          <div className="bg-[#2f2f3c]  hidden lg:block w-full p-3 rounded-md mt-20">
            <div className="w-full flex justify-start !gap-1 items-center">
              <img src={BulbIcon} alt="" className="w-8 h-7" />
              <h1 className="text-gray-200 text-[17px]">Guide</h1>
            </div>

            <p className="text-sm text-[#919191] mt-2 font-medium leading-[21px]">
              lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,{" "}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-[#1c1c2e] rounded-md p-2 w-full">
          {visualLibrary[activeStep]?.id === "size" && (
            <>
              <div className="flex justify-between items-center p-2">
                <div className="flex justify-center items-center gap-2">
                  <img src={StockSizeActive} alt="" className="w-16 h-16 p-1" />
                  <div>
                    <h1 className="text-gray-200 text-2xl font-bold">
                      Product Video Ratio
                    </h1>
                    <h5 className="text-gray-400 text-md">
                      Choose the video ratio that best fits your advertising
                      platform.
                    </h5>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                  {stockImageSizes.map((val, idx) => (
                    <div
                      key={idx}
                      className={`${
                        idx === 0
                          ? "bg-gray-200 text-black"
                          : "bg-[#2f2f3c] text-white"
                      } h-[240px] hover:bg-gray-200 hover:text-black transition-colors duration-300 flex flex-col justify-center items-center rounded-md p-4 cursor-pointer`}
                    >
                      <img
                        src={val.icon}
                        alt=""
                        className="w-20 h-20 object-cover "
                      />
                      <h3 className="font-medium text-[14px]">{val.title}</h3>
                      <span className="text-[12px] text-center">
                        {val.size}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end items-end mt-60">
                {visualLibrary[activeStep]?.id !== "style" && (
                  <button
                    className="bg-[#e75050] p-3 px-4 rounded-md text-white"
                    onClick={() => {
                      const textIndex = visualLibrary.findIndex(
                        (item) => item.id === "style"
                      );
                      setActiveStep(textIndex);
                    }}
                  >
                    Next
                  </button>
                )}
              </div>
            </>
          )}
          {visualLibrary[activeStep]?.id === "style" && (
            <div className="p-2">
              <div className="flex justify-start items-center gap-2">
                <img src={StockStyleActive} alt="" className="w-16 h-16 p-1" />
                <div>
                  <h1 className="text-gray-200 text-2xl font-bold">
                    Stock Image Style
                  </h1>
                  <h5 className="text-gray-400 text-md">
                    Select a theme that fits your project style.
                  </h5>
                </div>
              </div>

              <div>
                <ImageStyle />
              </div>
              <div className="flex justify-end items-end mt-20">
                {visualLibrary[activeStep]?.id !== "describe" && (
                  <button
                    className="bg-[#e75050] p-3 px-4 rounded-md text-white"
                    onClick={() => {
                      const textIndex = visualLibrary.findIndex(
                        (item) => item.id === "describe"
                      );
                      setActiveStep(textIndex);
                    }}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          )}

          {visualLibrary[activeStep]?.id === "describe" && (
            <div>
              {/* Background Upload Section */}
              <div className="flex justify-start items-center gap-2">
                <img src={SelectActive} alt="" className="w-16 h-16 p-1" />
                <div>
                  <h1 className="text-gray-200 text-2xl font-bold">
                    Describe Your Image{" "}
                  </h1>
                  <h5 className="text-gray-400 text-md">
                    Tell us what you need — AI will generate the perfect image.{" "}
                  </h5>
                </div>
              </div>

              <InputWithBg
                label="Enter Your Name"
                placeholder="Enter Your Name"
                InBg="bg-[#222230]"
              />

              <div className="p-4 bg-[#2f2f3c] mt-4">
                <h1 className="text-white font-semibold text-[24px] mb-6">
                  Describe your stock image
                </h1>
                <textarea
                  type="text"
                  placeholder="Enter Text"
                  className="!w-full bg-[#222230] outline-none resize-none text-gray-400 p-3 rounded-md text-[12px]"
                  rows={4}
                />
                <div className="flex justify-end items-center gap-2 mt-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 appearance-none cursor-pointer border-2 border-red-500 rounded-sm checked:bg-red-500 checked:border-red-500 checked:text-white flex items-center justify-center 
      before:content-['✔'] before:text-[10px] before:hidden checked:before:block before:text-white"
                    />
                    <span className="text-white text-sm">
                      Save Style for later
                    </span>
                  </label>
                </div>

                <div className="p-1">
                  <h1 className="text-white text-[24px] font-semibold">
                    Example Prompts
                  </h1>

                  <div className="grid grid-cols-2 gap-6 mt-4">
                    <div className="bg-[#222230] p-5 rounded-md text-gray-400 text-sm">
                      On a vintage wooden desk surrounded by scattered antique
                      maps and a softly glowing globe, with a warm library
                      setting in the background
                    </div>
                    <div className="bg-[#222230] p-5 rounded-md text-gray-400 text-sm">
                      On a vintage wooden desk surrounded by scattered antique
                      maps and a softly glowing globe, with a warm library
                      setting in the background
                    </div>
                    <div className="bg-[#222230] p-5 rounded-md text-gray-400 text-sm">
                      On a vintage wooden desk surrounded by scattered antique
                      maps and a softly glowing globe, with a warm library
                      setting in the background
                    </div>
                    <div className="bg-[#222230] p-5 rounded-md text-gray-400 text-sm">
                      On a vintage wooden desk surrounded by scattered antique
                      maps and a softly glowing globe, with a warm library
                      setting in the background
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end items-end mt-14">
                {activeStep < creative.length && (
                  <button
                    className="bg-[#e75050] p-3 px-4 rounded-md text-white"
                    onClick={() => {
                      if (activeStep < creative.length - 1) {
                        setActiveStep((prev) => prev + 1);
                      } else {
                        // Move to final screen
                        setActiveStep(creative.length);
                        setFinal(true);
                      }
                    }}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          )}

          {activeStep === creative.length && final && (
            <div className="mt-6">
              {/* Final true section */}
              <div className="flex justify-between items-center gap-2">
                <div className="flex justify-start items-center">
                  <img
                    src={GalleryActiveIcon}
                    alt=""
                    className="w-16 h-16 p-1"
                  />
                  <div>
                    <h1 className="text-gray-200 text-2xl font-bold">
                      AI-Generated Assets{" "}
                    </h1>
                    <h5 className="text-gray-400 text-md">
                      AI-generated assets tailored to your selected strategy.{" "}
                    </h5>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-2">
                  <ButtonWithIcon
                    btnTitle="convert"
                    buttonIcon={Convert}
                    btnFn={() => console.log("Generate button clicked")}
                  />
                  <ButtonWithIcon
                    btnTitle="Edit"
                    buttonIcon={Pen}
                    btnFn={() => console.log("Generate button clicked")}
                  />

                  <ButtonWithIcon
                    btnTitle="Downlaod"
                    buttonIcon={Download}
                    active={true}
                    btnFn={() => console.log("Generate button clicked")}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {aIGeneratedAssets.map((val, idx) => (
                  <div
                    key={idx}
                    className="bg-[#2f2f3c] mt-5 rounded-lg overflow-hidden shadow-md"
                  >
                    <div className="h-[200px]">
                      <img
                        src={val}
                        alt={`Asset-${idx}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex justify-between items-center px-4 py-3 bg-[#3a3a4a]">
                      <button className="px-3 py-2 rounded-md flex gap-3 text-sm items-center text-white">
                        <img src={Pen} alt="Edit" className="w-4" />
                        Edit
                      </button>
                      <button className="px-3 py-2 rounded-md flex gap-3 text-sm items-center text-white">
                        <img src={Download} alt="Edit" className="w-4" />
                        Download
                      </button>
                      <button className="px-3 py-2 rounded-md flex gap-3 text-sm items-center text-white">
                        <img src={Convert} alt="Edit" className="w-4" />
                        Convert
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

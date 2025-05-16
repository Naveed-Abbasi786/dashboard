import React, { useState } from "react";
import Header from "../../components/reusableComponents/header";
import Header2 from "../../components/reusableComponents/header2";
import {
  BulbIcon,
  Convert,
  WriteActive,
  WorldIcon,
  SettingIcon,
  ArrowLeft,
  ArrowUp,
  Pen,
  Download,
  SocialMediaVisualIcon,
  ResolutionPR,
  TextActiveIcon,
} from "../../assets";
import {
  aIGeneratedAssets,
  creative,
  perfomanceDriven,
  sizesSMV,
  soicalMediaSMV,
  soicalMediaVisual,
} from "../../constant/data";
import ButtonWithIcon from "../../components/reusableComponents/ButtonWithIcon";
import ImageUploader from "../../components/reusableComponents/uploadImage";
import InputWithLabel from "../../components/reusableComponents/inputWithLabel";
import SelectButton from "../../components/reusableComponents/selectButton";
// import { Switch } from "@material-tailwind/react";
import InputWithBg from "../../components/reusableComponents/inputWithBg";

export default function PerfomanceDriven() {
  const [activeStep, setActiveStep] = useState(0);
  const [final, setFinal] = useState(false);
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
    const [showGenerate, setShowGenerate] = useState(false);

  const [advanceShow, setAdvanceShow] = useState(false);
  const [isSizes, setIsSizes] = useState(false);
  const [val, setVal] = useState("https://veriorinc.com/");

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
        title="Social Media Visuals"
        subTitle="Create high-engagement social media content with the power of our AI."
        Icon={SocialMediaVisualIcon}
      />

      <div className="flex lg:flex-row md:flex-col flex-col gap-3  mt-6">
        {/* Sidebar */}
        <div className="bg-[#222230] rounded-md p-4  gap-12 flex flex-col relative justify-start items-start lg:w-[30%] md:w-full w-full">
          {soicalMediaVisual.map((val, idx) => (
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
          {soicalMediaVisual[activeStep]?.id === "size" && (
            <>
              <div className="flex justify-between items-center p-2">
                <div className="flex justify-center items-center gap-2">
                  <img src={ResolutionPR} alt="" className="w-16 h-16 p-1" />
                  <div>
                    <h1 className="text-gray-200 text-2xl font-bold">
                      Select Creative Size
                    </h1>
                    <h5 className="text-gray-400 text-md">
                      Choose the ideal ad size based on your target platform.
                    </h5>
                  </div>
                </div>
              </div>

              <div className="flex justify-between flex-wrap items-center gap-2 mt-2">
                <div className="flex items-center gap-2">
                  <h2 className="text-gray-200 font-medium">
                    Social Media Sizes
                  </h2>
                  <span className="text-gray-400 text-sm">
                    Most common sizes for social media advertising.
                  </span>
                </div>
                <div className="flex gap-3">
                  <h5 className="text-white font-semibold text-[14px]">
                    platforms
                  </h5>
                  <div
                    onClick={() => setIsSizes(!isSizes)}
                    className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition duration-300 ${
                      isSizes ? "!bg-[#F35252]" : "!bg-[#2F2F3C]"
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                        isSizes ? "translate-x-6" : "translate-x-0"
                      }`}
                    ></div>
                  </div>
                  <h5 className="text-white font-semibold text-[14px]">
                    Sizes
                  </h5>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-4">
                {(isSizes ? sizesSMV : soicalMediaSMV).map((val, idx) => (
                  <div
                    key={idx}
                    className={`${
                      idx === 0
                        ? "bg-white !text-black"
                        : "text-white bg-[#2f2f3c]"
                    } h-[180px] hover:bg-gray-200 hover:text-black transition-colors duration-300 flex flex-col justify-center items-center rounded-md cursor-pointer`}
                  >
                    <img src={val.icon} alt="" className="w-14 h-10" />
                    <h3 className="font-medium text-[14px]">{val.title}</h3>
                    <span className="text-[12px]">{val.size}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end items-end mt-64">
                {soicalMediaVisual[activeStep]?.id !== "text" && (
                  <button
                    className="bg-[#e75050] p-3 px-4 rounded-md text-white"
                    onClick={() => {
                      const textIndex = soicalMediaVisual.findIndex(
                        (item) => item.id === "text"
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

          {soicalMediaVisual[activeStep]?.id === "text" && (
            <div className="p-2">
              <div className="flex justify-start items-center gap-2">
                <img
                  src={TextActiveIcon}
                  alt=""
                  className="w-16 h-16 p-1"
                />
                <div>
                  <h1 className="text-gray-200 text-2xl font-bold">
Text on Image                  </h1>
                  <h5 className="text-gray-400 text-md">
Get smart text suggestions powered by AI, or craft your own message.                  </h5>
                </div>
              </div>

             <div className="flex flex-col items-start mt-6   rounded-md !bg-[#2f2f3c]">
                            <div className="flex items-center justify-between w-full  p-4 rounded-md">
                              {/* Left: Icon + Text */}
                              <div className="flex items-center gap-3">
                                {/* Icon */}
                                <div className="rounded-full bg-[#444450] w-12 h-12 flex items-center justify-center">
                                  <img
                                    src={SettingIcon}
                                    alt="Settings"
                                    className="w-6 h-6"
                                  />
                                </div>
            
                                {/* Text */}
                                <div>
                                  <h1 className="text-gray-200 text-lg font-semibold">
                                    Generate texts with AI
                                  </h1>
                                  <p className="text-gray-400 text-sm">
                                    Let our AI write conversion-focused text for your
                                    images.
                                  </p>
                                </div>
                              </div>
            
                              {/* Right: Arrow Button */}
                              <button
                                onClick={() => setShowGenerate((prev) => !prev)}
                                className="w-5 h-5 flex items-center justify-center rounded-full cursor-pointer hover:bg-[#333346] transition"
                              >
                                <img
                                  src={showGenerate ? ArrowUp : ArrowLeft}
                                  alt="Toggle"
                                  className="w-4 h-4"
                                />
                              </button>
                            </div>
            
                            {showGenerate && (
                              <>
                                <div className=" mt-4 w-full rounded-md p-4 flex items-center gap-4">
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
                                      className="peer bg-[#222230] rounded-md p-2 text-gray-400 outline-none px-2 py-3 w-full"
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
                                    Scan Website
                                  </button>
                                </div>
            
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full p-4">
                                  <InputWithLabel
                                    label="Your Main Headline Here"
                                  />
            
                                  <InputWithLabel
                                    label="Your Main Headline Here"
                                  />
            
                                  <InputWithLabel
                                    type="text"
                                    style="p-2"
                                    label="Your Main Headline Here"
                                  />
            
                                  <div className="col-span-3">
                                    <InputWithLabel
                                      type="textarea"
                                      style="p-2"
                                      label="Your Description"
                                      rows={4}
                                    />
                                  </div>
                                  <div className="col-span-3">
                                    <div className="grid grid-cols-2 gap-4 w-full">
                                      <InputWithLabel
                                        type="text"
                                        style="p-2"
                                        label="Your Main Headline Here"
                                      />
            
                                      <InputWithLabel
                                        type="text"
                                        style="p-2"
                                        label="Your Main Headline Here"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
            
                          <div className="bg-[#2f2f3c] w-full p-4 mt-4">
                            <h1 className="text-gray-200 text-xl">On Image Text</h1>
                            <div className="mt-6 flex flex-col space-y-4">
                              <InputWithLabel
                                label="Your Main Headline Here"
                              />
            
                              <InputWithLabel
                                label="Your Punchline Here"
                                // value={headline}
                                // onChange={setHeadline}
                              />
            
                              <InputWithLabel
                                label="Call to Action text here"
                                // value={headline}
                                // onChange={setHeadline}
                              />
            
                              <SelectButton
                                style="py-4  px-4"
                                buttonTitle="Call To Action"
                                options={["call", "action", "msg"]}
                              />
                            </div>
                            <div className="flex justify-end items-end mt-14">
                              {creative[activeStep]?.id !== "background" && (
                                <button
                                  className="bg-[#e75050] p-3 px-4 rounded-md text-white"
                                  onClick={() => {
                                    const textIndex = creative.findIndex(
                                      (item) => item.id === "background"
                                    );
                                    setActiveStep(textIndex);
                                  }}
                                >
                                  Next
                                </button>
                              )}
                            </div>
                          </div>

            </div>
          )}

          {perfomanceDriven[activeStep]?.id === "write" && (
            <div>
              <div className="flex justify-start items-center gap-2">
                <img src={WriteActive} alt="" className="w-16 h-16 p-1" />
                <div>
                  <h1 className="text-gray-200 text-2xl font-bold">
                    Write On Video Texts{" "}
                  </h1>
                  <h5 className="text-gray-400 text-md">
                    Generate high-converting copy with the power of AI.{" "}
                  </h5>
                </div>
              </div>

  <div className="mt-6">
                  <ImageUploader
                    style="bg-[#222230]"
                    images={backgroundImages}
                    setImages={setBackgroundImages}
                  />
                  {backgroundImages && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6">
                      {backgroundImages.map((img, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={img.url}
                            alt={`preview-${index}`}
                            className="w-full h-32 object-cover rounded-md"
                          />
                          <button
                            className="absolute top-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition"
                            onClick={() => handleDelete(index)}
                          >
                            Deletes
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>



                <div className="mt-4">
                               <InputWithBg
                                              label="Enter Your Name"
                                              placeholder="Enter Your Name"
                                              InBg="bg-[#222230]"
                                            />
                            </div>

              <div className="flex justify-end items-end mt-14">
                {activeStep < creative.length && (
                  <button
                    className="bg-[#e75050] p-3 px-4 rounded-md text-white"
                    onClick={() => {
                      if (activeStep < creative.length - 1) {
                        setActiveStep((prev) => prev + 1);
                      } else {
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
                    btnTitle="Edit All"
                    buttonIcon={Pen}
                    btnFn={() => console.log("Generate button clicked")}
                  />

                  <ButtonWithIcon
                    btnTitle="Change Sound"
                    buttonIcon={Sound}
                    active={true}
                    btnFn={() => console.log("Change Sound")}
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

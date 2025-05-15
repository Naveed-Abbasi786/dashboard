import React, { useState } from "react";
import Header from "../../components/reusableComponents/header";
import Header2 from "../../components/reusableComponents/header2";
import {
  AiDriven,
  AiDriven2,
  ArrowLeft,
  ArrowUp,
  BulbIcon,
  Convert,
  Correct,
  CreativeActiveIcon,
  DeleteIcon,
  Download,
  EditIcon,
  GalleryActiveIcon,
  GalleryUnActiveIcon,
  GeneratIcon,
  ImportPicIcon,
  Landscape,
  Option1,
  Pen,
  Port,
  Portait,
  ProductImage,
  ProductImage2,
  Resolution,
  SelectActive,
  SettingIcon,
  TextActiveIcon,
  WorldIcon,
  Wrong,
} from "../../assets";
import {
  advanceOptions,
  aIGeneratedAssets,
  creative,
  displaySizes,
  engagingProdut,
  socialMediaSizes,
  soicalMedia,
} from "../../constant/data";
import InputWithLabel from "../../components/reusableComponents/inputWithLabel";
import SelectButton from "../../components/reusableComponents/selectButton";
import ImageUploader from "../../components/reusableComponents/uploadImage";
import ButtonWithIcon from "../../components/reusableComponents/ButtonWithIcon";

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
        title="Engaging Product Video Showcases"
        subTitle="Transform static product photos into dynamic, studio-quality videos."
        Icon={GeneratIcon}
      />

      <div className="flex lg:flex-row md:flex-col flex-col gap-3  mt-6">
        {/* Sidebar */}
        <div className="bg-[#222230] rounded-md p-4  gap-12 flex flex-col relative justify-start items-start lg:w-[30%] md:w-full w-full">
          {engagingProdut.map((val, idx) => (
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
          {engagingProdut[activeStep]?.id === "product" && (
            <>
              <div className="flex justify-between items-center p-2">
                <div className="flex justify-center items-center gap-2">
                  <img
                    src={CreativeActiveIcon}
                    alt=""
                    className="w-16 h-16 p-1"
                  />
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
                {/* Grid of Sizes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div
                    className={`h-[160px]   bg-gray-200 text-black transition-colors duration-300 flex  justify-between items-center rounded-md p-4 cursor-pointer`}
                  >
                    <div>
                      <h3 className="font-semibold text-[17px]  leading-4">
                        Portrait Video
                      </h3>
                      <span className="text-[12px] leading-[20px]">
                        3:5 ratio, great for social media feeds where vertical
                        space is prioritized.
                      </span>
                    </div>
                    <img src={Port} alt="" className="w-10 h-10 " />
                  </div>
                  <div
                    className={`h-[160px]  bg-[#2f2f3c] text-white  transition-colors duration-300 flex  justify-between items-center rounded-md p-4 cursor-pointer`}
                  >
                    <div>
                      <h3 className="font-semibold text-[17px]  leading-4">
                        Portrait Video
                      </h3>
                      <span className="text-[12px] -leading-24">
                        5:3 ratio, ideal for landscape-oriented content across
                        various platforms like YouTube and presentations..
                      </span>
                    </div>
                    <img src={Landscape} alt="" className="w-10 h-10 " />
                  </div>
                </div>
              </div>

              <div className="flex justify-end items-end mt-48">
                {creative[activeStep]?.id !== "text" && (
                  <button
                    className="bg-[#e75050] p-3 px-4 rounded-md text-white"
                    onClick={() => {
                      const textIndex = creative.findIndex(
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
          {creative[activeStep]?.id === "text" && (
            <div className="p-2">
              <div className="flex justify-start items-center gap-2">
                <img
                  src={CreativeActiveIcon}
                  alt=""
                  className="w-16 h-16 p-1"
                />
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

              <div className="mt-4">
                {/* Grid of Sizes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {/* Option 1 - Product Image */}
                  <div
                    onClick={() => setProductShow(true)}
                    className={`h-[160px] rounded-md p-4 cursor-pointer transition-colors duration-300 flex justify-between items-center ${
                      productShow
                        ? "bg-gray-200 text-black"
                        : "bg-[#2f2f3c] text-white"
                    }`}
                  >
                    <div>
                      <h3 className="font-semibold text-[17px] leading-4">
                        Start from Product Image
                      </h3>
                      <span className="text-[12px]">
                        Upload a product image to let our AI handle the
                        background ..
                      </span>
                    </div>
                    <img src={ProductImage} alt="" className="w-12 h-12" />
                  </div>

                  {/* Option 2 - Product Photoshoot */}
                  <div
                    onClick={() => setProductShow(false)}
                    className={`h-[160px] rounded-md p-4 cursor-pointer transition-colors duration-300 flex justify-between items-center
       ${!productShow ? "bg-gray-200 text-black" : "bg-[#2f2f3c] text-white"}
      `}
                  >
                    <div>
                      <h3 className="font-semibold text-[17px] leading-4">
                        Start from Product Photoshoot
                      </h3>
                      <span className="text-[12px]">
                        Upload your product photoshoot and let our AI turn it
                        into a stunning video.
                      </span>
                    </div>
                    <img src={ProductImage2} alt="" className="w-12 h-12" />
                  </div>
                </div>
              </div>

              {productShow ? (
                <>
                  <div className="mt-6">
                    <ImageUploader
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
                              Delete
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="bg-[#2f2f3c] grid grid-cols-2 justify-center gap-6 mt-10   items-center  rounded-md p-2">
                      <div className="p-1 col-span-1">
                        <h2 className="text-gray-200 font-bold text-[17px]">
                          What is your product
                        </h2>
                        <div className="flex justify-center  items-start gap-2 mt-3">
                          <img src={Correct} alt="" className="w-4 h-4 mt-1" />
                          <div className="text-gray-300 text-[13px]">
                            Do: Describe your product broadly in one or two
                            words. For example, 
                            <span className="text-[#58E22F]"> bottle</span>, {" "}
                            <span className="text-[#58E22F]">hand </span>{" "}
                            <span className="text-[#58E22F]">bag</span>,{" "}
                            <span className="text-[#58E22F]">soda</span> {" "}
                            <span className="text-[#58E22F]">can</span> etc.
                          </div>
                        </div>

                        <input
                          type="text"
                          placeholder="Product Name"
                          className="bg-[#222230] w-full px-2 py-2 mt-4 rounded-md outline-none text-gray-200"
                        />
                      </div>

                      <div className="p-1 col-span-1">
                        <h2 className="text-gray-200 font-bold text-[17px]">
                          What is your product
                        </h2>
                        <div className="flex justify-center items-start gap-2 mt-3">
                          <img src={Wrong} alt="" className="w-4 h-4 mt-1" />
                          <div className="text-gray-300 text-[13px]">
                            Don’t:Describe everything in the image, or mention
                            your brand name. For example 
                            <span className="text-[#F35252]">
                              , a picture of a bottle on a table
                            </span>
                            , {" "}
                            <span className="text-[#F35252]">
                               a Coca-Cola can{" "}
                            </span>{" "}
                            etc.
                          </div>
                        </div>

                        <input
                          type="text"
                          placeholder="Product Name"
                          className="bg-[#222230] w-full px-2 py-2 mt-4 rounded-md outline-none text-gray-200"
                        />
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
                </>
              ) : (
                <>
                  <div className="mt-6">
                    <ImageUploader
                      images={backgroundImages}
                      setImages={setBackgroundImages}
                    />
                    {backgroundImages && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-10 mb-16">
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
                              Delete
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

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
                </>
              )}
            </div>
          )}

          {engagingProdut[activeStep]?.id === "selected" && (
            <div>
              {/* Background Upload Section */}
              <div className="flex justify-start items-center gap-2">
                <img src={SelectActive} alt="" className="w-16 h-16 p-1" />
                <div>
                  <h1 className="text-gray-200 text-2xl font-bold">
                    Select Creation Mode
                  </h1>
                  <h5 className="text-gray-400 text-md">
                    Choose between AI-generated or manually customized video
                    creation.
                  </h5>
                </div>
              </div>

              <div className="bg-[#2f2f3c] p-4 flex-col flex rounded-md justify-center items-start gap-3 mt-6">
                <h1 className="text-gray-200 font-medium">Name your Project</h1>
                <input
                  type="text"
                  placeholder="Enter Your Project Name"
                  className="bg-[#222230] w-full px-2 py-3 rounded-md outline-none text-gray-300"
                />
              </div>

              <div className="mt-4">
                {/* Grid of Sizes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div
                    onClick={() => setAiShow(true)}
                    className={`h-[120px] rounded-md p-4 cursor-pointer transition-colors duration-300 flex justify-between items-center ${
                      aiShow
                        ? "bg-gray-200 text-black"
                        : "bg-[#2f2f3c] text-white"
                    }`}
                  >
                    <div>
                      <h3 className="font-semibold text-[17px] leading-4">
                        Fully AI-Driven
                      </h3>
                      <span className="text-[12px]">
                        Get studio-quality videos instantly — no effort needed.
                      </span>
                    </div>
                    <img src={AiDriven} alt="" className="w-12 h-12" />
                  </div>

                  <div
                    onClick={() => setAiShow(false)}
                    className={`h-[120px] rounded-md p-4 cursor-pointer transition-colors duration-300 flex justify-between items-center
       ${!aiShow ? "bg-gray-200 text-black" : "bg-[#2f2f3c] text-white"}
      `}
                  >
                    <div>
                      <h3 className="font-semibold text-[17px] leading-4">
                        Custom Instructions
                      </h3>
                      <span className="text-[12px]">
                        Customize your video with prompts, resolution settings,
                        and other options.
                      </span>
                    </div>
                    <img src={AiDriven2} alt="" className="w-12 h-12" />
                  </div>
                </div>

                {aiShow ? (
                  <>s</>
                ) : (
                  <>
                    <div className="p-4 bg-[#2f2f3c] mt-4">
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

                      <div className="p-4">
                        <h1 className="text-white text-2xl font-semibold">
                          Recommended Prompts
                        </h1>

                        <div className="grid grid-cols-2 gap-6 mt-4">
                          <div className="bg-[#222230] p-5 rounded-md text-gray-400 text-sm">
                            On a vintage wooden desk surrounded by scattered
                            antique maps and a softly glowing globe, with a warm
                            library setting in the background
                          </div>
                          <div className="bg-[#222230] p-5 rounded-md text-gray-400 text-sm">
                            On a vintage wooden desk surrounded by scattered
                            antique maps and a softly glowing globe, with a warm
                            library setting in the background
                          </div>
                          <div className="bg-[#222230] p-5 rounded-md text-gray-400 text-sm">
                            On a vintage wooden desk surrounded by scattered
                            antique maps and a softly glowing globe, with a warm
                            library setting in the background
                          </div>
                          <div className="bg-[#222230] p-5 rounded-md text-gray-400 text-sm">
                            On a vintage wooden desk surrounded by scattered
                            antique maps and a softly glowing globe, with a warm
                            library setting in the background
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between w-full  p-4 rounded-md bg-[#2F2F3C] mt-6">
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
                            Advanced Options
                          </h1>
                          <p className="text-gray-400 text-sm">
                            Provide details about your audience, call to action,
                            tone, and any specific requests.
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() => setAdvanceShow((prev) => !prev)}
                        className="w-5 h-5 flex items-center justify-center rounded-full cursor-pointer hover:bg-[#333346] transition"
                      >
                        <img
                          src={advanceShow ? ArrowUp : ArrowLeft}
                          alt="Toggle"
                          className="w-4 h-4"
                        />
                      </button>
                    </div>

                    {advanceShow && (
                      <>
                        <div className="bg-[#2F2F3C] grid  grid-cols-3 justify-start gap-4 p-2">
                          {advanceOptions.map((val, idx) => (
                            <div className="bg-[#222230] rounded-md p-4 mt-3 flex-col flex justify-start items-start gap-2">
                              <div className="p-2 w-10 rounded-md bg-[#2F2F3C]">
                                <img src={Resolution} alt="" />
                              </div>
                              <h1 className="text-white font-semibold">
                                {val.title}
                              </h1>
                              <p className="text-white text-sm">{val.dis}</p>
                              <SelectButton
                                style="py-2  px-4 !bg-[#2F2F3C]"
                                icon={val.optionIcon}
                                buttonTitle={val.optionTitle}
                                options={val.options}
                              />
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </>
                )}
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

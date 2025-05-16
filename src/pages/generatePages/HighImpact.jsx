import React, { useState } from "react";
import Header from "../../components/reusableComponents/header";
import Header2 from "../../components/reusableComponents/header2";
import PrestStyle from "../../components/presetStyle";
import {
  BgRemoveActive,
  BgStyleActive,
  BulbIcon,
  Convert,
  Correct,
  CreativeActiveIcon,
  CustomStyle,
  Download,
  GalleryActiveIcon,
  GeneratIcon,
  Pen,
  PresetStyle,
  StyleMatch,
  Wrong,
} from "../../assets";
import {
  aIGeneratedAssets,
  creative,
  highImpact,
  socialMediaSizes,
  soicalMedia,
} from "../../constant/data";
import InputWithLabel from "../../components/reusableComponents/inputWithLabel";
import ImageUploader from "../../components/reusableComponents/uploadImage";
import ButtonWithIcon from "../../components/reusableComponents/ButtonWithIcon";
import SelectedStyles from "../../components/selectedStyles";

export default function HighImpact() {
  const [activeStep, setActiveStep] = useState(0);
  const [final, setFinal] = useState(false);
  const [backgroundImages, setBackgroundImages] = useState([]);

  const [ParentactiveTab, setParentActiveTab] = useState("Preset");

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
        title="AI-Powered Asset Library"
        subTitle="Choose the Type of Asset You Want to Create with AI"
        Icon={GeneratIcon}
      />

      <div className="flex lg:flex-row md:flex-col flex-col gap-3  mt-6">
        {/* Sidebar */}
        <div className="bg-[#222230] rounded-md p-4  gap-12 flex flex-col relative justify-start items-start lg:w-[30%] md:w-full w-full">
          {highImpact.map((val, idx) => (
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
        <div className="bg-[#222230] rounded-md p-2 w-full">
          {highImpact[activeStep]?.id === "creative" && (
            <>
              <div className="flex justify-between items-center mt-6">
                <div className="flex justify-center items-center gap-2">
                  <img
                    src={CreativeActiveIcon}
                    alt=""
                    className="w-16 h-16 p-1"
                  />
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

              <div className="mt-4">
                {/* Header Row */}
                <div className="flex justify-between flex-wrap items-center gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <h2 className="text-gray-200 font-medium">
                      Social Media Sizes
                    </h2>
                    <span className="text-gray-400 text-sm">
                      Most common sizes for social media advertising.
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {soicalMedia.map((val, idx) => (
                      <img
                        key={idx}
                        src={val}
                        alt={`icon-${idx}`}
                        className="w-5 h-5 object-contain"
                      />
                    ))}
                  </div>
                </div>

                {/* Grid of Sizes */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                  {socialMediaSizes.map((val, idx) => (
                    <div
                      key={idx}
                      className={`${
                        idx === 2
                          ? "bg-[#F35252]"
                          : "bg-[#2f2f3c] "
                      } h-[160px] hover:bg-[#F35252] text-white  transition-colors duration-300 flex flex-col justify-center items-center rounded-md p-4 cursor-pointer`}
                    >
                      <img src={val.icon} alt="" className="w-10 h-10 " />
                      <h3 className="font-medium text-[14px]">{val.title}</h3>
                      <span className="text-[12px]">{val.size}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end items-end mt-64">
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
          {highImpact[activeStep]?.id === "removal" && (
            <>
              <div className="flex justify-start items-center gap-2">
                <img src={BgRemoveActive} alt="" className="w-16 h-16 p-1" />
                <div>
                  <h1 className="text-gray-200 text-2xl font-bold">
                    Background Removal
                  </h1>
                  <h5 className="text-gray-400 text-md">
                    Easily remove backgrounds for cleaner, sharper product
                    images
                  </h5>
                </div>
              </div>

              <div className="mt-5">
                <ImageUploader
                  images={backgroundImages}
                  setImages={setBackgroundImages}
                />
                {backgroundImages && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-16 mt-8   justify-center items-center">
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
              </div>

              <div className="bg-[#2f2f3c] grid grid-cols-2 justify-center gap-6 mb-8 -mt-10  items-center  rounded-md p-2">
                <div className="p-1 col-span-1">
                  <h2 className="text-gray-200 font-bold text-[17px]">
                    What is your product
                  </h2>
                  <div className="flex justify-center  items-start gap-2 mt-3">
                    <img src={Correct} alt="" className="w-4 h-4 mt-1" />
                    <div className="text-gray-300 text-[13px]">
                      Do: Describe your product broadly in one or two words. For
                      example, <span className="text-[#58E22F]"> bottle</span>, {" "}
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
                      Don’t:Describe everything in the image, or mention your
                      brand name. For example 
                      <span className="text-[#F35252]">
                        , a picture of a bottle on a table
                      </span>
                      , {" "}
                      <span className="text-[#F35252]"> a Coca-Cola can </span>{" "}
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

              <div className="flex justify-end items-end ">
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
            </>
          )}

          {creative[activeStep]?.id === "background" && (
            <div>
              <div className="flex justify-between items-center gap-2">
                <div className="flex justify-start items-center">
                  <img src={BgStyleActive} alt="" className="w-16 h-16 p-1" />
                  <div>
                    <h1 className="text-gray-200 text-2xl font-bold">
                      AI Background Styles{" "}
                    </h1>
                    <h5 className="text-gray-400 text-md">
                      Select up to 6 presets or create your own unique style.{" "}
                    </h5>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-2">
                  <ButtonWithIcon
                    btnTitle="Preset Styles"
                    buttonIcon={PresetStyle}
                    active={ParentactiveTab === "Preset"}
                    btnFn={() => setParentActiveTab("Preset")}
                  />

                  <ButtonWithIcon
                    btnTitle="Custom Style"
                    buttonIcon={CustomStyle}
                    active={ParentactiveTab === "Custom"}
                    btnFn={() => setParentActiveTab("Custom")}
                  />

                  <ButtonWithIcon
                    btnTitle="Styles Match"
                    buttonIcon={StyleMatch}
                    active={ParentactiveTab === "Match"}
                    btnFn={() => setParentActiveTab("Match")}
                  />
                </div>
              </div>

              {ParentactiveTab === "Preset" && (
                <div className="w-[950px]">
                  <div>
                    <PrestStyle />
                  </div>
                  <div className="mt-4">
                    <SelectedStyles />
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

              {ParentactiveTab === "Custom" && (
                <>
                  <div className="mt-4 bg-[#2f2f3c] ">
                    <div className="flex justify-start items-center p-3 rounded-md gap-3">
                      <div className="bg-[#595963] rounded-full p-2">
                        <img src={CustomStyle} alt="" className="w-5 h-5" />
                      </div>
                      <div>
                        <h1 className="text-white font-semibold text-[20px]">
                          Custom Styles
                        </h1>
                        <h6 className="text-gray-400 text-sm">
                          Create your own custom style
                        </h6>
                      </div>
                    </div>

                    <div className="p-4">
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
                  <div className="w-[930px] mt-6">
                    <SelectedStyles />
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
                </>
              )}

              {ParentactiveTab === "Match" && (
                <>
                  <div className="p-5 rounded-md bg-[#2F2F3C]">
                    <div className="flex justify-start items-start gap-3 ">
                      <div className="w-10 h-10 flex justify-center items-center bg-[#595963] rounded-full p-3">
                        <img src={CustomStyle} alt="" className="w-10" />
                      </div>
                      <div>
                        <h2 className="text-white text-xl font-semibold">
                          Styles Match
                        </h2>
                        <h6 className="text-gray-400 text-[13px]">
                          Upload an image to extract and apply its style.
                        </h6>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-col gap-2">
                      <h3 className="text-white font-semibold">
                        Name Your Project
                      </h3>
                      <InputWithLabel label="Enter Your Project Name" />
                    </div>

                    <div className="mt-5 ">
                      <ImageUploader
                        style="bg-[#222230]"
                        images={backgroundImages}
                        setImages={setBackgroundImages}
                      />
                      {backgroundImages && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-16 mt-8   justify-center items-center">
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
                    </div>

                    <textarea
                      type="text"
                      placeholder="Enter Text"
                      className="!w-full bg-[#222230] outline-none resize-none text-gray-300 p-3 rounded-md text-[12px]"
                      rows={4}
                    />
                  </div>
                  <div className="w-[930px] mt-6">
                    <SelectedStyles />
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
                </>
              )}
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
                      <button className="px-3 py-2 rounded-md flex gap-1 text-sm items-center text-white">
                        <img src={Pen} alt="Edit" className="w-4" />
                        Edit
                      </button>
                      <button className="px-3 py-2 rounded-md flex gap-1 text-sm items-center text-white">
                        <img src={Download} alt="Edit" className="w-4" />
                        Download
                      </button>
                      <button className="px-3 py-2 rounded-md flex gap-1 text-sm items-center text-white">
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

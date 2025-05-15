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
  SelectActive,
  Perfomance,
  ResolutionPR,
  ProductVedio,
  ProductVedio2,
  ProductPhotoActive,
  WriteActive,
  WorldIcon,
  SettingIcon,
  ArrowLeft,
  ArrowUp,
  Pk,
  Pen,
  Download,
  PauseIcon,
  PlayIcon,
  Sound,
  SocialMediaVisualIcon,
} from "../../assets";
import {
  aIGeneratedAdVideos,
  aIGeneratedAssets,
  creative,
  creativeResolutionSizes,
  displaySizes,
  perfomanceDriven,
  soicalMediaVisual,
  stockImageSizes,
  visualLibrary,
} from "../../constant/data";
import ButtonWithIcon from "../../components/reusableComponents/ButtonWithIcon";
import ImageUploader from "../../components/reusableComponents/uploadImage";
import TextArea from "../../components/reusableComponents/textarea";
import InputWithLabel from "../../components/reusableComponents/inputWithLabel";
import SelectButton from "../../components/reusableComponents/selectButton";
import AiGeneratedAdVediosResult from "../../components/aiGeneratedAdVediosResult";

export default function PerfomanceDriven() {
  const [activeStep, setActiveStep] = useState(0);
  const [final, setFinal] = useState(false);
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [productShow, setProductShow] = useState(true);
  const [sizesShow, setSizesShow] = useState(false);
  const [aiShow, setAiShow] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [advanceShow, setAdvanceShow] = useState(false);
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
          {perfomanceDriven[activeStep]?.id === "size" && (
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div
                  onClick={() => setSizesShow(true)}
                  className={`h-[160px] rounded-md p-4 cursor-pointer transition-colors duration-300 flex justify-between items-center ${
                    sizesShow
                      ? "bg-gray-200 text-black"
                      : "bg-[#2f2f3c] text-white"
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    <img src={ProductVedio} alt="" className="w-12 h-12" />
                    <h3 className="font-semibold text-[17px] leading-4">
                      Start from Product Image
                    </h3>
                    <span className="text-[12px]">
                      Upload a product image to let our AI handle the background
                      ..
                    </span>
                  </div>
                </div>

                {/* Option 2 - Product Photoshoot */}
                <div
                  onClick={() => setSizesShow(false)}
                  className={`h-[160px] rounded-md p-4 cursor-pointer transition-colors duration-300 flex justify-between items-center
       ${!sizesShow ? "bg-gray-200 text-black" : "bg-[#2f2f3c] text-white"}
      `}
                >
                  <div className="flex flex-col gap-2">
                    <img src={ProductVedio2} alt="" className="w-12 h-12" />
                    <h3 className="font-semibold text-[17px] leading-4">
                      Start from Product Photoshoot
                    </h3>
                    <span className="text-[12px]">
                      Upload your product photoshoot and let our AI turn it into
                      a stunning video.
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-8">
                {creativeResolutionSizes.map((val, idx) => (
                  <div
                    key={idx}
                    className={`${
                      idx === 0
                        ? "bg-white !text-black"
                        : "text-white bg-[#2f2f3c] "
                    }  h-[180px] hover:bg-gray-200 hover:text-black transition-colors duration-300  flex flex-col justify-center items-center rounded-md cursor-pointer`}
                  >
                    <img src={val.icon} alt="" className="w-14 h-12 " />
                    <h3 className="font-medium text-[14px]">{val.title}</h3>
                    <span className="text-[12px]">{val.size}</span>
                  </div>
                ))}
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

          {perfomanceDriven[activeStep]?.id === "upload" && (
            <div className="p-2">
              <div className="flex justify-start items-center gap-2">
                <img
                  src={ProductPhotoActive}
                  alt=""
                  className="w-16 h-16 p-1"
                />
                <div>
                  <h1 className="text-gray-200 text-2xl font-bold">
                    Upload Product Photo
                  </h1>
                  <h5 className="text-gray-400 text-md">
                    Upload your product image for use in the generated videos.
                  </h5>
                </div>
              </div>

              <div>
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
              </div>
              <div className="flex justify-end items-end mt-26">
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

              <div className="bg-[#2F2F3C] w-full rounded-md p-6">
                <TextArea
                  placeholder="Type your message..."
                  // value={text}
                  // onChange={(e) => setText(e.target.value)}
                  rows={6}
                />
                <input
                  type="text"
                  name=""
                  placeholder="Call to Action Text here"
                  id=""
                  className="w-full px-2 py-3 mt-4 rounded-md outline-none bg-[#222230] text-gray-300"
                />
              </div>

              <div className="bg-[#2F2F3C] rounded-md">
                <div className="flex items-center justify-between w-full  p-4   mt-6">
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
                    <div className="w-full rounded-md bg-[#2F2F3C]">
                      <div className="mt-4 w-full rounded-md p-4 flex items-center gap-4">
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
                        ${
                          isFocused || val
                            ? "top-[-10px] text-sm"
                            : "top-3 text-base"
                        }
                      `}
                          >
                            Your Landing Page or Website
                          </label>
                        </div>

                        <button className="bg-[#e75050] px-2 p-2 rounded-md text-nowrap text-white ">
                          Scan Website
                        </button>
                      </div>

                      <div className="grid grid-cols-2 p-3 gap-4">
                        <SelectButton
                          style="py-4 px-6"
                          buttonTitle="Power Pack: All-in-one Ad Text Package"
                          options={["call", "action", "msg"]}
                        />
                        <SelectButton
                          icon={Pk}
                          style="py-4 px-6 "
                          buttonTitle="Pakistan"
                          options={["call", "action", "msg"]}
                        />

                        <div className="col-span-2">
                          <InputWithLabel
                            label="Product/Service Description"
                            // value={headline}
                            // onChange={setHeadline}
                          />
                        </div>

                        <div className="col-span-2">
                          <TextArea
                            placeholder="Enter Product Name"
                            // value={text}
                            // onChange={(e) => setText(e.target.value)}
                            rows={6}
                          />
                        </div>
                      </div>
                    </div>
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
   
   <AiGeneratedAdVediosResult/>
               



            </div>
          )}
        </div>
      </div>
    </div>
  );
}

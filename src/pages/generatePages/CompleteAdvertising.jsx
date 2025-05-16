import React, { useState } from "react";
import Header from "../../components/reusableComponents/header";
import Header2 from "../../components/reusableComponents/header2";
import {
  AdBgActive,
  AdStrategyActive,
  AiDriven,
  AiDriven2,
  ArrowLeft,
  ArrowUp,
  BulbIcon,
  ButtonIcon,
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
  Pk,
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
  completeAdvertisinigNav,
  creative,
  creativeSizesCAB,
  displaySizes,
  engagingProdut,
  socialMediaCAB,
  socialMediaSizes,
  soicalMedia,
} from "../../constant/data";
import InputWithLabel from "../../components/reusableComponents/inputWithLabel";
import SelectButton from "../../components/reusableComponents/selectButton";
import ImageUploader from "../../components/reusableComponents/uploadImage";
import ButtonWithIcon from "../../components/reusableComponents/ButtonWithIcon";
import TextArea from "../../components/reusableComponents/textarea";
import AdStrategy from "../../components/adStratgy";
import AdBackground from "../../components/adBackground";
import SidebarStepper from "../../components/reusableComponents/SidebarStepper";
import AiGenratedAdVertising from "../../components/AiGenratedAdVertising";

export default function CompleteAdvertising() {
  const [activeStep, setActiveStep] = useState(0);
  const [final, setFinal] = useState(false);
  const [backgroundImages, setBackgroundImages] = useState([]);
  const [productShow, setProductShow] = useState(true);
  const [aiShow, setAiShow] = useState(false);
  const [showGenerate, setShowGenerate] = useState(false);

  const [isFocused, setIsFocused] = useState(false);
  const [advanceShow, setAdvanceShow] = useState(false);
  const [val, setVal] = useState("https://veriorinc.com/");
  const handleDelete = (index) => {
    const updated = [...backgroundImages];
    updated.splice(index, 1);
    setBackgroundImages(updated);
  };

  return (
    <div className="">

      <Header
        title="Generate"
        subTitle="Manage and customize your brand in one place"
        btnTitle="Generate Now"
      />
      <Header2
        title="Complete Advertising Bundle"
        subTitle="Create a full advertising kit with visuals, copy, and audience targeting."
        Icon={GeneratIcon}
        />

      <div className="flex lg:flex-row md:flex-col flex-col !w-[100%] mt-6 gap-2">
        {/* Sidebar */}
        <div className="md:w-[30%] w-full">
        <SidebarStepper
      steps={completeAdvertisinigNav}
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      />
      </div>

        {/* Main Content */}
        <div className="bg-[#1c1c2e] rounded-md p-2  w-[100%]">
          {completeAdvertisinigNav[activeStep]?.id === "size" && (
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-start">
                  {socialMediaCAB.map((val, idx) => (
                    <div
                      key={idx}
                      className={`${
                        idx === 0 ? "bg-[#F35252]" : "bg-[#2f2f3c] "
                      } h-[160px] hover:[#F35252] text-white transition-colors duration-300 flex flex-col gap-2   justify-start items-start rounded-md p-4 cursor-pointer`}
                    >
                      <img src={val.icon} alt="" className="w-8 h-8 " />
                      <h3 className="font-medium text-[14px]">{val.title}</h3>
                      <span className="text-[12px]">{val.dis}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between flex-wrap items-center gap-2 mb-4 mt-8">
                  <div className="flex items-center gap-2">
                    <h2 className="text-gray-200 font-medium">Creative Size</h2>
                    <span className="text-gray-400 text-sm">
                      Choose your preferred creative dimensions, or use the
                      recommended size for your selected platform.{" "}
                    </span>
                  </div>
                </div>

                {/* Grid of Sizes */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                  {creativeSizesCAB.map((val, idx) => (
                    <div
                      key={idx}
                      className={`${
                        idx === 2 ? "bg-[#F35252]" : "bg-[#2f2f3c] "
                      } h-[160px] hover:bg-[#F35252] text-white transition-colors gap-1 duration-300 flex flex-col justify-center items-center rounded-md p-4 cursor-pointer`}
                    >
                      <img src={val.icon} alt="" className="w-10 h-10 " />
                      <h3 className="font-medium text-[14px]">{val.title}</h3>
                      <span className="text-[12px]">{val.size}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end items-end mt-20">
                {completeAdvertisinigNav[activeStep]?.id !== "provide" && (
                  <button
                    className="bg-[#e75050] p-3 px-4 rounded-md text-white"
                    onClick={() => {
                      const textIndex = completeAdvertisinigNav.findIndex(
                        (item) => item.id === "provide"
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
          {completeAdvertisinigNav[activeStep]?.id === "provide" && (
            <div className="p-2">
              <div className="flex justify-start items-center gap-2">
                <img
                  src={CreativeActiveIcon}
                  alt=""
                  className="w-16 h-16 p-1"
                />
                <div>
                  <h1 className="text-gray-200 text-2xl font-bold">
                    Provide Project Info{" "}
                  </h1>
                  <h5 className="text-gray-400 text-md">
                    Describe your product, objective, and preferred audience
                    language.
                  </h5>
                </div>
              </div>

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

              <div className="flex justify-end items-end mt-20">
                {completeAdvertisinigNav[activeStep]?.id !== "adStrategy" && (
                  <button
                    className="bg-[#e75050] p-3 px-4 rounded-md text-white"
                    onClick={() => {
                      const textIndex = completeAdvertisinigNav.findIndex(
                        (item) => item.id === "adStrategy"
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

          {completeAdvertisinigNav[activeStep]?.id === "adStrategy" && (
            <div>
              {/* Background Upload Section */}
              <div className="flex justify-start items-center gap-2">
                <img src={AdStrategyActive} alt="" className="w-16 h-16 p-1" />
                <div>
                  <h1 className="text-gray-200 text-2xl font-bold">
                    Choose Ad Strategy{" "}
                  </h1>
                  <h5 className="text-gray-400 text-md">
                    We’ve come up with a few smart strategies just for you—pick
                    your favorite to keep going!
                  </h5>
                </div>
              </div>

              <div>
                <AdStrategy />
              </div>

              <div>
                <button className="bg-[#2F2F3C] text-white flex w-full justify-center items-center gap-2 mt-4 p-3 rounded-md font-medium">
                  <img src={ButtonIcon} alt="" />
                  Generate More
                </button>
              </div>

              <div className="flex justify-end items-end mt-16">
                {completeAdvertisinigNav[activeStep]?.id !== "background" && (
                  <button
                    className="bg-[#e75050] p-3 px-4 rounded-md text-white"
                    onClick={() => {
                      const textIndex = completeAdvertisinigNav.findIndex(
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
          )}

          {completeAdvertisinigNav[activeStep]?.id === "background" && (
            <div>
              {/* Background Upload Section */}
              <div className="flex justify-start items-center gap-2">
                <img src={AdBgActive} alt="" className="w-16 h-16 p-1" />
                <div>
                  <h1 className="text-gray-200 text-2xl font-bold">
                    Add Background Image{" "}
                  </h1>
                  <h5 className="text-gray-400 text-md">
                    Add your own image or browse our stock library—featuring
                    both free and premium options.{" "}
                  </h5>
                </div>
              </div>

              <div>
                <AdBackground />
              </div>

                 <div className="flex justify-end items-end mt-16">
                {completeAdvertisinigNav[activeStep]?.id !== "Image" && (
                  <button
                    className="bg-[#e75050] p-3 px-4 rounded-md text-white"
                    onClick={() => {
                      const textIndex = completeAdvertisinigNav.findIndex(
                        (item) => item.id === "Image"
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

          {completeAdvertisinigNav[activeStep]?.id === "Image" && (
            <div>
              {/* Background Upload Section */}
              <div className="p-2">
                <div className="flex justify-start items-center gap-2">
                  <img src={TextActiveIcon} alt="" className="w-16 h-16 p-1" />
                  <div>
                    <h1 className="text-gray-200 text-2xl font-bold">
                      Text on Image{" "}
                    </h1>
                    <h5 className="text-gray-400 text-md">
                      Get smart text suggestions powered by AI, or craft your
                      own message.{" "}
                    </h5>
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

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full p-4">
                        <InputWithLabel label="Your Main Headline Here" />

                        <InputWithLabel label="Your Main Headline Here" />

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
                    <InputWithLabel label="Your Main Headline Here" />

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
                </div>
              </div>

           <div className="flex justify-end items-end mt-14">
                                            {activeStep < completeAdvertisinigNav.length && (
                                              <button
                                                className="bg-[#e75050] p-3 px-4 rounded-md text-white"
                                                onClick={() => {
                                                  if (activeStep < completeAdvertisinigNav.length - 1) {
                                                    setActiveStep((prev) => prev + 1);
                                                  } else {
                                                    // Move to final screen
                                                    setActiveStep(completeAdvertisinigNav.length);
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

          {activeStep === completeAdvertisinigNav.length && final && (
            <div className="mt-6">
              {/* Final true section */}
            <AiGenratedAdVertising/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

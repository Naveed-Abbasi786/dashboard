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
  Provide,
  Pen,
  Download,
  WorldIcon,
  Us,
  Pk,
  ArrowLeft,
  ArrowUp,
  SettingIcon,
  Copy,
} from "../../assets";
import { aIGeneratedAdTexts, aIGeneratedAssets } from "../../constant/data";
import ButtonWithIcon from "../../components/reusableComponents/ButtonWithIcon";
import InputWithBg from "../../components/reusableComponents/inputWithBg";
import SelectButton from "../../components/reusableComponents/selectButton";
import InputWithLabel from "../../components/reusableComponents/inputWithLabel";
import TextArea from "../../components/reusableComponents/textarea";
export default function EngagingProduct() {
  const [final, setFinal] = useState(false);
 const [isFocused, setIsFocused] = useState(false);
 const [advanceShow,setAdvanceShow]=useState(false)
  const [val, setVal] = useState("https://veriorinc.com/");
  return (
    <div>
      <Header
        title="Generate"
        subTitle="Manage and customize your brand in one place"
        btnTitle="Generate Now"
      />
      <Header2
        title="Persuasive Ad Copywriting"
        subTitle="Create ad copy designed to convert using proven frameworks.."
        Icon={VisualLibrary}
      />

      <div className="flex lg:flex-row md:flex-col flex-col gap-3  mt-6">
        {/* Main Content */}
        <div className="bg-[#222230] rounded-md p-2 w-full">
          {!final ? (
            <>
              <div className="flex justify-between items-center p-2">
                <div className="flex justify-center items-center gap-2">
                  <img src={Provide} alt="" className="w-16 h-16 p-1" />
                  <div>
                    <h1 className="text-gray-200 text-2xl font-bold">
                      Provide Project Details
                    </h1>
                    <h5 className="text-gray-400 text-md">
                      Enter your info to generate high-performing ads.
                    </h5>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                 <InputWithBg
                                label="Enter Your Name"
                                placeholder="Enter Your Name"
                                InBg="bg-[#222230]"
                              />
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

<div
    className='col-span-2'
>
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


{advanceShow&&(
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

<div
    className='col-span-2'
>
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


              <div className="flex justify-end items-end mt-10">
                  <button
                    className="bg-[#e75050] p-3 px-4 rounded-md text-white"
                    onClick={() => {
                      setFinal(true);
                    }}
                  >
                    Next
                  </button>
              </div>
            </>
          ) : (
            <div className="mt-6 bg-[#222230]">
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
                   AI-Generated Ad Texts{" "}
                    </h1>
                    <h5 className="text-gray-400 text-md">
                     Result-driven ad copy crafted to boost your conversions.{" "}
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

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                {aIGeneratedAdTexts.map((val, idx) => (
                  <div
                    key={idx}
                    className="bg-[#2f2f3c] mt-5 rounded-lg overflow-hidden shadow-md p-4"
                  >
                    <div className="h-[280px] flex-col flex justify-start items-start gap-4">
                     <h2 className="text-gray-400 text-[14px] font-semibold ">{val.title}</h2>
                     <p className="text-white text-[12px]">{val.p1}</p>
                     <p className="text-white text-[12px]">{val.p2}</p>
                     <p className="text-white text-[12px]">{val.p3}</p>
                     <p className="text-white text-[12px]">{val.p4}</p>
                     <p className="text-white text-[12px]">{val.p5}</p>

                    </div>

                    <div className="flex justify-between items-center gap-2 border-t border-gray-900 p-1">
                    <div className="flex justify-center items-center gap-6 mt-3">
                        <img src={Pen} alt="Edit" className="w-4" />
                        <img src={Download} alt="Edit" className="w-4" />
                        <img src={Copy} alt="Edit" className="w-4" />
                    </div>
                    <div className="text-white text-[12px]">692 charts</div>
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

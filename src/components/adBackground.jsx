import React, { useState } from "react";
import Button from "./reusableComponents/Button";
import { aiRecommendation } from "../constant/data";
import TextArea from "./reusableComponents/textarea";
import ImageUploader from "./reusableComponents/uploadImage";
import { Search, UploadIcon } from "../assets";
import ButtonWithIcon from "./reusableComponents/ButtonWithIcon";

export default function AdBackground() {
  const Tabs = [
    "AI Recommendations",
    "Free Stock Images",
    "Paid Stock Images",
  ];

  const [backgroundImages, setBackgroundImages] = useState([]);
  const [upload, setIsUpload] = useState(false);
  const [activeTab, setActiveTab] = useState("AI Recommendations");

  const [text, setText] = useState(
    "Example: A cozy coffee shop with people chatting and laughing with cups of hot coffee on the tables. (You can also input keywords and use the brain icon on the right to refine your prompt. Example: coffee shop, people, coffee on tables, happy atmosphere"
  );

  const handleDelete = (index) => {
    const updated = [...backgroundImages];
    updated.splice(index, 1);
    setBackgroundImages(updated);
  };

  return (
    <div className="bg-[#2F2F3C] p-4 rounded-md mt-6">
      {/* Tabs and Buttons */}
      <div className="flex justify-between items-center gap-3">
        {/* Left Side Tabs */}
        <div className="flex gap-3">
          {Tabs.map((val, idx) => (
            <ButtonWithIcon
              key={idx}
              btnTitle={val}
              active={activeTab === val}
              btnFn={() => {
                setActiveTab(val);
                setIsUpload(false); // Reset upload when tab changes
              }}
            />
          ))}
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-2">
          {activeTab === "AI Recommendations" ? (
            <ButtonWithIcon
              btnTitle="Upload"
                            active={upload}
              buttonIcon={UploadIcon}
              btnFn={() => {
                setActiveTab("AI Recommendations");
                setIsUpload(true);
              }}
            />
          ) : (
            <ButtonWithIcon buttonIcon={Search} />
          )}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-5">
        {activeTab === "AI Recommendations" && (
            !upload&&(
                <>
                   <div className="grid grid-cols-4 gap-6">
            {aiRecommendation.map((val, idx) => (
              <div
                className="bg-[#222230] rounded-lg h-[200px] relative"
                key={idx}
              >
                <img
                  src={val.image}
                  alt={val.title}
                  className="rounded w-full h-full object-cover"
                />
              </div>
            ))}
          </div></>
            )
       
        )}

        {activeTab === "Free Stock Images" && (
          <div className="grid grid-cols-4 gap-6">
            {aiRecommendation.map((val, idx) => (
              <div
                className="bg-[#222230] rounded-lg h-[200px] relative"
                key={idx}
              >
                <img
                  src={val.image}
                  alt={val.title}
                  className="rounded w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {activeTab === "Paid Stock Images" && (
          <div className="grid grid-cols-4 gap-6">
            {aiRecommendation.map((val, idx) => (
              <div
                className="bg-[#222230] rounded-lg h-[200px] relative"
                key={idx}
              >
                <img
                  src={val.image}
                  alt={val.title}
                  className="rounded w-full h-full object-cover"
                />
                <button className="absolute bottom-4 right-0 bg-[#F35252] flex justify-between items-center text-[18px] px-4 text-white gap-4">
                  <span className="block font-medium">$0</span>
                  <span className="text-white opacity-40 block">$999</span>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Upload Section */}
        {upload && (
          <div>
            <div className="mt-6">
              <ImageUploader
                isbtn={true}
                style="bg-[#222230]"
                images={backgroundImages}
                setImages={setBackgroundImages}
              />
              {backgroundImages.length > 0 && (
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

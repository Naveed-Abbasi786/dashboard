import React, { useState } from "react";
import Button from "./reusableComponents/Button";
import { aiRecommendation } from "../constant/data";
import TextArea from "./reusableComponents/textarea";
import ImageUploader from "./reusableComponents/uploadImage";
export default function ImageStyle() {
  const Tabs = ["AI Recommendations", "Custom Style", "Style Match"];
  const [backgroundImages, setBackgroundImages] = useState([]);

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
      <div className="flex justify-start items-center gap-3">
        {Tabs.map((val, idx) => (
          <Button
            key={idx}
            btnTitle={val}
            active={activeTab === val}
            btnFn={() => setActiveTab(val)}
          />
        ))}
      </div>

      <div className="mt-5">
        {activeTab === "AI Recommendations" && (
          <div className="grid grid-cols-4 gap-6">
            {aiRecommendation.map((val, idx) => (
              <div className="bg-[#222230] rounded-lg p-2 relative" key={idx}>
                <img
                  src={val.image}
                  alt={val.title}
                  className="rounded w-full h-40 object-cover"
                />
                <h3 className="text-white text-md mt-2 font-semibold text-nowrap">
                  {val.title}
                </h3>
                <p className="text-gray-300 text-[14px] ">{val.dis}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Custom Style" && (
          <div>
            <TextArea
              placeholder="Type your message..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={6}
            />
          </div>
        )}
        {activeTab === "Style Match" && (
          <div>
            <div className="mt-6">
              <ImageUploader
                isbtn={true}
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
        )}
      </div>
    </div>
  );
}

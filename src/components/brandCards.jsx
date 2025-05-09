import React, { useState, useRef } from "react";
import { brandData } from "../constant/data";
import { AddName } from "../assets";

export default function BrandCards() {
  const [formData, setFormData] = useState({});
  const [uploadedLogo, setUploadedLogo] = useState({});
  const fileInputs = useRef({});

  const handleChange = (idx, key, value) => {
    setFormData((prev) => ({
      ...prev,
      [idx]: { ...prev[idx], [key]: value },
    }));
  };

  const handleFile = (idx, file) => {
    const fileURL = URL.createObjectURL(file);
    setUploadedLogo((prev) => ({ ...prev, [idx]: fileURL }));
    handleChange(idx, "show", true);
  };

  const triggerFileInput = (idx) => {
    if (fileInputs.current[idx]) {
      fileInputs.current[idx].click();
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-gray-300 text-sm mb-4 text-center">
        Let’s Add Your Brand – From Your Website or by Hand
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {brandData.map((val, idx) => {
          const showInput = formData[idx]?.show;

          return (
            <div
              key={idx}
              className={`bg-[#222230] ${idx>3?'w-[400px]':"w-[280px]"} rounded-xl h-[230px] p-4 flex flex-col justify- gap-4 shadow-md`}
            >
              {/* Image Preview */}
              {(idx === 1 || idx === 2) && uploadedLogo[idx] && (
                <img
                  src={uploadedLogo[idx]}
                  alt="preview"
                  className="w-full h-36 object-cover rounded-md"
                />
              )}

              {/* Logo Icon for index 0 or if no logo yet */}
              {(!uploadedLogo[idx] || idx === 0) && (
                <div className="flex justify-center">
                  <div className="bg-[#2f2f3c] rounded-full p-2 mt-10">
                    <img
                      src={uploadedLogo[idx] || val.logo}
                      alt=""
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
              )}

              {!idx === 4 && (
                <div className="flex justify-center">
                  <div className="bg-[#2f2f3c] rounded-full p-2 mt-10">
                    <img
                      src={uploadedLogo[idx] || val.logo}
                      alt=""
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>
              )}

              {/* Title */}
              {(!uploadedLogo[idx] || idx === 0) && (
                <h1 className="text-center text-sm text-white font-medium">
                  {formData[idx]?.title || val.title}
                </h1>
              )}

              {/* Inputs */}
              {showInput && idx === 0 && (
                <div className="bg-[#2f2f3c] flex items-center gap-2 px-2 rounded">
                  <input
                    type="text"
                    placeholder="Enter Brand Name"
                    onChange={(e) => handleChange(idx, "title", e.target.value)}
                    className="!w-full p-2 bg-transparent text-white outline-none"
                  />
                  <img src={AddName} className="w-5 h-5" />
                </div>
              )}

              {(idx === 1 || idx === 2) && (
                <input
                  type="file"
                  accept="image/*"
                  ref={(el) => (fileInputs.current[idx] = el)}
                  onChange={(e) => handleFile(idx, e.target.files[0])}
                  style={{ display: "none" }}
                />
              )}

              <div className="flex flex-wrap gap-2 mt-2">
                {formData[idx]?.tags?.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="bg-[#3a3a4a] text-white text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {showInput && idx === 3 && (
                <div className="bg-[#2f2f3c] px-2 py-2 rounded">
                  <input
                    type="text"
                    placeholder="Enter Color & press Enter"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && e.target.value.trim()) {
                        e.preventDefault();
                        const newTag = e.target.value.trim();
                        const existingTags = formData[idx]?.tags || [];
                        handleChange(idx, "tags", [...existingTags, newTag]);
                        e.target.value = "";
                      }
                    }}
                    className="w-full p-2 bg-transparent text-white outline-none"
                  />
                </div>
              )}

              {(idx === 1 || idx === 2 || !formData[idx]?.show) && (
                <button
                  onClick={() => {
                    handleChange(idx, "show", true);
                    if (idx === 1 || idx === 2) {
                      triggerFileInput(idx);
                    }
                  }}
                  className="w-full bg-[#2f2f3c] text-[#F35252] py-2 rounded-md hover:bg-[#3a3a4a] transition-all duration-200"
                >
                  + Add
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

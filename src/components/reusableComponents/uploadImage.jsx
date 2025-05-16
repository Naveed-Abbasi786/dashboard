// components/ImageUploader.jsx
import React from "react";
import { ImportPicIcon, LibraryIcon } from "../../assets";
import ButtonWithIcon from "./ButtonWithIcon";

export default function ImageUploader({
  images,
  setImages,
  style = "",
  isbtn,
}) {
  const handleImageUpload = (e) => {
    let files = Array.from(e.target.files);
    if (images.length + files.length > 5) {
      alert("You can only upload up to 5 images.");
      return;
    }

    files = files.slice(0, 5 - images.length);

    const imagePreviews = files.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));

    setImages([...images, ...imagePreviews]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const inputEvent = { target: { files } };
    handleImageUpload(inputEvent);
  };

  return (
    <div className="w-full">
      {/* Drop Zone */}
      <div
        className={`border-2 border-dashed h-[300px] border-gray-600 p-8 rounded-md ${
          style ? style : "bg-[#2f2f3c]"
        }  text-gray-300 text-center cursor-pointer hover:border-gray-400 transition-all duration-300`}
        onClick={() => document.getElementById("imageInput").click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleImageUpload}
        />
        <div className="flex flex-col justify-center items-center rounded-md h-[270px] gap-3 cursor-pointer">
          <img src={ImportPicIcon} alt="upload" className="w-10" />
          <h3 className="text-gray-100 text-xl">Upload a background image</h3>
          <span className="text-gray-400">
            or drag & drop a background image here.
          </span>

            <div className="!flex justify-center items-center gap-3 mt-2">
              <ButtonWithIcon
               color='bg-[#2F2F3C] !flex-row-reverse'
                btnTitle="Search Images"
                buttonIcon={ImportPicIcon}
                btnFn={() => console.log("Generate button clicked")}
              />
              <ButtonWithIcon
               color='bg-[#2F2F3C] !flex-row-reverse'
                btnTitle="your Library"
                buttonIcon={LibraryIcon}
                btnFn={() => console.log("Generate button clicked")}
              />
            </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useRef } from "react";
import { brandData } from "../constant/data";
import { AddName } from "../assets/";
import { SketchPicker } from "react-color";

const BrandCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [images, setImages] = useState({});
  const [completedCards, setCompletedCards] = useState({});
  const [colors, setColors] = useState([]);
  const [color, setColor] = useState("#ffffff");
  const [showColorPicker, setShowColorPicker] = useState(false);

  const [dropdownValues, setDropdownValues] = useState({});
  const [isOpen, setIsOpen] = useState({});
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelect = (option, cardId) => {
    setDropdownValues((prev) => {
      const prevOptions = prev[cardId] || [];
      if (!prevOptions.includes(option)) {
        // Select the option
        return { ...prev, [cardId]: [...prevOptions, option] };
      } else {
        // Deselect the option if it's already selected
        return {
          ...prev,
          [cardId]: prevOptions.filter((item) => item !== option),
        };
      }
    });
  };

  const toggleDropdown = (cardId) => {
    setIsOpen((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  const handleColorSave = () => {
    console.log("Current colors:", colors);
    setColors((prev) => {
      console.log("Prev value:", prev);
      return Array.isArray(prev) ? [...prev, color] : [color];
    });
    setShowColorPicker(false);
  };

  const [tagsData, setTagsData] = useState({
    targetAudience: [],
    cta: [],
  });

  const fileInputRefs = useRef({});

  const handleSave = (id) => {
    setCompletedCards((prev) => ({ ...prev, [id]: true }));
    setSelectedCard(null);
  };

  const handleChange = (id, field, value) => {
    setFormValues((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }));
  };

  const handleImageChange = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImages((prev) => ({ ...prev, [id]: imageURL }));
      setCompletedCards((prev) => ({ ...prev, [id]: true }));
    }
  };

  const handleOpenFileDialog = (id) => {
    if (fileInputRefs.current[id]) {
      fileInputRefs.current[id].click();
    }
    setSelectedCard(id);
  };

  const handleColorChange = (colorResult) => {
    setColor(colorResult.hex);
  };

  const handleTagChange = (e, cardId) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      const newTag = e.target.value.trim();
      // Add the new tag to the array for the corresponding card
      setTagsData((prevTagsData) => ({
        ...prevTagsData,
        [cardId]: [...(prevTagsData[cardId] || []), newTag],
      }));
      e.target.value = ""; // Clear the input field
    }
  };

  return (
    <div className="flex flex-wrap justify-start gap-3 mt-4">
      {brandData.map((card, idx) => {
        const isEditing = selectedCard === card.id;
        const isCompleted = completedCards[card.id];

        return (
          <div
            key={card.id}
            className={`${
              idx > 3 ? "w-[410px]" : "w-[304px]"
            } bg-[#222230] rounded-xl h-[200px] flex flex-col shadow-md`}
          >
            {isEditing || isCompleted ? (
              <div className="flex flex-col gap-3 p-4">
                {card.id === "brandName" ? (
                  <>
                    <div className="bg-[#2f2f3c] w-12 rounded-full p-2 mt-2 flex mx-auto   justify-center items-center">
                      <img
                        src={card.logo}
                        alt=""
                        className="w-7 h-7 object-contain"
                      />
                    </div>
                    <h1 className="text-center text-[17px] w-full  mt-4 text-gray-200 font-medium">
                      {formValues[card.id]?.title || "Your Brand Name"}
                    </h1>
                    {!isCompleted && (
                      <div className="bg-[#2f2f3c] flex items-center gap-2 px-2 rounded">
                        <input
                          type="text"
                          placeholder="Enter Brand Name"
                          onChange={(e) =>
                            handleChange(card.id, "title", e.target.value)
                          }
                          className="w-full p-2 bg-transparent text-white outline-none"
                        />
                        <img
                          src={AddName}
                          onClick={() => handleSave(card.id)}
                          className="w-5 h-5 cursor-pointer"
                        />
                      </div>
                    )}
                    {isCompleted && (
                      <button className="w-full bg-[#2f2f3c] text-gray-300 py-2  mt-3 rounded-md hover:bg-[#3a3a4a] transition-all duration-200">
                        Name Add Succesfully
                      </button>
                    )}
                  </>
                ) : card.id === "primaryLogo" || card.id === "secondaryLogo" ? (
                  <>
                    {images[card.id] ? (
                      <>
                        <img
                          src={images[card.id]}
                          alt="preview"
                          className="w-full h-32 object-cover rounded-md"
                        />
                        <button
                          onClick={() => handleOpenFileDialog(card.id)}
                          className="w-full bg-[#2f2f3c] text-[#F35252] py-2 rounded-md hover:bg-[#3a3a4a] transition-all duration-200"
                        >
                          + Add
                        </button>
                      </>
                    ) : (
                      <div
                        onClick={() => handleOpenFileDialog(card.id)}
                        className="cursor-pointer flex flex-col h-full gap-4 items-center justify-around"
                      >
                        <div className="bg-[#2f2f3c] rounded-full p-3 mt-2">
                          <img
                            src={card.logo}
                            alt=""
                            className="w-7 h-7 object-contain"
                          />
                        </div>
                        <h1 className="text-center text-[17px] w-[80%] text-gray-200 font-medium">
                          {card.title}
                        </h1>
                        <button className="w-full bg-[#2f2f3c] text-[#F35252] py-2 rounded-md hover:bg-[#3a3a4a] transition-all duration-200">
                          + Add
                        </button>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      ref={(el) => (fileInputRefs.current[card.id] = el)}
                      style={{ display: "none" }}
                      onChange={(e) => handleImageChange(e, card.id)}
                    />
                  </>
                ) : card.id === "brandColor" ? (
                  <div className="relative">
                    <h1 className="text-center text-[17px] w-[80%] text-gray-200 font-medium">
                      {card.title}
                    </h1>
                    <div className="flex flex-wrap gap-2 mt-3 h-[70px] overflow-auto w-full">
                      {Array.isArray(colors) &&
                        colors.map((c, index) => (
                          <div key={index} className="flex items-start gap-2 ">
                            <div
                              className="w-6 h-6 rounded"
                              style={{ backgroundColor: c }}
                            ></div>
                            <span className="text-white text-sm">{c}</span>
                          </div>
                        ))}
                    </div>
                    {showColorPicker && (
                      <div className="z-50 ">
                        <SketchPicker
                          color={color}
                          onChangeComplete={handleColorChange}
                        />
                        <button
                          className="mt-2 bg-[#F35252] text-white px-3 py-1 rounded hover:bg-[#ff6a6a]"
                          onClick={handleColorSave}
                        >
                          Save Color
                        </button>
                      </div>
                    )}
                    {!showColorPicker && (
                      <button
                        onClick={() => setShowColorPicker(true)}
                        className="w-full bg-[#2f2f3c]  text-[#F35252] py-2 rounded-md hover:bg-[#3a3a4a] transition-all duration-200"
                      >
                        + Add Color
                      </button>
                    )}
                  </div>
                ) : card.id === "brandVoice" ? (
                  <>
                    <div className="bg-[#2f2f3c] rounded-full p-3 mt-2 flex justify-center items-center w-12 h-12 mx-auto">
                      <img
                        src={card.logo}
                        alt=""
                        className="w-7 h-7 object-contain"
                      />
                    </div>

                    {/* Selected Values Displayed */}
                    <div className="flex flex-wrap gap-2 mt-3 justify-center">
                      {(dropdownValues[card.id] || []).map((item, index) => (
                        <span
                          key={index}
                          className="bg-[#2f2f3c] text-white px-3 py-1 rounded text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="relative w-full mt-3">
                      <button
                        onClick={() => toggleDropdown(card.id)}
                        className="flex justify-between items-center w-full rounded-md border px-4 py-2 text-sm font-medium text-gray-300 shadow-sm"
                      >
                        Select a Brand Tone
                        <svg
                          className="ml-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      {isOpen[card.id] && (
                        <div className="absolute z-10 mt-1 w-full rounded-md shadow-lg bg-[#222230] ring-1 ring-black ring-opacity-5">
                          <div className="py-1">
                            {options.map((option, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleSelect(option, card.id)}
                                className={`w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 ${
                                  (dropdownValues[card.id] || []).includes(
                                    option
                                  )
                                    ? "bg-[#1a1a1a]"
                                    : ""
                                }`}
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                ) : card.id === "targetAudience" || card.id === "cta" ? (
                  <>
                    <div className="bg-[#2f2f3c] w-12 mx-auto rounded-full p-3 mt-2">
                      <img
                        src={card.logo}
                        alt=""
                        className="w-7 h-7 object-contain"
                      />
                    </div>

                    <div className="flex flex-wrap  gap-2 mt-2">
                      {(tagsData[card.id] || []).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-[#2f2f3c]  text-white px-4 p-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Input field for adding tags */}
                    <input
                      type="text"
                      placeholder="Write tag and press enter"
                      onKeyDown={(e) => handleTagChange(e, card.id)}
                      className="bg-[#2f2f3c] p-2 text-white rounded mt-2 w-full"
                    />
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Enter details..."
                      className="bg-[#2f2f3c] p-2 rounded text-white"
                    />
                  </>
                )}
              </div>
            ) : (
              <div
                onClick={() => {
                  if (!isCompleted) {
                    if (
                      card.id === "primaryLogo" ||
                      card.id === "secondaryLogo"
                    ) {
                      handleOpenFileDialog(card.id);
                    } else {
                      setSelectedCard(card.id);
                    }
                  }
                }}
                className="cursor-pointer flex flex-col h-full gap-2 items-center justify-around p-4"
              >
                <div className="bg-[#2f2f3c] rounded-full p-3">
                  <img
                    src={card.logo}
                    alt=""
                    className="w-7 h-7 object-contain"
                  />
                </div>
                <h1 className="text-center text-[17px] w-[80%] text-gray-200 font-medium">
                  {card.title}
                </h1>
                <button className="w-full bg-[#2f2f3c] text-[#F35252] mt-2 py-2 rounded-md hover:bg-[#3a3a4a] transition-all duration-200">
                  + Add
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BrandCards;

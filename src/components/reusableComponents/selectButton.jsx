import React, { useState } from 'react';
import { Avatar } from '../../assets';

export default function SelectButton({ buttonTitle = "Select a Brand Tone", options = [] ,style = "",icon }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    if (selected === option) {
      setSelected(null); // unselect on double click
    } else {
      setSelected(option);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative w-full  text-white">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
className={`flex  !justify-between items-center bg-[#222230] w-full rounded-md border border-gray-700 ${style ? style : "px-4 py-2"} text-sm font-medium text-gray-300 shadow-sm "`}
      >
        {/* <div className='flex justify-between items-center'> */}

{/*        
        {icon&&(
          <img src={icon} alt="" className='w-6' />
        )} */}
        {selected || buttonTitle}
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
         {/* </div> */}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md shadow-lg bg-[#222230] ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(option)}
                className={`w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 ${
                  selected === option ? 'bg-[#1a1a1a]' : ''
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

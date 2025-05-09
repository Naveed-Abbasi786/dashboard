import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';

export default function DropdownButton({ label, options = [], onSelect }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="bg-[#2f2f3c] flex justify-center items-center gap-1 text-white rounded-md p-2 px-4"
      >
        <Icon icon="line-md:calendar" />
        {label}
        <Icon icon="fe:arrow-down" />
      </button>

      {open && (
        <div className="absolute mt-2 w-32 bg-[#2f2f3c] text-white rounded-md shadow-lg z-10">
          {options.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                onSelect(item);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-[#3f3f4c] cursor-pointer text-sm"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import React from "react";

export default function InputWithBg({
  label,
  placeholder,
  value,
  onchange,
  CnBg,
  InBg,
}) {
  return (
    <div>
      <div
        className={`${
          CnBg ? CnBg : "bg-[#2f2f3c]"
        }  p-4 flex-col flex rounded-md justify-center items-start gap-3 mt-6`}
      >
        <h1 className="text-gray-200 font-medium">{label}</h1>
        <input
          type="text"
          placeholder={placeholder}
          className={`${
            InBg ? InBg : "bg-[#222230]"
          } w-full px-2 py-3 rounded-md outline-none text-gray-300`}
        />
      </div>
    </div>
  );
}

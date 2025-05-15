import React from 'react';

export default function TextArea({
  placeholder = 'Enter Text',
  value,
  onChange,
  style = '',
  rows = 4,
  cols = 50,
}) {
  return (
    <div>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`!w-full bg-[#222230] outline-none resize-none text-gray-200 p-3 rounded-md text-[14px] ${style}`}
        rows={rows}
        cols={cols}
      />
    </div>
  );
}

import React, { useState } from 'react';

export default function InputWithLabel({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  style = '',
  rows = 4,
  cols = 50
}) {
  const [isFocused, setIsFocused] = useState(false);

  const sharedClasses = `peer bg-[#222230] rounded-md text-gray-400 outline-none w-full ${style}`;

  return (
    <div className="relative w-full">
      {type === 'textarea' ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={rows}
          cols={cols}
          className={`${sharedClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`${sharedClasses} px-2 py-4`}
        />
      )}

      <label
        className={`absolute left-2 px-1 text-gray-300 transition-all duration-200 pointer-events-none
        ${isFocused || value ? 'top-[-10px] text-sm ' : 'top-3 text-base'}`}
      >
        {label}
      </label>
    </div>
  );
}

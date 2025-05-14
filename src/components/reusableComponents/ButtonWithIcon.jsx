import React from 'react';
import { ButtonIcon as DefaultIcon } from '../../assets/';

export default function ButtonWithIcon({ buttonIcon, btnTitle, btnFn, active, color }) {
  return (
    <button
      onClick={btnFn || (() => alert("Button Clicked"))}
      className={` 
        ${color ? color : active ? 'bg-[#e75050]' : 'bg-[#2f2f3c]'}  
        px-4 py-3 rounded-md flex gap-2 text-sm justify-center items-center text-white
      `}
    >
      <img src={buttonIcon || DefaultIcon} alt="icon" className="w-4" />
      {btnTitle || 'Click Me'}
    </button>
  );
}

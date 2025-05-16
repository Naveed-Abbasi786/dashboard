import React from 'react';
import { ButtonIcon as DefaultIcon } from '../../assets/';

export default function Button({ btnTitle, btnFn, active, style }) {
  return (
    <button
      onClick={btnFn || (() => console.log("Button Clicked"))}
      className={` 
        ${style ? style : active ? 'bg-[#e75050]' : 'bg-[#222230]'}  
        px-4 py-3 rounded-md flex gap-2 text-sm justify-center items-center text-white
      `}
    >
      {btnTitle&&(
        <>
        {btnTitle}
        </>
      )}
    </button>
  );
}

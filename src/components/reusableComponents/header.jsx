import React from 'react'
import { Avatar, ButtonIcon, Search } from '../../assets'

export default function Header({title,subTitle,btnTitle}) {
  return (
    <div>
       <div className="flex justify-between items-center ">
              <div>
                <h1 className="text-white text-2xl font-bold">{title}</h1>
                <h5 className="text-gray-300 text-sm">
                 {subTitle}
                </h5>
              </div>
      
              <div className="flex justify-center items-center gap-6">
                <button className="bg-[#222230] p-[9px] rounded-md">
                  <img src={Search} alt="" className="w-6" />
                </button>
      
                <button className="bg-[#e75050] p-2 rounded-md flex gap-2 text-sm justify-center items-center text-white">
                  <img src={ButtonIcon} alt="" className="w-4" /> {btnTitle}
                </button>
      
                <button className="rounded-full w-9 ">
                  <img src={Avatar} alt="" className="object-cover" />
                </button>
              </div>
            </div>
    </div>
  )
}

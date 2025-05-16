import React, { useState } from 'react'
import ButtonWithIcon from './reusableComponents/ButtonWithIcon';
import { aIGeneratedAdTexts, aIGeneratedAssets } from '../constant/data';
import { Convert, Copy, Download, DustbinCAB, GalleryActiveIcon, Pen } from '../assets';

export default function AiGenratedAdVertising() {
      const Tabs = ["AI Recommendations", "Text", "Style Match"];
    
      const [activeTab, setActiveTab] = useState("AI Recommendations");
  return (
    <div>
        <div className="flex justify-between items-center gap-2">
                <div className="flex justify-start items-center">
                  <img
                    src={GalleryActiveIcon}
                    alt=""
                    className="w-16 h-16 p-1"
                  />
                  <div>
                    <h1 className="text-gray-200 text-2xl font-bold">
                      AI-Generated Assets{" "}
                    </h1>
                    <h5 className="text-gray-400 text-md">
                      AI-generated assets tailored to your selected strategy.{" "}
                    </h5>
                  </div>
                </div>




                <div className="flex justify-center items-center gap-2">
                  <ButtonWithIcon
                    btnTitle="convert"
                    buttonIcon={Convert}
                    btnFn={() => console.log("Generate button clicked")}
                  />
                  <ButtonWithIcon
                    btnTitle="Edit"
                    buttonIcon={Pen}
                    btnFn={() => console.log("Generate button clicked")}
                  />

                  <ButtonWithIcon
                    btnTitle="Downlaod"
                    buttonIcon={Download}
                    active={true}
                    btnFn={() => console.log("Generate button clicked")}
                  />
                </div>
              </div>

  <div className="flex justify-start items-center gap-3 mt-6">
        {Tabs.map((val, idx) => (
          <ButtonWithIcon
            key={idx}
            btnTitle={val}
            active={activeTab === val}
            btnFn={() => setActiveTab(val)}
          />
        ))}
      </div>

        {activeTab === "AI Recommendations" && (

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {aIGeneratedAssets.map((val, idx) => (
                  <div
                    key={idx}
                    className="bg-[#2f2f3c] mt-5 rounded-lg overflow-hidden shadow-md"
                  >
                    <div className="h-[200px]">
                      <img
                        src={val}
                        alt={`Asset-${idx}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex justify-between items-center px-4 py-3 bg-[#3a3a4a]">
                      <button className="px-3 py-2 rounded-md flex gap-3 text-sm items-center text-white">
                        <img src={Pen} alt="Edit" className="w-4" />
                        Edit
                      </button>
                      <button className="px-3 py-2 rounded-md flex gap-3 text-sm items-center text-white">
                        <img src={Download} alt="Edit" className="w-4" />
                        Download
                      </button>
                      <button className="px-3 py-2 rounded-md flex gap-3 text-sm items-center text-white">
                        <img src={Convert} alt="Edit" className="w-4" />
                        Convert
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}


                    {activeTab === "Text" && (
                        <>
                           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
                                       {aIGeneratedAdTexts.map((val, idx) => (
                                         <div
                                           key={idx}
                                           className="bg-[#2f2f3c] mt-5 rounded-lg overflow-hidden shadow-md p-4"
                                         >
                                           <div className="h-[350px] flex-col flex justify-start items-start gap-4">
                                            <h2 className="text-gray-400 text-[14px] font-semibold ">{val.title}</h2>
                                            <p className="text-white text-[12px]">{val.p1}</p>
                                            <p className="text-white text-[12px]">{val.p2}</p>
                                            <p className="text-white text-[12px]">{val.p3}</p>
                                            <p className="text-white text-[12px]">{val.p4}</p>
                                            <p className="text-white text-[12px]">{val.p5}</p>

                       
                                           </div>
                       
                                           <div className="flex justify-between items-center gap-2 border-t border-gray-900 p-1">
                                           <div className="flex justify-center items-center gap-6 mt-3">
                                               <img src={Copy} alt="Edit" className="w-4" />
                                               <img src={Pen} alt="Edit" className="w-4" />
                                               <img src={DustbinCAB} alt="Edit" className="w-4" />
                                           </div>
                                           <div className="text-white text-[12px]">692 charts</div>
                                           </div>
                                         </div>
                                       ))}
                                     </div>
                        </>
                    )}

    </div>
  )
}

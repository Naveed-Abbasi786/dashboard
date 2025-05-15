import React, { useState } from 'react'
import { Download, PauseIcon, Pen, PlayIcon } from '../assets';
import { aIGeneratedAdVideos } from '../constant/data';

export default function AiGeneratedAdVediosResult() {
     const [playingIndex, setPlayingIndex] = useState(null);
    
      const togglePlay = (idx) => {
        const videoElement = document.getElementById(`video-${idx}`);
        if (videoElement.paused) {
          videoElement.play();
          setPlayingIndex(idx);
        } else {
          videoElement.pause();
          setPlayingIndex(null);
        }
      };
    
      const openInNewTab = (url) => {
        window.open(url, "_blank");
      };
  return (
    <div>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {aIGeneratedAdVideos.map((val, idx) => (
        <div
          key={idx}
          className=" mt-5 rounded-lg overflow-hidden shadow-md"
        >
          <div
            className="h-[200px] relative cursor-pointer"
          >
            <video
              id={`video-${idx}`}
              src={val}
              className="w-full h-full object-cover"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay(idx);
              }}
              className="absolute top-20 right-32  bg-black/20  p-2  rounded-full text-white text-xs"
            >
              <img src={playingIndex===idx ? 'mute' :'unmute'} alt=""  className="w-10 "/>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay(idx);
              }}
              className="absolute top-20 right-32  bg-black/20  p-2  rounded-full text-white text-xs"
            >
              <img src={playingIndex===idx ? PauseIcon :PlayIcon} alt=""  className="w-10 "/>
            </button>
          </div>
          <div className="flex justify-between items-center px-2 py-1 bg-[#3a3a4a]">
              <button
              onClick={() => openInNewTab(val)}
              className="px-3 py-2 rounded-md flex gap-2 text-sm items-center text-white"
            >
              <img src={Download} alt="Download" className="w-4" />
              Download
            </button>
            <button className="px-3 py-2 rounded-md flex gap-2 text-sm items-center text-white">
              <img src={Pen} alt="Edit" className="w-4" />
              Edit
            </button>
          
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

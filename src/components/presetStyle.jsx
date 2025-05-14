import React, { useState, useRef } from 'react';
import { Dustbin, Prest, Search } from '../assets';
import SelectButton from './reusableComponents/selectButton';
import { Icon } from '@iconify/react';
import { monoChrome as defaultMonoChrome } from '../constant/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function PresetStyle() {
  const Tabs = ['AI Recommendations', 'monoChrome', 'Iran', 'United Kingdom', 'United States'];
  const [activeTab, setActiveTab] = useState('AI Recommendations');
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
  const [monoChrome, setMonoChrome] = useState(defaultMonoChrome);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleDelete = (index) => {
    const updated = [...monoChrome];
    updated.splice(index, 1);
    setMonoChrome(updated);
  };

  const handleNext = () => {
    if (startIndex + visibleCount < Tabs.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleTabs = Tabs.slice(startIndex, startIndex + visibleCount);

  return (
    <>
      {/* Header */}
      <div className='flex justify-between items-center gap-2 mt-4  rounded-md p-3 border-1 border-[#2f2f3c] z-10'>
        <div>
          <h2 className='text-white text-xl font-semibold'>Preset Styles</h2>
          <h6 className='text-gray-400 text-[13px]'>Proven styles for high-quality results</h6>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <button className="bg-[#2f2f3c] p-[9px] rounded-md">
            <img src={Search} alt="" className="w-6" />
          </button>
          <SelectButton
            style="py-2 px-6 !bg-[#2f2f3c]"
            buttonTitle="Special Ocassions"
            options={["call", "action", "msg"]}
          />
        </div>
      </div>

      {/* Preset Section */}
      <div className='bg-[#2f2f3c] mt-4 !overflow-hidden'>
        <div className='flex justify-start items-start gap-3 p-3'>
          <img src={Prest} alt="" className='w-10' />
          <div>
            <h2 className='text-white text-xl font-semibold'>Preset Styles</h2>
            <h6 className='text-gray-400 text-[13px]'>Proven styles for high-quality results</h6>
          </div>
        </div>

        {/* Tabs */}
        <div className="rounded-lg p-2 w-full text-white">
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="p-2 bg-[#2e2e3f] disabled:opacity-30 rounded"
            >
              <Icon icon="ic:outline-arrow-left" width={20} />
            </button>

            {visibleTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  activeTab === tab ? 'bg-[#e75050] text-white font-semibold' : 'bg-[#222230]'
                }`}
              >
                {tab}
              </button>
            ))}

            <button
              onClick={handleNext}
              disabled={startIndex + visibleCount >= Tabs.length}
              className="p-2 bg-[#2e2e3f] disabled:opacity-30 rounded"
            >
              <Icon icon="ic:outline-arrow-right" width={20} />
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'AI Recommendations' && (
            <div className="w-full h-full mb-5 relative px-6 ">
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 4 },
                }}
              >
                {monoChrome.map((val, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-[#222230] rounded-lg p-2 relative z-10">
                      <button
                        className="absolute top-4 right-4 bg-[#222230] text-white p-2 rounded-md z-10"
                        onClick={() => handleDelete(index)}
                      >
                        <img src={Dustbin} alt="" />
                      </button>
                      <img
                        src={val.image}
                        alt={val.title}
                        className="rounded w-full h-40 object-cover"
                      />
                      <h3 className="text-white text-sm mt-2 font-semibold text-nowrap">{val.title}</h3>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Working Prev/Next Buttons */}
              <button
                ref={prevRef}
                className="absolute -left-3 top-1/2 transform -translate-y-1/2 !z-20 bg-[#2f2f3c] border-white border-1 p-2 rounded-full"
              >
                <Icon icon="ic:outline-arrow-left" width={20} />
              </button>
              <button
                ref={nextRef}
                className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-10 bg-[#2f2f3c] p-2 border-white border-1 rounded-full"
              >
                <Icon icon="ic:outline-arrow-right" width={20} />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

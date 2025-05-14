import React, { useRef, useState } from 'react';
import { AiBg, Dustbin, Selected } from '../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function SelectedStyles() {
  const [selectedStyle, setSelectedStyle] = useState([
    {
      type: 'custom',
      title: 'Custom Style',
      dis: 'on a rustic wooden table scattered with vintage postcards and dried lavender, with soft sunlight filtering through lace curtains',
    },
    {
      type: 'custom',
      title: 'Custom Style',
      dis: 'on a rustic wooden table scattered with vintage postcards and dried lavender, with soft sunlight filtering through lace curtains',
    },
    {
      type: 'card',
      title: 'Dusty Pink Background',
      image: AiBg,
    },
    {
      type: 'card',
      title: 'Dusty Pink Background',
      image: AiBg,
    },
    {
      type: 'card',
      title: 'Dusty Pink Background',
      image: AiBg,
    },
    {
      type: 'custom',
      title: 'Custom Style',
      dis: 'on a rustic wooden table scattered with vintage postcards and dried lavender, with soft sunlight filtering through lace curtains',
    },
  ]);

  const handleDelete = (index) => {
    const updated = [...selectedStyle];
    updated.splice(index, 1);
    setSelectedStyle(updated);
  };

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-start items-start gap-3 p-5 rounded-md bg-[#2F2F3C]">
        <div className="w-10 h-10 flex justify-center items-center bg-[#595963] rounded-full p-3">
          <img src={Selected} alt="" className="w-10" />
        </div>
        <div>
          <h2 className="text-white text-xl font-semibold">Selected Styles</h2>
          <h6 className="text-gray-400 text-[13px]">Select up to 6 styles to generate with.</h6>
        </div>
      </div>

      {/* Slider */}
      <div className="p-4 w-full overflow-hidden bg-[#2F2F3C] relative">
        {/* Custom Buttons */}
        <button
          ref={prevRef}
                className="absolute left-1 top-1/2 transform -translate-y-1/2 !z-20  border-white  text-white border-1 p-2 rounded-full"
        >
                          <Icon icon="ic:outline-arrow-left" width={20} />
          
        </button>
        <button
          ref={nextRef}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 z-10  p-2 text-white border-white border-1 rounded-full"
        >
                <Icon icon="ic:outline-arrow-right" width={20} />
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {selectedStyle.map((item, index) => (
            <SwiperSlide key={index}>
              {item.type === 'custom' ? (
                <div className="bg-[#222230] rounded-lg p-4 h-48 flex flex-col justify-between relative">
                  <button
                    className="absolute top-2 right-2 bg-[#444] p-2 rounded"
                    onClick={() => handleDelete(index)}
                  >
                    <img src={Dustbin} alt="delete" className="w-4" />
                  </button>
                  <h1 className="font-semibold text-white text-[14px]">{item.title}</h1>
                  <p className="text-gray-200 text-sm text-[13px]">{item.dis}</p>
                </div>
              ) : (
                <div className="bg-[#222230] rounded-lg p-2 relative">
                  <button
                    className="absolute top-2 right-2 bg-[#444] p-2 rounded"
                    onClick={() => handleDelete(index)}
                  >
                    <img src={Dustbin} alt="delete" className="w-4" />
                  </button>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded w-full h-40 object-cover"
                  />
                  <h3 className="text-white text-sm mt-2 font-semibold text-nowrap">{item.title}</h3>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

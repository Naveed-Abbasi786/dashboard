import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { Map } from '../assets';
export default function CountryChart() {
  const Tabs = ['Pakistan', 'Palestine', 'Iran', 'United Kingdom', 'United States'];
  const [activeTab, setActiveTab] = useState('Pakistan');
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

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
    <div className=" rounded-lg p-2 w-full  text-white">
      {/* Tabs Navigation */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="p-2  bg-[#2e2e3f] disabled:opacity-30"
        >
          <Icon icon="ic:outline-arrow-left"  width={20}/>
        </button>

        {visibleTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeTab === tab
                ? 'bg-[#e75050] text-gray-300 font-semibold'
                : 'bg-[#2e2e3f]'
            }`}
          >
            {tab}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={startIndex + visibleCount >= Tabs.length}
          className="p-2  bg-[#2e2e3f] disabled:opacity-30"
        >
          <Icon icon="ic:outline-arrow-right"  width={20}/>
        </button>
      </div>

      {/* Tab Content */}
      <div className="!mt-8">
        {activeTab === 'Pakistan' && <div><img src={Map} alt=""  className='w-full h-full mt-4'/></div>}
        {activeTab === 'Palestine' && <div>🇵🇸 Palestine Data</div>}
        {activeTab === 'Iran' && <div>🇮🇷 Iran Data</div>}
        {activeTab === 'United Kingdom' && <div>🇬🇧 United Kingdom Data</div>}
        {activeTab === 'United States' && <div>🇺🇸 United States Data</div>}
      </div>
    </div>
  );
}

import React from 'react';
import DropdownButton from './dropdown';
import { userCountry } from '../constant/data';

export default function UserCountryChart() {
  return (
    <div className='bg-[#2f2f3c] rounded-lg p-5 w-full h-[280px]'>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h6 className="text-gray-300 text-sm">Additive Engagement Details</h6>
          <h2 className="text-white text-4xl font-semibold mt-2">4,532</h2>
        </div>
        <DropdownButton
          label="This year"
          options={['Monthly', 'Weekly', 'Daily']}
        />
      </div>

      <div className="space-y-6">
        {userCountry.map((item, index) => (
          <div key={index} className="text-gray-200 text-sm mt-3">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-4 min-w-[140px]">
                <img src={item.image} alt="" className="w-6 h-4 rounded-full" />
                <span className=''>{item.countryName}</span>
              </div>
                   <div className="w-full bg-[#2e2e3f] rounded-md h-2">
              <div
                className="h-2 rounded-md"
                style={{
                  width: `${item.percent}%`,
                  backgroundColor: item.color,
                }}
              />
            </div>
                          <span className="text-nowrap">{item.users}</span>

            </div>

       
          </div>
        ))}
      </div>
    </div>
  );
}

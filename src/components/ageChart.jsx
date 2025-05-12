import React from 'react';

export default function AgeChart() {
  const ageData = [
    { age: '16-24', percent: 70, color: '#e75050' },
    { age: '25-34', percent: 50, color: '#e75050' },
    { age: '35-44', percent: 30, color: '#e75050' },
    { age: '45-54', percent: 15, color: '#e75050' },
    { age: '55+', percent: 5, color: '#e75050' },
  ];

  return (
    <div className='bg-[#1c1c2e] rounded-lg p-4 w-full h-[300px]'>
      <h5 className="text-white text-xl font-semibold">Age</h5>
      <h6 className="text-gray-300 text-sm mb-4">Based on Users Feedback</h6>

      <div className="space-y-6">
        {ageData.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between gap-4  items-center text-sm  text-gray-200 mb-1">
              <span className='text-nowrap'>{item.age}</span>
           
            <div className="w-full bg-[#2e2e3f] rounded-md h-4">
              <div
                className="h-4 rounded-md"
                style={{
                  width: `${item.percent}%`,
                  backgroundColor: item.color,
                }}
              ></div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

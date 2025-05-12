import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  Chart,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

// Custom plugin for center text
const centerTextPlugin = {
  id: 'centerText',
  beforeDraw(chart) {
    const { width, height, ctx } = chart;
    ctx.save();
    const text = 'Ad Format\nDistribution.';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const lines = text.split('\n');
    lines.forEach((line, i) => {
      ctx.fillText(line, width / 2, height / 2 + (i - 0.5) * 16);
    });

    ctx.restore();
  },
};

export default function SourceChart() {
  const data = {
    labels: ['Paid Ads', 'Referral', 'Organic Search', 'Direct'],
    datasets: [
      {
        data: [25, 30, 31, 24],
        backgroundColor: ['#EA9010', '#1452C5', '#00D9C0', '#F35252'],
        borderWidth: 0,
        cutout: '70%',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#1f2937',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 10,
      },
    },
  };

  return (
    <div className="bg-[#1c1c2e] rounded-xl p-3 w-full h-[330px] relative text-white">
     
      <div className="h-full w-full flex  justify-start  items-center ">
        <div className='w-[70%] relative h-[75%] mt-4 p-2 -left-10'>
        <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
        </div>
         <div className="w-[30%] flex flex-col flex-wrap justify-center gap-4 text-sm">

        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-[#EA9010] rounded-full" />
          <span>Paid Ads: 15%</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-[#00D9C0] rounded-full" />
          <span>Organic Search: 51%</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-[#1452C5] rounded-full" />
          <span>Referral: 10%</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-[#F35252] rounded-full" />
          <span>Direct: 24%</span>
        </div>
      </div>
      </div>

       <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-sm space-y-2">
        <div className="!absolute -top-2 -left-60 bg-[#2e2e3f] w-[120px]   text-left px-2 p-2 rounded-lg text-white text-[12px] font-medium">
          <span className="font-bold block">25%</span>
         Paid Ads
        </div>
        <div className="!absolute top-10 -left-10 bg-[#2e2e3f] w-[120px] px-2 p-2 rounded-md text-white text-[12px] font-medium">
          <span className="font-bold block">10%</span> Referral
        </div>
        <div className="!absolute top-48 -left-10 bg-[#2e2e3f] w-[120px] px-2 p-2 rounded-md text-white text-[12px] font-medium">
          <span className="font-bold block">15%</span> Direct
        </div>
       <div className="!absolute top-48 right-48 bg-[#2e2e3f] w-[100px] px-2 p-2 rounded-md text-white text-[12px] font-medium">
          <span className="font-bold block">15%</span> Organic 
        </div>
      </div>

    </div>
  );
}

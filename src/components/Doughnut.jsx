import React, { useRef, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function DonutChart() {
  const chartRef = useRef(null);

  const data = {
    labels: ['Carousel Ads', 'Video Ads', 'Image Ads'],
    datasets: [
      {
        data: [15, 55, 30],
        backgroundColor: ['#F59E0B', '#EF4444', '#06B6D4' ],
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

  // Add center text after chart render
  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;

    const ctx = chart.ctx;
    const centerText = {
      text: 'Ad Format\nDistribution.',
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
    };

    ChartJS.defaults.plugins.centerText = centerText;

    chart.options.plugins = {
      ...chart.options.plugins,
      beforeDraw: function (chart) {
        const width = chart.width;
        const height = chart.height;
        const ctx = chart.ctx;
        ctx.restore();
        const fontSize = centerText.fontSize;
        ctx.font = `${centerText.fontWeight} ${fontSize}px sans-serif`;
        ctx.fillStyle = centerText.color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const lines = centerText.text.split('\n');
        lines.forEach((line, index) => {
          ctx.fillText(line, width / 2, height / 2 + (index - 0.5) * 20);
        });

        ctx.save();
      },
    };
  }, []);

  return (
    <div className="bg-[#1c1c2e] rounded-xl p-3 w-full h-[300px] !relative text-white">
      <Doughnut data={data} options={options} ref={chartRef} />
      <h1 className='absolute top-28 left-64 text-2xl text-wrap w-[150px]'>Ad format distribution.</h1>
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-sm space-y-2">
        <div className="!absolute -top-2 -left-40 bg-[#2e2e3f]  px-5 p-2 rounded-md text-white text-[12px] font-medium">
          <span className="font-bold block">15%</span>
           Carousel Ads
        </div>
        <div className="!absolute top-40 -left-52 bg-[#2e2e3f] px-5 p-2 rounded-md text-white text-[12px] font-medium">
          <span className="font-bold block">35%</span> Video Ads
        </div>
        <div className="!absolute top-40 left-30 bg-[#2e2e3f] px-5 p-2 rounded-md text-white text-[12px] font-medium">
          <span className="font-bold block">35%</span> Video Ads
        </div>
       
      </div>
    </div>
  );
}

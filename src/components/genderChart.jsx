import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// Custom plugin for center text
const centerTextPlugin = {
  id: "centerText",
  beforeDraw: (chart) => {
    const { width, height, ctx } = chart;
    ctx.save();
    ctx.font = "bold 16px sans-serif";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const lines = ["Gender", "Distribution"];
    lines.forEach((line, index) => {
      ctx.fillText(line, width / 2, height / 2 + (index - 0.5) * 20);
    });

    ctx.restore();
  },
};

const GenderChart = () => {
  const data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [35, 15],
        backgroundColor: ["#e75050", "#2c53c5"],
        borderWidth: 0,
        cutout: "70%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1f2937",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 10,
      },
    },
  };

  return (
    <div className="bg-[#1c1c2e] rounded-xl p-3 w-full h-[300px] relative text-white">
      <div className="h-[80%]">
        <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 mt-8 text-sm">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-[#e75050] rounded-full" />
          <span>Male</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-[#2c53c5] rounded-full" />
          <span>Female</span>
        </div>
      </div>
    </div>
  );
};

export default GenderChart;

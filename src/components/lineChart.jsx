import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Icon } from "@iconify/react/dist/iconify.js";
import DropdownButton from "./dropdown";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function LineChart() {
  const data = {
    labels: ["March 01", "March 10", "March 20", "March 25"],
    datasets: [
      {
        label: "CTR",
        data: [2.8, 3.9, 2.1, 3.4],
        fill: true,
        tension: 0.4,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(255, 99, 132, 0.3)");
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
          return gradient;
        },
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 3,
        pointBackgroundColor: "white",
        pointBorderColor: "rgba(255, 99, 132, 1)",
        pointBorderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: "#bbb" },
        grid: { display: false },
      },
      y: {
        ticks: { color: "#bbb" },
        grid: {
          color: "#444",
          borderDash: [4, 4],
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#222",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: "rgba(255, 99, 132, 0.8)",
        borderWidth: 1,
      },
    },
  };

  return (
    <div className="bg-[#1c1c2e] rounded-lg  w-full h-[300px] ">

<div className="flex justify-between items-center">
        <div>
            <h5 className="text-white text-xl">4.6</h5>
            <h6 className="text-gray-300">Overall CTR Performance</h6>
        </div>
        <div>
</div>



<DropdownButton
        label="Monthly"
        options={["Monthly", "Weekly", "Daily"]}
      />
            
        </div>
        <div className="h-full w-full ">
      <Line data={data} options={options} />
        </div>
    </div>
  );
}

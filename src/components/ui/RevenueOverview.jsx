import { useState, useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const datasets = {
  Daily: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    values: [3200, 4100, 2900, 5000, 4500, 3800, 2200],
  },
  Weekly: {
    labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"],
    values: [10200, 13500, 9800, 15000, 11200, 16000, 8900, 12500, 14000, 9700],
  },
  Monthly: {
    labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
    values: [43200, 29000, 24500, 32000, 44058, 26000, 35500, 27500, 18500, 33000],
  },
  Yearly: {
    labels: ["2019", "2020", "2021", "2022", "2023", "2024"],
    values: [180000, 195000, 210000, 265000, 290000, 340000],
  },
};

function getPct(values, index) {
  if (index === 0 || values[index - 1] === 0) return "";
  const pct = Math.round(((values[index] - values[index - 1]) / values[index - 1]) * 100);
  return (pct >= 0 ? "+" : "") + pct + "%";
}

export default function RevenueOverview() {
  const [activeTab, setActiveTab] = useState("Monthly");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  const data = datasets[activeTab];

  const buildColors = (hovered) =>
    data.values.map((_, i) => (i === hovered ? "#F97316" : "#FDDFC1"));

  useEffect(() => {
    if (!canvasRef.current) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: data.labels,
        datasets: [
          {
            data: data.values,
            backgroundColor: buildColors(null),
            borderRadius: 6,
            borderSkipped: false,
            barPercentage: 0.62,
            categoryPercentage: 0.7,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
        scales: {
          x: {
            grid: { display: false },
            border: { display: false },
            ticks: { color: "#9CA3AF", font: { size: 12 }, autoSkip: false },
          },
          y: {
            grid: { color: "rgba(0,0,0,0.05)" },
            border: { display: false },
            ticks: {
              color: "#9CA3AF",
              font: { size: 12 },
              maxTicksLimit: 6,
              callback: (v) => (v >= 1000 ? v / 1000 + "k" : v),
            },
          },
        },
        onHover: (event, elements) => {
          const canvas = canvasRef.current;
          if (!canvas) return;

          if (elements && elements.length > 0) {
            const idx = elements[0].index;
            const meta = chartRef.current.getDatasetMeta(0).data[idx];
            setHoveredIndex(idx);
            setTooltipPos({ x: meta.x - 65, y: meta.y - 90 });
            chartRef.current.data.datasets[0].backgroundColor = buildColors(idx);
            chartRef.current.update("none");
          } else {
            setHoveredIndex(null);
            chartRef.current.data.datasets[0].backgroundColor = buildColors(null);
            chartRef.current.update("none");
          }
        },
      },
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, [activeTab]);

  return (
    <div
      className="flex flex-col gap-[24px] "
      title="Revenue Overview"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[18px] font-[600] text-[#111111]">Revenue Overview</span>
        <div className="flex gap-1">
          {["Daily", "Weekly", "Monthly", "Yearly"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-[10px] py-[5px] rounded-[8px] font-[400] text-[11px] transition-all ${
                activeTab === tab
                  ? "bg-[#FF9600] text-white"
                  : "bg-transparent text-[111111] "
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="relative w-full h-[300px]">
        {hoveredIndex !== null && (
          <div
            className="absolute z-10 bg-[#FFFFFF] rounded-[7px] px-[14px] py-[10px] pointer-events-none"
            style={{
              left: tooltipPos.x,
              top: tooltipPos.y,
              boxShadow: "0px 2.72px 18.15px 0px #0000001A",
              minWidth: 132,
            }}
          >
            <div className="text-[11px] font-[400] text-[#7C8091] mb-[2px]">
              {data.labels[hoveredIndex]}
            </div>
            <div className="text-[11px] font-[600] text-[#FF9600] mb-[2px]">
              {data.values[hoveredIndex].toLocaleString("de-DE", {
                minimumFractionDigits: 2,
              })}
            </div>
            <div className="flex justify-between font-[400] text-[11px] text-[#7C8091]">
              <span>Total Revenue</span>
              <span>{getPct(data.values, hoveredIndex)}</span>
            </div>
          </div>
        )}
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
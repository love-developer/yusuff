import { useEffect, useState } from "react";

const metrics = [
  ["Views", 24567, "bg-[#2563EB]", 90],
  ["Downloads", 3842, "bg-[#16A34A]", 76],
  ["Completed Reads", 2156, "bg-[#9333EA]", 58],
  ["Reviews", 847, "bg-[#CA8A04]", 49],
  ["Shares", 1234, "bg-[#7C8091]", 67],
];

export default function ReaderEngagement() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    // Small delay so the browser paints the 0% width first, then transitions
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="px-[20px] py-[20px] min-h-[351px] flex-1 rounded-[12px] border border-[#E5E7EB] flex flex-col  gap-[12px]"
      title="Reader Engagement"
    >
      <span className="text-[15px] font-[600] text-[#111111]">
        Reader Engagement
      </span>

      {metrics.map(([label, value, cls, width], index) => (
        <div key={label} className="flex flex-col gap-[6px]">
          <div className="mb-2 flex justify-between text-[12px] font-[400] text-[#7C8091]">
            <span>{label}</span>
            <span className="font-[600] text-[#111111]">
              {value.toLocaleString()}
            </span>
          </div>
          <div className="h-[12px] rounded-full bg-[#E5E7EB] overflow-hidden">
            <div
              className={`h-[12px] rounded-full ${cls}`}
              style={{
                width: animated ? `${width}%` : "0%",
                transition: `width 800ms cubic-bezier(0.4, 0, 0.2, 1) ${index * 120}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

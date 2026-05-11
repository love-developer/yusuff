import React from "react";
import {
  CardPanel,
  OrangeButton,
  OutlineButton,
  PageHeader,
  TopStatCard,
} from "../Shared";
import { IconBooks, IconChart, IconPalette, IconPublish } from "../icons";

const AnalyticsView = () => (
  <div className="flex flex-col gap-[32px]">
    <PageHeader
      title="Analytics"
      subtitle="Track your book performance and earnings"
      action={
        <div className="flex gap-2">
          <OutlineButton>Last 30 Days</OutlineButton>
          <OrangeButton>Export Report</OrangeButton>
        </div>
      }
    />
    <div className="grid grid-cols-4 gap-3">
      <div className="h-[170px] w-[244px] rounded-[12px] border border-[#E5E7EC] bg-[#FFFFFF] px-[20px] justify-center flex flex-col shadow-[0px_1px_10px_0px_#00000008]  gap-[16px]">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="w-[48px] h-[48px] rounded-[8px] bg-[#DBEAFE] flex items-center justify-center">
              {/* Users SVG */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 21V19C16 17.8954 15.1046 17 14 17H6C4.89543 17 4 17.8954 4 19V21"
                  stroke="#2563EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="10" cy="7" r="4" stroke="#2563EB" strokeWidth="2" />
                <path
                  d="M20 21V19C19.9993 18.1771 19.4931 17.4383 18.72 17.14"
                  stroke="#2563EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.72 3.14C16.4952 3.43871 17.0031 4.17875 17.0031 5.00314C17.0031 5.82753 16.4952 6.56757 15.72 6.86628"
                  stroke="#2563EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="inline-flex items-center gap-1 text-[13px] font-[600] text-[#16A34A]">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[16px] w-[16px]"
              >
                <path
                  d="M6 14L12 8L18 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8V20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span>12.5%</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[4px]">
          <p className="text-[22px] font-[700] text-[#111111]">24,567</p>
          <p className="text-[13px] font-[400] text-[#7C8091]">Total Views</p>
        </div>
      </div>

      <div className="h-[170px] w-[244px] rounded-[12px] border border-[#E5E7EC] bg-[#FFFFFF] px-[20px] justify-center flex flex-col shadow-[0px_1px_10px_0px_#00000008]  gap-[16px]">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="w-[48px] h-[48px] rounded-[8px] bg-[#DCFCE7] flex items-center justify-center">
              {/* Users SVG */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 21V19C16 17.8954 15.1046 17 14 17H6C4.89543 17 4 17.8954 4 19V21"
                  stroke="#16A34A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="10" cy="7" r="4" stroke="#16A34A" strokeWidth="2" />
                <path
                  d="M20 21V19C19.9993 18.1771 19.4931 17.4383 18.72 17.14"
                  stroke="#16A34A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.72 3.14C16.4952 3.43871 17.0031 4.17875 17.0031 5.00314C17.0031 5.82753 16.4952 6.56757 15.72 6.86628"
                  stroke="#16A34A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="inline-flex items-center gap-1 text-[13px] font-[600] text-[#16A34A]">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[16px] w-[16px]"
              >
                <path
                  d="M6 14L12 8L18 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8V20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span>8.3%</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[4px]">
          <p className="text-[24px] font-[700] text-[#111111]">3,842</p>
          <p className="text-[13px] font-[400] text-[#7C8091]">
            Total Downloads
          </p>
        </div>
      </div>

      <div className="h-[170px] w-[244px] rounded-[12px] border border-[#E5E7EC] bg-[#FFFFFF] px-[20px] justify-center flex flex-col shadow-[0px_1px_10px_0px_#00000008] gap-[16px]">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="w-[48px] h-[48px] rounded-[8px] bg-[#F3E8FF] flex items-center justify-center">
              {/* Users SVG */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 21V19C16 17.8954 15.1046 17 14 17H6C4.89543 17 4 17.8954 4 19V21"
                  stroke="#9333EA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="10" cy="7" r="4" stroke="#9333EA" strokeWidth="2" />
                <path
                  d="M20 21V19C19.9993 18.1771 19.4931 17.4383 18.72 17.14"
                  stroke="#9333EA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.72 3.14C16.4952 3.43871 17.0031 4.17875 17.0031 5.00314C17.0031 5.82753 16.4952 6.56757 15.72 6.86628"
                  stroke="#9333EA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="inline-flex items-center gap-1 text-[13px] font-[600] text-[#16A34A]">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[16px] w-[16px]"
              >
                <path
                  d="M6 14L12 8L18 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8V20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span>15.7%</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[4px]">
          <p className="text-[24px] font-[700] text-[#111111]">$12,847</p>
          <p className="text-[13px] font-[400] text-[#7C8091]">Total Revenue</p>
        </div>
      </div>

      <div className="h-[170px] w-[244px] rounded-[12px] border border-[#E5E7EC] bg-[#FFFFFF] px-[20px] justify-center flex flex-col shadow-[0px_1px_10px_0px_#00000008] gap-[16px]">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="w-[48px] h-[48px] rounded-[8px] bg-[#FEF9C3] flex items-center justify-center">
              {/* Users SVG */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 21V19C16 17.8954 15.1046 17 14 17H6C4.89543 17 4 17.8954 4 19V21"
                  stroke="#CA8A04"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="10" cy="7" r="4" stroke="#CA8A04" strokeWidth="2" />
                <path
                  d="M20 21V19C19.9993 18.1771 19.4931 17.4383 18.72 17.14"
                  stroke="#CA8A04"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.72 3.14C16.4952 3.43871 17.0031 4.17875 17.0031 5.00314C17.0031 5.82753 16.4952 6.56757 15.72 6.86628"
                  stroke="#CA8A04"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="inline-flex items-center text-[13px] font-[600] text-[#16A34A]">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-[16px] w-[16px]"
              >
                <path
                  d="M6 14L12 8L18 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8V20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span>0.2</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[4px]">
          <p className="text-[24px] font-[700] text-[#111111]">4.7</p>
          <p className="text-[13px] font-[400] text-[#7C8091]">
            Average Rating
          </p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-3">
      <CardPanel title="Revenue Overview">
        <div className="h-[190px] rounded bg-[#F9FAFB]" />
      </CardPanel>
      <CardPanel title="Reader Engagement">
        {[
          ["Views", 24567, "bg-[#2563EB]", 90],
          ["Downloads", 3842, "bg-[#16A34A]", 76],
          ["Completed Reads", 2156, "bg-[#9333EA]", 58],
          ["Reviews", 847, "bg-[#D97706]", 49],
          ["Shares", 1234, "bg-[#64748B]", 67],
        ].map(([label, value, cls, width]) => (
          <div key={label} className="mb-2">
            <div className="mb-1 flex justify-between text-[11px] text-[#4B5563]">
              <span>{label}</span>
              <span>{value}</span>
            </div>
            <div className="h-2 rounded-full bg-[#E7EAF0]">
              <div
                className={`h-2 rounded-full ${cls}`}
                style={{ width: `${width}%` }}
              />
            </div>
          </div>
        ))}
      </CardPanel>
    </div>
    <CardPanel title="Book Performance">
      <div className="grid grid-cols-[1.8fr_0.8fr_0.8fr_0.8fr_0.8fr_0.8fr] border-b border-[#ECECEC] pb-2 text-[11px] font-medium text-[#8E95A5]">
        <span>BOOK</span>
        <span>VIEWS</span>
        <span>DOWNLOADS</span>
        <span>REVENUE</span>
        <span>RATING</span>
        <span>ACTIONS</span>
      </div>
      {[
        "The Digital Revolution",
        "Modern Education",
        "Science Simplified",
        "Creative Writing Guide",
      ].map((book) => (
        <div
          key={book}
          className="grid grid-cols-[1.8fr_0.8fr_0.8fr_0.8fr_0.8fr_0.8fr] items-center border-b border-[#F0F0F0] py-2 text-[12px]"
        >
          <span className="font-medium text-[#1D2232]">{book}</span>
          <span>2,847</span>
          <span>456</span>
          <span>$2,475</span>
          <span>4.8</span>
          <button type="button" className="text-[#667085]">
            View Details
          </button>
        </div>
      ))}
    </CardPanel>

    <div className="grid grid-cols-3 gap-3">
      <CardPanel title="Top Performing Books">
        <div className="space-y-2">
          {[
            [
              "1",
              "The Digital Revolution",
              "$1,247.5",
              "https://picsum.photos/seed/ana1/80/80",
            ],
            [
              "2",
              "Modern Education",
              "$856.3",
              "https://picsum.photos/seed/ana2/80/80",
            ],
            [
              "3",
              "Science Simplified",
              "$642.8",
              "https://picsum.photos/seed/ana3/80/80",
            ],
          ].map(([rank, title, amount, image]) => (
            <div
              key={title}
              className="grid grid-cols-[18px_28px_1fr] items-center gap-2"
            >
              <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#F3E8C8] text-[10px] font-semibold text-[#9A7B2F]">
                {rank}
              </span>
              <img
                src={image}
                alt={title}
                className="h-7 w-7 rounded object-cover"
              />
              <div>
                <p className="text-[10px] font-semibold text-[#1D2232]">
                  {title}
                </p>
                <p className="text-[9px] text-[#8E95A5]">{amount}</p>
              </div>
            </div>
          ))}
        </div>
      </CardPanel>

      <CardPanel title="Reader Demographics">
        <div className="space-y-2">
          {[
            ["Students", "bg-[#6B7280]", "34%"],
            ["Teachers", "bg-[#3B82F6]", "28%"],
            ["Professionals", "bg-[#9333EA]", "19%"],
          ].map(([label, color, value]) => (
            <div key={label}>
              <div className="mb-1 flex justify-between text-[10px] text-[#8E95A5]">
                <span>{label}</span>
                <span>{value}</span>
              </div>
              <div className="h-1.5 rounded-full bg-[#ECEFF4]">
                <div
                  className={`h-1.5 rounded-full ${color}`}
                  style={{ width: value }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardPanel>

      <CardPanel title="Token Earnings">
        <div className="space-y-2">
          <div className="rounded-md bg-[#ECF6F4] px-3 py-2">
            <p className="text-[10px] text-[#7A869C]">Writing Milestones</p>
            <p className="text-[13px] font-semibold text-[#1D2232]">
              2,450 SKH
            </p>
          </div>
          <div className="rounded-md bg-[#FAF2E7] px-3 py-2">
            <p className="text-[10px] text-[#7A869C]">Book Sales</p>
            <p className="text-[13px] font-semibold text-[#D97706]">
              5,680 SKH
            </p>
          </div>
          <div className="rounded-md bg-[#FFF3E6] px-3 py-2">
            <p className="text-[10px] text-[#7A869C]">Reader Engagement</p>
            <p className="text-[13px] font-semibold text-[#EA8A00]">
              1,230 SKH
            </p>
          </div>
        </div>
      </CardPanel>
    </div>
  </div>
);

export default AnalyticsView;

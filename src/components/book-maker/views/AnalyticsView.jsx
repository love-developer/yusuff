import React from "react";
import { useState, useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import {
  CardPanel,
  OrangeButton,
  OutlineButton,
  PageHeader,
  TopStatCard,
} from "../Shared";
import { IconBooks, IconChart, IconPalette, IconPublish } from "../icons";
import RevenueOverview from "../../ui/RevenueOverview";
import ReaderEngagement from "../../ui/ReaderEngagement";

const AnalyticsView = () => (
  <div className="flex flex-col gap-[24px]">
    <PageHeader
      title="Analytics"
      subtitle="Track your book performance and earnings"
      action={
        <div className="flex gap-[12px]">
          <button className="flex items-center justify-center gap-[6px] rounded-[8px] border border-[#FF9600] bg-white cursor-pointer h-[40px] w-[131px] text-[13px] font-[400] text-[#FF9600]">
            {/* Calendar SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Last 30 Days
          </button>

          <button className="flex items-center justify-center gap-[6px] rounded-[8px] bg-[#FF9600] cursor-pointer h-[40px] w-[174px] text-[13px] font-[400] text-[#FFFFFF]">
            {/* Export SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Export Report
          </button>
        </div>
      }
    />
    <div className="grid grid-cols-4 gap-[20px]">
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

    <div className="flex gap-[23px]">
      <div
        className="px-[18px] py-[18px] min-h-[351px] min-w-[675px] rounded-[11px] border border-[#E5E7EC] bg-[#FFFFFF] flex flex-col justify-center gap-[63px] shadow-[0px 2px 15px 0px #00000008];
"
        title="Revenue Overview"
      >
        <RevenueOverview />
      </div>
      <ReaderEngagement />
    </div>

<div className="rounded-[12px] border border-[#E5E7EC] bg-[#FFFFFF] flex flex-col justify-center shadow-[0px 3px 30px 0px #0000000]">
  <div className="h-[85px] border-b border-[#E5E7EB] flex items-center justify-between pl-[20px] pr-[40px]">
    <p className="text-[15px] font-[600] text-[#111111]">
      Book Performance
    </p>
    <div>
      <p className="text-[13px] font-[400] text-[#7C8091]">filters</p>
    </div>
  </div>
  <div className="h-[48px] items-center px-[20px] bg-[#F9FAFB] grid grid-cols-[1.8fr_0.8fr_0.8fr_0.8fr_0.8fr_0.8fr_0.8fr] border-b border-[#E5E7EB] text-[11px] font-[600] text-[#4B5563]">
    <span>BOOK</span>
    <span>VIEWS</span>
    <span>DOWNLOADS</span>
    <span>REVENUE</span>
    <span>RATING</span>
    <span>TREND</span>
    <span>ACTIONS</span>
  </div>
  {[
    { title: "The Digital Revolution", views: "2,847", downloads: "456", revenue: "$1,247.5", rating: "4.8", trend: "+12%", trendColor: "text-green-500", img: "https://picsum.photos/id/1015/40/50" },
    { title: "Modern Education", views: "1,923", downloads: "312", revenue: "$856.3", rating: "4.6", trend: "+12%", trendColor: "text-green-500", img: "https://picsum.photos/id/201/40/50" },
    { title: "Science Simplified", views: "1,456", downloads: "234", revenue: "$642.8", rating: "4.7", trend: "0%", trendColor: "text-gray-500", img: "https://picsum.photos/id/301/40/50" },
    { title: "Creative Writing Guide", views: "987", downloads: "156", revenue: "$428.4", rating: "4.5", trend: "-5%", trendColor: "text-red-500", img: "https://picsum.photos/id/401/40/50" },
  ].map((book) => (
    <div
      key={book.title}
      className="h-[97px] px-[20px] grid grid-cols-[1.8fr_0.8fr_0.8fr_0.8fr_0.8fr_0.8fr_0.8fr] items-center border-b border-[#E5E7EB]"
    >
      <div className="flex items-center gap-3">
        <img src={book.img} alt={book.title} className="h-[64px] w-[48px] object-cover rounded-[4px]" />
        <span className="text-[15px] font-[600] text-[#111111]">{book.title}</span>
      </div>
      <span className="text-[14px] font-[400] text-[#111111]">{book.views}</span>
      <span className="text-[14px] font-[400] text-[#111111]">{book.downloads}</span>
      <span className="text-[14px] font-[600] text-[#111111]">{book.revenue}</span>
      <span className="text-[14px] font-[600] text-[#111111]">{book.rating}</span>
      <span className={`text-[14px] font-[600] ${book.trendColor}`}>{book.trend}</span>
      <button
        type="button"
        className="cursor-pointer text-[13px] font-[600] text-[#7C8091]"
      >
        View Details
      </button>
    </div>
  ))}
</div>

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

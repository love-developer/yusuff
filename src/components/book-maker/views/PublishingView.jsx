import React from "react";
import { CardPanel, OrangeButton, PageHeader, TopStatCard } from "../Shared";
import { IconBooks, IconChart, IconPublish, IconUsers } from "../icons";

const PublishingView = () => (
  <div className="flex flex-col gap-[32px]">
    <PageHeader
      title="Collaboration"
      subtitle="Manage co-authors, editors, and team members"
      action={
        <button className="flex h-[48px] w-[160px] cursor-pointer items-center justify-center gap-[8px] rounded-[8px] bg-[#FF9600] text-[15px] font-[600] text-[#FFFFFF]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 21V13H7v8"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 3v5h8" />
          </svg>
          Publish Now
        </button>
      }
    />
    <div className="grid grid-cols-4 gap-3">
      <div className="h-[162px] w-[244px] rounded-[12px] border border-[#E5E7EC] bg-[#FFFFFF] px-[20px] justify-center flex flex-col shadow-[0px_1px_10px_0px_#00000008]">
        <div className="flex flex-col gap-[10px]">
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

          <p className="text-[24px] font-[700] text-[#111111]">8</p>
        </div>

        <div>
          <p className="text-[13px] font-[400] text-[#7C8091]">
            Published Books
          </p>
        </div>
      </div>

      <div className="h-[162px] w-[244px] rounded-[12px] border border-[#E5E7EC] bg-[#FFFFFF] px-[20px] justify-center flex flex-col shadow-[0px_1px_10px_0px_#00000008]">
        <div className="flex flex-col gap-[10px]">
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

          <p className="text-[24px] font-[700] text-[#111111]">1,234</p>
        </div>

        <div>
          <p className="text-[13px] font-[400] text-[#7C8091]">
            Total Downloads
          </p>
        </div>
      </div>

      <div className="h-[162px] w-[244px] rounded-[12px] border border-[#E5E7EC] bg-[#FFFFFF] px-[20px] justify-center flex flex-col shadow-[0px_1px_10px_0px_#00000008]">
        <div className="flex flex-col gap-[10px]">
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

          <p className="text-[24px] font-[700] text-[#111111]">156</p>
        </div>

        <div>
          <p className="text-[13px] font-[400] text-[#7C8091]">Print Orders</p>
        </div>
      </div>

      <div className="h-[162px] w-[244px] rounded-[12px] border border-[#E5E7EC] bg-[#FFFFFF] px-[20px] justify-center flex flex-col shadow-[0px_1px_10px_0px_#00000008]">
        <div className="flex flex-col gap-[10px]">
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

          <p className="text-[24px] font-[700] text-[#111111]">$2,847</p>
        </div>

        <div>
          <p className="text-[13px] font-[400] text-[#7C8091]">
            Total Earnings
          </p>
        </div>
      </div>
    </div>

    <div className="rounded-[12px] border border-[#E5E7EC] bg-[#FFFFFF] flex flex-col justify-center gap-[24px] shadow-[0px_3px_30px_0px_#0000000]">
      <div className="h-[65px] border-b border-[#E5E7EB] flex items-center px-[10px] gap-[30px]">
        {["Export", "Print-on-Demand", "Publish to Store", "Distribution"].map(
          (tab, i) => (
            <button
              key={tab}
              type="button"
              className={`flex items-center justify-center h-[48px] min-w-[120px]  rounded-[8px] text-[15px] font-[600] text-[#7C8091] ${i === 0 ? "bg-[#F0FDFA] " : "text-[#6F7687]"}`}
            >
              {tab}
            </button>
          ),
        )}
      </div>
      <div className="p-[24px] pt-[0px] flex flex-col gap-[16px]">
        <p className="text-[17px] font-[700] text-[#111111]">
          Select Export Formats
        </p>
        <div className="flex flex-col gap-[24px]">
          <div className="grid grid-cols-3 gap-[13px]">
            {["PDF", "EPUB", "MOBI", "HTML", "DOCX", "Audiobook Script"].map(
              (type, index) => (
                <button
                  type="button"
                  key={type}
                  className={`h-[108px] rounded-[8px] border-[2px] flex  items-center px-[20px] text-left ${index === 0 ? "border-[#FF9600] bg-[#FF96000D] text-[#FF9600]" : "border-[#E5E7EB] text-[#7C8091]"}`}
                >
                  <div className="flex gap-[10px]">
                    <div
                      className={`w-[48px] h-[48px] rounded-[8px] ${index === 0 ? "bg-[#FF9600]" : "bg-[#F3F4F6]"} flex items-center justify-center`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className={`h-[25px] w-[25px]  ${index === 0 ? "text-[#FFFFFF]" : "text-[#7C8091]"}`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.253v13M12 6.253C10.832 5.477 9.246 5 7.5 5 5.757 5 4.173 5.476 3 6.25v13C4.173 18.476 5.757 18 7.5 18c1.746 0 3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.743 0 3.327.476 4.5 1.25v13C19.827 18.476 18.243 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-[4px]">
                      <p className="text-[15px] font-[600] text-[#111111]">
                        {type}
                      </p>
                      <p className="text-[14px] font-[400] ">
                        Export format settings
                      </p>
                      <p className="text-[11px] font-[400] ">
                        Est. size: 2.5 MB
                      </p>
                    </div>
                  </div>
                </button>
              ),
            )}
          </div>

          <div className="rounded-[8px] bg-[#F9FAFB] p-[24px] gap-[16px] h-[263px] flex flex-col justify-center">
            <p className="font-[600] font-[600] text-[#111111]">
              Export Settings
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-[600] text-[#7C8091]">
                  Export Quality
                </label>
                <input
                  className="h-[47px] rounded-[8px] bg-[#FFFFFF] border border-[#D1D5DB] px-3 focus:outline-none text-[13px] font-[400] text-[#000000]"
                  placeholder="High Quality (Print)"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-[600] text-[#7C8091]">
                  Content Type
                </label>
                <input
                  className="h-[47px] rounded-[8px] bg-[#FFFFFF] border border-[#D1D5DB] px-3 focus:outline-none text-[13px] font-[400] text-[#000000]"
                  placeholder="All Content"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[12px] text-[13px] font-[400] text-[#7C8091]">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-[16px] w-[16px] cursor-pointer appearance-none rounded-[2px] border border-[#D1D5DB] bg-white checked:border-[#FF9600] checked:bg-[#FF9600] relative
      checked:after:content-['✓'] checked:after:absolute checked:after:left-[3px] checked:after:top-[-2px] checked:after:text-[12px] checked:after:font-bold checked:after:text-white"
                />
                Include Table of Contents
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-[16px] w-[16px] cursor-pointer appearance-none rounded-[2px] border border-[#D1D5DB] bg-white checked:border-[#FF9600] checked:bg-[#FF9600] relative
      checked:after:content-['✓'] checked:after:absolute checked:after:left-[3px] checked:after:top-[-2px] checked:after:text-[12px] checked:after:font-bold checked:after:text-white"
                />
                Include Cover Page
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-[16px] w-[16px] cursor-pointer appearance-none rounded-[2px] border border-[#D1D5DB] bg-white checked:border-[#FF9600] checked:bg-[#FF9600] relative
      checked:after:content-['✓'] checked:after:absolute checked:after:left-[3px] checked:after:top-[-2px] checked:after:text-[12px] checked:after:font-bold checked:after:text-white"
                />
                Add Watermark
              </label>
            </div>
          </div>
          <button className="flex h-[52px] cursor-pointer items-center justify-center gap-[6px] rounded-[8px] bg-[#FF9600] text-[15px] font-[600] text-[#FFFFFF]">
            Export Selected Formats
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16V4m0 0l-4 4m4-4l4 4"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default PublishingView;

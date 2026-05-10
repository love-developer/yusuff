import React from "react";
import { CardPanel, OrangeButton, PageHeader } from "../Shared";

const DesignToolsView = ({ tab, onTabChange }) => (
  <div className="space-y-4">
    <PageHeader
      title="Design Tools"
      subtitle="Create beautiful book layouts and covers"
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
          Save Design
        </button>
      }
    />

    <div
      className="rounded-[12px] border border-[#E5E7EC] shadow-[0px 3px 30px 0px #0000000D];
"
    >
      <div className="h-[65px] flex gap-[4px] border-b border-[#E5E7EB] flex items-center px-[10px]">
        {[
          ["layout", "Book Layout"],
          ["cover", "Cover Designer"],
          ["typography", "Typography"],
          ["templates", "Templates"],
        ].map(([id, label]) => (
          <button
            type="button"
            key={id}
            onClick={() => onTabChange(id)}
            className={`h-[48px] flex items-center justify-center min-w-[163px] rounded-[8px] text-[15px] ${
              tab === id ? "bg-[#FF9600] text-[#FFFFFF]" : "text-[#7C8091] "
            }`}
          >
            <span className="inline-flex items-center gap-1.5">
              <span>
                {id === "layout"
                  ? "▦"
                  : id === "cover"
                    ? "◩"
                    : id === "typography"
                      ? "A"
                      : "◫"}
              </span>
              {label}
            </span>
          </button>
        ))}
      </div>

      {tab === "layout" && (
        <div className="flex p-[24px] justify-between gap-4">
          <div className="flex flex-col w-[657px] gap-[24px]">
            <p className="text-[15px] font-[600] text-[#111111]">
              Page Settings
            </p>

            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[8px]">
                <p className="text-[13px] font-[600] text-[#111111]">
                  Page Size
                </p>
                <div className="relative">
                  <select className="w-full h-[47px] rounded-[8px] bg-[#FFFFFF] border border-[#E5E7EC] px-3 text-[13px] font-[400] text-[#111111] focus:outline-none appearance-none">
                    <option>6" x 9" (Standard Novel)</option>
                    <option>5" x 8" (Digest)</option>
                    <option>8.5" x 11" (Letter Size)</option>
                    <option>7" x 10" (Workbook)</option>
                  </select>

                  {/* Dropdown SVG */}
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="#9AA2B3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[8px]">
                <p className="text-[13px] font-[600] text-[#111111]">
                  Margins (inches)
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="mb-1 text-[11px] font-[400] text-[#7C8091]">
                      Top
                    </p>
                    <input
                      className="h-[32px] w-full rounded-[8px] bg-[#FFFFFF] border border-[#E5E7EC] px-3 py-2 text-[14px] font-[400] text-[#111111] focus:outline-none"
                      placeholder="1"
                    />
                  </div>
                  <div>
                    <p className="mb-1 text-[11px] font-[400] text-[#7C8091]">
                      Bottom
                    </p>
                    <input
                      className="h-[32px] w-full rounded-[8px] bg-[#FFFFFF] border border-[#E5E7EC] px-3 py-2 text-[14px] font-[400] text-[#111111] focus:outline-none"
                      placeholder="1"
                    />
                  </div>
                  <div>
                    <p className="mb-1 text-[11px] font-[400] text-[#7C8091]">
                      Left
                    </p>
                    <input
                      className="h-[32px] w-full rounded-[8px] bg-[#FFFFFF] border border-[#E5E7EC] px-3 py-2 text-[14px] font-[400] text-[#111111] focus:outline-none"
                      placeholder="0.75"
                    />
                  </div>
                  <div>
                    <p className="mb-1 text-[11px] font-[400] text-[#7C8091]">
                      Right
                    </p>
                    <input
                      className="h-[32px] w-full rounded-[8px] bg-[#FFFFFF] border border-[#E5E7EC] px-3 py-2 text-[14px] font-[400] text-[#111111] focus:outline-none"
                      placeholder="0.75"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[12px]">
              <p className="text-[13px] font-[500] text-[#111111]">
                Line Spacing: 1.5
              </p>
              <div className="h-[10px] rounded-full bg-[#FF96001A]">
                <div className="h-[10px] w-[50%] rounded-full bg-[#FF9600]" />
              </div>
              <div className="flex justify-between font-[400] text-[12px] text-[#7C8091]">
                <span>Single</span>
                <span>1.5</span>
                <span>Double</span>
              </div>
            </div>

            <div className="flex flex-col gap-[8px]">
              <p className="text-[13px] font-[500] text-[#111111]">
                Font Family
              </p>

              <div className="relative">
                <select className="w-full h-[47px] rounded-[8px] bg-[#FFFFFF] border border-[#E5E7EC] px-3 text-[13px] font-[400] text-[#111111] focus:outline-none appearance-none">
                  <option>Merriweather (Serif)</option>
                  <option>Inter (Sans)</option>
                  <option>Roboto</option>
                  <option>Open Sans</option>
                </select>

                {/* Dropdown icon */}
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#9AA2B3]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[12px]">
              <p className="text-[13px] font-[500] text-[#111111]">
                Font Size: 12pt
              </p>
              <div className="h-[10px] rounded-full bg-[#FF96001A]">
                <div className="h-[10px] w-[50%] rounded-full bg-[#FF9600]" />
              </div>
              <div className="flex justify-between font-[400] text-[12px] text-[#7C8091]">
                <span>9pt</span>
                <span>12pt</span>
                <span>16pt</span>
              </div>
            </div>

            <div className="flex flex-col gap-[16px]">
              <p className="text-[15px] font-[600] text-[#111111]">
                Additional Options
              </p>

              <div className="flex flex-col gap-[12px]">
                <label className="flex items-center gap-[8px] text-[13px] text-[#7C8091] cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="accent-[#FF9600] w-[16px] h-[16px]"
                  />
                  Page Numbers
                </label>

                <label className="flex items-center gap-[8px] text-[13px] text-[#7C8091] cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="accent-[#FF9600] w-[16px] h-[16px]"
                  />
                  Headers & Footers
                </label>

                <label className="flex items-center gap-[8px] text-[13px] text-[#7C8091] cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-[#FF9600] w-[16px] h-[16px]"
                  />
                  Chapter Decorations
                </label>

                <label className="flex items-center gap-[8px] text-[13px] text-[#7C8091] cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="accent-[#FF9600] w-[16px] h-[16px]"
                  />
                  Auto Table of Contents
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[20px]">
            <p className="text-[14px] font-semibold text-[#1D2232]">
              Live Preview
            </p>
            <div className="flex items-center justify-center w-[509px]  h-[668px] rounded-[8px] border-[2px] border-[#E5E7EC] bg-[#F9F9F9]">
              <div
                className="w-[400px] h-[600px]   bg-[#FFFFFF] shadow-[0px 4px 6px -4px #0000001A] px-[25px] py-[50px] flex flex-col gap-[8px]
;
 "
              >
                <h4 className="text-[24px] font-[700] text-[#111111]">
                  Chapter One
                </h4>
                <p className="text-[12px] font-[400] leading-[1.5] text-[#000000]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
                <p className="text-[12px] font-[400] leading-[1.5] text-[#000000]">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="text-[12px] font-[400] leading-[1.5] text-[#000000]">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="text-[12px] font-[400] leading-[1.5] text-[#000000]">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === "cover" && (
        <div className="flex p-[24px] justify-between gap-4">
          <div className="flex flex-col gap-[21px] w-[567px] ">
            {/* Cover Information Section */}
            <div className="flex flex-col gap-[24px]">
              <p className="font-[600] text-[14px] text-[#111111]">
                Cover Information
              </p>
              <div className="flex flex-col gap-[12px]">
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[13px]  font-[600] text-[#111111]">
                    Book Title
                  </label>
                  <input
                    className="h-[47px] w-full rounded-[8px] bg-[#FFFFFF] border border-[#E5E7EC] px-3 text-[13px] font-[400] text-[#111111] focus:outline-none"
                    placeholder="Your Book Title"
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[13px]  font-[600] text-[#111111]">
                    Subtitle
                  </label>
                  <input
                    className="h-[47px] w-full rounded-[8px] bg-[#FFFFFF] border border-[#E5E7EC] px-3 text-[13px] font-[400] text-[#111111] focus:outline-none"
                    placeholder="Subtitle Goes Here"
                  />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="text-[13px]  font-[600] text-[#111111]">
                    Author Name
                  </label>
                  <input
                    className="h-[47px] w-full rounded-[8px] bg-[#FFFFFF] border border-[#E5E7EC] px-3 text-[13px] font-[400] text-[#111111] focus:outline-none"
                    placeholder="Author Name"
                  />
                </div>
              </div>
            </div>

            {/* Cover Style Section */}
            <div className="flex flex-col gap-[8px]">
              <p className="font-[500] text-[13px] text-[#111111]">
                Cover Style
              </p>
              <div className="flex gap-[12px]">
                <div
                  className="h-[201px] w-[209px] overflow-hidden rounded-[10px] border border-[#E5E7EC] bg-[#FFFFFF] shadow-[0px 1px 10px 0px #00000008];
"
                >
                  <img
                    src="https://picsum.photos/seed/modern-minimalist/300/160"
                    alt="Modern Minimalist"
                    className="w-[209px] h-[170px] object-cover"
                  />
                  <div className="px-3 py-1">
                    <p className="text-[12px] font-[600] text-[#111111]">
                      Modern Minimalist
                    </p>
                  </div>
                </div>
                <div
                  className="h-[201px] w-[209px] overflow-hidden rounded-[10px] border border-[#E5E7EC] bg-[#FFFFFF] shadow-[0px 1px 10px 0px #00000008];
"
                >
                  <img
                    src="https://picsum.photos/seed/classic-elegant/300/160"
                    alt="Classic Elegant"
                    className="w-[209px] h-[170px] object-cover"
                  />
                  <div className="px-3 py-1">
                    <p className="text-[12px] font-[600] text-[#111111]">
                      Classic Elegant
                    </p>
                  </div>
                </div>
                <div
                  className="h-[201px] w-[209px] overflow-hidden rounded-[10px] border border-[#E5E7EC] bg-[#FFFFFF] shadow-[0px 1px 10px 0px #00000008];
"
                >
                  <img
                    src="https://picsum.photos/seed/artistic-abstract/300/160"
                    alt="Artistic Abstract"
                    className="w-[209px] h-[170px] object-cover"
                  />
                  <div className="px-3 py-1">
                    <p className="text-[12px] font-[600] text-[#111111]">
                      Artistic Abstract
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="flex items-center justify-center cursor-pointer  h-[52px] items-center gap-2 rounded-[8px] bg-[#FF9600] px-[24px] text-[15px] font-[500] text-[#ffffff]">
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
                  d="M12 16V4m0 0l-4 4m4-4l4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                />
              </svg>
              Upload Custom Image
            </button>
          </div>

          {/* Preview Section */}
          <div className="w-[609px] flex flex-col justify-between">
            <div className=" flex items-center justify-center h-[550px] rounded-[8px] border-[2px] border-[#E5E7EC] bg-[#F9F9F9] ">
              <img
                src="https://picsum.photos/seed/coverpreview/350/500"
                alt="preview"
                className="mx-auto h-[450px] w-[300px] rounded object-cover"
              />
            </div>
            <div className="flex gap-[12px]">
              <button className="cursor-pointer flex h-[52px] flex-1 items-center justify-center gap-[8px] rounded-[8px] border-[2px] border-[#FF9600] text-[16px] font-[500] text-[#FF9600]">
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
                    d="M12 16V4m0 0l-4 4m4-4l4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                  />
                </svg>
                Download
              </button>

              <button className="cursor-pointer flex h-[52px] flex-1 items-center justify-center gap-[8px] rounded-[8px] border-[2px] border-[#FF9600] bg-[#FF9600] text-[16px] font-[500] text-[#FFFFFF]">
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
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Full Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {tab === "typography" && (
        <div className="flex flex-col p-[24px] justify-between gap-[24px]">
          {/* Font Pairing Suggestions Alert */}
          <div className="h-[105px] rounded-[8px] border border-[#FF9600] bg-[#FF96000D] px-4 flex items-center">
            <div className="flex items-start gap-2">
              <div className="h-[20px] w-[20px] rounded-full border-[2px] border-[#FF9600] flex items-center justify-center ">
                <span className="text-[#FF9600] text-[10px] font-bold">i</span>
              </div>
              <div>
                <h3 className="text-[16px] font-[600] text-[#FF9600] mb-1">
                  Font Pairing Suggestions
                </h3>
                <p className="text-[12px] text-[#FF9600] font-[400]">
                  Pair serif fonts for body text with sans-serif fonts for
                  headings, or vice versa. This creates visual hierarchy and
                  improves readability.
                </p>
              </div>
            </div>
          </div>

          {/* Font Selection Cards Grid */}
          <div className="grid grid-cols-2 gap-[24px]">
            {/* Merriweather Card */}
            <div className="h-[211px] bg-[#FFFFFF] rounded-[8px] border border-[#E5E7EC] p-[20px] relative">
              <button className="w-[70px] h-[36px] absolute top-4 right-4 bg-[#FF9800] text-white rounded-[8px] text-[12px] font-[600] text-[#FFFFFF] ">
                Select
              </button>
              <div className="pr-20">
                <h4 className="text-[15px] font-[600] text-[#111111] mb-1">
                  Merriweather
                </h4>
                <p className="text-[13px] font-[400] text-[#7C8091] mb-3">Serif</p>
                <p
                  className="text-[24px] font-[400] text-[#111111]"
                  style={{ fontFamily: "Merriweather, serif" }}
                >
                  The Quick Brown Fox
                </p>
                <p className="text-[14px] font-[400] text-[#4B5563]  mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] font-[400] text-[#7C8091]">
                    Pairs well with:
                  </span>
                  <span className="text-[11px] font-[400]  text-[#111111]">
                    Inter
                  </span>
                </div>
              </div>
            </div>

            {/* Playfair Display Card */}
            <div className="h-[211px] bg-[#FFFFFF] rounded-[8px] border border-[#E5E7EC] p-[20px] relative">
              <button className="w-[70px] h-[36px] absolute top-4 right-4 bg-[#FF9800] text-white rounded-[8px] text-[12px] font-[600] text-[#FFFFFF] ">
                Select
              </button>
              <div className="pr-20">
                <h4 className="text-[15px] font-[600] text-[#111111] mb-1">
                  Playfair Display
                </h4>
                <p className="text-[13px] font-[400] text-[#7C8091] mb-3">Serif</p>
                <p
                  className="text-[24px] font-[400] text-[#111111]"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  The Quick Brown Fox
                </p>
                <p className="text-[14px] font-[400] text-[#4B5563]  mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] font-[400] text-[#7C8091]">
                    Pairs well with:
                  </span>
                  <span className="text-[11px] font-[400]  text-[#111111]">
                    Roboto
                  </span>
                </div>
              </div>
            </div>

            {/* Lora Card */}
            <div className="h-[211px] bg-[#FFFFFF] rounded-[8px] border border-[#E5E7EC] p-[20px] relative">
              <button className="w-[70px] h-[36px] absolute top-4 right-4 bg-[#FF9800] text-white rounded-[8px] text-[12px] font-[600] text-[#FFFFFF] ">
                Select
              </button>
              <div className="pr-20">
                <h4 className="text-[15px] font-[600] text-[#111111] mb-1">
                  Lora
                </h4>
                <p className="text-[13px] font-[400] text-[#7C8091] mb-3">Serif</p>
                <p
                  className="text-[24px] font-[400] text-[#111111]"
                  style={{ fontFamily: "Lora, serif" }}
                >
                  The Quick Brown Fox
                </p>
                <p className="text-[14px] font-[400] text-[#4B5563]  mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] text-[#6B7280]">
                    Pairs well with:
                  </span>
                  <span className="text-[11px] text-[#111111]">
                    Open Sans
                  </span>
                </div>
              </div>
            </div>

            {/* Crimson Text Card */}
            <div className="h-[211px] bg-[#FFFFFF] rounded-[8px] border border-[#E5E7EC] p-[20px] relative">
              <button className="w-[70px] h-[36px] absolute top-4 right-4 bg-[#FF9800] text-white rounded-[8px] text-[12px] font-[600] text-[#FFFFFF] ">
                Select
              </button>
              <div className="pr-20">
                <h4 className="text-[15px] font-[600] text-[#111111] mb-1">
                  Crimson Text
                </h4>
                <p className="text-[13px] font-[400] text-[#7C8091] mb-3">Serif</p>
                <p
                  className="text-[24px] font-[400] text-[#111111]"
                  style={{ fontFamily: "Crimson Text, serif" }}
                >
                  The Quick Brown Fox
                </p>
                <p className="text-[14px] font-[400] text-[#4B5563]  mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] text-[#6B7280]">
                    Pairs well with:
                  </span>
                  <span className="text-[11px] text-[#111111]">
                    Montserrat
                  </span>
                </div>
              </div>
            </div>

            {/* Open Sans Card */}
            <div className="h-[211px] bg-[#FFFFFF] rounded-[8px] border border-[#E5E7EC] p-[20px] relative">
              <button className="w-[70px] h-[36px] absolute top-4 right-4 bg-[#FF9800] text-white rounded-[8px] text-[12px] font-[600] text-[#FFFFFF] ">
                Select
              </button>
              <div className="pr-20">
                <h4 className="text-[15px] font-[600] text-[#111111] mb-1">
                  Open Sans
                </h4>
                <p className="text-[13px] font-[400] text-[#7C8091] mb-3">Sans-Serif</p>
                <p
                  className="text-[24px] font-[400] text-[#111111]"
                  style={{ fontFamily: "Open Sans, sans-serif" }}
                >
                  The Quick Brown Fox
                </p>
                <p className="text-[14px] font-[400] text-[#4B5563]  mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] text-[#6B7280]">
                    Pairs well with:
                  </span>
                  <span className="text-[11px] text-[#111111] ">
                    Lora
                  </span>
                </div>
              </div>
            </div>

            {/* Roboto Card */}
            <div className="h-[211px] bg-[#FFFFFF] rounded-[8px] border border-[#E5E7EC] p-[20px] relative">
              <button className="w-[70px] h-[36px] absolute top-4 right-4 bg-[#FF9800] text-white rounded-[8px] text-[12px] font-[600] text-[#FFFFFF] ">
                Select
              </button>
              <div className="pr-20">
                <h4 className="text-[15px] font-[600] text-[#111111] mb-1">
                  Roboto
                </h4>
                <p className="text-[13px] font-[400] text-[#7C8091] mb-3">Sans-Serif</p>
                <p
                  className="text-[24px] font-[400] text-[#111111]"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  The Quick Brown Fox
                </p>
                <p className="text-[14px] font-[400] text-[#4B5563]  mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] text-[#6B7280]">
                    Pairs well with:
                  </span>
                  <span className="text-[11px] text-[#111111]">
                    Playfair Display
                  </span>
                </div>
              </div>
            </div>

            {/* Montserrat Card */}
            <div className="h-[211px] bg-[#FFFFFF] rounded-[8px] border border-[#E5E7EC] p-[20px] relative">
              <button className="w-[70px] h-[36px] absolute top-4 right-4 bg-[#FF9800] text-white rounded-[8px] text-[12px] font-[600] text-[#FFFFFF] ">
                Select
              </button>
              <div className="pr-20">
                <h4 className="text-[15px] font-[600] text-[#111111] mb-1">
                  Montserrat
                </h4>
                <p className="text-[13px] font-[400] text-[#7C8091] mb-3">Sans-Serif</p>
                <p
                  className="text-[24px] font-[400] text-[#111111]"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  The Quick Brown Fox
                </p>
                <p className="text-[14px] font-[400] text-[#4B5563]  mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] text-[#6B7280]">
                    Pairs well with:
                  </span>
                  <span className="text-[11px] text-[#111111]">
                    Crimson Text
                  </span>
                </div>
              </div>
            </div>

            {/* OpenDyslexic Card */}
            <div className="h-[211px] bg-[#FFFFFF] rounded-[8px] border border-[#E5E7EC] p-[20px] relative">
              <button className="w-[70px] h-[36px] absolute top-4 right-4 bg-[#FF9800] text-white rounded-[8px] text-[12px] font-[600] text-[#FFFFFF] ">
                Select
              </button>
              <div className="pr-20">
                <h4 className="text-[15px] font-[600] text-[#111111] mb-1">
                  OpenDyslexic
                </h4>
                <p className="text-[13px] font-[400] text-[#7C8091] mb-3">Accessibility</p>
                <p
                  className="text-[24px] font-[400] text-[#111111] mb-2 leading-tight"
                  style={{ fontFamily: "OpenDyslexic, sans-serif" }}
                >
                  The Quick Brown Fox
                </p>
                <p className="text-[14px] font-[400] text-[#4B5563]  mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] text-[#6B7280]">
                    Pairs well with:
                  </span>
                  <span className="text-[11px] text-[#111111]">
                    Inter
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === "templates" && (
        <div className="p-[24px] gap-[13px] grid grid-cols-4">
          {/* Classic Novel */}
          <div className="h-[324px] bg-[#FFFFFF] rounded-[10px] border border-[#E5E7EC]  flex flex-col gap-[12px] p-[12px] ">
            <div className=" h-[198px] rounded-[5px] overflow-hidden flex items-center justify-center">
              <img
                src="https://picsum.photos/seed/classic-novel/150/180"
                alt="Classic Novel"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex  flex-col gap-[10px]">
              <div className="flex items-center justify-between">
                <h3 className="text-[12px] font-[600] text-[#111111]">
                  Classic Novel
                </h3>
                <span className="h-[24px] w-[64px] rounded-full inline-block px-[16px] py-[4px] bg-[#FF96001A] text-[#E58700] text-[10px] font-[400]">
                  Fiction
                </span>
              </div>
              <p className="text-[10px] text-[#7C8091] font-[400]">
                Traditional layout for fiction novels
              </p>
              <button className="cursor-pointer h-[30px] w-full bg-[#FF9600] text-white px-[12px] rounded-[4px] text-[16px] font-[500] text-[#FFFFFF] ">
                Use Template
              </button>
            </div>
          </div>

          {/* Modern Textbook */}
          <div className="h-[324px] bg-[#FFFFFF] rounded-[10px] border border-[#E5E7EC]  flex flex-col gap-[12px] p-[12px] ">
            <div className=" h-[198px] rounded-[5px] overflow-hidden flex items-center justify-center">
              <img
                src="https://picsum.photos/seed/modern-textbook/150/180"
                alt="Modern Textbook"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex  flex-col gap-[10px]">
              <div className="flex items-center justify-between">
                <h3 className="text-[12px] font-[600] text-[#111111]">
                  Modern Textbook
                </h3>
                <span className="h-[24px] w-[80px] rounded-full inline-block px-[16px] py-[4px] bg-[#FF96001A] text-[#E58700] text-[10px] font-[400]">
                  Education
                </span>
              </div>
              <p className="text-[10px] text-[#7C8091] font-[400]">
                Educational content with clear structure
              </p>
              <button className="cursor-pointer h-[30px] w-full bg-[#FF9600] text-white px-[12px] rounded-[4px] text-[16px] font-[500] text-[#FFFFFF] ">
                Use Template
              </button>
            </div>
          </div>

          {/* Business Book */}
          <div className="h-[324px] bg-[#FFFFFF] rounded-[10px] border border-[#E5E7EC]  flex flex-col gap-[12px] p-[12px] ">
            <div className=" h-[198px] rounded-[5px] overflow-hidden flex items-center justify-center">
              <img
                src="https://picsum.photos/seed/business-book/150/180"
                alt="Business Book"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center justify-between">
                <h3 className="text-[12px] font-[600] text-[#111111]">
                  Business Book
                </h3>
                <span className="h-[24px] w-[88px] rounded-full inline-block px-[16px] py-[4px] bg-[#FF96001A] text-[#E58700] text-[10px] font-[400]">
                  Non-Fiction
                </span>
              </div>
              <p className="text-[10px] text-[#7C8091] font-[400]">
                Professional layout for business content
              </p>
              <button className="cursor-pointer h-[30px] w-full bg-[#FF9600] text-white px-[12px] rounded-[4px] text-[16px] font-[500] text-[#FFFFFF]">
                Use Template
              </button>
            </div>
          </div>

          {/* Children's Book */}
          <div className="h-[324px] bg-[#FFFFFF] rounded-[10px] border border-[#E5E7EC]  flex flex-col gap-[12px] p-[12px]">
            <div className=" h-[198px] rounded-[5px] overflow-hidden flex items-center justify-center">
              <img
                src="https://picsum.photos/seed/children-book/150/180"
                alt="Children Book"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center justify-between">
                <h3 className="text-[12px] font-[600] text-[#111111]">
                  Children's Book
                </h3>
                <span className="h-[24px] w-[72px] rounded-full inline-block px-[16px] py-[4px] bg-[#FF96001A] text-[#E58700] text-[10px] font-[400]">
                  Children
                </span>
              </div>
              <p className="text-[10px] text-[#7C8091] font-[400] leading-relaxed">
                Colorful layout for young readers
              </p>
              <button className="cursor-pointer h-[30px] w-full bg-[#FF9600] text-white px-[12px] rounded-[4px] text-[16px] font-[500] text-[#FFFFFF]">
                Use Template
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default DesignToolsView;

import React from "react";
import { CardPanel, OrangeButton, PageHeader } from "../Shared";

const DesignToolsView = ({ tab, onTabChange }) => (
  <div className="space-y-4">
    <PageHeader
      title="Design Tools"
      subtitle="Create beautiful book layouts and covers"
      action={<OrangeButton>Save Design</OrangeButton>}
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
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-4 text-[12px]">
            {/* Cover Information Section */}
            <div className="space-y-3">
              <p className="font-semibold text-[#1D2232]">Cover Information</p>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-[12px] text-[#1D2232]">
                    Book Title
                  </label>
                  <input
                    className="w-full rounded-md border border-[#E5E7EB] px-3 py-2"
                    placeholder="Your Book Title"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[12px] text-[#1D2232]">Subtitle</label>
                  <input
                    className="w-full rounded-md border border-[#E5E7EB] px-3 py-2"
                    placeholder="Subtitle Goes Here"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[12px] text-[#1D2232]">
                    Author Name
                  </label>
                  <input
                    className="w-full rounded-md border border-[#E5E7EB] px-3 py-2"
                    placeholder="Author Name"
                  />
                </div>
              </div>
            </div>

            {/* Cover Style Section */}
            <div className="space-y-2">
              <p className="font-semibold text-[#1D2232]">Cover Style</p>
              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-md border border-[#EAEAEA] p-2">
                  <img
                    src="https://picsum.photos/seed/modern-minimalist/300/160"
                    alt="Modern Minimalist"
                    className="h-24 w-full rounded object-cover"
                  />
                  <p className="mt-1 text-[11px] font-semibold text-[#1D2232]">
                    Modern Minimalist
                  </p>
                </div>
                <div className="rounded-md border border-[#EAEAEA] p-2">
                  <img
                    src="https://picsum.photos/seed/classic-elegant/300/160"
                    alt="Classic Elegant"
                    className="h-24 w-full rounded object-cover"
                  />
                  <p className="mt-1 text-[11px] font-semibold text-[#1D2232]">
                    Classic Elegant
                  </p>
                </div>
                <div className="rounded-md border border-[#EAEAEA] p-2">
                  <img
                    src="https://picsum.photos/seed/artistic-abstract/300/160"
                    alt="Artistic Abstract"
                    className="h-24 w-full rounded object-cover"
                  />
                  <p className="mt-1 text-[11px] font-semibold text-[#1D2232]">
                    Artistic Abstract
                  </p>
                </div>
              </div>
              <OrangeButton className="w-full">
                Upload Custom Image
              </OrangeButton>
            </div>
          </div>

          {/* Preview Section */}
          <div className="rounded-md border border-[#E5E7EB] bg-[#F9FAFB] p-3">
            <img
              src="https://picsum.photos/seed/coverpreview/350/500"
              alt="preview"
              className="mx-auto h-[390px] w-[250px] rounded object-cover"
            />
            <div className="mt-4 flex gap-2">
              <button className="flex-1 bg-[#FF9800] text-white px-3 py-2 rounded text-[12px] font-medium hover:bg-[#F57C00] transition-colors">
                Save Cover
              </button>
              <button className="flex-1 bg-white text-[#1D2232] border border-[#E5E7EB] px-3 py-2 rounded text-[12px] font-medium hover:bg-[#F9FAFB] transition-colors">
                Reset
              </button>
            </div>
          </div>
        </div>
      )}

      {tab === "typography" && (
        <div className="space-y-4">
          {/* Font Pairing Suggestions Alert */}
          <div className="rounded-md border border-[#FFBD67] bg-[#FFF8EE] p-4">
            <div className="flex items-start gap-2">
              <div className="mt-0.5 h-4 w-4 rounded-full bg-[#FF9800] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[10px] font-bold">i</span>
              </div>
              <div>
                <h3 className="text-[14px] font-semibold text-[#C77500] mb-1">
                  Font Pairing Suggestions
                </h3>
                <p className="text-[12px] text-[#C77500] leading-relaxed">
                  Pair serif fonts for body text with sans-serif fonts for
                  headings, or vice versa. This creates visual hierarchy and
                  improves readability.
                </p>
              </div>
            </div>
          </div>

          {/* Font Selection Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Merriweather Card */}
            <div className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm p-4 relative">
              <button className="absolute top-4 right-4 bg-[#FF9800] text-white px-3 py-1.5 rounded-md text-[12px] font-medium hover:bg-[#F57C00] transition-colors">
                Select
              </button>
              <div className="pr-20">
                <h4 className="text-[18px] font-bold text-[#1D2232] mb-1">
                  Merriweather
                </h4>
                <p className="text-[12px] text-[#6B7280] mb-3">Serif</p>
                <p
                  className="text-[24px] text-[#1D2232] mb-2 leading-tight"
                  style={{ fontFamily: "Merriweather, serif" }}
                >
                  The Quick Brown Fox
                </p>
                <p className="text-[12px] text-[#6B7280] leading-relaxed mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] text-[#6B7280]">
                    Pairs well with:
                  </span>
                  <span className="text-[11px] text-[#FF9800] font-medium cursor-pointer hover:underline">
                    Inter
                  </span>
                </div>
              </div>
            </div>

            {/* Playfair Display Card */}
            <div className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm p-4 relative">
              <button className="absolute top-4 right-4 bg-[#FF9800] text-white px-3 py-1.5 rounded-md text-[12px] font-medium hover:bg-[#F57C00] transition-colors">
                Select
              </button>
              <div className="pr-20">
                <h4 className="text-[18px] font-bold text-[#1D2232] mb-1">
                  Playfair Display
                </h4>
                <p className="text-[12px] text-[#6B7280] mb-3">Serif</p>
                <p
                  className="text-[24px] text-[#1D2232] mb-2 leading-tight"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  The Quick Brown Fox
                </p>
                <p className="text-[12px] text-[#6B7280] leading-relaxed mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] text-[#6B7280]">
                    Pairs well with:
                  </span>
                  <span className="text-[11px] text-[#FF9800] font-medium cursor-pointer hover:underline">
                    Roboto
                  </span>
                </div>
              </div>
            </div>

            {/* Lora Card */}
            <div className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm p-4 relative">
              <button className="absolute top-4 right-4 bg-[#FF9800] text-white px-3 py-1.5 rounded-md text-[12px] font-medium hover:bg-[#F57C00] transition-colors">
                Select
              </button>
              <div className="pr-20">
                <h4 className="text-[18px] font-bold text-[#1D2232] mb-1">
                  Lora
                </h4>
                <p className="text-[12px] text-[#6B7280] mb-3">Serif</p>
                <p
                  className="text-[24px] text-[#1D2232] mb-2 leading-tight"
                  style={{ fontFamily: "Lora, serif" }}
                >
                  The Quick Brown Fox
                </p>
                <p className="text-[12px] text-[#6B7280] leading-relaxed mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] text-[#6B7280]">
                    Pairs well with:
                  </span>
                  <span className="text-[11px] text-[#FF9800] font-medium cursor-pointer hover:underline">
                    Open Sans
                  </span>
                </div>
              </div>
            </div>

            {/* Crimson Text Card */}
            <div className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm p-4 relative">
              <button className="absolute top-4 right-4 bg-[#FF9800] text-white px-3 py-1.5 rounded-md text-[12px] font-medium hover:bg-[#F57C00] transition-colors">
                Select
              </button>
              <div className="pr-20">
                <h4 className="text-[18px] font-bold text-[#1D2232] mb-1">
                  Crimson Text
                </h4>
                <p className="text-[12px] text-[#6B7280] mb-3">Serif</p>
                <p
                  className="text-[24px] text-[#1D2232] mb-2 leading-tight"
                  style={{ fontFamily: "Crimson Text, serif" }}
                >
                  The Quick Brown Fox
                </p>
                <p className="text-[12px] text-[#6B7280] leading-relaxed mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] text-[#6B7280]">
                    Pairs well with:
                  </span>
                  <span className="text-[11px] text-[#FF9800] font-medium cursor-pointer hover:underline">
                    Montserrat
                  </span>
                </div>
              </div>
            </div>

            {/* Open Sans Card */}
            <div className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm p-4 relative">
              <button className="absolute top-4 right-4 bg-[#FF9800] text-white px-3 py-1.5 rounded-md text-[12px] font-medium hover:bg-[#F57C00] transition-colors">
                Select
              </button>
              <div className="pr-20">
                <h4 className="text-[18px] font-bold text-[#1D2232] mb-1">
                  Open Sans
                </h4>
                <p className="text-[12px] text-[#6B7280] mb-3">Sans-Serif</p>
                <p
                  className="text-[24px] text-[#1D2232] mb-2 leading-tight"
                  style={{ fontFamily: "Open Sans, sans-serif" }}
                >
                  The Quick Brown Fox
                </p>
                <p className="text-[12px] text-[#6B7280] leading-relaxed mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] text-[#6B7280]">
                    Pairs well with:
                  </span>
                  <span className="text-[11px] text-[#FF9800] font-medium cursor-pointer hover:underline">
                    Lora
                  </span>
                </div>
              </div>
            </div>

            {/* Roboto Card */}
            <div className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm p-4 relative">
              <button className="absolute top-4 right-4 bg-[#FF9800] text-white px-3 py-1.5 rounded-md text-[12px] font-medium hover:bg-[#F57C00] transition-colors">
                Select
              </button>
              <div className="pr-20">
                <h4 className="text-[18px] font-bold text-[#1D2232] mb-1">
                  Roboto
                </h4>
                <p className="text-[12px] text-[#6B7280] mb-3">Sans-Serif</p>
                <p
                  className="text-[24px] text-[#1D2232] mb-2 leading-tight"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  The Quick Brown Fox
                </p>
                <p className="text-[12px] text-[#6B7280] leading-relaxed mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] text-[#6B7280]">
                    Pairs well with:
                  </span>
                  <span className="text-[11px] text-[#FF9800] font-medium cursor-pointer hover:underline">
                    Playfair Display
                  </span>
                </div>
              </div>
            </div>

            {/* Montserrat Card */}
            <div className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm p-4 relative">
              <button className="absolute top-4 right-4 bg-[#FF9800] text-white px-3 py-1.5 rounded-md text-[12px] font-medium hover:bg-[#F57C00] transition-colors">
                Select
              </button>
              <div className="pr-20">
                <h4 className="text-[18px] font-bold text-[#1D2232] mb-1">
                  Montserrat
                </h4>
                <p className="text-[12px] text-[#6B7280] mb-3">Sans-Serif</p>
                <p
                  className="text-[24px] text-[#1D2232] mb-2 leading-tight"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  The Quick Brown Fox
                </p>
                <p className="text-[12px] text-[#6B7280] leading-relaxed mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] text-[#6B7280]">
                    Pairs well with:
                  </span>
                  <span className="text-[11px] text-[#FF9800] font-medium cursor-pointer hover:underline">
                    Crimson Text
                  </span>
                </div>
              </div>
            </div>

            {/* OpenDyslexic Card */}
            <div className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm p-4 relative">
              <button className="absolute top-4 right-4 bg-[#FF9800] text-white px-3 py-1.5 rounded-md text-[12px] font-medium hover:bg-[#F57C00] transition-colors">
                Select
              </button>
              <div className="pr-20">
                <h4 className="text-[18px] font-bold text-[#1D2232] mb-1">
                  OpenDyslexic
                </h4>
                <p className="text-[12px] text-[#6B7280] mb-3">Accessibility</p>
                <p
                  className="text-[24px] text-[#1D2232] mb-2 leading-tight"
                  style={{ fontFamily: "OpenDyslexic, sans-serif" }}
                >
                  The Quick Brown Fox
                </p>
                <p className="text-[12px] text-[#6B7280] leading-relaxed mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex items-center gap-1">
                  <span className="text-[11px] text-[#6B7280]">
                    Pairs well with:
                  </span>
                  <span className="text-[11px] text-[#FF9800] font-medium cursor-pointer hover:underline">
                    Inter
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === "templates" && (
        <div className="grid grid-cols-4 gap-4">
          {/* Classic Novel */}
          <div className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm overflow-hidden">
            <div className="aspect-[2/3] bg-gray-100 p-4 flex items-center justify-center">
              <img
                src="https://picsum.photos/seed/classic-novel/150/180"
                alt="Classic Novel"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[14px] font-semibold text-[#1D2232]">
                  Classic Novel
                </h3>
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-[10px] font-medium rounded">
                  Fiction
                </span>
              </div>
              <p className="text-[11px] text-[#6B7280] mb-3 leading-relaxed">
                Traditional layout for fiction novels
              </p>
              <button className="w-full bg-[#FF9800] text-white px-3 py-1.5 rounded text-[11px] font-medium hover:bg-[#F57C00] transition-colors">
                Use Template
              </button>
            </div>
          </div>

          {/* Modern Textbook */}
          <div className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm overflow-hidden">
            <div className="aspect-[2/3] bg-blue-50 p-4 flex items-center justify-center">
              <img
                src="https://picsum.photos/seed/modern-textbook/150/180"
                alt="Modern Textbook"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[14px] font-semibold text-[#1D2232]">
                  Modern Textbook
                </h3>
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-[10px] font-medium rounded">
                  Education
                </span>
              </div>
              <p className="text-[11px] text-[#6B7280] mb-3 leading-relaxed">
                Educational content with clear structure
              </p>
              <button className="w-full bg-[#FF9800] text-white px-3 py-1.5 rounded text-[11px] font-medium hover:bg-[#F57C00] transition-colors">
                Use Template
              </button>
            </div>
          </div>

          {/* Business Book */}
          <div className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm overflow-hidden">
            <div className="aspect-[2/3] bg-green-50 p-4 flex items-center justify-center">
              <img
                src="https://picsum.photos/seed/business-book/150/180"
                alt="Business Book"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[14px] font-semibold text-[#1D2232]">
                  Business Book
                </h3>
                <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-[10px] font-medium rounded">
                  Non-Fiction
                </span>
              </div>
              <p className="text-[11px] text-[#6B7280] mb-3 leading-relaxed">
                Professional layout for business content
              </p>
              <button className="w-full bg-[#FF9800] text-white px-3 py-1.5 rounded text-[11px] font-medium hover:bg-[#F57C00] transition-colors">
                Use Template
              </button>
            </div>
          </div>

          {/* Children's Book */}
          <div className="bg-white rounded-lg border border-[#E5E7EB] shadow-sm overflow-hidden">
            <div className="aspect-[2/3] bg-pink-50 p-4 flex items-center justify-center">
              <img
                src="https://picsum.photos/seed/children-book/150/180"
                alt="Children Book"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-[14px] font-semibold text-[#1D2232]">
                  Children's Book
                </h3>
                <span className="inline-block px-2 py-1 bg-pink-100 text-pink-700 text-[10px] font-medium rounded">
                  Children
                </span>
              </div>
              <p className="text-[11px] text-[#6B7280] mb-3 leading-relaxed">
                Colorful layout for young readers
              </p>
              <button className="w-full bg-[#FF9800] text-white px-3 py-1.5 rounded text-[11px] font-medium hover:bg-[#F57C00] transition-colors">
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

import React from "react";
import { CardPanel, OrangeButton, OutlineButton, PageHeader } from "../Shared";

const writingTools = [
  {
    title: "Idea Generator",
    description: "Get creative ideas for your content",
    glyph: "💡",
  },
  {
    title: "Expand Text",
    description: "Expand your paragraphs with more details",
    glyph: "T",
  },
  {
    title: "Improve Grammar",
    description: "Fix grammar and improve tone",
    glyph: "🔤",
  },
  { title: "Summarize", description: "Create concise summaries", glyph: "📄" },
  {
    title: "Rewrite",
    description: "Rewrite content in different style",
    glyph: "🔁",
  },
  {
    title: "Explain Simply",
    description: "Explain like a teacher mode",
    glyph: "💬",
  },
];
const outlineMap = {
  chapters: [
    { title: "Introduction to React", words: 3200 },
    { title: "Components and Props", words: 4100 },
    { title: "State and Lifecycle", words: 3800 },
    { title: "Handling Events", words: 2900 },
    { title: "Conditional Rendering", words: 3450 },
  ],
  characters: [
    {
      title: "Alex Thompson",
      words: "A passionate developer learning React",
      tag: "Protagonist",
    },
    {
      title: "Sarah Chen",
      words: "Senior developer guiding Alex",
      tag: "Mentor",
    },
    {
      title: "Mike Rodriguez",
      words: "Project manager overseeing development",
      tag: "Team Lead",
    },
  ],
  locations: [
    {
      title: "Tech Startup Office",
      words: "Modern co-working space in downtown",
    },
    {
      title: "Coffee Shop",
      words: "Local café where team meets for discussions",
    },
    { title: "Conference Room", words: "Main meeting space for presentations" },
  ],
  timeline: [
    {
      title: "Project Kickoff",
      words: "Team assembles and project begins",
      tag: "Week 1",
    },
    {
      title: "First Milestone",
      words: "Basic components completed",
      tag: "Week 2",
    },
    {
      title: "Mid-Project Review",
      words: "Progress evaluation and adjustments",
      tag: "Week 3",
    },
  ],
};

const RowIcon = ({ children }) => (
  <span className="flex h-5 w-5 items-center justify-center rounded text-[#98A0B0]">
    {children}
  </span>
);

const OutlineDot = () => (
  <span className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#DCFCE7]">
    <svg
      viewBox="0 0 24 24"
      className="h-[12px] w-[12px] text-[#FF9600]"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path d="m5 13 4 4L19 7" />
    </svg>
  </span>
);

const Toggle = ({ enabled }) => (
  <span
    className={`relative inline-flex h-[20px] w-[40px] items-center rounded-full transition ${
      enabled ? "bg-[#FF9600]" : "bg-[#E5E7EB]"
    }`}
  >
    <span
      className={`inline-block h-[16px] w-[16px] transform rounded-full bg-white transition ${
        enabled ? "translate-x-5" : "translate-x-0.7"
      }`}
    />
  </span>
);

const WritingStudioView = ({
  outlineTab,
  onOutlineTabChange,
  onOpenGuidelines,
}) => (
  <div className="flex flex-col gap-[24px]">
    <PageHeader
      title="My Book Maker"
      subtitle="Manage your books in one place"
      action={
        <div className="flex gap-2">
          <OutlineButton onClick={onOpenGuidelines}>
            Upload Guidelines
          </OutlineButton>
          <OutlineButton>Save Draft</OutlineButton>
          <button className="rounded-[4px] border border-[#FF9600] bg-[#FF9600] px-[16px] cursor-pointer h-[40px] text-[16px] font-[500] text-[#ffffff]">
            Publish Chapter
          </button>
        </div>
      }
    />

    <div className="flex gap-[24px]">
      <div className="space-y-3">
        <CardPanel>
          <p className="text-[13px] font-[600] text-[#111111]">Current Book</p>
          <div className="h-[39px] px-[10px] flex items-center bg-[#F9F9F9] rounded-[8px] border border-[#E5E7EB] text-[13px] font-[400] text-[#111111]">
            Learning React in 30 Days
          </div>
        </CardPanel>

        <CardPanel>
          <p className="text-[13px] font-[600] text-[#111111]">
            Writing Progress
          </p>
          <div className="flex justify-between text-[13px] font-[400] text-[#7C8091]">
            <span>Word Count</span>
            <span className="text-[12px] font-[600] text-[#111111]">
              28,450
            </span>
          </div>
          <div className="flex justify-between text-[13px] font-[400] text-[#7C8091]">
            <span>Goal</span>
            <span className="text-[12px] font-[600] text-[#111111]">
              50,000
            </span>
          </div>
          <div className="h-[8px] rounded-full bg-[#FF96001A]">
            <div className="h-[8px] w-[57%] rounded-full bg-[#FF9600]" />
          </div>
          <p className="text-center text-[11px] font-[400] text-[#7C8091]">
            57% Complete
          </p>
        </CardPanel>

        <CardPanel>
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[13px] font-[600] text-[#111111]">
              Writing Outline
            </p>

            <svg
              className="w-[16px] h-[16px] text-[#000000]"
              viewBox="0 0 24 24"
              fill="none"
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
          <div className="h-[40px] flex items-center justify-between border-[0.5px] border-[#E5E7EC] rounded-[8px] bg-[#F9F9F9] p-[5px]">
            {Object.keys(outlineMap).map((tab) => (
              <button
                type="button"
                key={tab}
                onClick={() => onOutlineTabChange(tab)}
                className={`h-[32px] w-[76px] rounded-[6px] text-[12px] font-[400] capitalize ${
                  outlineTab === tab
                    ? "bg-[#FFFFFF] text-[#111111]"
                    : "text-[#7C8091]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="max-h-[230px] overflow-y-auto pr-1">
            {outlineMap[outlineTab].map((item) => (
              <div
                key={item.title}
                className="rounded-[8px] h-[66px] flex items-center"
              >
                <div className="flex items-start gap-[10px]">
                  <div>
                    <OutlineDot />
                  </div>
                  <div>
                    <p className="text-[12px] font-[600] text-[#111111]">
                      {item.title}
                    </p>
                    <p className="text-[10px] font-[400] text-[#FF9600]">
                      {item.tag}
                    </p>
                    <p className="text-[11px] font-[400] text-[#7C8091]">
                      {item.words.toLocaleString()} words
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="h-[44px] w-full rounded-[8px] border border-dashed border-[#7C809180] py-[8px] px-[12px] text-[12px] text-[#7C8091] font-[400]"
          >
            + Add New {outlineTab === "chapters" ? "Chapter" : "Item"}
          </button>
        </CardPanel>
      </div>

      <div className="w-[630px]">
        <div className="flex flex-col gap-[16px]">
          <div
            className="w-[630px] h-[62px] rounded-[12px] border border-[#E5E7EB] bg-[#FFFFFF] flex items-center justify-around shadow: 0px 1px 7px 0px #00000008;
"
          >
            <div className="flex items-center justify-center w-[110px] h-[35px] rounded-[4px] border border-[#E5E7EB] bg-[#FFFFFF] text-[13px] font-[400] text-[#111111]">
              Paragraph ▾
            </div>
            <div className="w-[357px] h-[36px] gap-[3px] flex items-center justify-around text-[16px] text-[#7C8091]">
              <RowIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                  <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
                </svg>
              </RowIcon>
              <RowIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 4H5l7 16 7-16z" />
                </svg>
              </RowIcon>
              <RowIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 4v16M18 4v16" />
                </svg>
              </RowIcon>
              <RowIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              </RowIcon>
              <RowIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12h18M12 3v18" />
                </svg>
              </RowIcon>
              <RowIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 3v18M16 3v18" />
                </svg>
              </RowIcon>
              <RowIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                </svg>
              </RowIcon>
              <RowIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-3.5-3.5L15 15" />
                </svg>
              </RowIcon>
              <RowIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 8h18M8 21v-6M12 21v-6M16 21v-6" />
                </svg>
              </RowIcon>
            </div>
            <button className="flex items-center justify-center gap-[5px] w-[90px] h-[32px] rounded-[6px] border border-[#FF9600] text-[13px] font-[600] text-[#FF9600]">
              AI Tools
            </button>
          </div>
          <div
            className="rounded-[12px] border border-[#E5E7EB] bg-[#FFFFFF] min-h-[600px] p-[24px] shadow: 0px 1px 7px 0px #00000008;
"
          >
            <h3 className="text-[23px] font-[700] leading-[32px] text-[#111111]">
              Chapter 8: Hooks Deep Dive
            </h3>
            <p className="mb-[32px] text-[15px] leading-[26px] font-[400] text-[#7C8091]">
              React Hooks revolutionized the way we write React components by
              allowing us to use state and other features without writing a
              class. In this chapter, we&apos;ll explore the most commonly used
              hooks and learn how to create custom hooks for reusable logic.
            </p>
            <h4 className="text-[18.4px] font-[600] leading-[32px] text-[#111111]">
              Understanding useState
            </h4>
            <p className="text-[15px] leading-[26px] font-[400] text-[#7C8091]">
              The useState hook is the most fundamental hook in React. It allows
              functional components to have state variables. When you call
              useState, it returns an array with two elements: the current state
              value and a function to update it.
            </p>
          </div>
          <div className="h-[54px] bg-[#FFFFFF] flex items-center gap-[55px] px-[20px] rounded-[12px] border border-[#E5E7EB] text-[12.6px] text-[#7C8091] font-[400]">
            <div className="flex gap-[24px]">
              <span>
                Words: <span className="font-[700] text-[#111111]">3,000</span>
              </span>
              <span>
                Characters:{" "}
                <span className="font-[700] text-[#111111]">18,450</span>
              </span>
              <span>
                Reading Time:{" "}
                <span className="font-[700] text-[#111111]">12 min</span>
              </span>
            </div>
            <span>Last saved: 2 minutes ago</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[16px] w-[316px]">
        <div className="flex flex-col gap-[12px] p-[20px] rounded-[12px] border border-[#E5E7EB] bg-[#FFFFFF] flex shadow: 0px 1px 7px 0px #00000008">
          <div className="flex items-center gap-2">
            <span className="text-[#E58700]">✧</span>
            <p className="text-[13px] font-[600] text-[#111111]">
              AI Writing Tools
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            {writingTools.map((tool) => (
              <button
                key={tool.title}
                type="button"
                className="h-[64px] w-full rounded-[8px] border border-[#E5E7EB] px-3 text-left"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-[32px] w-[32px] rounded-[8px] items-center justify-center bg-[#FF960014] text-[16px] text-[#E58700]">
                    {tool.glyph}
                  </span>
                  <div>
                    <p className="text-[12px] font-[600] text-[#111111]">
                      {tool.title}
                    </p>
                    <p className="text-[10px] font-[400] text-[#7C8091]">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div
          title="Today's Goal"
          className="flex flex-col gap-[16px] w-[316px] p-[20px] rounded-[12px] border border-[#E5E7EB] bg-[#FFFFFF] flex shadow: 0px 1px 7px 0px #00000008"
        >
          <p className="text-[13px] font-[600] text-[#111111]">Today's Goal</p>
          <div className="flex flex-col gap-[12px] text-[12px] font-[400] text-[#7C8091]">
            <div className="flex justify-between">
              <span>Target</span>
              <span className="text-[12px] font-[600] text-[#111111]">
                2,000 words
              </span>
            </div>
            <div className="flex justify-between">
              <span>Written</span>
              <span className="text-[12px] font-[600] text-[#111111]">
                1,450 words
              </span>
            </div>
          </div>
          <div className="h-[8px] rounded-full bg-[#FF96001A]">
            <div className="h-[8px] w-[72%] rounded-full bg-[#FF9600]" />
          </div>
          <p className="text-center text-[11px] font-[400] text-[#7C8091]">
            550 words to go!
          </p>
        </div>

        <div
          title="Quick Settings"
          className="flex flex-col gap-[16px] w-[316px] p-[20px] rounded-[12px] border border-[#E5E7EB] bg-[#FFFFFF] flex shadow: 0px 1px 7px 0px #00000008"
        >
          <p className="text-[13px] font-[600] text-[#111111]">
            Quick Settings
          </p>

          <div className="flex flex-col gap-[8px] text-[13px] font-[400] text-[#7C8091]">
            <div className="flex items-center justify-between">
              <span>Auto-save</span>
              <Toggle enabled />
            </div>
            <div className="flex items-center justify-between">
              <span>Focus Mode</span>
              <Toggle enabled={false} />
            </div>
            <div className="flex items-center justify-between">
              <span>Spell Check</span>
              <Toggle enabled />
            </div>
          </div>
        </div>

        <div
          title="Version History"
          className="flex flex-col gap-[16px] w-[316px] p-[20px] rounded-[12px] border border-[#E5E7EB] bg-[#FFFFFF] flex shadow: 0px 1px 7px 0px #00000008"
        >
          <p className="text-[13px] font-[600] text-[#111111]">
            Version History
          </p>

          <div className="flex flex-col gap-[8px] text-[11px] font-[400] text-[#7C8091]">
            <p>
              <span className=" text-[13px] font-[600] text-[#111111] ">
                Current Version
              </span>
              <br />2 minutes ago
            </p>
            <p>
              <span className=" text-[13px] font-[600] text-[#111111] ">
                Auto-saved
              </span>
              <br />
              15 minutes ago
            </p>
            <p>
              <span className=" text-[13px] font-[600] text-[#111111] ">
                Manual save
              </span>
              <br />1 hour ago
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WritingStudioView;

import React from 'react'
import { CardPanel, OrangeButton, OutlineButton, PageHeader } from '../Shared'

const writingTools = [
  { title: 'Idea Generator', description: 'Get creative ideas for your content', glyph: '💡' },
  { title: 'Expand Text', description: 'Expand your paragraphs with more details', glyph: 'T' },
  { title: 'Improve Grammar', description: 'Fix grammar and improve tone', glyph: '🔤' },
  { title: 'Summarize', description: 'Create concise summaries', glyph: '📄' },
  { title: 'Rewrite', description: 'Rewrite content in different style', glyph: '🔁' },
  { title: 'Explain Simply', description: 'Explain like a teacher mode', glyph: '💬' },
]
const outlineMap = {
  chapters: ['Introduction to React', 'Components and Props', 'State and Lifecycle', 'Handling Events'],
  characters: ['Alex Thompson', 'Sarah Chen', 'Mike Rodriguez'],
  locations: ['Tech Startup Office', 'Coffee Shop', 'Conference Room'],
  timeline: ['Project Kickoff', 'First Milestone', 'Mid-Project Review'],
}

const RowIcon = ({ children }) => (
  <span className='flex h-5 w-5 items-center justify-center rounded text-[#98A0B0]'>{children}</span>
)

const OutlineDot = () => (
  <span className='flex h-4 w-4 items-center justify-center rounded-full border border-[#B7E8C1] bg-[#EBFBF0]'>
    <svg viewBox='0 0 24 24' className='h-2.5 w-2.5 text-[#4CAF50]' fill='none' stroke='currentColor' strokeWidth='3'>
      <path d='m5 13 4 4L19 7' />
    </svg>
  </span>
)

const Toggle = ({ enabled }) => (
  <span
    className={`relative inline-flex h-4 w-8 items-center rounded-full transition ${
      enabled ? 'bg-[#FF9800]' : 'bg-[#E5E7EB]'
    }`}
  >
    <span
      className={`inline-block h-3 w-3 transform rounded-full bg-white shadow transition ${
        enabled ? 'translate-x-4' : 'translate-x-0.5'
      }`}
    />
  </span>
)

const WritingStudioView = ({ outlineTab, onOutlineTabChange, onOpenGuidelines }) => (
  <div className='space-y-4'>
    <PageHeader
      title='My Book Maker'
      subtitle='Manage your books in one place'
      action={
        <div className='flex gap-2'>
          <OutlineButton onClick={onOpenGuidelines}>Upload Guidelines</OutlineButton>
          <OutlineButton>Save Draft</OutlineButton>
          <OrangeButton>Publish Chapter</OrangeButton>
        </div>
      }
    />

    <div className='grid grid-cols-[282px_minmax(0,1fr)_238px] gap-3'>
      <div className='space-y-3'>
        <CardPanel>
          <p className='mb-1 text-[11px] font-semibold text-[#1D2232]'>Current Book</p>
          <div className='rounded-md border border-[#E6E9EF] px-3 py-2.5 text-[12px] text-[#6F7687]'>
            Learning React in 30 Days
          </div>
        </CardPanel>

        <CardPanel>
          <p className='mb-2 text-[11px] font-semibold text-[#1D2232]'>Writing Progress</p>
          <div className='mb-1 flex justify-between text-[12px] text-[#8C93A4]'><span>Word Count</span><span className='font-semibold text-[#1D2232]'>28,450</span></div>
          <div className='mb-1 flex justify-between text-[12px] text-[#8C93A4]'><span>Goal</span><span className='font-semibold text-[#1D2232]'>50,000</span></div>
          <div className='h-2 rounded-full bg-[#FCE4BE]'><div className='h-2 w-[57%] rounded-full bg-[#FF9800]' /></div>
          <p className='mt-2 text-center text-[10px] text-[#9AA2B3]'>57% Complete</p>
        </CardPanel>

        <CardPanel>
          <div className='mb-2 flex items-center justify-between'>
            <p className='text-[11px] font-semibold text-[#1D2232]'>Writing Outline</p>
            <p className='text-[12px] text-[#7B8193]'>⌄</p>
          </div>
          <div className='mb-2 grid grid-cols-4 gap-1 rounded-md bg-[#F8F8F9] p-1'>
            {Object.keys(outlineMap).map((tab) => (
              <button
                type='button'
                key={tab}
                onClick={() => onOutlineTabChange(tab)}
                className={`rounded px-1 py-1 text-[10px] capitalize ${
                  outlineTab === tab ? 'bg-white text-[#374151]' : 'text-[#98A0B0]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className='max-h-[230px] space-y-1 overflow-y-auto pr-1'>
            {outlineMap[outlineTab].map((item) => (
              <div key={item} className='rounded border border-[#EAEAEA] p-2.5'>
                <p className='flex items-center gap-2 text-[11px] font-semibold text-[#1D2232]'><OutlineDot />{item}</p>
                <p className='mt-0.5 text-[10px] text-[#8E95A5]'>3,200 words</p>
              </div>
            ))}
          </div>
          <button type='button' className='mt-2 w-full rounded-md border border-dashed border-[#D8DDE7] py-2 text-[11px] text-[#95A0B3]'>
            + Add New {outlineTab === 'chapters' ? 'Chapter' : 'Item'}
          </button>
        </CardPanel>
      </div>

      <div className='space-y-3'>
        <CardPanel>
          <div className='mb-2 flex items-center justify-between gap-2'>
            <div className='rounded border border-[#E4E7EC] px-2 py-1 text-[11px] text-[#444]'>Paragraph ▾</div>
            <div className='flex items-center gap-1 text-[13px] text-[#A0A7B7]'>
              <RowIcon><b>B</b></RowIcon>
              <RowIcon><i>I</i></RowIcon>
              <RowIcon><span className='underline'>U</span></RowIcon>
              <RowIcon>≡</RowIcon>
              <RowIcon>☰</RowIcon>
              <RowIcon>↔</RowIcon>
              <RowIcon>🔗</RowIcon>
              <RowIcon>🖼</RowIcon>
            </div>
            <OutlineButton className='px-2 py-1 text-[11px]'>AI Tools</OutlineButton>
          </div>
          <div className='min-h-[268px] rounded-md border border-[#ECEFF5] p-5'>
            <h3 className='text-[35px] font-semibold leading-[1.2] text-[#1B2030]'>Chapter 8: Hooks Deep Dive</h3>
            <p className='mt-2 text-[14px] leading-6 text-[#8E95A5]'>
              React Hooks revolutionized the way we write React components by allowing us to use state and other features without writing a class. In this chapter, we&apos;ll explore the most commonly used hooks and learn how to create custom hooks for reusable logic.
            </p>
            <h4 className='mt-5 text-[32px] font-semibold leading-[1.2] text-[#1B2030]'>Understanding useState</h4>
            <p className='mt-2 text-[14px] leading-6 text-[#8E95A5]'>
              The useState hook is the most fundamental hook in React. It allows functional components to have state variables. When you call useState, it returns an array with two elements: the current state value and a function to update it.
            </p>
          </div>
          <div className='flex items-center justify-between rounded-md border border-[#ECEFF5] px-3 py-2 text-[11px] text-[#8E95A5]'>
            <div className='flex items-center gap-3'>
              <span>Words: <span className='font-semibold text-[#1D2232]'>3,000</span></span>
              <span>Characters: <span className='font-semibold text-[#1D2232]'>18,450</span></span>
              <span>Reading Time: <span className='font-semibold text-[#1D2232]'>12 min</span></span>
            </div>
            <span>Last saved: 2 minutes ago</span>
          </div>
        </CardPanel>
      </div>

      <div className='space-y-3'>
        <CardPanel>
          <div className='mb-2 flex items-center gap-2'>
            <span className='text-[#FF9800]'>✧</span>
            <p className='text-[14px] font-semibold text-[#1D2232]'>AI Writing Tools</p>
          </div>
          <div className='space-y-2'>
            {writingTools.map((tool) => (
              <button key={tool.title} type='button' className='w-full rounded-lg border border-[#E8EBF2] px-3 py-2.5 text-left'>
                <div className='flex items-center gap-3'>
                  <span className='flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#FFF6E9] text-[16px] text-[#FF9800]'>
                    {tool.glyph}
                  </span>
                  <div>
                    <p className='text-[13px] font-semibold text-[#1D2232]'>{tool.title}</p>
                    <p className='text-[11px] text-[#8F96A5]'>{tool.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </CardPanel>

        <CardPanel title="Today's Goal">
          <div className='space-y-1 text-[10px] text-[#8E95A5]'>
            <div className='flex justify-between'><span>Target</span><span className='font-semibold text-[#1D2232]'>2,000 words</span></div>
            <div className='flex justify-between'><span>Written</span><span className='font-semibold text-[#1D2232]'>1,450 words</span></div>
          </div>
          <div className='mt-2 h-1.5 rounded-full bg-[#FCE4BE]'><div className='h-1.5 w-[72%] rounded-full bg-[#FF9800]' /></div>
          <p className='mt-2 text-center text-[9px] text-[#8E95A5]'>550 words to go!</p>
        </CardPanel>

        <CardPanel title='Quick Settings'>
          <div className='space-y-2 text-[11px] text-[#6F7687]'>
            <div className='flex items-center justify-between'><span>Auto-save</span><Toggle enabled /></div>
            <div className='flex items-center justify-between'><span>Focus Mode</span><Toggle enabled={false} /></div>
            <div className='flex items-center justify-between'><span>Spell Check</span><Toggle enabled /></div>
          </div>
        </CardPanel>

        <CardPanel title='Version History'>
          <div className='space-y-2 text-[10px] text-[#8E95A5]'>
            <p><span className='font-semibold text-[#1D2232]'>Current Version</span><br />2 minutes ago</p>
            <p><span className='font-semibold text-[#1D2232]'>Auto-saved</span><br />15 minutes ago</p>
            <p><span className='font-semibold text-[#1D2232]'>Manual save</span><br />1 hour ago</p>
          </div>
        </CardPanel>
      </div>
    </div>
  </div>
)

export default WritingStudioView

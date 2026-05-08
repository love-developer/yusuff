import React from 'react'
import { CardPanel, OrangeButton, PageHeader, TopStatCard } from '../Shared'
import { IconBooks, IconChart, IconPublish, IconUsers } from '../icons'

const PublishingView = () => (
  <div className='space-y-4'>
    <PageHeader
      title='Collaboration'
      subtitle='Manage co-authors, editors, and team members'
      action={<OrangeButton>Publish Now</OrangeButton>}
    />
    <div className='grid grid-cols-4 gap-3'>
      <TopStatCard icon={<IconBooks className='h-4 w-4' />} value='8' label='Published Books' note='' />
      <TopStatCard icon={<IconPublish className='h-4 w-4' />} value='1,234' label='Total Downloads' note='' />
      <TopStatCard icon={<IconUsers className='h-4 w-4' />} value='156' label='Print Orders' note='' />
      <TopStatCard icon={<IconChart className='h-4 w-4' />} value='$2,847' label='Total Earnings' note='' />
    </div>
    <CardPanel>
      <div className='mb-3 flex gap-2'>
        {['Export', 'Print-on-Demand', 'Publish to Store', 'Distribution'].map((tab, i) => (
          <button key={tab} type='button' className={`rounded-md px-3 py-2 text-[12px] ${i === 0 ? 'bg-[#EAF7EF] text-[#3A7653]' : 'text-[#6F7687]'}`}>
            {tab}
          </button>
        ))}
      </div>
      <p className='mb-2 text-[13px] font-semibold text-[#1D2232]'>Select Export Formats</p>
      <div className='grid grid-cols-3 gap-2'>
        {['PDF', 'EPUB', 'MOBI', 'HTML', 'DOCX', 'Audiobook Script'].map((type, index) => (
          <button
            type='button'
            key={type}
            className={`rounded-md border p-3 text-left ${index === 0 ? 'border-[#FF9800] bg-[#FFF7EC]' : 'border-[#E5E7EB]'}`}
          >
            <p className='text-[13px] font-semibold text-[#1D2232]'>{type}</p>
            <p className='text-[11px] text-[#8E95A5]'>Export format settings</p>
            <p className='text-[10px] text-[#A0A7B7]'>Est. size: 2.5 MB</p>
          </button>
        ))}
      </div>
      <div className='mt-4 rounded-md bg-[#F9FAFB] p-3 text-[12px]'>
        <p className='mb-2 font-semibold text-[#1D2232]'>Export Settings</p>
        <div className='grid grid-cols-2 gap-2'>
          <input className='rounded border border-[#E5E7EB] px-3 py-2' defaultValue='High Quality (Print)' />
          <input className='rounded border border-[#E5E7EB] px-3 py-2' defaultValue='All Content' />
        </div>
        <div className='mt-2 space-y-1 text-[#6F7687]'>
          <label className='flex items-center gap-2'><input type='checkbox' defaultChecked />Include Table of Contents</label>
          <label className='flex items-center gap-2'><input type='checkbox' defaultChecked />Include Cover Page</label>
          <label className='flex items-center gap-2'><input type='checkbox' />Add Watermark</label>
        </div>
      </div>
      <OrangeButton className='mt-4 w-full py-2.5'>Export Selected Formats</OrangeButton>
    </CardPanel>
  </div>
)

export default PublishingView

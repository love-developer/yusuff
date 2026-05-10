import React from 'react'
import { CardPanel, OrangeButton, OutlineButton, PageHeader, TopStatCard } from '../Shared'
import { IconBooks, IconChart, IconPalette, IconPublish } from '../icons'

const AnalyticsView = () => (
  <div className='flex flex-col gap-[32px]'>
    <PageHeader
      title='Analytics'
      subtitle='Track your book performance and earnings'
      action={
        <div className='flex gap-2'>
          <OutlineButton>Last 30 Days</OutlineButton>
          <OrangeButton>Export Report</OrangeButton>
        </div>
      }
    />
    <div className='grid grid-cols-4 gap-3'>
      <TopStatCard icon={<IconBooks className='h-4 w-4' />} value='24,567' label='Total Views' note='+12.5%' />
      <TopStatCard icon={<IconPublish className='h-4 w-4' />} value='3,842' label='Total Downloads' note='+8.3%' />
      <TopStatCard icon={<IconPalette className='h-4 w-4' />} value='$12,847' label='Total Revenue' note='+15.7%' />
      <TopStatCard icon={<IconChart className='h-4 w-4' />} value='4.7' label='Average Rating' note='+0.2' />
    </div>
    <div className='grid grid-cols-2 gap-3'>
      <CardPanel title='Revenue Overview'>
        <div className='h-[190px] rounded bg-[#F9FAFB]' />
      </CardPanel>
      <CardPanel title='Reader Engagement'>
        {[
          ['Views', 24567, 'bg-[#2563EB]', 90],
          ['Downloads', 3842, 'bg-[#16A34A]', 76],
          ['Completed Reads', 2156, 'bg-[#9333EA]', 58],
          ['Reviews', 847, 'bg-[#D97706]', 49],
          ['Shares', 1234, 'bg-[#64748B]', 67],
        ].map(([label, value, cls, width]) => (
          <div key={label} className='mb-2'>
            <div className='mb-1 flex justify-between text-[11px] text-[#4B5563]'>
              <span>{label}</span>
              <span>{value}</span>
            </div>
            <div className='h-2 rounded-full bg-[#E7EAF0]'>
              <div className={`h-2 rounded-full ${cls}`} style={{ width: `${width}%` }} />
            </div>
          </div>
        ))}
      </CardPanel>
    </div>
    <CardPanel title='Book Performance'>
      <div className='grid grid-cols-[1.8fr_0.8fr_0.8fr_0.8fr_0.8fr_0.8fr] border-b border-[#ECECEC] pb-2 text-[11px] font-medium text-[#8E95A5]'>
        <span>BOOK</span><span>VIEWS</span><span>DOWNLOADS</span><span>REVENUE</span><span>RATING</span><span>ACTIONS</span>
      </div>
      {['The Digital Revolution', 'Modern Education', 'Science Simplified', 'Creative Writing Guide'].map((book) => (
        <div key={book} className='grid grid-cols-[1.8fr_0.8fr_0.8fr_0.8fr_0.8fr_0.8fr] items-center border-b border-[#F0F0F0] py-2 text-[12px]'>
          <span className='font-medium text-[#1D2232]'>{book}</span>
          <span>2,847</span><span>456</span><span>$2,475</span><span>4.8</span><button type='button' className='text-[#667085]'>View Details</button>
        </div>
      ))}
    </CardPanel>

    <div className='grid grid-cols-3 gap-3'>
      <CardPanel title='Top Performing Books'>
        <div className='space-y-2'>
          {[
            ['1', 'The Digital Revolution', '$1,247.5', 'https://picsum.photos/seed/ana1/80/80'],
            ['2', 'Modern Education', '$856.3', 'https://picsum.photos/seed/ana2/80/80'],
            ['3', 'Science Simplified', '$642.8', 'https://picsum.photos/seed/ana3/80/80'],
          ].map(([rank, title, amount, image]) => (
            <div key={title} className='grid grid-cols-[18px_28px_1fr] items-center gap-2'>
              <span className='flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#F3E8C8] text-[10px] font-semibold text-[#9A7B2F]'>
                {rank}
              </span>
              <img src={image} alt={title} className='h-7 w-7 rounded object-cover' />
              <div>
                <p className='text-[10px] font-semibold text-[#1D2232]'>{title}</p>
                <p className='text-[9px] text-[#8E95A5]'>{amount}</p>
              </div>
            </div>
          ))}
        </div>
      </CardPanel>

      <CardPanel title='Reader Demographics'>
        <div className='space-y-2'>
          {[
            ['Students', 'bg-[#6B7280]', '34%'],
            ['Teachers', 'bg-[#3B82F6]', '28%'],
            ['Professionals', 'bg-[#9333EA]', '19%'],
          ].map(([label, color, value]) => (
            <div key={label}>
              <div className='mb-1 flex justify-between text-[10px] text-[#8E95A5]'>
                <span>{label}</span>
                <span>{value}</span>
              </div>
              <div className='h-1.5 rounded-full bg-[#ECEFF4]'>
                <div className={`h-1.5 rounded-full ${color}`} style={{ width: value }} />
              </div>
            </div>
          ))}
        </div>
      </CardPanel>

      <CardPanel title='Token Earnings'>
        <div className='space-y-2'>
          <div className='rounded-md bg-[#ECF6F4] px-3 py-2'>
            <p className='text-[10px] text-[#7A869C]'>Writing Milestones</p>
            <p className='text-[13px] font-semibold text-[#1D2232]'>2,450 SKH</p>
          </div>
          <div className='rounded-md bg-[#FAF2E7] px-3 py-2'>
            <p className='text-[10px] text-[#7A869C]'>Book Sales</p>
            <p className='text-[13px] font-semibold text-[#D97706]'>5,680 SKH</p>
          </div>
          <div className='rounded-md bg-[#FFF3E6] px-3 py-2'>
            <p className='text-[10px] text-[#7A869C]'>Reader Engagement</p>
            <p className='text-[13px] font-semibold text-[#EA8A00]'>1,230 SKH</p>
          </div>
        </div>
      </CardPanel>
    </div>
  </div>
)

export default AnalyticsView

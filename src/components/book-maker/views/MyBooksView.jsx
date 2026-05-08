import React from 'react'
import { dashboardStats, sampleBooks } from '../data'
import { CardPanel, OrangeButton, PageHeader, TopStatCard } from '../Shared'
import { IconBooks, IconChart, IconPalette, IconPen } from '../icons'

const icons = [<IconBooks key='1' className='h-4 w-4' />, <IconPen key='2' className='h-4 w-4' />, <IconPalette key='3' className='h-4 w-4' />, <IconChart key='4' className='h-4 w-4' />]

const MyBooksView = ({ onOpenCreateBook }) => (
  <div className='space-y-4'>
    <PageHeader
      title='My Book Maker'
      subtitle='Manage all your books in one place'
      action={<OrangeButton onClick={onOpenCreateBook}>+ Create Book</OrangeButton>}
    />

    <div className='grid grid-cols-4 gap-3'>
      {dashboardStats.map((stat, index) => (
        <TopStatCard key={stat.label} icon={icons[index]} value={stat.value} label={stat.label} note={stat.note} />
      ))}
    </div>

    <CardPanel title='My Books'>
      <div className='grid grid-cols-2 gap-3'>
        {sampleBooks.map((book) => (
          <article key={book.id} className='rounded-2xl border border-[#DCE1EA] bg-white p-3'>
            <div className='relative'>
              <img src={book.image} alt={book.title} className='h-[225px] w-full rounded-lg object-cover' />
              <span className='absolute right-2 top-2 rounded-full bg-white px-2 py-0.5 text-[11px] text-[#374151]'>
                {book.status}
              </span>
            </div>
            <div className='mt-3'>
              <div className='flex items-start justify-between gap-2'>
                <p className='line-clamp-1 text-[14px] font-semibold leading-[1.15] text-[#1D2232]'>{book.title}</p>
                <button type='button' className='text-[20px] leading-none text-[#3B3B3B]'>⋮</button>
              </div>
              <div className='mt-2 flex items-center justify-between text-[12px] text-[#2D3343]'>
                <span>Progress</span>
                <span>{book.progress}%</span>
              </div>
              <div className='mt-2 h-[8px] rounded-full bg-[#CFF5D8]'>
                <div className='h-[8px] rounded-full bg-[#FF9800]' style={{ width: `${book.progress}%` }} />
              </div>
              <div className='mt-3 flex items-center gap-6 text-[12px] text-[#7F8798]'>
                <span className='flex items-center gap-1.5'>📄 Chapters {book.chapters}</span>
                <span className='flex items-center gap-1.5'>👁 {book.reads}</span>
                <span className='flex items-center gap-1.5'>🕒 {book.updated}</span>
              </div>
              <div className='mt-3 h-px bg-[#E8EBF2]' />
            </div>
            <button type='button' className='mt-3 w-full rounded-lg bg-[#FF9800] py-2.5 text-[18px] font-medium text-white'>
              {book.action}
            </button>
          </article>
        ))}
      </div>
    </CardPanel>
  </div>
)

export default MyBooksView

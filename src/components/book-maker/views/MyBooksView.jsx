import React from 'react'
import { dashboardStats, sampleBooks } from '../data'
import { CardPanel, OrangeButton, PageHeader, TopStatCard } from '../Shared'
import { IconBooks, IconChart, IconPalette, IconPen } from '../icons'

const icons = [<IconBooks key='1' className='h-[24px] w-[24px]' />, <IconPen key='2' className='h-[24px] w-[24px]' />, <IconPalette key='3' className='h-[24px] w-[24px]' />, <IconChart key='4' className='h-[24px] w-[24px]' />]

const MyBooksView = ({ onOpenCreateBook }) => (
  <div className='flex flex-col gap-[32px]'>
    <PageHeader
      title='My Book Maker'
      subtitle='Manage all your books in one place'
      action={<button onClick={onOpenCreateBook} className="h-[52px] w-[157px] rounded-[8px] py-[14px] bg-[#FF9600] px-[24px] text-[16px] font-[500] text-[#ffffff]">+ Create Book</button>}
      
    />

    <div className='grid grid-cols-4 gap-[17px]'>
      {dashboardStats.map((stat, index) => (
        <TopStatCard key={stat.label} icon={icons[index]} value={stat.value} label={stat.label} note={stat.note} />
      ))}
    </div>

    <CardPanel title='My Books'>
      <div className='grid grid-cols-4 gap-[13px]'>
        {sampleBooks.map((book) => (
          <article key={book.id} className='w-[234px] h-[337px] rounded-[10px] border border-[#E5E7EC] bg-[#FFFFFF] p-[12px] flex flex-col gap-[12px]'>
            <div className='relative'>
              <img src={book.image} alt={book.title} className='w-[210px] h-[169px] rounded-[5px]' />
              <span className='flex items-center justify-center h-[14px] w-fit px-[8px] absolute right-2 top-2 rounded-full bg-[#F9F9F9] text-[8px] font-[400] text-[#111111]'>
                {book.status}
              </span>
            </div>
            <div className='flex flex-col gap-[8px]'>
              <div className='flex items-start justify-between'>
                <p className='line-clamp-1 text-[12px] font-[600] leading-[16px] text-[#111111]'>{book.title}</p>
                <button type='button' className='text-[18px] leading-none text-[#111111]'>⋮</button>
              </div>
              <div className='flex items-center justify-between text-[10px] font-[400] text-[#111111]'>
                <span>Progress</span>
                <span>{book.progress}%</span>
              </div>
              <div className='h-[5px] rounded-[8px] bg-[#CBFECB]'>
                <div className='h-[5px] rounded-[8px] bg-[#FF9600]' style={{ width: `${book.progress}%` }} />
              </div>
              <div className='flex items-center justify-between text-[10px] font-[400] text-[#7C8091]'>
                <span className='flex items-center gap-[4px]'>📄 Chapters {book.chapters}</span>
                <span className='flex items-center gap-[4px]'>👁 {book.reads}</span>
                <span className='flex items-center gap-[4px]'>🕒 {book.updated}</span>
              </div>
              <div className='border border-[#E5E7EC]' />
            </div>
            <button type='button' className='flex items-center justify-center h-[30px] w-full rounded-[4px] bg-[#FF9600] py-[10px] px-[12px] text-[16px] font-[500] text-[#FFFFFF]'>
              {book.action}
            </button>
          </article>
        ))}
      </div>
    </CardPanel>
  </div>
)

export default MyBooksView

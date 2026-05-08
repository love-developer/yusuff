import React from 'react'
import { IconBooks, IconChart, IconPalette, IconPen, IconPublish, IconUsers } from './icons'

const navIcon = {
  books: IconBooks,
  studio: IconPen,
  collaboration: IconUsers,
  design: IconPalette,
  publishing: IconPublish,
  analytics: IconChart,
}

export const AppShell = ({ children }) => (
  <div className='min-h-screen px-4 py-14 md:px-6'>
    <div className='mx-auto grid w-full max-w-[1304px] grid-cols-[260px_minmax(0,1028px)] gap-4'>{children}</div>
  </div>
)

export const Sidebar = ({ items, active, onChange }) => (
  <aside className='rounded-[12px] border-[1px] border-[#E5E7EC] shadow-[0px_4px_30px_0px_#0000000D];
 bg-white p-[24px] max-w-[260px]'>
    <h2 className='mb-4 text-[24px] font-[600] text-[#111111]'>Seekheed Book</h2>
    <div className='flex flex-col gap-[16px]'>
      {items.map((item) => {
        const ItemIcon = navIcon[item.icon]
        const isActive = active === item.key
        return (
          <button
            key={item.key}
            type='button'
            onClick={() => onChange(item.key)}
            className={`flex w-full items-center gap-[8px] rounded-[8px] px-[12px] py-[10px] text-left text-[16px] font-regular cursor-pointer ${
              isActive ? 'bg-[#FF9600] text-white' : 'text-[#7C8091]'
            }`}
          >
            <ItemIcon className='h-5 w-5' />
            <span>{item.label}</span>
          </button>
        )
      })}
    </div>
  </aside>
)

export const PageHeader = ({ title, subtitle, action }) => (
  <div className='flex items-start justify-between gap-4'>
    <div>
      <h1 className='text-[38px] font-semibold leading-[1.1] text-[#131722]'>{title}</h1>
      <p className='mt-1 text-[12px] text-[#8991A4]'>{subtitle}</p>
    </div>
    {action}
  </div>
)

export const TopStatCard = ({ icon, value, label, note }) => (
  <div className='rounded-lg border border-[#EAEAEA] bg-white p-3'>
    <div className='mb-2 flex items-center justify-between'>
      <div className='rounded-md bg-[#EEF4FF] p-2 text-[#5A8CFF]'>{icon}</div>
      <p className='text-[24px] font-semibold text-[#1B2030]'>{value}</p>
    </div>
    <p className='text-[13px] font-medium text-[#1D2232]'>{label}</p>
    <p className='text-[11px] text-[#8E95A5]'>{note}</p>
  </div>
)

export const CardPanel = ({ title, children }) => (
  <section className='rounded-lg border border-[#EAEAEA] bg-white p-3'>
    {title && <h3 className='mb-3 text-[16px] font-semibold text-[#1D2232]'>{title}</h3>}
    {children}
  </section>
)

export const OrangeButton = ({ children, className = '', ...props }) => (
  <button
    type='button'
    className={`rounded-md bg-[#FF9800] px-4 py-2 text-[13px] font-medium text-white hover:bg-[#f28f00] ${className}`}
    {...props}
  >
    {children}
  </button>
)

export const OutlineButton = ({ children, className = '', ...props }) => (
  <button
    type='button'
    className={`rounded-md border border-[#FFBD67] bg-white px-4 py-2 text-[12px] font-medium text-[#F08A00] ${className}`}
    {...props}
  >
    {children}
  </button>
)

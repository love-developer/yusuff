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
  <div className='min-h-screen px-4 py-6'>
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
      <h1 className='text-[28px] font-[700] text-[#111111]'>{title}</h1>
      <p className='mt-1 text-[14px] font-[400] text-[#7C8091]'>{subtitle}</p>
    </div>
    {action}
  </div>
)

export const TopStatCard = ({ icon, value, label, note }) => (
  <div className='h-[156px] w-[244px] rounded-[12px] border border-[#E5E7EC] bg-[#FFFFFF] p-[24px] flex flex-col gap-[16px] shadow: 0px 1px 10px 0px #00000008;
'>
    <div className='flex items-center justify-between'>
      <div className='w-[48px] h-[48px] rounded-[8px] bg-[#DBEAFE] flex items-center justify-center'>{icon}</div>
      <p className='text-[20px] font-[700] text-[#111111]'>{value}</p>
    </div>
    <div>
    <p className='text-[16px] font-[500] text-[#111111]'>{label}</p>
    <p className='text-[14px] font-[400] text-[#7C8091]'>{note}</p>
      </div>

  </div>
)

export const CardPanel = ({ title, children }) => (
  <section className='px-[20px] py-[20px] min-h-[104px] min-w-[354px] rounded-[12px] border border-[#E5E7EC] bg-[#FFFFFF] flex flex-col justify-center gap-[12px] shadow: 0px 3px 30px 0px #0000000D;
'>
    {title && <h3 className='text-[13px] font-[700] text-[#111111]'>{title}</h3>}
    {children}
  </section>
)

export const OrangeButton = ({ children, className = '', ...props }) => (
  <button
    type='button'
    className={`h-[52px] w-[291px] rounded-[8px] py-[14px] bg-[#FF9600] px-[24px] text-[16px] font-[500] text-[#ffffff] ${className}`}
    {...props}
  >
    {children}
  </button>
)

export const OutlineButton = ({ children, className = '', ...props }) => (
  <button
    type='button'
    className={`rounded-[4px] border border-[#FF9600] bg-white px-[16px] cursor-pointer h-[40px] text-[16px] font-[500] text-[#FF9600] ${className}`}
    {...props}
  >
    {children}
  </button>
)

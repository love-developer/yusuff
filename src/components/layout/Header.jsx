import React from 'react'
import { Link } from 'react-router-dom'

const ChevronDown = () => (
  <svg className='h-4 w-4 text-[#666666]' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
  </svg>
)

/** Global site header — visible on every page. */
const Header = () => {
  return (
    <header className='w-full shrink-0 bg-white'>
      <div className='mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-6 py-4 md:px-8'>
        <Link
          to='/'
          className='flex min-w-0 items-center gap-3 md:gap-4 transition-opacity hover:opacity-90'
        >
          <div className='h-[52px] w-[56px] shrink-0 overflow-hidden rounded-md'>
            <img
              src='/assets/images/logo.png'
              alt='Seekheed UniverCity'
              className='h-full w-full object-contain'
            />
          </div>
          <div className='min-w-0 text-left'>
            <p className='text-[18px] font-bold leading-tight text-[#111111] sm:text-[22px] md:text-[26px]'>
              Seekheed UniverCity Enrollment System
            </p>
            <p className='mt-0.5 text-[13px] text-[#7C8091] md:text-[14px]'>University Enrollment Path</p>
          </div>
        </Link>
      </div>
      <div className='h-[3px] w-full bg-[#FF9800]' aria-hidden />
    </header>
  )
}

export default Header

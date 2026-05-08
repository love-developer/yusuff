import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Placeholder enrollment screen (matches Religious / Community / Political leader mocks).
 */
const EnrollmentComingSoon = ({ headline }) => {
  return (
    <div className='flex flex-1 flex-col items-center justify-center bg-white px-6 py-16'>
      <div className='w-full max-w-[672px] text-center flex flex-col gap-[30px] items-center justify-center'>
      <div className='mx-auto flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#FF96001A]'>
          <svg className='h-[40px] w-[40px] text-[#FF9600]' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M5 13l4 4L19 7' />
          </svg>
        </div>

        <h1 className='text-[36px] font-[700] leading-[40px] text-[#1B2232]'>{headline}</h1>

        <p className='text-[18px] font-[400] leading-[28px] text-[#626D84]'>
          Complete the form below to join Seekheed UniverCity
        </p>

        <p className='text-[16px] font-[400] leading-[24px] text-[#626D84]'>This enrollment form is coming soon.</p>

        <Link
          to='/'
          className='h-[40px] w-[191px] inline-flex items-center justify-center rounded-[12px] border border-[#DADEE7] bg-[#FCFAF8] text-[14px] font-[500] text-[#1B2232]'
        >
          Back to Role Selection
        </Link>
      </div>
    </div>
  )
}

export default EnrollmentComingSoon

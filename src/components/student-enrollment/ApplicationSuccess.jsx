import React from 'react'
import { Link } from 'react-router-dom'

const ClockIcon = () => (
  <svg className='mr-2 h-[20px] w-[20px] text-[#F59F0A]' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden>
    <circle cx='12' cy='12' r='9' strokeWidth={1.8} />
    <path strokeLinecap='round' strokeWidth={1.8} d='M12 7v5l3 2' />
  </svg>
)

const ApplicationSuccess = ({
  title = 'Enrollment Submitted!',
  thankYou = 'Thank you for completing your enrollment application.',
  reviewNote = 'Our team will review your application and get back to you within 2-3 business days.'
}) => {
  return (
    <div className='flex flex-1 flex-col items-center justify-center px-6 py-16'>
      <div className='w-full max-w-[630px] text-center flex flex-col gap-[22px] '>
        <div className='mx-auto flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#FF96001A]'>
          <svg className='h-[40px] w-[40px] text-[#FF9600]' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M5 13l4 4L19 7' />
          </svg>
        </div>

        <h1 className='text-[36px] font-[700] leading-[40px] text-[#1B2232]'>{title}</h1>

        <p className='text-[18px] font-[400] leading-[28px] text-[#626D84]'>{thankYou}</p>

        <div className='flex justify-center'>
          <span className='w-[179px] h-[42px] inline-flex items-center rounded-full border border-[#F59F0A4D] bg-[#FFF7ED] px-4 py-2 text-[15px] font-[500] text-[#F59F0A]'>
            <ClockIcon />
            Pending Review
          </span>
        </div>

        <p className='text-[1p6x] font-[400] leading-[24px] text-[#626D84]'>{reviewNote}</p>

        <div className='flex justify-center gap-[16px]'>
          <Link
            to='/'
            className='w-[120px] h-[40px] inline-flex items-center justify-center rounded-[12px] border border-[#DADEE7] bg-[#FCFAF8] text-[14px] font-[500] text-[#1B2232]'
          >
            Return Home
          </Link>
          <Link
            to='/dashboard'
            className='w-[146px] h-[40px] inline-flex items-center justify-center rounded-[12px] bg-[#FF9600] text-[14px] font-[500] text-[#FCFAF8]'
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ApplicationSuccess

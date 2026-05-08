import React, { useState } from 'react'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
import { Req } from './fields'

const TeacherBackground = () => {
  const [misconduct, setMisconduct] = useState('')
  const [online, setOnline] = useState('')

  return (
    <EnrollmentStepLayout
      title='Background & Safety Questions'
      description='These protect the UniverCity community'
      backHref='/graduate/ip-agreement'
      nextHref='/graduate/constitution'
      showBack
      footerDivider
    >
      <div className='w-[830px] h-[56px] mb-6 flex items-center gap-[6px] rounded-[12px] border-[1px] border-[#EF434333] bg-[#EF43430D] px-[16px] py-[12px] text-[14px] text-[#6B7280] font-[400]'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          className='shrink-0'
        >
          <circle cx='12' cy='12' r='10' stroke='#EF4343' strokeWidth='2' />
          <path
            d='M12 8V12'
            stroke='#EF4343'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <circle cx='12' cy='16' r='1' fill='#EF4343' />
        </svg>

        <p className='text-[#6B7280] font-[400] text-[14px]'>Please answer these questions honestly. Your responses will be verified.</p>
      </div>

      <div className='flex flex-col gap-[20px]'>
        <label className='flex cursor-pointer items-start gap-3 text-[14px] font-[500] text-[#111111]'>
          <input type='checkbox' className='mt-1 h-[16px] w-[16px] appearance-none rounded-full border border-[#111111] checked:bg-[#FF9600] checked:border-[#FF9600]' />
          <span>Have you ever been removed from a teaching position for misconduct? <Req /></span>
        </label>
        <label className='flex cursor-pointer items-start gap-3 text-[14px] font-[500] text-[#111111]'>
          <input type='checkbox' className='mt-1 h-[16px] w-[16px] appearance-none rounded-full border border-[#111111] checked:bg-[#FF9600] checked:border-[#FF9600]' />
            <span>Do you have online teaching experience? <Req /></span>
        </label>
        <label className='flex cursor-pointer items-start gap-3 text-[14px] font-[500] text-[#111111]'>
          <input type='checkbox' className='mt-1 h-[16px] w-[16px] appearance-none rounded-full border border-[#111111] checked:bg-[#FF9600] checked:border-[#FF9600]' />
          <span>I agree to treat all students with dignity, equality, and respect <Req /></span>
        </label>
        <label className='flex cursor-pointer items-start gap-3 text-[14px] font-[500] text-[#111111]'>
          <input type='checkbox' className='mt-1 h-[16px] w-[16px] appearance-none rounded-full border border-[#111111] checked:bg-[#FF9600] checked:border-[#FF9600]' />
          <span>I agree not to use my position for manipulation or financial exploitation <Req /></span>
        </label>
        <label className='flex cursor-pointer items-start gap-3 text-[14px] font-[500] text-[#111111]'>
          <input type='checkbox' className='mt-1 h-[16px] w-[16px] appearance-none rounded-full border border-[#111111] checked:bg-[#FF9600] checked:border-[#FF9600]' />
          <span>I agree to maintain confidentiality of student information <Req /></span>
        </label>
      </div>
    </EnrollmentStepLayout>
  )
}

export default TeacherBackground

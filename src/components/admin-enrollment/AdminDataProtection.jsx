import React, { useState } from 'react'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
import { Req } from './fields'

const AdminDataProtection = () => {
  const [q2, setQ2] = useState('')
  const [q3, setQ3] = useState('')

  return (
    <EnrollmentStepLayout
      title='Confidentiality & Data Protection'
      description='Commitment to data privacy'
      backHref='/professional-development/ethics'
      nextHref='/professional-development/security'
      showBack
      footerDivider
    >
      <div className='flex flex-col gap-[20px]'>
        <label className='flex cursor-pointer items-start gap-3 text-[14px] font-[500] text-[#111111]'>
          <input
            type='checkbox'
            className='mt-1 h-[16px] w-[16px] appearance-none rounded-full border border-[#111111] checked:bg-[#FF9600] checked:border-[#FF9600]'
          />
           <span>I agree to protect student and teacher data <Req /></span>
        </label>
        <label className='flex cursor-pointer items-start gap-3 text-[14px] font-[500] text-[#111111]'>
          <input
            type='checkbox'
            className='mt-1 h-[16px] w-[16px] appearance-none rounded-full border border-[#111111] checked:bg-[#FF9600] checked:border-[#FF9600]'
          />
           <span>Have you ever been involved in financial misconduct? <Req /></span>
        </label>
        <label className='flex cursor-pointer items-start gap-3 text-[14px] font-[500] text-[#111111]'>
          <input
            type='checkbox'
            className='mt-1 h-[16px] w-[16px] appearance-none rounded-full border border-[#111111] checked:bg-[#FF9600] checked:border-[#FF9600]'
          />
           <span>Have you ever been removed from a leadership role? <Req /></span>
        </label>
      </div>
    </EnrollmentStepLayout>
  )
}

export default AdminDataProtection

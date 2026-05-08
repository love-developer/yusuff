import React, { useState } from 'react'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
import { Req } from './fields'

const AdminSecurity = () => {
  const [misconduct, setMisconduct] = useState('')

  return (
    <EnrollmentStepLayout
      title='Digital Security'
      description='Understanding of security responsibilities'
      backHref='/professional-development/data-protection'
      nextHref='/professional-development/oath'
      showBack
      footerDivider
    >
      <div className='flex flex-col gap-[20px]'>
        <label className='flex cursor-pointer items-start gap-3 text-[14px] font-[500] text-[#111111]'>
          <input
            type='checkbox'
            className='mt-1 h-[16px] w-[16px] appearance-none rounded-full border border-[#111111] checked:bg-[#FF9600] checked:border-[#FF9600]'
          />
          <span>I understand proper data handling practices <Req /></span>
        </label>
        <label className='flex cursor-pointer items-start gap-3 text-[14px] font-[500] text-[#111111]'>
          <input
            type='checkbox'
            className='mt-1 h-[16px] w-[16px] appearance-none rounded-full border border-[#111111] checked:bg-[#FF9600] checked:border-[#FF9600]'
          />
          <span>Have you ever been involved in financial misconduct? <Req /></span>
        </label>
      </div>
    </EnrollmentStepLayout>
  )
}

export default AdminSecurity

import React, { useState } from 'react'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
import { Req } from './fields'

const TeacherIpAgreement = () => {
  const [onlineExp, setOnlineExp] = useState('')

  return (
    <EnrollmentStepLayout
      title='Intellectual Property Agreement'
      description='Content ownership and permissions'
      backHref='/graduate/teaching'
      nextHref='/graduate/background'
      showBack
      footerDivider
    >
      <div className='space-y-5'>
        <label className='flex cursor-pointer items-start gap-3 text-[14px] font-[500] text-[#111111]'>
          <input type='checkbox' className='mt-1 h-[16px] w-[16px] appearance-none rounded-full border border-[#111111] checked:bg-[#FF9600] checked:border-[#FF9600]' />
          <span>I own the rights to the content I will upload <Req /></span>
        </label>
        <label className='flex cursor-pointer items-start gap-3 text-[14px] font-[500] text-[#111111]'>
          <input type='checkbox' className='mt-1 h-[16px] w-[16px] appearance-none rounded-full border border-[#111111] checked:bg-[#FF9600] checked:border-[#FF9600]' />
          <span>I give Seekheed permission to host my course material <Req /></span>
        </label>
        <label className='flex cursor-pointer items-start gap-3 text-[14px] font-[500] text-[#111111]'>
          <input type='checkbox' className='mt-1 h-[16px] w-[16px] appearance-none rounded-full border border-[#111111] checked:bg-[#FF9600] checked:border-[#FF9600]' />
          <span>Do you have online teaching experience? <Req /></span>
        </label>
      </div>
    </EnrollmentStepLayout>
  )
}

export default TeacherIpAgreement

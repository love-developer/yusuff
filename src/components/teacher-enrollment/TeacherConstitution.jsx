import React, { useState } from 'react'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
import { Req } from './fields'

const TeacherConstitution = () => {
  const [misconduct, setMisconduct] = useState('')
  const [online, setOnline] = useState('')

  return (
    <EnrollmentStepLayout
      title='Constitutional Requirements'
      description='Agreement to institutional policies'
      backHref='/graduate/background'
      nextHref='/graduate/documents'
      showBack
      footerDivider
    >
      <div className='w-[830px] h-[112px] flex flex-col justify-center mb-5 rounded-[12px] border-[1px] border-[#DADCE2] bg-[#E2E4E94D] px-[16px] py-[12px] text-[14px] leading-relaxed text-[#111111] font-[400]'>
        <p className='text-[#111111] font-[400]'>“I agree to uphold the Seekheed Constitution, the Teacher Code of Ethics, and academic integrity at all times.”</p>
        <p className='mt-[12px] text-[#111111] font-[400]'>
          “I understand that violating these agreements may result in course removal or expulsion.”
        </p>
      </div>

      <div className='flex flex-col gap-[20px]'>
        <div>
          <label className='flex cursor-pointer items-start gap-3 text-[14px] font-[500] text-[#111111]'>
            <input
              type='checkbox'
              className='mt-1 h-[16px] w-[16px] appearance-none rounded-full border border-[#111111] checked:bg-[#FF9600] checked:border-[#FF9600]'
            />
            <span>
              Have you ever been removed from a teaching position for misconduct? <Req />
            </span>
          </label>
        </div>

        <div>
          <label className='flex cursor-pointer items-start gap-3 text-[14px] font-[500] text-[#111111]'>
            <input
              type='checkbox'
              className='mt-1 h-[16px] w-[16px] appearance-none rounded-full border border-[#111111] checked:bg-[#FF9600] checked:border-[#FF9600]'
            />
            <span>
              Do you have online teaching experience? <Req />
            </span>
          </label>
        </div>
      </div>
    </EnrollmentStepLayout>
  )
}

export default TeacherConstitution

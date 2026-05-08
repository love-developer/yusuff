import React from 'react'
import { useNavigate } from 'react-router-dom'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
import { inputClass, Req } from './fields'

const TeacherSignature = () => {
  const navigate = useNavigate()
  const today = new Date().toLocaleDateString(undefined, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  const submitBtn = (
    <button
      type='button'
      onClick={() => navigate('/teacher-application-submitted')}
      className='flex items-center justify-center h-[40px] min-w-[162px] rounded-[8px] bg-[#FF9600] text-[14px] font-[600] text-[#FFFFFF]'
    >
      Submit Application
    </button>
  )

  return (
    <EnrollmentStepLayout
      title='Electronic Signature'
      description='Complete your application'
      backHref='/graduate/documents'
      primarySlot={submitBtn}
      showBack
      footerDivider
    >
      <div>
        <label className='mb-2 block text-[14px] font-[500] text-[#0F1729]'>
          Full Legal Name (Electronic Signature) <Req />
        </label>
        <input type='text' placeholder='Type your full legal name' className={inputClass} />
        <p className='mt-4 text-[14px] text-[#6B7280] font-[400]'>
          Date: {today}
        </p>
        <div className='mt-8 flex items-center px-[15px] h-[74px] rounded-[12px] border-[1px] border-[#F59F0A4D] bg-[#F59F0A1A] text-[14px] leading-relaxed font-[400] text-[#0F1729]'>
          By typing your name above, you certify that all information provided is accurate and agree to the terms and
          conditions of the Seekheed UniverCity teacher program.
        </div>
      </div>
    </EnrollmentStepLayout>
  )
}

export default TeacherSignature

import React from 'react'
import { useNavigate } from 'react-router-dom'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
import { inputClass, Req } from './fields'

const AdminSignature = () => {
  const navigate = useNavigate()
  const today = new Date().toLocaleDateString(undefined, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  const submitBtn = (
    <button
      type='button'
      onClick={() => navigate('/admin-application-submitted')}
      className='flex items-center justify-center h-[40px] min-w-[162px] rounded-[8px] bg-[#FF9600] text-[14px] font-[600] text-[#FFFFFF]'
    >
      Submit Application
    </button>
  )

  return (
    <EnrollmentStepLayout
      title='Electronic Signature'
      description='Complete your application'
      backHref='/professional-development/documents'
      primarySlot={submitBtn}
      showBack
      footerDivider
    >
      <div>
        <label className='mb-2 block text-[14px] font-[500] text-[#0F1729]'>
          Full Legal Name (Electronic Signature) <Req />
        </label>
        <input type='text' placeholder='Type your full legal name' className={inputClass} />
        <p className='mt-4 text-[14px] font-[400] text-[#6B7280]'>
          Date: {today}
        </p>
        <div className='mt-6 h-[74px] rounded-[12px] border border-[#F59F0A4D] bg-[#F59F0A1A] flex items-center px-5 text-[14px] font-[400] leading-[20px] text-[#0F1729]'>
          By signing above, you acknowledge that all information provided is true and accurate, and you agree to uphold
          all responsibilities of a Seekheed UniverCity administrator.
        </div>
      </div>
    </EnrollmentStepLayout>
  )
}

export default AdminSignature

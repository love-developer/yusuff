import React from 'react'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
import { inputClass, Req } from './fields'

const FileRow = () => (
  <div>
    <label className='mb-2 block text-[14px] font-[500] text-[#0F1729]'>
      Government ID (Required) <Req />
    </label>
    <div className='h-[48px] w-full flex px-[6px] gap-[20px] items-center overflow-hidden rounded-[10px] border-[1px] bg-[#F9F9F9] border-[#E5E7EC]'>
      <button
        type='button'
        className='w-[99px] h-[36px] rounded-[10px] shrink-0 bg-[#FF9600] text-[13px] font-[500] text-[#FFFFFF]'
      >
        Choose File
      </button>
      <span className='flex flex-1 items-center text-[13px] font-[400] text-[#111111]'>No file chosen</span>
    </div>
    <p className='mt-2 text-[12px] font-[400] text-[#6B7280]'>Upload a clear photo of your government-issued ID</p>
  </div>
)

const AdminIdentity = () => {
  return (
    <EnrollmentStepLayout
      title='Identity Verification'
      description='Administrator verification requires thorough documentation'
      backHref='/'
      nextHref='/professional-development/role'
      showBack
      footerDivider
    >
      <div className='grid gap-5 md:grid-cols-2'>
        <div>
          <label className='mb-2 block text-[14px] font-[500] text-[#111111]'>
            Full Legal Name <Req />
          </label>
          <input type='text' className={inputClass} />
        </div>
        <div>
          <label className='mb-2 block text-[14px] font-[500] text-[#111111]'>Preferred Name</label>
          <input type='text' className={inputClass} />
        </div>
        <div>
          <label className='mb-2 block text-[14px] font-[500] text-[#111111]'>
            Email <Req />
          </label>
          <input type='email' className={inputClass} />
        </div>
        <div>
          <label className='mb-2 block text-[14px] font-[500] text-[#111111]'>
            Country of Residence <Req />
          </label>
          <input type='text' className={inputClass} />
        </div>
      </div>

      <div className='mt-6'>
        <FileRow />
      </div>

      <div className='mt-6 h-[52px] flex items-center rounded-[12px] bg-[#E2E4E980] px-5 text-[14px] font-[400] leading-relaxed text-[#7C8091]'>
        Background screening approval will be conducted after initial review.
      </div>
    </EnrollmentStepLayout>
  )
}

export default AdminIdentity

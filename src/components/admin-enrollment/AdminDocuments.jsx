import React from 'react'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
const FileRow = ({ label, helper, optional }) => (
  <div>
    <label className='mb-2 block text-[14px] font-[500] text-[#0F1729]'>
      {label}
      {!optional && <span className='text-[#DC2626]'> *</span>}
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
    {helper && <p className='mt-2 text-[12px] font-[400] text-[#7C8091]'>{helper}</p>}
  </div>
)

const AdminDocuments = () => {
  return (
    <EnrollmentStepLayout
      title='Required Documents'
      description='Upload all required documentation'
      backHref='/professional-development/oath'
      nextHref='/professional-development/signature'
      showBack
      footerDivider
    >
      <div className='space-y-8'>
        <FileRow label='CV/Resume' />
        <FileRow
          label='Proof of Previous Leadership Experience'
          helper='Certificates, letters of recommendation, etc.'
        />
        <FileRow
          label='Reference Letters (Optional but Recommended)'
          helper='Letters from previous employers or colleagues'
          optional
        />
      </div>
    </EnrollmentStepLayout>
  )
}

export default AdminDocuments

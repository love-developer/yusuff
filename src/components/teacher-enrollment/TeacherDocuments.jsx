import React from 'react'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
import { inputClass, Req } from './fields'

const FileRow = ({ label, required }) => (
  <div>
    <label className='mb-2 block text-[14px] font-[500] text-[#0F1729]'>
      {label}
      {required && <span className='text-[#EF4343]'> *</span>}
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
  </div>
)

const TeacherDocuments = () => {
  return (
    <EnrollmentStepLayout
      title='Required Documents'
      description='Please upload the following documents'
      backHref='/graduate/constitution'
      nextHref='/graduate/signature'
      showBack
      footerDivider
    >
      <div className='space-y-8'>
        <div>
          <label className='mb-2 block text-[14px] font-[500] text-[#171F36]'>
            ID Verification <Req />
          </label>
          <div className='w-[304px] h-[156px] flex flex-col items-center justify-center rounded-[12px] border-[1px] border-dashed border-[#DCDFE5] bg-[#ffffff] gap-[10px]'>
            <svg className='h-[32px] w-[32px] text-[#626D84]' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M12 5v14M12 5l4 4M12 5L8 9' />
            </svg>
            <p className='text-center text-[14px] font-[400] text-[#626D84]'>Drag &amp; drop or click to upload</p>
            <button
              type='button'
              className='w-[99px] h-[36px] rounded-[10px] border border-[#DCDFE5] bg-[#F6F7F9] text-[13px] font-[500] text-[#171F36]'
            >
              Choose File
            </button>
          </div>
          <p className='mt-2 text-[12px] font-[400] text-[#626D84]'>
            Passport, driver&apos;s license, or national ID
          </p>
        </div>

        <div className='flex flex-col gap-[20px]'>
          <FileRow label='CV/Resume' required />
          <FileRow label='Sample Lesson (PDF or Video)' required />
          <FileRow label='Proof of Qualification (Degree or Certificate)' required />
        </div>

        <div className='border-t border-[#DADCE2] pt-6'>
          <h3 className='mb-4 text-[16px] font-[500] text-[#0F1729]'>Optional: Astrology Profile Input</h3>
          <div className='grid gap-5 md:grid-cols-2'>
            <div>
              <label className='mb-2 block text-[14px] font-[500] text-[#0F1729]'>Birth Date</label>
              <input type='date' className={inputClass} />
            </div>
            <div>
              <label className='mb-2 block text-[14px] font-[500] text-[#0F1729]'>Birth Name (for numerology)</label>
              <input type='text' placeholder='Legal name at birth' className={inputClass} />
            </div>
          </div>
        </div>
      </div>
    </EnrollmentStepLayout>
  )
}

export default TeacherDocuments

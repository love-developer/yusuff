import React from 'react'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
import { inputClass, selectClass, Req } from './fields'

const ChevronDown = () => (
  <svg
    className='pointer-events-none absolute bottom-3 right-3 h-5 w-5 text-[#757575]'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    aria-hidden
  >
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
  </svg>
)

const TeacherTeaching = () => {
  return (
    <EnrollmentStepLayout
      title='Teaching Details'
      titleClassName=''
      description='Information about your proposed courses'
      backHref='/graduate/professional'
      nextHref='/graduate/ip-agreement'
      showBack
      footerDivider
    >
      <div className='space-y-6'>
        <div>
          <label className='mb-2 block text-[14px] font-[500] text-[#111111]'>
            Proposed Course Names (up to 3) <Req />
          </label>
          <textarea
            rows={4}
            placeholder='Enter course names, one per line.'
            className={`${inputClass} min-h-[80px] resize-y p-[10px]`}
          />
        </div>
        <div className='relative'>
          <label className='mb-2 block text-[14px] font-[500] text-[#111111]'>
            Lesson Type <Req />
          </label>
          <select className={selectClass}>
            <option value=''>Select...</option>
            <option value='live'>Live synchronous</option>
            <option value='async'>Asynchronous</option>
            <option value='hybrid'>Hybrid</option>
            <option value='workshop'>Workshop / intensive</option>
          </select>
          <ChevronDown />
        </div>
        <label className='flex cursor-pointer items-start gap-3 text-[14px] font-[500] text-[#111111]'>
          <input
            type='checkbox'
            className='mt-1 h-[16px] w-[16px] appearance-none rounded-full border border-[#FF9600] checked:bg-[#FF9600] checked:border-[#FF9600]'
          />
          <span>Do you have online teaching experience?</span>
        </label>
        <div>
          <label className='mb-2 block text-[14px] font-[500] text-[#111111]'>Availability (Days/Hours)</label>
          <input
            type='text'
            placeholder='e.g., Mon–Fri, 9AM–5PM EST'
            className={inputClass}
          />
        </div>
        <label className='flex cursor-pointer items-start gap-3 text-[14px] font-[500] text-[#111111]'>
          <input
            type='checkbox'
            className='mt-1 h-[16px] w-[16px] appearance-none rounded-full border border-[#FF9600] checked:bg-[#FF9600] checked:border-[#FF9600]'
          />
          <span>
            I am prepared to follow the Seekheed Course Creation Guidelines
            <Req />
          </span>
        </label>
      </div>
    </EnrollmentStepLayout>
  )
}

export default TeacherTeaching

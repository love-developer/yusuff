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

const AdminRole = () => {
  return (
    <EnrollmentStepLayout
      title='Role Application'
      description='Select your desired position and describe your experience'
      backHref='/professional-development/identity'
      nextHref='/professional-development/ethics'
      showBack
      footerDivider
    >
      <div className='relative'>
        <label className='mb-2 block text-[14px] font-[500] text-[#111111]'>
          Position Applying For <Req />
        </label>
        <select className={selectClass}>
          <option value=''>Position Applying For</option>
          <option value='ops'>Operations &amp; programs</option>
          <option value='academic'>Academic affairs liaison</option>
          <option value='student'>Student services lead</option>
          <option value='compliance'>Compliance &amp; governance</option>
          <option value='other'>Other (specify in experience)</option>
        </select>
        <ChevronDown />
      </div>

      <div className='mt-5'>
        <label className='mb-2 block text-[14px] font-[500] text-[#111111]'>
          Describe Your Relevant Experience <Req />
        </label>
        <textarea
          rows={4}
          placeholder='Describe your experience relevant to the selected position...'
          className={`${inputClass} min-h-[92px] resize-y p-[10px]`}
        />
      </div>

      <div className='mt-5'>
        <label className='mb-2 block text-[14px] font-[500] text-[#111111]'>
          Previous Administration or Leadership Roles <Req />
        </label>
        <textarea
          rows={4}
          placeholder='List your previous leadership positions...'
          className={`${inputClass} min-h-[97px] resize-y p-[10px]`}
        />
      </div>
    </EnrollmentStepLayout>
  )
}

export default AdminRole

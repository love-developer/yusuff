import React, { useState } from 'react'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
import { Req } from './fields'

const yn = (name, value, setValue) => (
  <div className='flex gap-6'>
    <label className='inline-flex cursor-pointer items-center gap-2 text-[14px] text-[#444444]'>
      <input
        type='radio'
        name={name}
        checked={value === 'yes'}
        onChange={() => setValue('yes')}
        className='h-4 w-4 accent-[#FF9800]'
      />
      Yes
    </label>
    <label className='inline-flex cursor-pointer items-center gap-2 text-[14px] text-[#444444]'>
      <input
        type='radio'
        name={name}
        checked={value === 'no'}
        onChange={() => setValue('no')}
        className='h-4 w-4 accent-[#FF9800]'
      />
      No
    </label>
  </div>
)

const AdminEthics = () => {
  const [q1, setQ1] = useState('')
  const [q2, setQ2] = useState('')
  const [q3, setQ3] = useState('')
  const [q4, setQ4] = useState('')
  const [q5, setQ5] = useState('')
  const [q6, setQ6] = useState('')
  const [q7, setQ7] = useState('')

  return (
    <EnrollmentStepLayout
      title='Ethics & Governance Questions'
      description='These questions protect the members and the institution'
      backHref='/professional-development/role'
      nextHref='/professional-development/data-protection'
      showBack
      footerDivider
    >
      <div className='h-[56px] mb-6 flex items-center gap-[6px] rounded-[12px] border border-[#1B294B33] bg-[#1B294B0D] px-4 text-[14px] font-[400] text-[#7C8091]'>
        <span className='text-[#FF9800]' aria-hidden>
          <svg className='h-[20px] w-[20px]' fill='none' stroke='#111111' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.6} d='M12 4l8 4v6c0 5-8 10-8 10S4 19 4 14V8l8-4z' />
          </svg>
        </span>
        <p>Administrators hold significant responsibility. Please answer all questions truthfully.</p>
      </div>

      <div className='flex flex-col gap-[20px]'>
        <label className='flex cursor-pointer items-start gap-3 text-[14px] font-[500] text-[#111111]'>
          <input
            type='checkbox'
            className='mt-1 h-[16px] w-[16px] appearance-none rounded-full border border-[#111111] checked:bg-[#FF9600] checked:border-[#FF9600]'
          />
          <span>Have you ever been involved in financial misconduct?</span>
        </label>

        <label className='flex cursor-pointer items-start gap-3 text-[14px] font-[500] text-[#111111]'>
          <input
            type='checkbox'
            className='mt-1 h-[16px] w-[16px] appearance-none rounded-full border border-[#111111] checked:bg-[#FF9600] checked:border-[#FF9600]'
          />
          <span>Have you ever been removed from a leadership role?</span>
        </label>

        <label className='flex cursor-pointer items-start gap-3 text-[14px] font-[500] text-[#111111]'>
          <input
            type='checkbox'
            className='mt-1 h-[16px] w-[16px] appearance-none rounded-full border border-[#111111] checked:bg-[#FF9600] checked:border-[#FF9600]'
          />
          <span>Do you have any conflicts of interest that could affect your role?</span>
        </label>

        <label className='flex cursor-pointer items-start gap-3 text-[14px] font-[500] text-[#111111]'>
          <input
            type='checkbox'
            className='mt-1 h-[16px] w-[16px] appearance-none rounded-full border border-[#111111] checked:bg-[#FF9600] checked:border-[#FF9600]'
          />
          <span>
            Are you willing to maintain total neutrality and fairness in disputes? <Req />
          </span>
        </label>

        <label className='flex cursor-pointer items-start gap-3 text-[14px] font-[500] text-[#111111]'>
          <input
            type='checkbox'
            className='mt-1 h-[16px] w-[16px] appearance-none rounded-full border border-[#111111] checked:bg-[#FF9600] checked:border-[#FF9600]'
          />
          <span>
            Do you agree to follow all provisions of the Seekheed Constitution? <Req />
          </span>
        </label>

        <label className='flex cursor-pointer items-start gap-3 text-[14px] font-[500] text-[#111111]'>
          <input
            type='checkbox'
            className='mt-1 h-[16px] w-[16px] appearance-none rounded-full border border-[#111111] checked:bg-[#FF9600] checked:border-[#FF9600]'
          />
          <span>
            Are you prepared to abide by the rules of transparency and accountability? <Req />
          </span>
        </label>

        <label className='flex cursor-pointer items-start gap-3 text-[14px] font-[500] text-[#111111]'>
          <input
            type='checkbox'
            className='mt-1 h-[16px] w-[16px] appearance-none rounded-full border border-[#111111] checked:bg-[#FF9600] checked:border-[#FF9600]'
          />
          <span>
            Will you abstain from any abuse of power, favoritism, or discrimination? <Req />
          </span>
        </label>
      </div>
    </EnrollmentStepLayout>
  )
}

export default AdminEthics

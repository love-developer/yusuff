import React, { useState } from 'react'
import EnrollmentStepLayout from './EnrollmentStepLayout'

const inputClass =
  'w-full h-[48px] rounded-[10px] border-[1px] border-[#E5E7EC] bg-white px-4 text-[14px] text-[#111111] placeholder:text-[#9CA3AF] focus:outline-none'

const MoonClock = () => (
  <svg className='ml-2 inline-block h-[16px] w-[16px] text-[#111111]' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.5} aria-hidden>
    <circle cx='12' cy='12' r='8' />
    <path d='M12 12h6M12 12V6' strokeLinecap='round' />
    <path d='M17 17a7 7 0 01-11-11' strokeLinecap='round' />
  </svg>
)

function Toggle({ checked, onChange }) {
  return (
    <button
      type='button'
      role='switch'
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-[24px] w-[44px] shrink-0 rounded-full transition-colors ${checked ? 'bg-[#FF9600]' : 'bg-[#D1D5DB]'}`}
    >
      <span
        className={`pointer-events-none absolute top-[2px] h-[20px] w-[20px] rounded-full bg-[#F6F7F9] transition-[left] ${checked ? 'left-[22px]' : 'left-[3px]'}`}
      />
    </button>
  )
}

const Astrology = () => {
  const [enabled, setEnabled] = useState(true)

  return (
    <EnrollmentStepLayout
      title='Optional Profile Enhancement'
      description={'This section is entirely optional. If you\'re interested, we can provide personalized insights based on astrological data.'}
      backHref='/undergraduate/academics'
      nextHref='/undergraduate/verification'
      showBack
      footerDivider
    >
      <div className='rounded-[12px] border border-[#1639691A] bg-[#F6F6F6] p-6'>
        <div className='flex flex-wrap items-start gap-4'>
          <div className='flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#FF96001A] text-[#FF9600]'>
            <svg className='h-7 w-7' viewBox='0 0 24 24' fill='currentColor' aria-hidden>
              <path d='M12 2l2.09 6.26L21 10l-5.5 2.92L17.18 20 12 16.77 6.82 20 8.5 12.92 3 10l6.91-1.74z' opacity='0.92' />
            </svg>
          </div>
          <div className='min-w-0 flex-1'>
            <h3 className='text-[18px] font-[600] text-[#111111] traching-[0.45px]'>Astrology &amp; Numerology Insights</h3>
            <p className='text-[14px] font-[400] text-[#626D84]'>Personalized learning recommendations</p>
          </div>
        </div>

        <div className='w-[622px] h-[56px] mt-5 rounded-[12px] bg-[#FFFFFF] flex items-center px-4'>
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center gap-[4px]'>
              <span className='text-[20px]' aria-hidden>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[20px] w-[20px]"
                  viewBox="0 0 24 24"
                  fill="#163969"
                >
                  <path d="M12 2l2.9 6.3 6.9.6-5.2 4.5 1.6 6.6L12 16.9 5.8 20l1.6-6.6L2.2 8.9l6.9-.6L12 2z" />
                </svg>
              </span>
              <span className='text-[15px] font-[500] text-[#171F36] leading-initial'>Enable astrology-based insights</span>
            </div>
            <Toggle checked={enabled} onChange={setEnabled} />
          </div>
        </div>

        <div className='mt-6 grid gap-5 sm:grid-cols-2'>
          <div>
            <label className='mb-2 flex items-center gap-[4px] text-[13px] font-[500] text-[#171F36] leading-[19px]'>
              <MoonClock />
              Birth Date
            </label>
            <input type='date' disabled={!enabled} className={`${inputClass} disabled:bg-[#F3F4F6] disabled:text-[#9CA3AF]`} />
          </div>
          <div>
            <label className='mb-2 flex items-center gap-[4px] text-[13px] font-[500] text-[#171F36] leading-[19px]'>Time of Birth</label>
            <input type='time' disabled={!enabled} className={`${inputClass} disabled:bg-[#F3F4F6]`} />
          </div>
          <div>
            <label className='mb-2 flex items-center gap-[4px] text-[13px] font-[500] text-[#171F36] leading-[19px]'>City of Birth</label>
            <input type='text' placeholder='City' disabled={!enabled} className={`${inputClass} disabled:bg-[#F3F4F6]`} />
          </div>
          <div>
            <label className='mb-2 flex items-center gap-[4px] text-[13px] font-[500] text-[#171F36] leading-[19px]'>Country of Birth</label>
            <input type='text' placeholder='Country' disabled={!enabled} className={`${inputClass} disabled:bg-[#F3F4F6]`} />
          </div>
        </div>

        <p className='mt-6 text-[12px] font-[400] leading-relaxed text-[#626D84] md:w-[622px]'>
          This information is optional and will only be used to provide personalized insights. You can disable this feature at any time.
        </p>
      </div>
    </EnrollmentStepLayout>
  )
}

export default Astrology

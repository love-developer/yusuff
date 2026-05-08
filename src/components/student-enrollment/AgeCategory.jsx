import React, { useState } from 'react'
import EnrollmentStepLayout from './EnrollmentStepLayout'

const tiers = [
  {
    id: 'child',
    label: 'Child',
    age: 'Ages 1 – 11',
    desc: 'Requires parental consent and supervision',
    icon: (
      <svg className='h-[24px] w-[24px]' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.5} aria-hidden>
        <circle cx='12' cy='8' r='3.5' />
        <path d='M6 21v-2a5 5 0 015-5h2a5 5 0 015 5v2M12 13v5' strokeLinecap='round' />
      </svg>
    )
  },
  {
    id: 'teen',
    label: 'Teen',
    age: '12 – 17 years',
    desc: 'Requires parental consent for enrollment',
    icon: (
      <svg className='h-[24px] w-[24px]' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.5} aria-hidden>
        <circle cx='12' cy='7' r='3.5' />
        <path d='M6.5 21v-1.5a4.5 4.5 0 019 0V21M12 12l-2 4h4l-2 4' strokeLinecap='round' />
      </svg>
    )
  },
  {
    id: 'adult',
    label: 'Adult',
    age: '18+ years',
    desc: 'Full access to all programs and features',
    icon: (
      <svg className='h-[24px] w-[24px]' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.5} aria-hidden>
        <circle cx='9' cy='7' r='2.75' />
        <circle cx='16' cy='7' r='2.75' />
        <path d='M4 20c1.2-4 4.35-6 8-6s6.8 2 8 6' strokeLinecap='round' />
      </svg>
    )
  }
]

const AgeCategory = () => {
  const [selected, setSelected] = useState('child')

  return (
    <EnrollmentStepLayout
      title='Select Age Category'
      description={"Choose the appropriate category based on the student's age."}
      backHref='/'
      nextHref='/undergraduate/constitution'
      nextLabel='Continue'
      showBack
    >
      <div className='grid gap-[16px] sm:grid-cols-3'>
        {tiers.map((tier) => {
          const on = selected === tier.id
          return (
            <button
              key={tier.id}
              type='button'
              onClick={() => setSelected(tier.id)}
              className={`flex flex-col items-start rounded-[12px] border-[2px] bg-white p-[24px] gap-[16px] text-left transition-all ${on
                  ? 'border-[#FF9800]'
                  : 'border-[#E5E7EC] hover:border-[#E5E7EC]'
                }`}
            >
              <span
                className="flex h-[40px] w-[40px] items-center justify-center rounded-[6px] p-[4px] gap-[10px] bg-[#FF96001A] text-[#E58700]"
              >
                {tier.icon}
              </span>
              <div className='flex flex-col gap-[10px]'>
                <span className='text-[18px] font-[600] text-[#111111]'>{tier.label}</span>
                <span className='text-[16px] font-[500] text-[#FF9600]'>{tier.age}</span>
                <p className='text-[16px] font-[400] leading-[140%] text-[#7C8091]'>{tier.desc}</p>
              </div>
            </button>
          )
        })}
      </div>
    </EnrollmentStepLayout>
  )
}

export default AgeCategory

import React, { useState } from 'react'
import EnrollmentStepLayout from './EnrollmentStepLayout'

const agreements = [
  {
    id: 'digital',
    title: 'Digital Code of Conduct *',
    body: `Expectations for respectful online communication, plagiarism-free work, device security, 
    and appropriate use of learning platforms.`,
    Icon: ({ className }) => (
      <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.5}>
        <rect x='5' y='11' width='14' height='10' rx='2' />
        <path d='M8 11V7a4 4 0 018 0v4' strokeLinecap='round' />
      </svg>
    )
  },
  {
    id: 'harassment',
    title: 'Non-Harassment Policy *',
    body: `We prohibit harassment based on identity, viewpoint, disability, or any protected characteristic—and 
    require prompt reporting channels for concerns.`,
    Icon: ({ className }) => (
      <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.5}>
        <circle cx='9' cy='8' r='2.25' />
        <circle cx='15' cy='8' r='2.25' />
        <path d='M3 20c1.2-3.75 5-5.75 9-5.75 4 0 7.8 2 9 5.75' strokeLinecap='round' />
      </svg>
    )
  },
  {
    id: 'zones',
    title: 'Protected Zones Acknowledgment *',
    body: `Recognition of restorative practices, escalation paths, zero-tolerance behaviors, and safeguards for 
    physical and digital learning zones.`,
    Icon: ({ className }) => (
      <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.5}>
        <path d='M12 3 L20 8v10H4V8z' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M12 12v6M9 13h6' strokeLinecap='round' />
      </svg>
    )
  }
]

const Safety = () => {
  const [conduct, setConduct] = useState('no')
  const [selectedPolicy, setSelectedPolicy] = useState('digital')

  return (
    <EnrollmentStepLayout
      title='Community Safety Agreement'
      description={`By continuing, you confirm that Seekheed UniverCity can rely on truthful disclosures regarding 
conduct history and agree to uphold the safety expectations described below.`}
      backHref='/undergraduate/constitution'
      nextHref='/undergraduate/technology'
      nextLabel='Continue'
      progress={63}
      showBack
    >
      <div className='space-y-8'>
        <section className='h-[144px] bg-[#FFFFFF] rounded-[12px] flex items-center px-[20px]'>
          <div className='flex items-start gap-3'>
            <div>
              <div className='flex items-center gap-[6px] text-[18px] font-[600] text-[#111111]'>
                <span className='flex items-center justify-center text-[#F59E0B]' aria-hidden>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                  </svg>
                </span>

                <span>Disclosure</span>
              </div>
              <p className='mt-2 flex flex-wrap items-center gap-[4px] text-[15px] font-[500] text-[#111111]'>
                Have you ever been dismissed from an educational institution for misconduct?
                <span
                  className='inline-flex h-[16px] w-[16px] cursor-help items-center justify-center rounded-full border-[2px] border-[#626D84] text-[11px] font-bold text-[626D84]'
                  title='Include academic or behavioral dismissal unless expunged by that institution.'
                >
                  i
                </span>
              </p>
              <div className='mt-3 flex gap-6'>
                <label className='inline-flex cursor-pointer items-center gap-2 text-[14px] font-medium text-[#422006]'>
                  <input
                    type='radio'
                    name='misconduct-dismissal'
                    checked={conduct === 'no'}
                    onChange={() => setConduct('no')}
                    className='peer hidden'
                  />

                  <span className='h-4 w-4 rounded-full border border-[#C4C4C4] peer-checked:border-[#FF9600] peer-checked:bg-[#FF9600] transition-colors'></span>

                  No
                </label>

                <label className='inline-flex cursor-pointer items-center gap-2 text-[14px] font-medium text-[#422006]'>
                  <input
                    type='radio'
                    name='misconduct-dismissal'
                    checked={conduct === 'yes'}
                    onChange={() => setConduct('yes')}
                    className='peer hidden'
                  />

                  <span className='h-4 w-4 rounded-full border border-[#C4C4C4] peer-checked:border-[#FF9600] peer-checked:bg-[#FF9600] transition-colors'></span>

                  Yes
                </label>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-[#FFFFFF] rounded-[12px] pl-[20px]'>
          <h3 className='mb-3 flex items-center gap-[6px] text-[18px] font-[600] text-[#111111]'>
            <svg className='h-[20px] w-[20px] text-[#111111]' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.5}>
              <path d='M12 3 L4 9v11h16V9L12 3z' strokeLinejoin='round' />
            </svg>
            Community agreements
          </h3>

          <div className='flex flex-col gap-[15px]'>
            {agreements.map((a) => {
              const Icon = a.Icon
              const on = selectedPolicy === a.id
              return (
                <button
                  key={a.id}
                  type='button'
                  onClick={() => setSelectedPolicy(a.id)}
                  className={`group flex flex-col rounded-[12px] border-2 p-4 text-left transition-all ${on
                    ? 'border-[#FF9600] bg-[#FFF5E6]'
                    : 'border-[#DCDFE5] bg-white hover:border-[#D6D6D6]'
                    }`}
                >
                  <div className='flex items-start gap-3'>
                    {/* Left Check Circle */}
                    <div
                      className={`mt-0.5 flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full border-2 transition-all text-[10px] ${on
                        ? 'border-[#FF9800] bg-[#FF9800] text-white'
                        : 'border-[#BDBDBD]'
                        }`}
                    >
                      {on && '✓'}
                    </div>

                    <div className='flex-1'>
                      <div className='flex items-center gap-2'>
                        <Icon className={`h-[16px] w-[16px] text-[#111111]`} />
                        <p className='text-[15px] font-[500] text-[#111111]'>{a.title}</p>
                      </div>
                      <p className='mt-2 text-[14px] font-[400] leading-relaxed text-[#626D84]'>{a.body}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </section>
      </div>
    </EnrollmentStepLayout>
  )
}

export default Safety

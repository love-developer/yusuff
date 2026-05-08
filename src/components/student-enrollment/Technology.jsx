import React, { useState } from 'react'
import EnrollmentStepLayout from './EnrollmentStepLayout'

const WifiIcon = ({ className }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.6} aria-hidden>
    <path d='M5 11.5C8.5 8 15.5 8 19 11.5' strokeLinecap='round' />
    <path d='M8 14c2.5-2 7.5-2 10 0' strokeLinecap='round' />
    <path d='M11 16.5h2M12 20a2 2 0 012-2' strokeLinecap='round' />
  </svg>
)
const LaptopIcon = () => (
  <svg
    className="h-[28px] w- text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.4}
    aria-hidden
  >
    <rect x="3" y="4" width="18" height="12" rx="2" />
    <path d="M2 17h20" strokeLinecap="round" />
    <path d="M8 21h8" strokeLinecap="round" />
  </svg>
)

const TabletIcon = () => (
  <svg
    className="h-[28px] w- text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.4}
    aria-hidden
  >
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <path d="M12 17h.01" strokeLinecap="round" />
  </svg>
)

const PhoneIcon = () => (
  <svg
    className="h-[28px] w- text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.4}
    aria-hidden
  >
    <rect x="8" y="2" width="8" height="20" rx="2" />
    <path d="M12 18h.01" strokeLinecap="round" />
  </svg>
)

function Toggle({ checked, onChange, labelledBy }) {
  return (
    <button
      type='button'
      role='switch'
      aria-checked={checked}
      aria-labelledby={labelledBy}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-[24px] w-[44px] items-center rounded-full transition-colors duration-300 ease-in-out ${checked ? 'bg-[#FF9600]' : 'bg-[#D1D5DB]'
        }`}
    >
      <span
        className={`h-[20px] w-[20px] rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${checked ? 'translate-x-[22px]' : 'translate-x-[2px]'
          }`}
      />
    </button>
  )
}

const Technology = () => {
  const [internet, setInternet] = useState(true)
  const [laptopSelected, setLaptopSelected] = useState(true)
  const [tabletSelected, setTabletSelected] = useState(false)
  const [phoneSelected, setPhoneSelected] = useState(false)

  const deviceOptions = [
    { id: 'laptop', label: 'Laptop / Desktop', Icon: LaptopIcon, selected: laptopSelected, setSelected: setLaptopSelected },
    { id: 'tablet', label: 'Tablet', Icon: TabletIcon, selected: tabletSelected, setSelected: setTabletSelected },
    { id: 'phone', label: 'Mobile Phone', Icon: PhoneIcon, selected: phoneSelected, setSelected: setPhoneSelected }
  ]

  return (
    <EnrollmentStepLayout
      title='Learning Access Check'
      description='Help us understand your technology setup so we can optimize your learning experience.'
      backHref='/undergraduate/safety'
      nextHref='/undergraduate/identity'
      showBack
      footerDivider
    >
      <div className='space-y-10'>
        <section>
          <h3 className='text-[18px] font-[600] text-[#171F36] mb-[16px]'>Internet Access</h3>
          <div className='flex items-center justify-center gap-4 min-h-[90px] px-4 rounded-[12px] bg-[#EDEFF280]'>
            <div className='flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#FF96001A]'>
              <WifiIcon className='h-[20px] w-[20px] text-[#FF9600]' />
            </div>
            <div className='min-w-0 flex-1'>
              <p id='internet-label' className='text-[15px] font-[500] text-[#171F36]'>
                Do you have reliable internet access?
              </p>
              <p className='mt-1 text-[14px] font-[400] text-[#626D84]'>
                Great! You're all set for online learning.
              </p>
            </div>
            <Toggle labelledBy='internet-label' checked={internet} onChange={setInternet} />
          </div>
        </section>

        <section className='flex flex-col gap-[15px] w-full max-w-[624px]'>
          <h3 className='text-[18px] font-[600] text-[#171F36]'>Available Devices</h3>
          <p className='text-[14px] font-[400] leading-relaxed text-[#626D84]'>
            Select all devices you&apos;ll use for learning. This helps us optimize content delivery.
          </p>
          <div className='grid gap-4 sm:grid-cols-3'>
            {deviceOptions.map(({ id, label, Icon, selected, setSelected }) => {
              return (
                <button
                  key={id}
                  type='button'
                  onClick={() => setSelected(!selected)}
                  className={`min-h-[168px] relative flex flex-col items-center justify-center rounded-[12px] border-2 bg-white text-left transition-all ${selected
                    ? 'border-[#FF9600] bg-[#FF96001A]'
                    : 'border-[#E0E0E0] hover:border-[#D0D0D0]'
                    }`}
                >
                  <span
                    className={`mb-4 flex h-[56px] w-[56px] items-center justify-center rounded-full ${selected ? 'bg-[#FF9600] text-white' : 'bg-[#EDEFF2] text-[#626D84]'}`}
                  >
                    <Icon active={selected} />
                  </span>
                  <div className='flex items-center gap-[6px]'>
                    <span
                      className={`flex h-[16px] w-[16px] text-[10px] items-center justify-center rounded-full border-2 text-sm ${selected
                        ? 'border-[#FF9800] bg-[#FF9800] text-white'
                        : 'border-[#D0D0D0] text-transparent'
                        }`}
                      aria-hidden
                    >
                      {selected ? '✓' : ''}
                    </span>
                    <span className='text-[16px] font-[500] text-[#171F36]'>{label}</span>
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

export default Technology

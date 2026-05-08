import React from 'react'
import EnrollmentStepLayout from './EnrollmentStepLayout'

const Req = () => <span className='text-[#DC2626]'> *</span>

const inputClass =
  'w-full h-[48px] rounded-[10px] border-[1px] border-[#E5E7EC] bg-white px-4 text-[14px] text-[#111111] placeholder:text-[#9CA3AF] focus:outline-none'

const SectionTitle = ({ children }) => (
  <h3 className='mb-[16px] text-[18px] font-[600] text-[#111111]'>
    {children}
  </h3>
)

const ChevronDown = () => (
  <svg
    className='pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[#9CA3AF]'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
  >
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
  </svg>
)

const Identity = () => {
  return (
    <EnrollmentStepLayout
      title='Student Identity Profile'
      description='Please provide your basic identity information. This will be used to create your student profile.'
      backHref='/undergraduate/technology'
      nextHref='/undergraduate/academics'
      showBack
    >
      <div className='space-y-8'>

        {/* Personal Information */}
        <section>
          <SectionTitle>Personal Information</SectionTitle>
          <div className='grid gap-4 md:grid-cols-2'>
            <div>
              <label className='mb-1 block text-[13px] font-[500] text-[#111111]'>
                Legal Name <Req />
              </label>
              <input type='text' placeholder='Enter full legal name' className={inputClass} />
            </div>

            <div>
              <label className='mb-1 block text-[13px] font-[500] text-[#111111]'>
                Preferred Name
              </label>
              <input type='text' placeholder='How should we address you?' className={inputClass} />
            </div>

            <div>
              <label className='mb-1 block text-[13px] font-[500] text-[#111111]'>
                Date of Birth <Req />
              </label>
              <input type='date' className={inputClass} />
            </div>

            <div className='relative'>
              <label className='mb-1 block text-[13px] font-[500] text-[#111111]'>
                Gender / Identity (Optional)
              </label>
              <select className={`${inputClass} appearance-none pr-10`}>
                <option value=''>Select if you'd like</option>
                <option value='woman'>Woman</option>
                <option value='man'>Man</option>
                <option value='non-binary'>Non-binary</option>
                <option value='prefer-not'>Prefer not to say</option>
              </select>
              <ChevronDown />
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <SectionTitle>Contact Information</SectionTitle>

          <div className='grid gap-4 md:grid-cols-2'>
            <div>
              <label className='mb-1 block text-[13px] font-[500] text-[#111111]'>
                Email Address <Req />
              </label>
              <input type='email' placeholder='you@example.com' className={inputClass} />
            </div>

            <div>
              <label className='mb-1 block text-[13px] font-[500] text-[#111111]'>
                Phone Number <Req />
              </label>
              <input type='tel' placeholder='+1 (555) 000-0000' className={inputClass} />
            </div>
          </div>
        </section>

        {/* Location */}
        <section>
          <SectionTitle>Location</SectionTitle>

          <div className='grid gap-4 md:grid-cols-3'>
            <div>
              <label className='mb-1 block text-[13px] font-[500] text-[#111111]'>
                City <Req />
              </label>
              <input type='text' placeholder='City' className={inputClass} />
            </div>

            <div>
              <label className='mb-1 block text-[13px] font-[500] text-[#111111]'>
                State / Province
              </label>
              <input type='text' placeholder='State / Province' className={inputClass} />
            </div>

            <div>
              <label className='mb-1 block text-[13px] font-[500] text-[#111111]'>
                Country <Req />
              </label>
              <input type='text' placeholder='Country' className={inputClass} />
            </div>
          </div>
        </section>

      </div>
    </EnrollmentStepLayout>
  )
}

export default Identity
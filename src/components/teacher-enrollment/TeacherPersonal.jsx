import React from 'react'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
import { inputClass, Req } from './fields'

const TeacherPersonal = () => {
  return (
    <EnrollmentStepLayout
      title='Personal Details'
      description='Your basic contact information'
      backHref='/'
      nextHref='/graduate/professional'
      showBack
      footerDivider
    >
      <div className='grid gap-5 md:grid-cols-2'>
        <div>
          <label className='mb-2 block text-[14px] font-[500] text-[#111111]'>
            Full Legal Name <Req />
          </label>
          <input type='text' placeholder='Enter your full legal name' className={inputClass} />
        </div>
        <div>
          <label className='mb-2 block text-[14px] font-[500] text-[#111111]'>Preferred Name</label>
          <input type='text' placeholder='How should we address you?' className={inputClass} />
        </div>
        <div>
          <label className='mb-2 block text-[14px] font-[500] text-[#111111]'>
            Contact Email <Req />
          </label>
          <input type='email' placeholder='you@example.com' className={inputClass} />
        </div>
        <div>
          <label className='mb-2 block text-[14px] font-[500] text-[#111111]'>
            Phone Number <Req />
          </label>
          <input type='tel' placeholder='+1 (555) 000-0000' className={inputClass} />
        </div>
      </div>
      <div className='mt-5 grid gap-5 md:grid-cols-3'>
        <div>
          <label className='mb-2 block text-[14px] font-[500] text-[#111111]'>
            City <Req />
          </label>
          <input type='text' placeholder='City' className={inputClass} />
        </div>
        <div>
          <label className='mb-2 block text-[14px] font-[500] text-[#111111]'>
            State <Req />
          </label>
          <input type='text' placeholder='State' className={inputClass} />
        </div>
        <div>
          <label className='mb-2 block text-[14px] font-[500] text-[#111111]'>
            Country <Req />
          </label>
          <input type='text' placeholder='Country' className={inputClass} />
        </div>
      </div>
    </EnrollmentStepLayout>
  )
}

export default TeacherPersonal

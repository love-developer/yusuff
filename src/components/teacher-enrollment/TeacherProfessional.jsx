import React from 'react'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
import { inputClass, Req } from './fields'

const TeacherProfessional = () => {
  return (
    <EnrollmentStepLayout
      title='Professional Information'
      description='Your qualifications and expertise'
      backHref='/graduate/personal'
      nextHref='/graduate/teaching'
      showBack
      footerDivider
    >
      <div className='space-y-5'>
        <div>
          <label className='mb-2 block text-[14px] font-[500] text-[#111111]'>
            Highest Level of Education <Req />
          </label>
          <input
            type='text'
            placeholder={"e.g., Ph.D., Master's Degree, Bachelor's Degree"}
            className={inputClass}
          />
        </div>
        <div>
          <label className='mb-2 block text-[14px] font-[500] text-[#111111]'>
            Certifications, Degrees, or Licenses <Req />
          </label>
          <textarea
            rows={4}
            placeholder='List your relevant certifications and degrees'
            className={`${inputClass} min-h-[120px] resize-y p-[10px]`}
          />
        </div>
        <div>
          <label className='mb-2 block text-[14px] font-[500] text-[#111111]'>
            Primary Field(s) of Expertise <Req />
          </label>
          <textarea
            rows={3}
            placeholder='e.g., Mathematics, Computer Science, Languages'
            className={`${inputClass} min-h-[96px] resize-y p-[10px]`}
          />
        </div>
        <div>
          <label className='mb-2 block text-[14px] font-[500] text-[#111111]'>
            Teaching Experience (Years) <Req />
          </label>
          <input type='text' inputMode='numeric' placeholder='0' className={inputClass} />
        </div>
      </div>
    </EnrollmentStepLayout>
  )
}

export default TeacherProfessional

import React from 'react'
import EnrollmentStepLayout from '../student-enrollment/EnrollmentStepLayout'
import { inputClass, Req } from './fields'

const AdminOath = () => {
  return (
    <EnrollmentStepLayout
      title='Administrative Oath'
      description='Your solemn commitment to the UniverCity'
      backHref='/professional-development/security'
      nextHref='/professional-development/documents'
      showBack
      footerDivider
    >
      <div className='h-[115px] flex items-center p-[20px] mb-6 rounded-[10px] border border-[#E5E7EC] text-[14px] leading-[28px] text-[#111111]'>
        <p>
          &ldquo;I, <strong className='text-[#FF9600]'>[Your Name]</strong>, solemnly affirm to uphold and protect the
          Seekheed UniverCity Constitution, to serve the community with honesty, integrity, fairness, and transparency,
          and to safeguard the rights, dignity, and wellbeing of every member. I accept full accountability for my
          actions as an administrator.&rdquo;
        </p>
      </div>

      <div>
        <label className='mb-2 block text-[14px] font-[500] text-[#111111]'>
          Type the oath above in your own words to confirm understanding <Req />
        </label>
        <textarea
          rows={6}
          placeholder='Type the oath here...'
          className={`${inputClass} min-h-[97px] resize-y p-[10px]`}
        />
      </div>
    </EnrollmentStepLayout>
  )
}

export default AdminOath

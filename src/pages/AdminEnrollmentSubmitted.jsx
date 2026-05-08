import React from 'react'
import ApplicationSuccess from '../components/student-enrollment/ApplicationSuccess'

const AdminEnrollmentSubmitted = () => {
  return (
    <div className='flex flex-1 flex-col bg-white'>
      <ApplicationSuccess
        title='Enrollment Submitted!'
        thankYou='Thank you for completing your administrator application with Seekheed UniverCity.'
        reviewNote='Our team will review your application and get back to you within 2-3 business days.'
      />
    </div>
  )
}

export default AdminEnrollmentSubmitted

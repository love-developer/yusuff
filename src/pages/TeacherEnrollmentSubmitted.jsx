import React from 'react'
import ApplicationSuccess from '../components/student-enrollment/ApplicationSuccess'

const TeacherEnrollmentSubmitted = () => {
  return (
    <div className='flex flex-1 flex-col bg-white'>
      <ApplicationSuccess
        title='Application Submitted!'
        thankYou='Thank you for completing your teacher application with Seekheed UniverCity.'
        reviewNote='Our team will review your credentials and get back to you within 2-3 business days.'
      />
    </div>
  )
}

export default TeacherEnrollmentSubmitted

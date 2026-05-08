import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import TeacherPersonal from '../components/teacher-enrollment/TeacherPersonal'
import TeacherProfessional from '../components/teacher-enrollment/TeacherProfessional'
import TeacherTeaching from '../components/teacher-enrollment/TeacherTeaching'
import TeacherIpAgreement from '../components/teacher-enrollment/TeacherIpAgreement'
import TeacherBackground from '../components/teacher-enrollment/TeacherBackground'
import TeacherConstitution from '../components/teacher-enrollment/TeacherConstitution'
import TeacherDocuments from '../components/teacher-enrollment/TeacherDocuments'
import TeacherSignature from '../components/teacher-enrollment/TeacherSignature'

const steps = [
  { id: 'personal', title: 'Personal', subtitle: 'Personal details', path: '/graduate/personal' },
  { id: 'professional', title: 'Professional', subtitle: 'Work details', path: '/graduate/professional' },
  { id: 'teaching', title: 'Teaching', subtitle: 'Teaching info', path: '/graduate/teaching' },
  { id: 'ip-agreement', title: 'IP Agreement', subtitle: 'Content rights', path: '/graduate/ip-agreement' },
  { id: 'background', title: 'Background', subtitle: 'Verification info', path: '/graduate/background' },
  { id: 'constitution', title: 'Constitution', subtitle: 'Accept rules', path: '/graduate/constitution' },
  { id: 'documents', title: 'Documents', subtitle: 'Upload files', path: '/graduate/documents' },
  { id: 'signature', title: 'Signature', subtitle: 'Final consent', path: '/graduate/signature' }
]

const CheckIcon = () => (
  <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M5 13l4 4L19 7' />
  </svg>
)

const TeacherRegistration = () => {
  const location = useLocation()
  const segment = location.pathname.split('/').filter(Boolean).pop()
  const currentStep = steps.some((s) => s.id === segment) ? segment : 'personal'
  const currentIndex = steps.findIndex((step) => step.id === currentStep)

  const renderStepContent = () => {
    switch (currentStep) {
      case 'personal':
        return <TeacherPersonal />
      case 'professional':
        return <TeacherProfessional />
      case 'teaching':
        return <TeacherTeaching />
      case 'ip-agreement':
        return <TeacherIpAgreement />
      case 'background':
        return <TeacherBackground />
      case 'constitution':
        return <TeacherConstitution />
      case 'documents':
        return <TeacherDocuments />
      case 'signature':
        return <TeacherSignature />
      default:
        return <TeacherPersonal />
    }
  }

  return (
    <div className='flex min-h-0 flex-1 flex-col'>
      <div className='mx-auto flex w-full max-w-[1320px] flex-1 flex-col gap-[34px] px-4 py-6 md:flex-row md:gap-8 md:px-8 md:py-8'>
        <aside className='w-full shrink-0 md:w-[288px]'>
          <div className='rounded-[12px] border-[1px] border-[#E5E7EC] bg-white p-[16px] shadow-[0_2px_16px_rgba(0,0,0,0.06)]'>
          <Link
              to='/'
              className='w-[133px] h-[36px] rounded-[10px] inline-flex items-center gap-[4px] text-[14px] font-[500] text-[#111111]'
            >
              <svg className='h-[16px] w-[16px]' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
              </svg>
              Back to Roles
            </Link>

            <nav className='mt-[24px] flex flex-col gap-[8px]' aria-label='Enrollment steps'>
              {steps.map((step, index) => {
                const isActive = step.id === currentStep
                const isCompleted = index < currentIndex

                return (
                  <Link
                    key={step.id}
                    to={step.path}
                      className={`flex items-center gap-3 rounded-[12px] p-3 transition-colors ${isActive
                        ? 'bg-[#FF96001A]'
                        : 'hover:bg-[#F9FAFB]'
                    }`}
                  >
                    <div
                      className={`flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full text-[14px] font-[500] ${
                        isCompleted
                          ? 'bg-[#FF9600] text-white'
                          : isActive
                            ? 'bg-[#FF9800] text-white'
                            : 'bg-[#EDEFF2] text-[#7C8091]'
                      }`}
                    >
                      {isCompleted && !isActive ? <CheckIcon /> : index + 1}
                    </div>
                    <div className='min-w-0 flex-1'>
                      <p
                        className={`text-[14px] font-[500] leading-[20px] ${
                          isActive
                            ? 'text-[#FF9600]'
                            : isCompleted
                              ? 'text-[#FF9600]'
                              : 'text-[#7C8091]'
                        }`}
                      >
                        {step.title}
                      </p>
                      <p
                        className={`mt-0.5 text-[12px] leading-[16px] ${
                          isActive
                            ? 'text-[#7C8091]'
                            : isCompleted
                              ? 'text-[#7C8091]'
                              : 'text-[#7C8091]'
                        }`}
                      >
                        {step.subtitle}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </nav>
          </div>
        </aside>

        <main className='min-w-0 flex-1'>{renderStepContent()}</main>
      </div>
    </div>
  )
}

export default TeacherRegistration

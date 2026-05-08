import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import AdminIdentity from '../components/admin-enrollment/AdminIdentity'
import AdminRole from '../components/admin-enrollment/AdminRole'
import AdminEthics from '../components/admin-enrollment/AdminEthics'
import AdminDataProtection from '../components/admin-enrollment/AdminDataProtection'
import AdminSecurity from '../components/admin-enrollment/AdminSecurity'
import AdminOath from '../components/admin-enrollment/AdminOath'
import AdminDocuments from '../components/admin-enrollment/AdminDocuments'
import AdminSignature from '../components/admin-enrollment/AdminSignature'

const base = '/professional-development'

const steps = [
  { id: 'identity', title: 'Identity', subtitle: 'Personal details', path: `${base}/identity` },
  { id: 'role', title: 'Role', subtitle: 'Admin responsibilities', path: `${base}/role` },
  { id: 'ethics', title: 'Ethics', subtitle: 'Code of conduct', path: `${base}/ethics` },
  { id: 'data-protection', title: 'Data Protection', subtitle: 'Privacy agreement', path: `${base}/data-protection` },
  { id: 'security', title: 'Security', subtitle: 'System responsibility', path: `${base}/security` },
  { id: 'oath', title: 'Oath', subtitle: 'Service commitment', path: `${base}/oath` },
  { id: 'documents', title: 'Documents', subtitle: 'Upload files', path: `${base}/documents` },
  { id: 'signature', title: 'Signature', subtitle: 'Final consent', path: `${base}/signature` }
]

const CheckIcon = () => (
  <svg className='h-4 w-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M5 13l4 4L19 7' />
  </svg>
)

const AdminRegistration = () => {
  const location = useLocation()
  const segment = location.pathname.split('/').filter(Boolean).pop()
  const currentStep = steps.some((s) => s.id === segment) ? segment : 'identity'
  const currentIndex = steps.findIndex((step) => step.id === currentStep)

  const renderStepContent = () => {
    switch (currentStep) {
      case 'identity':
        return <AdminIdentity />
      case 'role':
        return <AdminRole />
      case 'ethics':
        return <AdminEthics />
      case 'data-protection':
        return <AdminDataProtection />
      case 'security':
        return <AdminSecurity />
      case 'oath':
        return <AdminOath />
      case 'documents':
        return <AdminDocuments />
      case 'signature':
        return <AdminSignature />
      default:
        return <AdminIdentity />
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

            <nav className='mt-[24px] flex flex-col gap-[8px]' aria-label='Administrator application steps'>
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
                      className={`flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full text-[14px] font-[500] ${isCompleted
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
                        className={`text-[14px] font-[500] leading-[20px] ${isActive
                          ? 'text-[#FF9600]'
                          : isCompleted
                            ? 'text-[#FF9600]'
                            : 'text-[#7C8091]'
                          }`}
                      >
                        {step.title}
                      </p>
                      <p
                        className={`mt-0.5 text-[12px] leading-[16px] ${isActive
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

export default AdminRegistration

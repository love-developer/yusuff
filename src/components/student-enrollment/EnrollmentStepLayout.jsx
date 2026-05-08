import React from 'react'
import { Link } from 'react-router-dom'

const ArrowLeft = () => (
  <svg className='h-[16px] w-[16px]' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
  </svg>
)

const ArrowRight = () => (
  <svg className='h-[16px] w-[16px]' fill='none' stroke='currentColor' viewBox='0 0 24 24' aria-hidden>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
  </svg>
)

/**
 * Main content card + title block + footer nav matching enrollment reference UI.
 */
const EnrollmentStepLayout = ({
  title,
  description,
  children,
  backHref,
  nextHref,
  showBack = true,
  backLabel = 'Back',
  nextLabel = 'Continue',
  progress = null,
  primarySlot = null,
  topRightSlot = null,
  footerDivider = false,
  footerClassName = '',
  titleClassName = ''
}) => {
  return (
    <div className='relative flex min-h-0 flex-1 flex-col h-[100%]'>
      <div className='rounded-[16px] border-[1px] border-[#E5E7EC] bg-white p-[32px] shadow-[0px_4px_30px_0px_#0000000D] w-full max-w-[998px] h-[100%] flex flex-col justify-between'>
        <div>
          <div
            className={`mb-[24px] flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between ${progress != null ? 'pr-24' : ''} ${topRightSlot ? '' : ''}`}
          >
            <div className='max-w-[720px] min-w-0 flex-1'>
              <h2
                className={`text-[24px] font-[700] leading-[32px] text-[#111111] tracking-[-0.6px] ${titleClassName}`.trim()}
              >
                {title}
              </h2>
              {description && <p className='mt-[6px] text-[15px] font-[400] leading-[24px] text-[#626D84]'>{description}</p>}
            </div>
            {topRightSlot && (
              <div className='shrink-0 self-start sm:ml-4'>{topRightSlot}</div>
            )}
          </div>

          <div>{children}</div>
        </div>

        <div className='border-t border-[#DCDFE5] max-h-[65px] pt-[20px] mt-[32px]'>
          {(showBack || nextHref || primarySlot) && (
            <>
              <div
                className={`flex flex-col-reverse items-stretch justify-between gap-3 sm:flex-row sm:items-center ${footerClassName}`}
              >
                {showBack && backHref ? (
                  <Link
                    to={backHref}
                    className='flex gap-[4px] h-[40px] min-w-[88px] items-center justify-center rounded-[8px] border border-[#DCDFE5] bg-[#F6F7F9] text-[13px] font-[500] text-[#111111] transition-colors hover:bg-[#EDEEF1] opacity-[50%]'
                  >
                    <ArrowLeft />
                    {backLabel}
                  </Link>
                ) : (
                  <span />
                )}
                {primarySlot ? (
                  primarySlot
                ) : nextHref ? (
                  <Link
                    to={nextHref}
                    className='flex items-center justify-center h-[40px] min-w-[114px] gap-[4px] rounded-[8px] bg-[#FF9600] text-[13px] font-[800] text-[#FFFFFF] transition-colors hover:bg-[#F57C00]'
                  >
                    {nextLabel}
                    <ArrowRight />
                  </Link>
                ) : null}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default EnrollmentStepLayout

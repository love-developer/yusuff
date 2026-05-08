import React from 'react'
import Button from './Button'

const Card = ({ title, description, icon, color, buttonText, buttonLink, status }) => {
  const getStatusBadge = () => {
    if (status === 'available') {
      return (
        <div className='w-[140px] h-[24px] flex items-center justify-center bg-[#4BE55D26] rounded-full  text-[12px] font-[400] text-[#2E9E43]'>
          Verification Required
        </div>
      )
    } else if (status === 'restricted') {
      return (
        <div className='min-w-[186px] h-[24px] flex items-center justify-center bg-[#FB929226] rounded-full  text-[12px] font-[400] text-[#C61808]'>
          Restricted / Governance Role
        </div>
      )
    }
    return null
  }

  return (
    <div className='min-w-[325px] min-h-[280px] rounded-[12px] border-[1px] border-[#E5E7EC] bg-white p-[24px]' style={{
      boxShadow: '0px 1px 10px 0px #00000008'
    }}>
      <div className='flex flex-col justify-between h-full w-full'>
        <div className='flex justify-between items-start'>
          <div className='w-[56px] h-[56px] rounded-[12px] flex items-center justify-center bg-[#FF96001A]'>
            <img src={icon} alt={title} className='w-[28px] h-[28px]' />
          </div>
          {getStatusBadge()}
        </div>

        <div className='gap-[10px] flex flex-col'>
          <h3 className='text-[20px] font-[700] text-[#171F36] leading-[28px]'>
            {title}
          </h3>
          <p className='text-[14px] text-[#626D84] font-[400] leading-[20px]'>
            {description}
          </p>
        </div>

        <Button href={buttonLink}>
          {buttonText}
          <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
    </div >
  )
}

export default Card

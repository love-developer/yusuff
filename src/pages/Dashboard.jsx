import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => (
  <div className='flex flex-1 flex-col items-center justify-center gap-6 px-6 py-16'>
    <p className='text-[36px] font-[700] leading-[40px] text-[#1B2232]'>Learner dashboard</p>
    <p className='text-[18px] font-[400] leading-[28px] text-[#626D84]'>Your personalized dashboard will appear here once your enrollment is approved.</p>
    <Link to='/' className='w-[146px] h-[40px] inline-flex items-center justify-center rounded-[12px] bg-[#FF9600] text-[14px] font-[500] text-[#FCFAF8]'>
      Back to home
    </Link>
  </div>
)

export default Dashboard

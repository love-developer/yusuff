import React from 'react'
import EnrollmentStepLayout from './EnrollmentStepLayout'

const PlayLarge = () => (
  <svg className='h-[45px] w-[45px] text-[#FF9800]' viewBox='0 0 24 24' fill='currentColor' aria-hidden>
    <path d='M8 5v14l11-7L8 5z' />
  </svg>
)

const PlaySmall = () => (
  <svg className='h-[24px] h-[24px] shrink-0 text-[#FF9800]' viewBox='0 0 24 24' fill='currentColor' aria-hidden>
    <path d='M8 5v14l11-7L8 5z' />
  </svg>
)

const constitutionArticles = [
  {
    title: 'Article I – Purpose & Mission',
    body: `Seekheed UniverCity exists to provide rigorous, ethical, and inclusive education that empowers learners 
    to thrive in society. We uphold academic honesty, curiosity, respect for peers, and a commitment to the common good.`
  },
  {
    title: 'Article II – Conduct & Accountability',
    body: `All members contribute to a learning environment free from harassment, discrimination, and intimidation.
    Participation requires honesty in coursework, safeguarding community resources, and following applicable laws and policies.`
  },
  {
    title: 'Article III – Technology & Intellectual Property',
    body: `Use of university systems shall be lawful, respectful of privacy, and aligned with licensing rules. Scholars 
    acknowledge that shared materials belong to creators unless otherwise expressly granted.`
  },
  {
    title: 'Article IV – Amendment & Acceptance',
    body: `The institution may revise this constitution through transparent governance procedures. Enrollment constitutes 
    agreement to abide by the current constitution and accompanying policies.`
  }
]

const Constitution = () => {
  return (
    <EnrollmentStepLayout
      title='Seekheed UniverCity Constitution'
      description='Please watch the welcome video and read our constitution before proceeding.'
      backHref='/undergraduate/age-category'
      nextHref='/undergraduate/safety'
      nextLabel='Continue'
      showBack
    >
      <div className='flex flex-col gap-[16px]'>
        <a
          href='#video-briefing'
          className='inline-flex items-center gap-[4px] text-[16px] font-[700] text-[#FF9600]'
        >
          <PlaySmall />
          <span className=''>Welcome Video & Briefing</span>
        </a>

        <div
          id='video-briefing'
          className='flex cursor-pointer flex-col items-center justify-center rounded-[12px] border-2 border-dashed border-[#DCDFE5] bg-[#EDEFF24D] text-center transition-colors hover:border-[#FF9800]/50 hover:bg-[#FFF9F3] h-[319px]'
          role='button'
          tabIndex={0}
        >
          <div className='w-[80px] h-[80px] py-[26px] px-[22px] rounded-full bg-[#FF96001A] flex items-center justify-center'>
            <PlayLarge />
          </div>
          <p className='mt-[16px] text-[18px] font-[600] text-[#111111]'>Click to watch the welcome briefing</p>
          <p className='mt-[8px] text-[14px] font-[400] text-[#7C8091]'>(Required before enrollment)</p>
        </div>

        <div className='rounded-[16px] border-[1px] border-[#E5E7EC] bg-[#F9F9F9] p-[32px]'>
          <h3 className='text-[20px] font-[600] text-[#111111]'>Seekheed UniverCity Constitution</h3>
          <div className='mt-[24px] flex flex-col gap-[24px]'>
            {constitutionArticles.map((a) => (
              <article key={a.title}>
                <h4 className='text-[16px] font-[500] text-[#111111]'>{a.title}</h4>
                <p className='mt-[8px] text-[14px] font-[400] text-[#7C8091]'>{a.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className='rounded-[16px] border-[1px] border-[#E5E7EC] bg-[#F9F9F9] py-[32px] px-[24px]'>
          <div className='flex flex-col gap-[10px]'>
            {[
              'I have read and understood the Seekheed UniverCity Constitution *',
              'I have watched the complete welcome video briefing *',
              'I affirm that I accept and will abide by the Seekheed UniverCity Constitution *'
            ].map((label) => (
              <label key={label} className='flex cursor-pointer items-start gap-3 text-[14px] text-[#333333] items-center'>
                <input
                  type="checkbox"
                  className="h-[18px] w-[18px] shrink-0 appearance-none rounded-full border border-[#111111] checked:bg-[#FF9800] checked:border-[#FF9800]"
                />
                <span className='text-[14px] text-[#111111] font-[500] '>{label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </EnrollmentStepLayout>
  )
}

export default Constitution

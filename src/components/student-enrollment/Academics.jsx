import React, { useState } from 'react'
import EnrollmentStepLayout from './EnrollmentStepLayout'

const Req = () => <span className='text-[#DC2626]'> *</span>

const inputClass =
  'w-full h-[48px] rounded-[10px] border-[1px] border-[#E5E7EC] bg-white px-4 text-[14px] text-[#111111] placeholder:text-[#9CA3AF] focus:outline-none'

const selectClass = `${inputClass} appearance-none pr-10`

const ChevronDown = () => (
  <svg className='pointer-events-none absolute right-3 top-[50px] h-5 w-5 -translate-y-1/2 text-[#757575]' viewBox='0 0 24 24' fill='none' stroke='currentColor' aria-hidden>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
  </svg>
)

const SectionTitle = ({ children }) => (
  <h3 className='mb-2 text-[18px] font-[600] text-[#171F36]'>{children}</h3>
)

const learningStyles = [
  {
    id: 'visual',
    title: 'Visual',
    desc: 'Learn best with images and diagrams',
    Icon: ({ on }) => (
      <svg className={`h-[16px] w-[16px] ${on ? 'text-[#FF9800]' : 'text-[#9CA3AF]'}`} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.4} aria-hidden>
        <path d='M4 7h16M4 12h10M4 17h14' strokeLinecap='round' />
        <rect x='14' y='9' width='6' height='8' rx='1' />
      </svg>
    )
  },
  {
    id: 'audio',
    title: 'Audio',
    desc: 'Learn best by listening',
    Icon: ({ on }) => (
      <svg className={`h-[16px] w-[16px] ${on ? 'text-[#FF9800]' : 'text-[#9CA3AF]'}`} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.4} aria-hidden>
        <path d='M5 10v4a2 2 0 002 2h2l4 3V5l-4 3H7a2 2 0 00-2 2z' strokeLinejoin='round' />
        <path d='M17 9a4 4 0 010 6M19 7a7 7 0 010 10' strokeLinecap='round' />
      </svg>
    )
  },
  {
    id: 'kinesthetic',
    title: 'Kinesthetic',
    desc: 'Learn best by doing',
    Icon: ({ on }) => (
      <svg className={`h-[16px] w-[16px] ${on ? 'text-[#FF9800]' : 'text-[#9CA3AF]'}`} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.4} aria-hidden>
        <path d='M12 4v4M8 8l4 4 4-4M8 16h8M9 12v7M15 12v7' strokeLinecap='round' />
      </svg>
    )
  },
  {
    id: 'mixed',
    title: 'Mixed',
    desc: 'Prefer a combination of styles',
    Icon: ({ on }) => (
      <svg className={`h-[16px] w-[16px] ${on ? 'text-[#FF9800]' : 'text-[#9CA3AF]'}`} viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={1.4} aria-hidden>
        <path d='M8 8h8v8H8zM4 12h4M16 12h4M12 4v4M12 16v4' strokeLinecap='round' />
      </svg>
    )
  }
]

const Academics = () => {
  const [prefs, setPrefs] = useState(() => new Set())

  const togglePref = (id) => {
    setPrefs((p) => {
      const n = new Set(p)
      if (n.has(id)) n.delete(id)
      else n.add(id)
      return n
    })
  }

  return (
    <EnrollmentStepLayout
      title='Academic Intent'
      description='Tell us about your academic goals and learning style so we can personalize your experience.'
      backHref='/undergraduate/identity'
      nextHref='/undergraduate/astrology'
      showBack
      footerDivider
    >
      <div className='space-y-10'>
        <section>
          <SectionTitle>Program Selection</SectionTitle>
          <div className='mt-5 grid gap-5 md:grid-cols-2'>
            <div className='relative'>
              <label className='mb-2 block text-[13px] font-[500] text-[#171F36]'>
                Program / Area of Study <Req />
              </label>
              <select className={selectClass}>
                <option value=''>Select your program</option>
                <option value='cs'>Science & Emerging Technology</option>
                <option value='biz'>Business & Entrepreneurship</option>
                <option value='arts'>Arts, Culture & Humanities</option>
                <option value='health'>Health & Community Impact</option>
              </select>
              <ChevronDown />
            </div>
            <div className='relative'>
              <label className='mb-2 block text-[13px] font-[500] text-[#171F36]'>
                Previous Education Level <Req />
              </label>
              <select className={selectClass}>
                <option value=''>Select education level</option>
                <option value='secondary'>Secondary / High school</option>
                <option value='some-college'>Some college</option>
                <option value='undergrad'>Completed undergraduate degree</option>
              </select>
              <ChevronDown />
            </div>
          </div>
        </section>

        <section>
          <SectionTitle>Learning Preferences</SectionTitle>
          <p className='mb-5 text-[14px] text-[#626D84] font-[400]'>Select all that apply to help us customize your learning experience.</p>
          <div className='flex gap-4 flex-wrap'>
            {learningStyles.map(({ id, title, desc, Icon }) => {
              const on = prefs.has(id)
              return (
                <button
                  key={id}
                  type='button'
                  onClick={() => togglePref(id)}
                  className={`w-[306px] h-[80px] flex rounded-[12px] border-2 border-[#DCDFE5] bg-[#00000000] text-left transition-all p-4 gap-[6px] ${on ? 'border-[#FF9800]' : 'border-[#DCDFE5]'
                    }`}
                >
                  <span
                    className={`flex h-[16px] w-[16px] shrink-0 items-center justify-center rounded-full border-2 text-[10px] ${on ? 'border-[#FF9800] bg-[#FF9800] text-white' : 'border-[#D1D5DB]'
                      }`}
                    aria-hidden
                  >
                    {on ? '✓' : ''}
                  </span>
                  <div className='min-w-0 flex-1 flex flex-col'>
                    <div className='flex items-center gap-[4px]'>
                      <Icon on={on} />
                      <p className='text-[14px] font-[500] text-[#171F36]'>{title}</p>
                    </div>
                    <p className='mt-1 text-[12px] font-[400] leading-relaxed text-[#626D84]'>{desc}</p>
                  </div>
                </button>
              )
            })}
          </div>
        </section>

        <section>
          <SectionTitle>Start Date</SectionTitle>
          <div className='mt-4 max-w-[320px]'>
            <label className='mb-2 block text-[13px] font-[500] text-[#171F36]'>
              Expected Start Date <Req />
            </label>
            <input type='date' placeholder='mm/dd/yyyy' className={inputClass} />
          </div>
        </section>
      </div>
    </EnrollmentStepLayout>
  )
}

export default Academics

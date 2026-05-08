import React from 'react'

const AnnouncementBar = () => {
  return (
    <div className='w-full max-w-[446px] min-h-[36px] bg-[#FF96001A] rounded-full mx-auto flex items-center justify-center p-2'>
      <div className='flex items-center justify-center gap-[10px]'>

        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C10.9 2 10 2.9 10 4V5.1C6.61 5.57 4 8.47 4 12V17L2 19V20H22V19L20 17V12C20 8.47 17.39 5.57 14 5.1V4C14 2.9 13.1 2 12 2ZM12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22Z"
            fill="#FF9600"
          />
        </svg>

        <p className='text-[14px] text-[#FF9600] font-[500] text-center'>
          Protected by our Constitution and Digital Ethics Framework
        </p>
      </div>
    </div>
  )
}

export default AnnouncementBar

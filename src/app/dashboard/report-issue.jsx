import { Button } from '@material-tailwind/react'
import React from 'react'

export default function ReportIssue({ setShowIconDrawer, showIconDrawer }) {
  return (
    <div className='overflow-hidden h-[100vh] w-full overflow-y-scroll flex'>
      <div className={`w-[100%]`}>
        <div className={`flex justify-between py-[15px] px-[20px] lg:px-[50px] bg-base w-full z-[200] md:h-[15vh] sticky top-0 ${showIconDrawer ? "translate-x-[100px]" : ""} lg:translate-x-[0px] transition-all duration-300`}>
          <div className='flex items-center gap-5 '>
            <div className='lg:hidden'>
              {showIconDrawer ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                  onClick={() => setShowIconDrawer(false)}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                  onClick={() => setShowIconDrawer(true)}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
              }
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48"            >
              <g clipPath="url(#clip0_200_134)">
                <path
                  fill="#CEE1F2"
                  d="M16.654 5.985l-3.288-.466a3.24 3.24 0 00-3.645 2.65l-.573 3.273a3.242 3.242 0 01-1.673 2.304l-2.933 1.557a3.243 3.243 0 00-1.393 4.288l1.459 2.985c.439.898.439 1.949 0 2.847L3.149 28.41a3.243 3.243 0 001.393 4.287l2.933 1.558a3.242 3.242 0 011.673 2.303l.573 3.273a3.24 3.24 0 003.645 2.65l3.288-.465c.205-.03.41-.037.612-.027l.174-1.818a2.237 2.237 0 01-2.516-1.83l-1.176-5.672a2.238 2.238 0 00-1.155-1.59l-2.025-1.075a2.239 2.239 0 01-.96-2.96l1.006-2.06a2.24 2.24 0 000-1.966l-1.007-2.06a2.239 2.239 0 01.961-2.96l2.025-1.076a2.238 2.238 0 001.155-1.59l1.13-5.716a2.236 2.236 0 012.516-1.829l.221-1.81c-.314.05-.638.054-.96.009z"
                ></path>
                <path
                  fill="#4E2DD8"
                  d="M24 48c-1.28 0-2.56-.482-3.556-1.448l-2.387-2.31a1.355 1.355 0 00-1.14-.37l-3.288.465a5.09 5.09 0 01-5.754-4.182l-.574-3.273a1.359 1.359 0 00-.705-.972l-2.933-1.558a5.097 5.097 0 01-2.198-6.765L2.924 24.6a1.36 1.36 0 000-1.202l-1.459-2.985a5.097 5.097 0 012.198-6.766l2.933-1.557c.375-.2.632-.553.705-.972l.574-3.273a5.094 5.094 0 015.754-4.182l3.288.465c.42.06.835-.075 1.14-.37l2.387-2.31a5.092 5.092 0 017.112 0l2.387 2.31c.305.295.72.43 1.14.37l3.288-.465a5.094 5.094 0 015.753 4.182l.574 3.273c.074.418.33.773.706.972l2.933 1.557a5.097 5.097 0 012.197 6.766l-1.458 2.985a1.36 1.36 0 000 1.202l1.459 2.986a5.097 5.097 0 01-2.198 6.765l-2.933 1.558c-.375.199-.632.553-.706.972l-.574 3.273a5.094 5.094 0 01-5.753 4.182l-3.288-.466c-.42-.06-.835.076-1.14.371l-2.387 2.31A5.098 5.098 0 0124 48zm-6.88-7.892c1.317 0 2.58.506 3.544 1.44l2.387 2.31a1.359 1.359 0 001.898 0l2.387-2.31a5.08 5.08 0 014.272-1.389l3.288.466a1.361 1.361 0 001.536-1.118l.574-3.273a5.083 5.083 0 012.64-3.635l2.933-1.558a1.363 1.363 0 00.587-1.809l-1.458-2.985a5.086 5.086 0 010-4.493l1.458-2.986a1.363 1.363 0 00-.587-1.809l-2.933-1.557a5.084 5.084 0 01-2.64-3.636l-.574-3.273a1.36 1.36 0 00-1.536-1.117l-3.288.465a5.081 5.081 0 01-4.273-1.39l-2.386-2.31a1.359 1.359 0 00-1.898 0l-2.387 2.31a5.08 5.08 0 01-4.273 1.39l-3.287-.465a1.36 1.36 0 00-1.536 1.117l-.574 3.273a5.083 5.083 0 01-2.64 3.636l-2.933 1.557a1.363 1.363 0 00-.588 1.81l1.459 2.985a5.086 5.086 0 010 4.493l-1.458 2.985a1.363 1.363 0 00.587 1.81l2.933 1.557a5.084 5.084 0 012.64 3.635l.574 3.273a1.36 1.36 0 001.536 1.118l3.288-.466c.243-.034.487-.051.728-.051z"
                ></path>
                <path
                  fill="#FF4BAC"
                  d="M24.094 28.03a1.874 1.874 0 01-1.875-1.874V14.723a1.874 1.874 0 013.749 0v11.433c0 1.035-.84 1.875-1.874 1.875zm0 7.404a2.343 2.343 0 100-4.686 2.343 2.343 0 000 4.686z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_200_134">
                  <path fill="#fff" d="M0 0H48V48H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <p className='font-sora font-[600] text-[14px] leading-[17px]'>Report Issue</p>
          </div>
        </div>

        {/* Main Content */}
        <div className={`mt-[20px] px-[20px] lg:px-[50px] pb-[60px] flex flex-col gap-[30px] text-white`}>
          <div className='bg-primary rounded-[20px] py-[5%] px-[10px] lg:px-[15%] font-[700] text-[14px] lg:text-[18px] leading-[22px] flex flex-col gap-8'>
            <div className='flex gap-5 items-start'>
              <p className='w-[150px]'>Report Issue</p>
              <textarea type="text" className='bg-base rounded-[10px] p-[15px] text-black outline-none w-full min-h-[130px]' />
            </div>
            <div className='flex justify-end'>
              <Button className='bg-third'>Save</Button>
            </div>
          </div>
        </div >
      </div>
    </div>
  )
}

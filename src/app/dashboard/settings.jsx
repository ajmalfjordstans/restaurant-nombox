import General from '@/components/dashboard-settings/general'
import Print from '@/components/dashboard-settings/print'
import React, { Suspense, useState } from 'react'

const TABLE_HEAD = ['general', 'print', 'receipt', 'device', 'table']

export function RenderTab({ tab }) {
  if (tab === 'print') {
    return (
      <Print />
    )
  }
  else if (tab === 'receipt') {
    return
  }
  else if (tab === 'device') {
    return
  }
  else if (tab === 'table') {
    return
  }
  else {
    return (
      <General />
    )
  }

}

export default function Settings({ setShowIconDrawer, showIconDrawer }) {
  const [tab, setTab] = useState('general')
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
              <g clipPath="url(#clip0_200_173)">
                <path
                  fill="#CEE1F2"
                  d="M27.75 42.375v-.085c0-.114.008-.228.019-.34a5.62 5.62 0 00-2.026-1.175 9.073 9.073 0 00-1.46-3.59 9.098 9.098 0 00-4.198-3.342 10.561 10.561 0 01-2.782-1.621 9.13 9.13 0 00-4.482-1.95 9.01 9.01 0 00.642-4.81 10.744 10.744 0 01.009-3.033 9.015 9.015 0 00-.611-4.816 9.177 9.177 0 004.5-1.93 10.565 10.565 0 012.72-1.571 9.113 9.113 0 004.195-3.335 9.067 9.067 0 001.458-3.55 5.619 5.619 0 002.04-1.181 3.472 3.472 0 01-.024-.383v-.038a3.75 3.75 0 00-7.5 0c0 1.44-.887 2.725-2.227 3.252a16.204 16.204 0 00-4.167 2.407 3.508 3.508 0 01-3.92.325l-.108-.06a3.766 3.766 0 00-5.121 1.415 3.736 3.736 0 001.42 5.101l.03.017c1.25.71 1.957 2.11 1.749 3.532a16.304 16.304 0 00-.014 4.628 3.471 3.471 0 01-1.736 3.489l-.029.016a3.736 3.736 0 00-1.42 5.102 3.766 3.766 0 005.12 1.415l.006-.003a3.502 3.502 0 013.934.336 16.202 16.202 0 004.262 2.482 3.493 3.493 0 012.221 3.25v.046a3.75 3.75 0 007.5 0z"
                ></path>
                <path
                  fill="#4E2DD8"
                  d="M24 48a5.631 5.631 0 01-5.625-5.625v-.047a1.61 1.61 0 00-1.032-1.504 18.052 18.052 0 01-4.755-2.77 1.621 1.621 0 00-1.829-.162l-.011.006c-2.701 1.522-6.143.57-7.672-2.123a5.57 5.57 0 01-.528-4.268 5.584 5.584 0 012.659-3.393l.023-.014c.57-.323.893-.966.805-1.599a18.281 18.281 0 01.016-5.158c.094-.644-.236-1.299-.82-1.63l-.03-.018a5.58 5.58 0 01-2.653-3.39 5.57 5.57 0 01.528-4.267c1.53-2.693 4.97-3.645 7.672-2.123l.113.064a1.63 1.63 0 001.827-.161 18.057 18.057 0 014.649-2.686 1.616 1.616 0 001.038-1.507A5.631 5.631 0 0124 0a5.631 5.631 0 015.625 5.625v.038c0 .663.404 1.254 1.03 1.504a18.064 18.064 0 014.598 2.679 1.629 1.629 0 001.83.165l.163-.093c2.707-1.525 6.15-.573 7.678 2.12a5.57 5.57 0 01.528 4.267 5.583 5.583 0 01-2.659 3.394l-.128.073c-.573.325-.896.967-.805 1.598a18.268 18.268 0 01.019 5.082 1.61 1.61 0 00.804 1.6l.113.063a5.584 5.584 0 012.656 3.392 5.57 5.57 0 01-.528 4.268c-1.529 2.693-4.97 3.645-7.672 2.123l-.065-.037a1.628 1.628 0 00-1.84.17 18.057 18.057 0 01-4.698 2.758 1.61 1.61 0 00-1.024 1.501v.085A5.631 5.631 0 0124 48zM11.553 33.928c1.204 0 2.4.409 3.392 1.21a14.308 14.308 0 003.77 2.195 5.338 5.338 0 013.41 4.995v.047c0 1.034.841 1.875 1.875 1.875a1.877 1.877 0 001.875-1.875v-.085a5.342 5.342 0 013.386-4.984 14.318 14.318 0 003.723-2.186c1.743-1.415 4.12-1.62 6.054-.52l.06.033a1.89 1.89 0 002.565-.71 1.859 1.859 0 00-.71-2.542l-.006-.003-.116-.066a5.32 5.32 0 01-2.668-5.369 14.565 14.565 0 00-.014-4.036c-.311-2.146.76-4.314 2.664-5.396l.134-.076a1.862 1.862 0 00.716-2.545 1.892 1.892 0 00-2.57-.708l-.159.09c-1.92 1.09-4.284.894-6.025-.499a14.316 14.316 0 00-3.643-2.123 5.348 5.348 0 01-3.39-4.987v-.038A1.877 1.877 0 0024 3.75a1.877 1.877 0 00-1.875 1.875 5.345 5.345 0 01-3.416 4.997 14.313 14.313 0 00-3.684 2.129c-1.739 1.385-4.1 1.577-6.016.489l-.107-.061a1.89 1.89 0 00-2.565.71 1.859 1.859 0 00.71 2.542l.037.021c1.917 1.089 2.993 3.273 2.677 5.434a14.494 14.494 0 00-.012 4.096 5.315 5.315 0 01-2.667 5.38l-.029.016a1.863 1.863 0 00-.716 2.545 1.892 1.892 0 002.57.708 5.348 5.348 0 012.646-.703z"
                ></path>
                <path
                  fill="#FF4BAC"
                  d="M24 33.844c-5.428 0-9.844-4.416-9.844-9.844 0-5.428 4.416-9.844 9.844-9.844 5.428 0 9.844 4.416 9.844 9.844 0 5.428-4.416 9.844-9.844 9.844zm0-15.938A6.1 6.1 0 0017.906 24 6.1 6.1 0 0024 30.094 6.1 6.1 0 0030.094 24 6.1 6.1 0 0024 17.906z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_200_173">
                  <path fill="#fff" d="M0 0H48V48H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <p className='font-sora font-[600] text-[14px] leading-[17px]'>Settings</p>
          </div>
          {/* <div className='flex items-center gap-10'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer z-[200]"
              onClick={() => {
                setShowFilter(true)
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div> */}
        </div>


        {/* Main Content */}
        <div className={`mt-[20px] px-[20px] lg:px-[50px] pb-[60px] flex flex-col gap-[30px]`}>
          {/* <div className='grid grid-cols-5 gap-2 border-b-[1px] border-black'> */}
          <div className='flex overflow-scroll gap-2 border-b-[1px] border-black'>
            {TABLE_HEAD.map((data, id) => {
              return (
                <div className={`${tab === data ? "bg-second text-white" : "bg-[#E7E2E2] text-black"} capitalize text-center rounded-t-[20px] py-[25px] font-[700] cursor-pointer transition-all duration-300 min-w-[130px] w-full`}
                  onClick={() => setTab(data)}
                  key={id}    
                >
                  {data}
                </div>
              )
            })}
          </div >
          <Suspense fallback={<div className='w-full h-full flex justify-center items-center'>Loading...</div>}>
            <RenderTab tab={tab} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

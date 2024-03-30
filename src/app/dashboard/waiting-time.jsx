import Slider from '@/components/slider'
import React from 'react'

const instore = {
  name: 'Instore',
  items: [
    {
      name: '5 Minutes',
      bg: '#FF4BAC',
      icon: '/icons/waiting-time.svg'
    },
    {
      name: '10 Minutes',
      bg: '#4E2DD8',
      icon: '/icons/waiting-time.svg'
    },
    {
      name: '15 Minutes',
      bg: '#07074D',
      icon: '/icons/waiting-time.svg'
    },
    {
      name: '20 Minutes',
      bg: '#FF4BAC',
      icon: '/icons/waiting-time.svg'
    },
    {
      name: '25 Minutes',
      bg: '#4E2DD8',
      icon: '/icons/waiting-time.svg'
    },
    {
      name: '30 Minutes',
      bg: '#07074D',
      icon: '/icons/waiting-time.svg'
    },
  ]
}
const delivery = {
  name: 'delivery',
  items: [
    {
      name: '5 Minutes',
      bg: '#FF4BAC',
      icon: '/icons/waiting-time.svg'
    },
    {
      name: '10 Minutes',
      bg: '#4E2DD8',
      icon: '/icons/waiting-time.svg'
    },
    {
      name: '15 Minutes',
      bg: '#07074D',
      icon: '/icons/waiting-time.svg'
    },
    {
      name: '20 Minutes',
      bg: '#FF4BAC',
      icon: '/icons/waiting-time.svg'
    },
    {
      name: '25 Minutes',
      bg: '#4E2DD8',
      icon: '/icons/waiting-time.svg'
    },
    {
      name: '30 Minutes',
      bg: '#07074D',
      icon: '/icons/waiting-time.svg'
    },
  ]
}
const collection = {
  name: 'collection',
  items: [
    {
      name: '5 Minutes',
      bg: '#FF4BAC',
      icon: '/icons/waiting-time.svg'
    },
    {
      name: '10 Minutes',
      bg: '#4E2DD8',
      icon: '/icons/waiting-time.svg'
    },
    {
      name: '15 Minutes',
      bg: '#07074D',
      icon: '/icons/waiting-time.svg'
    },
    {
      name: '20 Minutes',
      bg: '#FF4BAC',
      icon: '/icons/waiting-time.svg'
    },
    {
      name: '25 Minutes',
      bg: '#4E2DD8',
      icon: '/icons/waiting-time.svg'
    },
    {
      name: '30 Minutes',
      bg: '#07074D',
      icon: '/icons/waiting-time.svg'
    },
  ]
}

export default function WaitingTime({ setShowFilter }) {
  return (
    <div className='overflow-hidden h-[100vh] w-full overflow-y-scroll flex'>
      <div className={`w-[100%]`}>
        <div className='flex justify-between py-[15px] px-[50px]  bg-base w-full z-[200] h-[15vh] sticky top-0'>
          <div className='flex items-center gap-5 '>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48"            >
              <g clipPath="url(#clip0_200_163)">
                <path
                  fill="#CEE1F2"
                  d="M7.5 24c0-11.267 8.421-20.566 19.313-21.948A22.327 22.327 0 0024 1.875C11.78 1.875 1.875 11.781 1.875 24c0 12.22 9.906 22.125 22.125 22.125.953 0 1.892-.06 2.813-.177C15.92 44.566 7.5 35.267 7.5 24z"
                ></path>
                <path
                  fill="#4E2DD8"
                  d="M24 48a23.844 23.844 0 01-16.97-7.03A23.844 23.844 0 010 24c0-6.41 2.496-12.438 7.03-16.97A23.844 23.844 0 0124 0c6.41 0 12.438 2.496 16.97 7.03A23.844 23.844 0 0148 24c0 6.41-2.496 12.438-7.03 16.97A23.844 23.844 0 0124 48zm0-44.25C12.834 3.75 3.75 12.834 3.75 24S12.834 44.25 24 44.25 44.25 35.166 44.25 24 35.166 3.75 24 3.75z"
                ></path>
                <path
                  fill="#FF4BAC"
                  d="M32.732 30.08l-5.924-5.923a2.806 2.806 0 00-.934-2.254l.001-.06V10.876a1.875 1.875 0 10-3.75 0V21.903a2.813 2.813 0 002.03 4.905l5.925 5.924c.367.366.846.55 1.326.55a1.875 1.875 0 001.326-3.2z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_200_163">
                  <path fill="#fff" d="M0 0H48V48H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <p className='font-sora font-[600] text-[14px] leading-[17px]'>Current Waiting Time</p>
          </div>
          <div className='flex items-center gap-10'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer z-[200]"
              onClick={() => {
                setShowFilter(true)
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className={`mt-[20px] px-[50px] pb-[60px] flex flex-col gap-[30px]`}>
          <Slider data={instore} isAdmin={true} />
          <Slider data={delivery} isAdmin={true} />
          <Slider data={collection} isAdmin={true} />
        </div >
      </div>
    </div>
  )
}

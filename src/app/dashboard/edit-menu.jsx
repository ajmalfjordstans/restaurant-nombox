import Slider from '@/components/slider'
import React from 'react'

const category = {
  name: 'category',
  items: [
    {
      name: 'Category 1',
      bg: '#07074D',
      icon: '/icons/dish.svg'
    },
    {
      name: 'Category 1',
      bg: '#FF4BAC',
      icon: '/icons/dish.svg'
    },
    {
      name: 'Category 1',
      bg: '#4E2DD8',
      icon: '/icons/dish.svg'
    },
    {
      name: 'Category 1',
      bg: '#FF4BAC',
      icon: '/icons/dish.svg'
    },
    {
      name: 'Category 1',
      bg: '#07074D',
      icon: '/icons/dish.svg'
    },
    {
      name: 'Category 1',
      bg: '#4E2DD8',
      icon: '/icons/dish.svg'
    },
  ]
}
const subcategory = {
  name: 'sub category',
  items: [
    {
      name: 'Category 1',
      bg: '#FF4BAC',
      icon: '/icons/dish.svg'
    },
    {
      name: 'Category 1',
      bg: '#4E2DD8',
      icon: '/icons/dish.svg'
    },
    {
      name: 'Category 1',
      bg: '#07074D',
      icon: '/icons/dish.svg'
    },
    {
      name: 'Category 1',
      bg: '#FF4BAC',
      icon: '/icons/dish.svg'
    },
    {
      name: 'Category 1',
      bg: '#4E2DD8',
      icon: '/icons/dish.svg'
    },
    {
      name: 'Category 1',
      bg: '#07074D',
      icon: '/icons/dish.svg'
    },
  ]
}
const items = {
  name: 'items',
  items: [
    {
      name: 'Category 1',
      bg: '#07074D',
      icon: '/icons/dish.svg'
    },
    {
      name: 'Category 1',
      bg: '#FF4BAC',
      icon: '/icons/dish.svg'
    },
    {
      name: 'Category 1',
      bg: '#4E2DD8',
      icon: '/icons/dish.svg'
    },
    {
      name: 'Category 1',
      bg: '#FF4BAC',
      icon: '/icons/dish.svg'
    },
    {
      name: 'Category 1',
      bg: '#4E2DD8',
      icon: '/icons/dish.svg'
    },
    {
      name: 'Category 1',
      bg: '#07074D',
      icon: '/icons/dish.svg'
    },
  ]
}

export default function EditMenu({ setShowFilter, setShowIconDrawer, showIconDrawer }) {
  return (
    <div className='overflow-hidden h-[100vh] w-full overflow-y-scroll flex'>
      <div className={`w-[100%]`}>
        <div className='flex justify-between py-[15px] px-[20px] lg:px-[50px] bg-base w-full z-[200] md:h-[15vh] sticky top-0'>
          <div className={`flex items-center gap-5  ${showIconDrawer ? "translate-x-[100px]" : ""} lg:translate-x-[0px] transition-all duration-300`}>
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
              <g clipPath="url(#clip0_200_203)">
                <path
                  fill="#CEE1F2"
                  d="M28.608 35.743c-3.546.665-6.32.619-6.32.619C16.833 30.908 8.666 16.504 2.252 5.57.786 3.07 4.125.559 6.12 2.658L9.436 6.26c6.217 10.623 13.898 24.037 19.172 29.483zm5.918-19.27c-2.698-2.697-2.63-7.138.067-9.835L33.27 5.2c-1.326 1.197-2.754 2.517-3.83 3.594-2.697 2.697-2.765 7.137-.068 9.834s7.138 2.63 9.835-.068l.1-.1c-1.738-.017-3.466-.673-4.78-1.987z"
                ></path>
                <path
                  fill="#4E2DD8"
                  d="M7.5 1.39l-.02-.022C5.984-.257 3.49-.44 1.76.893A4.374 4.374 0 00.14 3.313C-.127 4.38.049 5.519.635 6.518 1.264 7.59 1.908 8.693 2.566 9.82c6.237 10.677 13.306 22.778 18.396 27.869.344.343.808.54 1.294.548.241.005 5.974.076 11.668-1.986.142-.051.274-.118.395-.197l10.427 11.326a1.875 1.875 0 002.758-2.54L7.5 1.39zm15.573 33.085C18.327 29.37 11.405 17.52 5.803 7.928c-.659-1.127-1.305-2.234-1.934-3.306-.063-.107-.254-.433.147-.734.273-.224.572-.143.736.052l26.832 29.143c-3.551 1.105-7.025 1.342-8.511 1.392zm4.973-14.521c-3.41-3.269-3.335-9.226.068-12.485C30.828 4.754 35.609.629 35.81.455a1.874 1.874 0 012.448 2.84c-.049.041-4.878 4.208-7.495 6.824a5.142 5.142 0 00-1.507 3.61c-.08 2.749 2.267 5.09 5.014 5.014a5.142 5.142 0 003.61-1.507c2.617-2.618 6.783-7.446 6.825-7.495a1.874 1.874 0 112.84 2.448c-.175.202-4.3 4.982-7.015 7.697a8.873 8.873 0 01-6.312 2.606c-2.345 0-4.534-.9-6.173-2.538zm5.312-7.869l6.935-7.029A1.874 1.874 0 0142.96 7.69l-6.935 7.03a1.874 1.874 0 01-2.668-2.634z"
                ></path>
                <path
                  fill="#FF4BAC"
                  d="M1.874 48c-1.646.01-2.507-2.025-1.325-3.2l10.42-10.42c1.828-1.688 4.338.825 2.65 2.651l-10.42 10.42A1.868 1.868 0 011.874 48z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_200_203">
                  <path fill="#fff" d="M0 0H48V48H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <p className='font-sora font-[600] text-[14px] leading-[17px]'>Edit Menu</p>
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
        <div className={`mt-[20px] px-[20px] lg:px-[50px] pb-[60px] flex flex-col gap-[30px]`}>
          <Slider data={category} isAdmin={true} />
          <Slider data={subcategory} isAdmin={true} />
          <Slider data={items} isAdmin={true} />
        </div >
      </div>
    </div>
  )
}

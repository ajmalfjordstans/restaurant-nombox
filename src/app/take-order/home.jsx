'use client'
import CartItems from '@/components/drawer/cartItems'
import DrawerRight from '@/components/drawerRight'
import Slider from '@/components/slider'
import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'

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

export default function Home({ setShowFilter, setShowIconDrawer, showIconDrawer }) {
  return (
    <div className='overflow-hidden h-[100vh] w-full overflow-y-scroll flex'>
      <div className={`w-[100%]`}>
        <div className='flex flex-wrap gap-4 justify-between py-[15px] px-[20px] lg:px-[50px]  bg-base w-full z-[200] md:h-[15vh] sticky top-0'>
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
            <svg
              xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="none" viewBox="0 0 55 55"
            >
              <path fill="#CEE1F2" d="M18.37 33.516V20.303c0-2.123-.313-4.205-.902-6.19-5.262-.838-8.283-4.445-8.283-4.445l-.103-.11a21.734 21.734 0 012.842 10.745v13.213c0 5.933 4.81 10.742 10.742 10.742h6.445c-5.932 0-10.742-4.81-10.742-10.742z"
              ></path>
              <path fill="#1428BF" d="M39.315 46.406H22.666c-7.108 0-12.89-5.782-12.89-12.89V20.303a19.545 19.545 0 00-8.81-16.36A2.148 2.148 0 113.331.354a23.879 23.879 0 017.53 7.968c.396.442 3.579 3.816 8.797 3.816h24.74a10.52 10.52 0 018.347 4.075 10.52 10.52 0 011.921 9.088l-2.847 11.35a12.874 12.874 0 01-12.504 9.754zM13.53 15.222c.357 1.65.542 3.352.542 5.08v13.214c0 4.738 3.855 8.593 8.594 8.593h16.65a8.583 8.583 0 008.335-6.502l2.848-11.351a6.25 6.25 0 00-1.142-5.4 6.25 6.25 0 00-4.959-2.42h-24.74c-2.36 0-4.414-.51-6.128-1.214zm8.062 37.093a2.686 2.686 0 10-5.371 0 2.686 2.686 0 005.371 0zm21.377 0a2.686 2.686 0 10-5.371 0 2.686 2.686 0 005.37 0z"
              ></path>
              <path fill="#DE5CEE" d="M44.398 25.03h-23.88a2.148 2.148 0 110-4.297h23.88a2.148 2.148 0 110 4.296z"
              ></path>
            </svg>
            <p className='font-sora font-[600] text-[14px] leading-[17px]'>Take Order</p>
          </div>
          <div className='flex items-center gap-10'>
            <div className='hidden lg:block'>
              <div className='bg-[#F1EDED] rounded-[10px] overflow-hidden flex gap-4 items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input type="text" className='py-[16px] bg-inherit outline-none' placeholder='Search Item' />
              </div>
            </div>

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
          <div className='lg:hidden block'>
            <div className='bg-[#F1EDED] rounded-[10px] overflow-hidden flex gap-4 items-center '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input type="text" className='py-[16px] bg-inherit outline-none' placeholder='Search Item' />
            </div>
          </div>
          <Slider data={category} />
          <Slider data={subcategory} />
          <Slider data={items} />
        </div >
      </div>
    </div>
  )
}

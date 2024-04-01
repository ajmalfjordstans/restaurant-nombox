'use client'
import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'

export default function DriverScreenDrawer() {
  const [showAdd, setShowAdd] = useState(false)
  return (
    <>
      <div className='p-[30px]'>
        <div className='flex flex-col mt-[30px] gap-5'>
          <div className='flex justify-between'>
            <Button className='bg-second capitalize'>Search</Button>
            <Button className='bg-third capitalize' onClick={() => setShowAdd(true)}>Add</Button>
            <Button className='bg-primary capitalize'>Back</Button>
          </div>
          <p className='font-raleway font-[700] text-[20px] leading-[24px] text-primary'>Search Customer Data</p>
          <div className='flex flex-col gap-2'>
            <p className='font-raleway font-[700] text-[20px] leading-[24px]'>Phone Number</p>
            <input type="text" className='py-[10px] px-[15px] rounded-[10px] bg-base outline-none w-full' />
          </div>
          <Button
            className='bg-third rounded-[10px] mt-[20px]'
            onClick={() => alert(date)}
          >Search</Button>
        </div>
      </div>
      {showAdd &&
        <div className='absolute top-0 right-0 h-[100vh] w-[100vw] flex justify-center items-center z-[500]'>
          <div className='rounded-[10px] bg-white p-[30px] shadow-md text-[20px] font-raleway font-[700] leading-[23px]'>
            <div className='flex w-full justify-between '>
              <p>Add</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer "
                onClick={() => { setShowOption(false) }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
            <p className='mt-[15px]'>Choose Date Between 2 Months</p>
            <div className='flex gap-10'>

            </div>
          </div>
        </div>
      }
    </>
  )
}

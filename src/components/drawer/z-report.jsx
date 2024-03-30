'use client'
import { Button } from '@material-tailwind/react'
import { DateCalendar } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import React, { useState } from 'react'

export default function ZReportDrawer() {
  const [date, setDate] = useState(dayjs(new Date()))
  const [showOption, setShowOption] = useState(false)
  return (
    <>
      <div className='p-[30px]'>
        <div className='flex flex-col mt-[30px] gap-10'>
          <div className='flex justify-between'>
            <Button className='bg-second capitalize'>Previous</Button>
            <Button className='bg-third capitalize' onClick={() => setShowOption(true)}>Option</Button>
            <Button className='bg-primary capitalize'>Next</Button>
          </div>
          <p className='font-sora font-[600] text-[14px] leading-[17px] text-primary'>Choose Date to find Daily Report</p>
          <DateCalendar
            defaultValue={date}
            onChange={(newDate) => setDate(newDate)}
          />
          <Button
            className='bg-third rounded-[10px] mt-[20px]'
            onClick={() => alert(date)}
          >Search</Button>
        </div>
      </div>
      {showOption &&
        <div className='absolute top-0 right-0 h-[100vh] w-[100vw] flex justify-center items-center z-[500]'>
          <div className='rounded-[10px] bg-white p-[30px] shadow-md text-[20px] font-raleway font-[700] leading-[23px]'>
            <div className='flex w-full justify-between '>
              <p>Option</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer "
                onClick={() => { setShowOption(false) }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
            <p className='mt-[15px]'>Choose Date Between 2 Months</p>
            <div className='flex gap-10'>
              <DateCalendar
                defaultValue={date}
                onChange={(newDate) => setDate(newDate)}
              />
              <DateCalendar
                defaultValue={date}
                onChange={(newDate) => setDate(newDate)}
              />
            </div>
          </div>
        </div>
      }
    </>
  )
}

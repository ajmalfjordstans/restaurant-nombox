'use client'
import { Button } from '@material-tailwind/react'
import { DateCalendar, DatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import React, { useState } from 'react'

export default function ItemsReportDrawer() {
  const [date, setDate] = useState(dayjs(new Date()))
  return (
    <div className='md:p-[30px] p-[15px]'>
      <div className='flex flex-col mt-[30px] gap-10'>
        <div className='flex justify-between gap-1'>
          <Button className='bg-second capitalize'>Previous</Button>
          <Button className='bg-third capitalize'>Option</Button>
          <Button className='bg-primary capitalize'>Next</Button>
        </div>
        <p className='font-sora font-[600] text-[14px] leading-[17px] text-primary'>Choose Date to find Daily Report</p>
        <div className='hidden md:static'>
          <DateCalendar
            defaultValue={date}
            onChange={(newDate) => setDate(newDate)}
          />
        </div>
        <div className='md:hidden static'>
          <DatePicker
            defaultValue={date}
            onChange={(newDate) => setDate(newDate)}
          />
        </div>
        <Button
          className='bg-third rounded-[10px] mt-[20px]'
          onClick={() => alert(date)}
        >Search</Button>
      </div>
    </div>
  )
}

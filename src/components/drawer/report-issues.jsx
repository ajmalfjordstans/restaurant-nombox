'use client'
import { Button } from '@material-tailwind/react'
import { DatePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import React from 'react'
import { useState } from 'react'

export default function ReportIssues() {
  const [date, setDate] = useState(dayjs(new Date()))
  return (
    <div className='p-[30px]'>
      <div className='flex flex-col mt-[80px]'>
        <p className='font-sora font-[600] text-[14px] leading-[17px] text-primary'>Filter by Date</p>
        <DatePicker
          defaultValue={date}
          views={['year', 'month', 'day']}
          onChange={(newDate) => setDate(newDate)}
          className='mt-[15px]'
        // minDate={dayjs(new Date())}
        />
        <Button
          className='bg-third rounded-[10px] mt-[20px]'
          onClick={() => alert(date)}
        >Search</Button>
      </div>
    </div>
  )
}

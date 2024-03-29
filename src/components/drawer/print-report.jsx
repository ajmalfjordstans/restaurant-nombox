import { Button } from '@material-tailwind/react'
import React from 'react'

export default function PrintReportDrawer() {
  return (
    <div className='p-[30px] text-center'>
      <p className='font-[700] text-[38px]'>LOGO</p>
      <p className='font-sora text-[14px] leading-[20px] mt-[15px]'>215 Stoke Newington High St, Stoke Newington, London N16 0LH, United Kingdom</p>
      <div className='flex flex-col gap-5 mt-[30px]'>
        <Button className='bg-second'>Print</Button>
        <Button className='bg-third'>Cash Drawer</Button>
        <Button className='bg-primary'>Back</Button>
      </div>
    </div>
  )
}

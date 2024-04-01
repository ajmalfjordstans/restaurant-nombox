import { Button } from '@material-tailwind/react'
import React from 'react'

export default function WaitingTimeDrawer() {
  return (
    <div className='p-[30px]'>
      <p className='font-[700]'>Add Waiting Time</p>
      <input type="text" className='bg-base py-[10px] px-[15px] w-full rounded-[10px] outline-none mt-4' />
      <div className='flex gap-2 mt-4'>
        <Button className='capitalize bg-second font-raleway' fullWidth>Background Color</Button>
        <Button className='capitalize bg-third font-raleway' fullWidth>Text Color</Button>
      </div>
      <div className='flex justify-end mt-4'>
        <Button className='capitalize bg-primary font-raleway'>Save</Button>
      </div>
    </div>
  )
}

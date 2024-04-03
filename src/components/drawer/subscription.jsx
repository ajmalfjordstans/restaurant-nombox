import { Button, Option, Select } from '@material-tailwind/react'
import React from 'react'

export default function SubscriptionDrawer() {
  return (
    <div className='p-[30px]'>
      <div className='flex flex-col mt-[30px] gap-5'>
        <p className='font-sora font-[600] text-[14px] leading-[17px] text-primary'>Add Subscription</p>
        <div className="flex flex-col gap-3">
          <p className='font-sora font-[600] text-[14px] leading-[17px] text-primary'>Choose Plan</p>
          <Select label="Basic" className='bg-white'>
            <Option>Basic</Option>
            <Option>Premium</Option>
            <Option>Full</Option>
          </Select>
        </div>
        <div className="flex flex-col gap-3">
          <p className='font-sora font-[600] text-[14px] leading-[17px] text-primary'>Choose Subscription</p>
          <Select label="Montly" className='bg-white'>
            <Option>Monthly</Option>
            <Option>Yearly</Option>
          </Select>
        </div>
        <div className="flex flex-col gap-3">
          <p className='font-sora font-[600] text-[14px] leading-[17px] text-primary'>Price</p>
          <input type="text" className='border-[1px] border-blue-gray-200 px-3 py-2 rounded-[7px]' />
        </div>
        <Button
          className='bg-third rounded-[10px] mt-[20px]'
        // onClick={() => alert(date)}
        >Save</Button>
      </div>
    </div>
  )
}

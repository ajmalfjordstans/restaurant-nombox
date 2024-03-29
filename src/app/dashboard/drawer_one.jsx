import { Button } from '@material-tailwind/react'
import React from 'react'

export default function DrawerOne() {
  return (
    <div className='p-[30px] text-center'>
      <p className='font-[700] text-[38px]'>LOGO</p>
      <p className='font-sora text-[14px] leading-[20px] mt-[15px]'>215 Stoke Newington High St, Stoke Newington, London N16 0LH, United Kingdom</p>
      <div className='flex flex-col gap-5 mt-[30px]'>
        <Button className='bg-second'>Print</Button>
        <Button className='bg-third'>Cash Drawer</Button>
        <Button className='bg-primary'>Back</Button>
      </div>
      <div className='font-sora font-[600] text-[16px] text-primary'>
        <p className='text-left mt-[30px]'>Latest Orders</p>
        <table className='w-full mt-[15px]'>
          <thead>
            <tr className='text-[12px] font-[400]'>
              <td>INVOICE</td>
              <td>PRICE</td>
              <td>ACTION</td>
            </tr>
          </thead>
          <tbody className=''>
            <tr className='bg-base p-[30px] mt-[5px]'>
              <td>Invoice 1</td>
              <td>$300.00</td>
              <td><Button className='bg-second rounded-full'>View</Button></td>
            </tr>
            <tr className='bg-base p-[30px] mt-[5px]'>
              <td>Invoice 2</td>
              <td>$300.00</td>
              <td><Button className='bg-second rounded-full'>View</Button></td>
            </tr>
            <tr className='bg-base p-[30px] mt-[5px]'>
              <td>Invoice 3</td>
              <td>$300.00</td>
              <td><Button className='bg-second rounded-full'>View</Button></td>
            </tr>
          </tbody>
        </table>
        <Button className='bg-primary mt-[15px]' fullWidth>View</Button>
      </div>
    </div>
  )
}

import React from 'react'
import Invoice from '../drawer/invoice'
import CardOne from './cards/card-one'
import CardThree from './cards/card-three'

const radioInput = ['Show/Hide Company Name', 'Show/Hide Paid Stamp Icon', "Show/Hide Date"]
const incrementInput = [
  {
    name: "Title font size",
    count: 20
  },
  {
    name: "Sub title font size",
    count: 15
  },
  {
    name: "Content font size",
    count: 15
  },
]

export default function Print() {
  return (
    <div className='grid grid-cols-3 gap-3'>
      <div className='w-full rounded-[20px] p-[30px] bg-white flex flex-col gap-3'>
        <Invoice />
      </div>
      <div className='col-span-2 font-[700] flex flex-col gap-3'>
        <CardOne data={radioInput} />
        <CardThree data={incrementInput} />
      </div>
    </div>
  )
}

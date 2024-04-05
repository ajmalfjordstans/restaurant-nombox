import { Option, Select } from '@material-tailwind/react'
import React from 'react'

export default function TableOrderDrawer() {
  return (
    <div className='p-[30px] font-[600] w-[90vw]'>
      <div className='flex flex-col gap-3'>
        <Select label="Category" className='bg-base outline-none'>
          <Option>Material Tailwind HTML</Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>
        <Select label="Sub Category" className='bg-base outline-none'>
          <Option>Material Tailwind HTML</Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>
      </div>
      <div className='grid grid-cols-2 my-[20px] gap-3'>
        <div className='w-full bg-base flex flex-col gap-5 justify-center items-center font-[700] p-[30px] rounded-[20px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="51" height="46" fill="none" viewBox="0 0 51 46" >
            <path
              stroke="#000"
              strokeWidth="2"
              d="M21.517 8.748C4.829 12.913 1.075 30.17 1.283 38.28H49C48.5 17.386 35.016 9.886 28.338 8.748 29.645 5.79 29.253 1 25.133 1c-5.31 0-4.451 5.151-3.616 7.748zM6.793 29.57c.53-3.266 2.926-10.347 8.276-12.543M1 44.65h48"
            ></path>
          </svg>
          <p>Item 3</p>
        </div>
        <div className='w-full bg-third flex flex-col gap-5 justify-center items-center font-[700] p-[30px] rounded-[20px]  text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" width="51" height="46" fill="none" viewBox="0 0 51 46" >
            <path
              stroke="white"
              strokeWidth="2"
              d="M21.517 8.748C4.829 12.913 1.075 30.17 1.283 38.28H49C48.5 17.386 35.016 9.886 28.338 8.748 29.645 5.79 29.253 1 25.133 1c-5.31 0-4.451 5.151-3.616 7.748zM6.793 29.57c.53-3.266 2.926-10.347 8.276-12.543M1 44.65h48"
            ></path>
          </svg>
          <p>Item 4</p>
        </div>
        <div className='w-full bg-second flex flex-col gap-5 justify-center items-center font-[700] p-[30px] rounded-[20px] text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" width="51" height="46" fill="none" viewBox="0 0 51 46" >
            <path
              stroke="white"
              strokeWidth="2"
              d="M21.517 8.748C4.829 12.913 1.075 30.17 1.283 38.28H49C48.5 17.386 35.016 9.886 28.338 8.748 29.645 5.79 29.253 1 25.133 1c-5.31 0-4.451 5.151-3.616 7.748zM6.793 29.57c.53-3.266 2.926-10.347 8.276-12.543M1 44.65h48"
            ></path>
          </svg>
          <p>Item 5</p>
        </div>
        <div className='w-full bg-base flex flex-col gap-5 justify-center items-center font-[700] p-[30px] rounded-[20px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="51" height="46" fill="none" viewBox="0 0 51 46" >
            <path
              stroke="#000"
              strokeWidth="2"
              d="M21.517 8.748C4.829 12.913 1.075 30.17 1.283 38.28H49C48.5 17.386 35.016 9.886 28.338 8.748 29.645 5.79 29.253 1 25.133 1c-5.31 0-4.451 5.151-3.616 7.748zM6.793 29.57c.53-3.266 2.926-10.347 8.276-12.543M1 44.65h48"
            ></path>
          </svg>
          <p>Item 6</p>
        </div>
        <div className='w-full bg-third flex flex-col gap-5 justify-center items-center font-[700] p-[30px] rounded-[20px] text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" width="51" height="46" fill="none" viewBox="0 0 51 46" >
            <path
              stroke="white"
              strokeWidth="2"
              d="M21.517 8.748C4.829 12.913 1.075 30.17 1.283 38.28H49C48.5 17.386 35.016 9.886 28.338 8.748 29.645 5.79 29.253 1 25.133 1c-5.31 0-4.451 5.151-3.616 7.748zM6.793 29.57c.53-3.266 2.926-10.347 8.276-12.543M1 44.65h48"
            ></path>
          </svg>
          <p>Item 7</p>
        </div>
        <div className='w-full bg-second flex flex-col gap-5 justify-center items-center font-[700] p-[30px] rounded-[20px] text-white'>
          <svg xmlns="http://www.w3.org/2000/svg" width="51" height="46" fill="none" viewBox="0 0 51 46" >
            <path
              stroke="white"
              strokeWidth="2"
              d="M21.517 8.748C4.829 12.913 1.075 30.17 1.283 38.28H49C48.5 17.386 35.016 9.886 28.338 8.748 29.645 5.79 29.253 1 25.133 1c-5.31 0-4.451 5.151-3.616 7.748zM6.793 29.57c.53-3.266 2.926-10.347 8.276-12.543M1 44.65h48"
            ></path>
          </svg>
          <p>Item 8</p>
        </div>
      </div>
    </div>
  )
}

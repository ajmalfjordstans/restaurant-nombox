'use client'
import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'

export default function CardTwo() {
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [colors, setColors] = useState(
    {
      buttonColor: { one: '#07074D', two: '#4E2DD8', three: '#FF4BAC' },
      fontColor: '#333333',
      backgroundColor: '#EFF2F2'
    }
  )
  const colorPickerHandler = () => {
    setShowColorPicker(true)
  }
  return (
    <>
      <div className='w-full rounded-[20px] p-[30px] bg-white flex flex-col gap-3'>
        <div className='flex justify-between items-center'>
          <p>Button Color</p>
          <div className="inline-flex items-center gap-1">
            <div className={`h-[47px] rounded-[10px] w-[70px] cursor-pointer`} style={{ backgroundColor: colors.buttonColor.one }} onClick={() => colorPickerHandler()}></div>
            <div className={`h-[47px] rounded-[10px] w-[70px] cursor-pointer`} style={{ backgroundColor: colors.buttonColor.two }} onClick={() => colorPickerHandler()}></div>
            <div className={`h-[47px] rounded-[10px] w-[70px] cursor-pointer`} style={{ backgroundColor: colors.buttonColor.three }} onClick={() => colorPickerHandler()}></div>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <p>Font Color</p>
          <div className=" gap-1">
            <div className={`h-[47px] rounded-[10px] w-[70px] cursor-pointer`} style={{ backgroundColor: colors.fontColor }} onClick={() => colorPickerHandler()}></div>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <p>Background</p>
          <div className=" gap-1">
            <div className={`h-[47px] rounded-[10px] w-[70px] cursor-pointer`} style={{ backgroundColor: colors.backgroundColor }} onClick={() => colorPickerHandler()}></div>
          </div>
        </div>
      </div>
      {showColorPicker &&
        <div className='absolute top-0 right-0 h-[100vh] w-[100vw] flex justify-center items-center z-[500]'>
          <div className='rounded-[10px] bg-white p-[30px] shadow-md text-[20px] font-raleway font-[700] leading-[23px] w-[60%] max-w-[600px]'>
            <div className='flex w-full justify-between '>
              <p className='uppercase'>Button Color</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer "
                onClick={() => { setShowOption(false) }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
            <div className='flex flex-col gap-5 mt-[20px]'>
              <div className='flex flex-col gap-2'>
                <p className='font-raleway font-[700] text-[20px] leading-[24px]'>Color code</p>
                <input type="text" className='py-[10px] px-[15px] rounded-[10px] bg-base outline-none w-full'
                  // onClick={(e) => setCustomerFormData({
                  //   ...customerFormData,
                  //   name: e.target.value()
                  // })}
                />
              </div>
              <div className='flex justify-end'>
                <Button className='bg-third capitalize font-sora' onClick={() => alert(customerFormData)}>Save</Button>
              </div>
            </div>
          </div >
        </div >
      }
    </>
  )
}

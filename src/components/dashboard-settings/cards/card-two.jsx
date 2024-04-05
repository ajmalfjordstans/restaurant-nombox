'use client'
import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'
import { ChromePicker } from 'react-color'

export default function CardTwo() {
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [currentColor, setCurrentColor] = useState({
    title: '',
    hex: '',
    name: '',
    tag: '',
  })
  const [colors, setColors] = useState(
    {
      buttonColor_One: '#07074D',
      buttonColor_Two: '#4E2DD8',
      buttonColor_Three: '#FF4BAC',
      fontColor: '#333333',
      backgroundColor: '#EFF2F2'
    }
  )
  const colorPickerHandler = (color, title, tag) => {
    setShowColorPicker(true)
    setCurrentColor({
      ...currentColor,
      hex: color,
      title,
      tag
    })
  }

  const handleChange = (selectedColor) => {
    setCurrentColor({ ...currentColor, hex: selectedColor.hex });
  };
  const handleUpdateColor = () => {
    setColors({
      ...colors,
      [currentColor.tag]: currentColor.hex
    })
    setShowColorPicker(false)
  }
  return (
    <>
      <div className='w-full rounded-[20px] p-[30px] bg-white flex flex-col gap-3'>
        <div className='flex justify-between items-center'>
          <p>Button Color</p>
          <div className="inline-flex items-center gap-1">
            <div className={`h-[47px] rounded-[10px] w-[70px] cursor-pointer`} style={{ backgroundColor: colors.buttonColor_One }}
              onClick={() => colorPickerHandler(colors.buttonColor_One, 'Button Color', 'buttonColor_One')}></div>
            <div className={`h-[47px] rounded-[10px] w-[70px] cursor-pointer`} style={{ backgroundColor: colors.buttonColor_Two }}
              onClick={() => colorPickerHandler(colors.buttonColor_Two, 'Button Color', 'buttonColor_Two')}></div>
            <div className={`h-[47px] rounded-[10px] w-[70px] cursor-pointer`} style={{ backgroundColor: colors.buttonColor_Three }}
              onClick={() => colorPickerHandler(colors.buttonColor_Three, 'Button Color', 'buttonColor_Three')}></div>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <p>Font Color</p>
          <div className=" gap-1">
            <div className={`h-[47px] rounded-[10px] w-[70px] cursor-pointer`} style={{ backgroundColor: colors.fontColor }}
              onClick={() => colorPickerHandler(colors.fontColor, 'Font Color', 'fontColor')}></div>
          </div>
        </div>
        <div className='flex justify-between items-center'>
          <p>Background</p>
          <div className=" gap-1">
            <div className={`h-[47px] rounded-[10px] w-[70px] cursor-pointer`} style={{ backgroundColor: colors.backgroundColor }}
              onClick={() => colorPickerHandler(colors.backgroundColor, 'Background Color', 'backgroundColor')}></div>
          </div>
        </div>
      </div>
      {showColorPicker &&
        <div className='absolute top-0 right-0 h-[100vh] w-[100vw] flex justify-center items-center z-[500] p-[5%]'>
          <div className='rounded-[10px] bg-white p-[15px] md:p-[30px] shadow-md text-[20px] font-raleway font-[700] leading-[23px] w-[100%] max-w-[600px]'>
            <div className='flex w-full justify-between '>
              <p className='uppercase'>{currentColor.title}</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer "
                onClick={() => { setShowColorPicker(false) }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
            <div className='flex flex-col gap-5 mt-[20px]'>
              <div className='flex flex-col gap-2'>
                <p className='font-raleway font-[700] text-[20px] leading-[24px]'>Color code</p>
                <div className='flex gap-2'>
                  <input type="text" className='py-[10px] px-[15px] rounded-[10px] bg-base outline-none w-full' defaultValue={currentColor.hex} value={currentColor.hex}
                    onChange={(e) => setCurrentColor({ ...currentColor, hex: e.target.value })}
                  />
                  <div className={`h-[47px] rounded-[10px] w-[70px] cursor-pointer`} style={{ backgroundColor: currentColor.hex }}></div>
                </div>
                <ChromePicker color={currentColor} onChange={handleChange} className='mx-auto my-[10px]' />
              </div>
              <div className='flex justify-end'>
                <Button className='bg-third capitalize font-sora' onClick={handleUpdateColor}>Save</Button>
              </div>
            </div>
          </div >
        </div >
      }
    </>
  )
}

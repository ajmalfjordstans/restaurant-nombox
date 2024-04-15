'use client'
import { Button, Option, Select } from '@material-tailwind/react'
import React, { useState } from 'react'
import GoogleMapComponent from '../map/map'
import ChooseLocation from '../map/chooseLocation'

export default function DeliveryChargesDrawer() {
  const [showAdd, setShowAdd] = useState(false)
  const [customerFormData, setCustomerFormData] = useState({
    postcode: '',
    location: '',
    deliveryLimit: '',
    unit: 'Mile'
  })
  return (
    <>
      <div className='p-[30px] max-w-[100vw]'>
        <div className='flex flex-col mt-[30px] gap-5'>
          <div className='flex justify-between gap-1'>
            <Button className='bg-second capitalize' fullWidth >Search</Button>
            <Button className='bg-third capitalize' fullWidth onClick={() => setShowAdd(true)}>Add</Button>
            <Button className='bg-primary capitalize' fullWidth >Back</Button>
          </div>
          <p className='font-raleway font-[700] text-[20px] leading-[24px] text-primary'>Delivery Limit In Miles/KM</p>
          <div className='flex gap-2'>
            <input type="text" className='py-[10px] px-[15px] rounded-[10px] bg-base outline-none w-full placeholder:text-black' placeholder='Type Limits' />
            <select label="Measurement" className='py-[10px] px-[15px] rounded-[10px] bg-base outline-none w-[40%]'>
              <option className='py-4'>Mile</option>
              <option className='py-4'>Kilometer</option>
            </select>
          </div>
          <p className='font-raleway font-[700] text-[20px] leading-[24px] text-primary'>Delivery Price Checker</p>
          <div className='flex gap-1'>
            <div className='flex flex-col gap-2'>
              <p className='font-raleway font-[700] text-[20px] leading-[24px]'>Order Price</p>
              <input type="text" className='py-[10px] px-[15px] rounded-[10px] bg-base outline-none w-full' />
            </div>
            <div className='flex flex-col gap-2'>
              <p className='font-raleway font-[700] text-[20px] leading-[24px]'>PostCode</p>
              <input type="text" className='py-[10px] px-[15px] rounded-[10px] bg-base outline-none w-full' />
            </div>
          </div>
          <Button
            className='bg-third rounded-[10px] mt-[20px]'
            onClick={() => alert("")}
          >Check</Button>
          <div className='rounded-[20px] overflow-hidden max-w-full'>
            <GoogleMapComponent />
          </div>
        </div>
      </div>
      {showAdd &&
        <div className='absolute top-0 right-0 h-[100vh] w-[100vw] flex justify-center items-center z-[500]'>
          <div className='rounded-[10px] bg-white p-[30px] shadow-md text-[20px] font-raleway font-[700] leading-[23px] w-[60%] max-w-[600px]'>
            <div className='flex w-full justify-between '>
              <p className='uppercase'>Add post code</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer "
                onClick={() => { setShowAdd(false) }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
            <div className='flex flex-col gap-5 mt-[20px]'>
              <div className='flex flex-col gap-2'>
                <p className='font-raleway font-[700] text-[20px] leading-[24px]'>Postcode</p>
                <input type="text" className='py-[10px] px-[15px] rounded-[10px] bg-base outline-none w-full'
                  onChange={(e) => setCustomerFormData({
                    ...customerFormData,
                    postcode: e.target.value
                  })}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-raleway font-[700] text-[20px] leading-[24px]'>Choose Location</p>
                <div className='rounded-[20px] overflow-hidden max-w-full '>
                  <ChooseLocation />
                </div>
              </div>
              <p className='font-raleway font-[700] text-[20px] leading-[24px] text-primary'>Delivery Limit</p>
              <div className='flex gap-2'>
                <input type="text" className='py-[10px] px-[15px] rounded-[10px] bg-base outline-none w-full placeholder:text-black' placeholder='Type Limits'
                  onChange={(e) => setCustomerFormData({
                    ...customerFormData,
                    deliveryLimit: e.target.value
                  })}
                />
                <select label="Unit" defaultValue={customerFormData.unit} className='py-[10px] px-[15px] rounded-[10px] bg-base outline-none w-[40%]'
                  onChange={(e) => setCustomerFormData({
                    ...customerFormData,
                    unit: e.target.value
                  })}
                >
                  <option className='py-4' value="Mile">Mile</option>
                  <option className='py-4' value="Kilometer">Kilometer</option>
                </select>
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

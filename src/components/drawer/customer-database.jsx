'use client'
import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'

export default function CustomerDatabaseDrawer() {
  const [showAdd, setShowAdd] = useState(false)
  const [customerFormData, setCustomerFormData] = useState({
    name: '',
    phone: '',
    emai: '',
    postcode: '',
    address: '',
    subscribe: false,
  })
  return (
    <>
      <div className='p-[30px]'>
        <div className='flex flex-col mt-[30px] gap-5'>
          <div className='flex justify-between gap-1'>
            <Button className='bg-second capitalize' fullWidth >Search</Button>
            <Button className='bg-third capitalize' fullWidth onClick={() => setShowAdd(true)}>Add</Button>
            <Button className='bg-primary capitalize' fullWidth >Back</Button>
          </div>
          <p className='font-raleway font-[700] text-[20px] leading-[24px] text-primary'>Search Customer Data</p>
          <div className='flex flex-col gap-2'>
            <p className='font-raleway font-[700] text-[20px] leading-[24px]'>Phone Number</p>
            <input type="text" className='py-[10px] px-[15px] rounded-[10px] bg-base outline-none w-full' />
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-raleway font-[700] text-[20px] leading-[24px]'>Postcode</p>
            <input type="text" className='py-[10px] px-[15px] rounded-[10px] bg-base outline-none w-full' />
          </div>
          <p className='font-[700] text-[20px] leading-[24px] text-right'>Advanced Search</p>
          <Button
            className='bg-third rounded-[10px] mt-[20px]'
            onClick={() => alert(date)}
          >Search</Button>
        </div>
      </div>
      {showAdd &&
        <div className='absolute top-0 right-0 h-[100vh] w-[100vw] flex justify-center items-center z-[500]'>
          <div className='rounded-[10px] bg-white p-[30px] shadow-md text-[20px] font-raleway font-[700] leading-[23px] w-[60%] max-w-[600px]'>
            <div className='flex w-full justify-between '>
              <p className='uppercase'>Add Customer Database</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer "
                onClick={() => { setShowOption(false) }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </div>
            <div className='flex flex-col gap-5 mt-[20px]'>
              <div className='flex flex-col gap-2'>
                <p className='font-raleway font-[700] text-[20px] leading-[24px]'>Name</p>
                <input type="text" className='py-[10px] px-[15px] rounded-[10px] bg-base outline-none w-full'
                  onClick={(e) => setCustomerFormData({
                    ...customerFormData,
                    name: e.target.value()
                  })}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-raleway font-[700] text-[20px] leading-[24px]'>Phone</p>
                <input type="text" className='py-[10px] px-[15px] rounded-[10px] bg-base outline-none w-full'
                  onClick={(e) => setCustomerFormData({
                    ...customerFormData,
                    phone: e.target.value()
                  })}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-raleway font-[700] text-[20px] leading-[24px]'>Email</p>
                <input type="text" className='py-[10px] px-[15px] rounded-[10px] bg-base outline-none w-full'
                  onClick={(e) => setCustomerFormData({
                    ...customerFormData,
                    email: e.target.value()
                  })}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-raleway font-[700] text-[20px] leading-[24px]'>Postcode</p>
                <input type="text" className='py-[10px] px-[15px] rounded-[10px] bg-base outline-none w-full'
                  onClick={(e) => setCustomerFormData({
                    ...customerFormData,
                    postcode: e.target.value()
                  })}
                />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-raleway font-[700] text-[20px] leading-[24px]'>Address</p>
                <input type="text" className='py-[10px] px-[15px] rounded-[10px] bg-base outline-none w-full'
                  onClick={(e) => setCustomerFormData({
                    ...customerFormData,
                    address: e.target.value()
                  })}
                />
              </div>
              <div className='flex justify-start'>
                <div className='flex gap-3'>
                  <input type="radio" className='py-[10px] px-[15px] rounded-[10px] bg-base outline-none w-full'
                    onClick={(e) => setCustomerFormData({
                      ...customerFormData,
                      subscribe: e.target.value()
                    })}
                  />
                  <p className='font-raleway font-[700] text-[20px] leading-[24px]'>Subscribed</p>
                </div>
              </div>
              <div className='flex justify-end'>
                <Button className='bg-third capitalize font-sora'>Save</Button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

'use client'
import { Button } from '@material-tailwind/react'
import React from 'react'

export function Plans({ data }) {
  return (
    <div className='bg-white rounded-[20px] text-center font-[700] text-[18px] leading-[21px]'>
      <div className='pt-[30px] pb-[20px]'>
        <p className=''>{data.name}</p>
        <p className='text-[30px] mt-[15px]'>${data.price}</p>
      </div>
      <div className='flex flex-col gap-2'>
        {/* z-report */}
        <div className='bg-base relative'>
          <p className='py-[13px]'>Z-Report</p>
          {data.features.includes('z-report') &&
            <svg
              xmlns="http://www.w3.org/2000/svg" width="25" height="23" fill="none" viewBox="0 0 25 23" className='absolute right-4 top-3'
            >
              <path
                stroke="#FF4BAC"
                d="M8.762 21.9C8.61 20.71 3.524 14.647 1 11.764c0-2.191 1.968-2.739 2.952-2.739l4.81 5.477C13.295 5.545 20.809 1.77 24 1 13.762 7.727 8.952 23.39 8.762 21.9z"
              ></path>
            </svg>
          }
        </div>
        {/* Settings */}
        <div className='bg-base relative'>
          <p className='py-[13px]'>Settings</p>
          {data.features.includes('settings') &&
            <svg
              xmlns="http://www.w3.org/2000/svg" width="25" height="23" fill="none" viewBox="0 0 25 23" className='absolute right-4 top-3'
            >
              <path
                stroke="#FF4BAC"
                d="M8.762 21.9C8.61 20.71 3.524 14.647 1 11.764c0-2.191 1.968-2.739 2.952-2.739l4.81 5.477C13.295 5.545 20.809 1.77 24 1 13.762 7.727 8.952 23.39 8.762 21.9z"
              ></path>
            </svg>
          }
        </div>
        {/* Online Banking */}
        <div className='bg-base relative'>
          <p className='py-[13px]'>Online Banking</p>
          {data.features.includes('online banking') &&
            <svg
              xmlns="http://www.w3.org/2000/svg" width="25" height="23" fill="none" viewBox="0 0 25 23" className='absolute right-4 top-3'
            >
              <path
                stroke="#FF4BAC"
                d="M8.762 21.9C8.61 20.71 3.524 14.647 1 11.764c0-2.191 1.968-2.739 2.952-2.739l4.81 5.477C13.295 5.545 20.809 1.77 24 1 13.762 7.727 8.952 23.39 8.762 21.9z"
              ></path>
            </svg>
          }
        </div>
        {/* Billing System */}
        <div className='bg-base relative'>
          <p className='py-[13px]'>Billing System</p>
          {data.features.includes('billing system') &&
            <svg
              xmlns="http://www.w3.org/2000/svg" width="25" height="23" fill="none" viewBox="0 0 25 23" className='absolute right-4 top-3'
            >
              <path
                stroke="#FF4BAC"
                d="M8.762 21.9C8.61 20.71 3.524 14.647 1 11.764c0-2.191 1.968-2.739 2.952-2.739l4.81 5.477C13.295 5.545 20.809 1.77 24 1 13.762 7.727 8.952 23.39 8.762 21.9z"
              ></path>
            </svg>
          }
        </div>
        {/* Customer Feedback */}
        <div className='bg-base relative'>
          <p className='py-[13px]'>Customer Feedback</p>
          {data.features.includes('customer feedback') &&
            <svg
              xmlns="http://www.w3.org/2000/svg" width="25" height="23" fill="none" viewBox="0 0 25 23" className='absolute right-4 top-3'
            >
              <path
                stroke="#FF4BAC"
                d="M8.762 21.9C8.61 20.71 3.524 14.647 1 11.764c0-2.191 1.968-2.739 2.952-2.739l4.81 5.477C13.295 5.545 20.809 1.77 24 1 13.762 7.727 8.952 23.39 8.762 21.9z"
              ></path>
            </svg>
          }
        </div>
        {/* Edit Menu */}
        <div className='bg-base relative'>
          <p className='py-[13px]'>Edit Menu</p>
          {data.features.includes('edit menu') &&
            <svg
              xmlns="http://www.w3.org/2000/svg" width="25" height="23" fill="none" viewBox="0 0 25 23" className='absolute right-4 top-3'
            >
              <path
                stroke="#FF4BAC"
                d="M8.762 21.9C8.61 20.71 3.524 14.647 1 11.764c0-2.191 1.968-2.739 2.952-2.739l4.81 5.477C13.295 5.545 20.809 1.77 24 1 13.762 7.727 8.952 23.39 8.762 21.9z"
              ></path>
            </svg>
          }
        </div>
        {/* Customer Database */}
        <div className='bg-base relative'>
          <p className='py-[13px]'>Customer Database</p>
          {data.features.includes('customer database') &&
            <svg
              xmlns="http://www.w3.org/2000/svg" width="25" height="23" fill="none" viewBox="0 0 25 23" className='absolute right-4 top-3'
            >
              <path
                stroke="#FF4BAC"
                d="M8.762 21.9C8.61 20.71 3.524 14.647 1 11.764c0-2.191 1.968-2.739 2.952-2.739l4.81 5.477C13.295 5.545 20.809 1.77 24 1 13.762 7.727 8.952 23.39 8.762 21.9z"
              ></path>
            </svg>
          }
        </div>
        {/* Drivers Taking */}
        <div className='bg-base relative'>
          <p className='py-[13px]'>Drivers Taking</p>
          {data.features.includes('customer database') &&
            <svg
              xmlns="http://www.w3.org/2000/svg" width="25" height="23" fill="none" viewBox="0 0 25 23" className='absolute right-4 top-3'
            >
              <path
                stroke="#FF4BAC"
                d="M8.762 21.9C8.61 20.71 3.524 14.647 1 11.764c0-2.191 1.968-2.739 2.952-2.739l4.81 5.477C13.295 5.545 20.809 1.77 24 1 13.762 7.727 8.952 23.39 8.762 21.9z"
              ></path>
            </svg>
          }
        </div>
      </div>
      <Button className='bg-third rounded-[20px] my-[30px] font-raleway'>Pay now</Button>
    </div>
  )
}

const subplans = [
  {
    name: 'Basic',
    price: '100',
    features: ['z-report', 'settings', 'online banking', 'billing system']
  },
  {
    name: 'Premium',
    price: '200',
    features: ['z-report', 'settings', 'online banking', 'billing system', 'customer feedback', 'edit menu']
  },
  {
    name: 'Full',
    price: '500',
    features: ['z-report', 'settings', 'online banking', 'billing system', 'customer feedback', 'edit menu', 'customer database', 'drivers taking']
  },
]

export default function Page() {
  return (
    <div className='bg-base h-[100vh] w-[100vw] p-[30px]'>
      <div className=' flex items-center gap-3 '>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="47"
          height="47"
          fill="none"
          viewBox="0 0 47 47"
        >
          <g clipPath="url(#clip0_437_46)">
            <path
              fill="#CEE1F2"
              d="M7.344 35.984V25.938c0-1.07.48-1.96 1.195-2.546l-1.425-1.068a3.266 3.266 0 00-1.79-.655c-1.775-.094-3.488 1.285-3.488 3.306v11.01a9.18 9.18 0 009.18 9.18h5.507a9.18 9.18 0 01-9.18-9.18z"
            ></path>
            <path
              fill="#1428BF"
              d="M35.984 47H11.016C4.942 47 0 42.058 0 35.984v-11.01c0-1.427.564-2.747 1.588-3.719a5.201 5.201 0 013.833-1.42 5.114 5.114 0 012.789 1.016l10.824 8.112.013.009c2.622 2 6.284 2 8.907 0l.012-.01 10.82-8.107a5.118 5.118 0 012.793-1.02 5.198 5.198 0 013.834 1.42A5.075 5.075 0 0147 24.975v11.01C47 42.057 42.058 47 35.984 47zM5.156 23.5c-.377 0-.762.154-1.041.419-.202.192-.443.53-.443 1.056v11.01c0 4.049 3.294 7.343 7.344 7.343h24.968c4.05 0 7.344-3.294 7.344-7.344v-11.01c0-.524-.24-.863-.443-1.055a1.532 1.532 0 00-1.113-.417 1.434 1.434 0 00-.79.295l-10.808 8.1a11.044 11.044 0 01-13.348 0L6.013 23.792a1.428 1.428 0 00-.857-.293zm37.438-9.088v-3.396C42.594 4.942 37.652 0 31.578 0H15.605C9.531 0 4.59 4.942 4.59 11.016v3.396a1.836 1.836 0 103.672 0v-3.396c0-4.05 3.294-7.344 7.343-7.344h15.973c4.05 0 7.344 3.294 7.344 7.344v3.396a1.836 1.836 0 103.672 0z"
            ></path>
            <path
              fill="#FF5CF0"
              d="M28.457 19.553c0-2.574-2.157-4.59-4.911-4.59-.89 0-1.56-.395-1.56-.918 0-.506.411-.918.917-.918.652 0 1.446.074 2.823.61a1.836 1.836 0 001.331-3.423 14.731 14.731 0 00-1.583-.521v-.338a1.836 1.836 0 00-3.672 0v.135a4.597 4.597 0 00-3.488 4.455c0 2.617 2.249 4.59 5.232 4.59.695 0 1.24.403 1.24.918a.919.919 0 01-.919.918c-.384 0-1.694-.125-3.131-.697a1.836 1.836 0 00-1.357 3.413c.84.334 1.674.564 2.423.716v.24a1.836 1.836 0 103.672 0v-.291a4.597 4.597 0 002.983-4.3z"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_437_46">
              <path fill="#fff" d="M0 0H47V47H0z"></path>
            </clipPath>
          </defs>
        </svg>
        <p className='font-sora font-[600] text-[14px] leading-[17px]'>Subscription Plans</p>
      </div>
      <div className='container mx-auto p-[40px]'>
        <div className='grid grid-cols-3 gap-10'>
          {subplans.map((data, id) => {
            return (
              <Plans key={id} data={data} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

import { Button, Card, Option, Select } from '@material-tailwind/react'
import React, { useState } from 'react'

export default function SubscriptionPlan() {
  const [showFilter, setShowFilter] = useState(false)
  const TABLE_HEAD = ["Plan", "Subscription", "Price", ""];
  const TABLE_ROWS = [
    {
      plan: "Basic",
      subscription: 'Monthly',
      price: 100,
    },
    {
      plan: "Premium",
      subscription: 'Monthly',
      price: 200,
    },
    {
      plan: "Full",
      subscription: 'Monthly',
      price: 300,
    },
  ];
  return (
    <div className='overflow-hidden h-[100vh] w-full overflow-y-scroll flex relative'>
      <div className='w-full'>
        <div className='flex justify-between fixed top-0 py-[15px] px-[50px] bg-base w-[90%] z-[200]'>
          <div className='flex items-center gap-3 '>
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
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute right-10 top-7 cursor-pointer z-[200]"
          onClick={() => { setShowFilter(true) }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <div className='mt-[100px] px-[50px] flex flex-col gap-[12px]'>
          <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left font-[700] text-[18px]">
              <thead className=''>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className="border-b bg-second p-4 border-[1px] border-[#DDDDDD] ">
                      <p
                        className=" leading-[22px] text-white"
                      >
                        {head}
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(({ plan, subscription, price }, index) => (
                  <tr key={plan} className="even:bg-blue-gray-50/50 font-[700] text-black">
                    <td className="p-4 border-[1px] border-[#DDDDDD]">
                      <>
                        <p className="">
                          {plan}
                        </p>
                      </>
                    </td>
                    <td className="p-4 border-[1px] border-[#DDDDDD]">
                      <>
                        <p className="text-[15px] leading-[17px]">
                          {subscription}
                        </p>
                      </>
                    </td>
                    <td className="p-4 border-[1px] border-[#DDDDDD]">
                      <>
                        <p className="text-[15px] leading-[17px]">
                          {price}
                        </p>
                      </>
                    </td>
                    <td className="p-4 border-[1px] border-[#DDDDDD]">
                      <div className='flex gap-10 mx-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
      <div className={`${showFilter ? 'w-[533px] bg-white block' : 'translate-x-[100%] w-0'} h-[100dvh] z-[300] transition-all duration-300 p-[30px]`}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer"
            onClick={() => { setShowFilter(false) }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>

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
      </div>
    </div>
  )
}

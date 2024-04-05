import { Card } from '@material-tailwind/react';
import React from 'react'

export default function DriverTaking({ setShowFilter, setShowIconDrawer, showIconDrawer }) {
  const TABLE_HEAD = ["Driver Code", "Invoice No", "Phone", "Delivery Time", "Status", ""];
  const TABLE_ROWS = [
    {
      code: "001",
      invoice: 10011,
      phone: 1234567890,
      delivery: "11:35 AM",
      status: "delivered",
    },
  ]
  return (
    <div className='overflow-hidden h-[100vh] w-full overflow-y-scroll flex'>
      <div className={`w-[100%]`}>
        <div className='flex justify-between py-[15px] px-[20px] lg:px-[50px] bg-base w-full z-[200] md:h-[15vh] fixed top-0'>
          <div className={`flex items-center gap-5  ${showIconDrawer ? "translate-x-[100px]" : ""} lg:translate-x-[0px] transition-all duration-300`}>
            <div className='lg:hidden'>
              {showIconDrawer ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                  onClick={() => setShowIconDrawer(false)}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                  onClick={() => setShowIconDrawer(true)}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                </svg>
              }
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48"    >
              <g clipPath="url(#clip0_200_188)">
                <path
                  fill="#CEE1F2"
                  d="M8.793 39.14c.116-.237.573-1.569.685-1.78A5.611 5.611 0 017.5 33.078v-9.97c0-9.967 4.649-16.784 18.273-17.852a9.432 9.432 0 00-1.68-.148c-16.687 0-22.218 7.125-22.218 18v10.407A5.625 5.625 0 007.5 39.14h1.293z"
                ></path>
                <path
                  fill="#4E2DD8"
                  d="M44.154 19.502c-2.008-1.104-4.233-1.899-6.77-2.418-.384-1.604-1.126-4.1-2.436-6.52-2.598-4.795-6.35-7.33-10.854-7.33-8.515 0-14.607 1.769-18.626 5.407-1.907 1.727-3.332 3.894-4.235 6.441C.415 17.39 0 20.09 0 23.11v10.412c.003 4.133 3.367 7.495 7.5 7.495h.321a5.635 5.635 0 005.304 3.75 5.635 5.635 0 005.304-3.75h10.205a5.635 5.635 0 005.303 3.75 5.635 5.635 0 005.304-3.75H40.5c4.136 0 7.5-3.365 7.5-7.5v-7.464c0-2.736-1.474-5.246-3.846-6.55zm.096 14.014a3.754 3.754 0 01-3.75 3.75h-2.813c-1.035 0-1.874.84-1.874 1.875a1.877 1.877 0 01-1.876 1.875 1.877 1.877 0 01-1.874-1.875c0-1.036-.84-1.875-1.876-1.875H16.876c-1.036 0-1.875.84-1.875 1.875a1.877 1.877 0 01-1.875 1.875 1.877 1.877 0 01-1.875-1.875c0-1.036-.84-1.875-1.875-1.875H7.5a3.754 3.754 0 01-3.75-3.75V23.109c0-7.507 2.312-16.125 20.344-16.125 7.23 0 9.483 9.988 9.86 11.99.036.188.11.578.448.964.287.328.68.546 1.11.616 2.645.43 4.881 1.16 6.835 2.234 1.174.645 1.903 1.896 1.903 3.264v7.464zM30.187 18.703c0 1.036-.839 1.875-1.875 1.875H9.75a1.875 1.875 0 110-3.75h7.406v-4.031a1.875 1.875 0 113.75 0v4.031h7.407c1.035 0 1.875.84 1.875 1.875z"
                ></path>
                <path
                  fill="#FF4BAC"
                  d="M13.406 26.578a2.344 2.344 0 11-4.687 0 2.344 2.344 0 014.687 0zm5.719-2.344a2.344 2.344 0 100 4.688 2.344 2.344 0 000-4.688zm8.063 0a2.344 2.344 0 100 4.688 2.344 2.344 0 000-4.688zm-12.094 5.25a2.344 2.344 0 100 4.688 2.344 2.344 0 000-4.688zm8.062 0a2.344 2.344 0 100 4.688 2.344 2.344 0 000-4.688z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_200_188">
                  <path fill="#fff" d="M0 0H48V48H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <p className='font-sora font-[600] text-[14px] leading-[17px]'>Driver Taking</p>
          </div>
          <div className='flex items-center gap-10'>
            <div className='hidden md:block'>
              <div className='bg-[#F1EDED] rounded-[10px] overflow-hidden flex gap-4 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <input type="text" className='py-[16px] bg-inherit outline-none' placeholder='Search Item' />
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer z-[200]"
              onClick={() => {
                setShowFilter(true)
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </div>
        </div>

        {/* Main Content */}
        <div className={`mt-[100px] px-[20px] lg:px-[50px] pb-[60px] flex flex-col gap-[30px] text-white`}>
          <div className='md:hidden block'>
            <div className='bg-[#F1EDED] rounded-[10px] overflow-hidden flex gap-4 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input type="text" className='py-[16px] bg-inherit outline-none' placeholder='Search Item' />
            </div>
          </div>
          <Card className='w-full h-full overflow-scroll'>
            <table className="w-full min-w-max table-auto text-left font-[700] text-[18px] rounded-[10px] overflow-hidden">
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
                {TABLE_ROWS.map(({ code, invoice, phone, delivery, status }, index) => (
                  <tr key={index} className="even:bg-blue-gray-50/50 text-black">
                    <td className="p-4 border-[1px] border-[#DDDDDD]">
                      <>
                        <p className="">
                          {code}
                        </p>
                      </>
                    </td>
                    <td className="p-4 border-[1px] border-[#DDDDDD]">
                      <>
                        <p className="">
                          {invoice}
                        </p>
                      </>
                    </td>
                    <td className="p-4 border-[1px] border-[#DDDDDD]">
                      <>
                        <p className="">
                          {phone}
                        </p>
                      </>
                    </td>
                    <td className="p-4 border-[1px] border-[#DDDDDD]">
                      <>
                        <p className="">
                          {delivery}
                        </p>
                      </>
                    </td>
                    <td className="p-4 border-[1px] border-[#DDDDDD]">
                      <>
                        <p className="capitalize">
                          {status}
                        </p>
                      </>
                    </td>
                    <td className="p-4 border-[1px] border-[#DDDDDD]">
                      <div className='flex gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>

                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div >
      </div>
    </div>
  )
}

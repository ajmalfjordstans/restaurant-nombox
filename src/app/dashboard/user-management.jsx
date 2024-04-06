import { Card } from '@material-tailwind/react';
import React from 'react'

export default function UserManagement({ setShowFilter, setShowIconDrawer, showIconDrawer }) {
  const TABLE_HEAD = ["Restaurant Name", "Phone", "Pincode", "Type", ""];
  const TABLE_ROWS = [
    {
      name: "Restaurant Name",
      phone: 1234567890,
      postcode: 123456,
      type: "admin",
    },
    {
      name: "Restaurant Name",
      phone: 1234567890,
      postcode: 123456,
      type: "admin",
    },
    {
      name: "Restaurant Name",
      phone: 1234567890,
      postcode: 123456,
      type: "admin",
    },
    {
      name: "Restaurant Name",
      phone: 1234567890,
      postcode: 123456,
      type: "admin",
    },

  ];
  return (
    <div className='overflow-hidden h-[100vh] w-full overflow-y-scroll flex'>
      <div className={`w-[100%]`}>
        <div className={`flex justify-between py-[15px] px-[20px] lg:px-[50px] bg-base w-full z-[200] md:h-[15vh] sticky top-0 ${showIconDrawer ? "translate-x-[100px]" : ""} lg:translate-x-[0px] transition-all duration-300`}>
          <div className='flex items-center gap-5 '>
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
              <path
                fill="#C2D9EF"
                d="M18.679 12.656c0-4.793 3.128-8.854 7.453-10.257a10.774 10.774 0 00-3.328-.524c-5.954 0-10.781 4.827-10.781 10.781 0 5.955 4.826 10.781 10.78 10.781 1.162 0 2.28-.184 3.329-.524-4.326-1.402-7.453-5.464-7.453-10.257z"
                opacity="0.8"
              ></path>
              <path
                fill="#FF4BAC"
                d="M40.594 48a1.875 1.875 0 01-1.875-1.875c0-7.34-5.972-13.313-13.313-13.313h-2.812c-7.34 0-13.313 5.973-13.313 13.313a1.875 1.875 0 11-3.75 0c0-9.408 7.654-17.063 17.063-17.063h2.812c9.409 0 17.063 7.655 17.063 17.063 0 1.036-.84 1.875-1.875 1.875z"
              ></path>
              <path
                fill="#4E2DD8"
                d="M23.813 25.313c-6.98 0-12.657-5.678-12.657-12.657C11.156 5.678 16.834 0 23.812 0c6.98 0 12.657 5.678 12.657 12.656 0 6.979-5.678 12.656-12.657 12.656zm0-21.563c-4.911 0-8.907 3.995-8.907 8.906 0 4.911 3.996 8.906 8.906 8.906 4.911 0 8.907-3.995 8.907-8.906 0-4.91-3.996-8.906-8.907-8.906z"
              ></path>
            </svg>
            <p className='font-sora font-[600] text-[14px] leading-[17px]'>User Management</p>
          </div>
          <div className='flex items-center gap-10'>
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
        <div className={`mt-[20px] px-[20px] lg:px-[50px] pb-[60px] flex flex-col gap-[30px]`}>
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
                {TABLE_ROWS.map(({ name, phone, postcode, type }, index) => (
                  <tr key={index} className="even:bg-blue-gray-50/50">
                    <td className="p-4 border-[1px] border-[#DDDDDD]">
                      <>
                        <p className="">
                          {name}
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
                          {postcode}
                        </p>
                      </>
                    </td>
                    <td className="p-4 border-[1px] border-[#DDDDDD]">
                      <>
                        <p className="capitalize">
                          {type}
                        </p>
                      </>
                    </td>
                    <td className="p-4 border-[1px] border-[#DDDDDD]">
                      <div className='flex gap-2'>
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

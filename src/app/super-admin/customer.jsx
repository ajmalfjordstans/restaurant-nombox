'use client'
import React from 'react'
import { Card } from "@material-tailwind/react";
export default function Customer() {
  const TABLE_HEAD = ["Name", "Email", "Phone", "Address", 'Issues Report', 'Status'];
  const TABLE_ROWS = [
    {
      name: "Restaurant 1",
      email: 'email@email.com',
      phone: '1234567890',
      address: 'Address here',
      issuesReport: '3 issues reported',
      status: '30',
    },
    {
      name: "Restaurant 2",
      email: 'email@email.com',
      phone: '1234567890',
      address: 'Address here',
      issuesReport: '3 issues reported',
      status: '30',
    },
    {
      name: "Restaurant 3",
      email: 'email@email.com',
      phone: '1234567890',
      address: 'Address here',
      issuesReport: '3 issues reported',
      status: '30',
    },
    {
      name: "Restaurant 4",
      email: 'email@email.com',
      phone: '1234567890',
      address: 'Address here',
      issuesReport: '3 issues reported',
      status: '30',
    },
    {
      name: "Restaurant 5",
      email: 'email@email.com',
      phone: '1234567890',
      address: 'Address here',
      issuesReport: '3 issues reported',
      status: '30',
    },
    {
      name: "Restaurant 6",
      email: 'email@email.com',
      phone: '1234567890',
      address: 'Address here',
      issuesReport: '3 issues reported',
      status: '30',
    },
    {
      name: "Restaurant 8",
      email: 'email@email.com',
      phone: '1234567890',
      address: 'Address here',
      issuesReport: '3 issues reported',
      status: '30',
    },
    {
      name: "Restaurant 9",
      email: 'email@email.com',
      phone: '1234567890',
      address: 'Address here',
      issuesReport: '3 issues reported',
      status: '30',
    },
    {
      name: "Restaurant 10",
      email: 'email@email.com',
      phone: '1234567890',
      address: 'Address here',
      issuesReport: '3 issues reported',
      status: '30',
    },
    {
      name: "Restaurant 11",
      email: 'email@email.com',
      phone: '1234567890',
      address: 'Address here',
      issuesReport: '3 issues reported',
      status: '30',
    },

  ];
  return (
    <div className=' h-[100vh] w-full overflow-y-scroll'>
      <div className='flex items-center gap-3 fixed top-0 py-[15px] px-[50px] bg-base w-full z-[200]'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="none"
          viewBox="0 0 48 48"
        >
          <path
            fill="#C2D9EF"
            d="M18.679 12.656c0-4.793 3.127-8.854 7.453-10.257a10.774 10.774 0 00-3.328-.524c-5.955 0-10.781 4.827-10.781 10.781 0 5.955 4.826 10.781 10.78 10.781 1.162 0 2.28-.184 3.329-.524-4.326-1.402-7.453-5.464-7.453-10.257z"
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
        <p className='font-sora font-[600] text-[14px] leading-[17px]'>Customer</p>
      </div>
      <div className='mt-[110px] px-[50px] pb-[30px] overflow-y-scroll'>
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
              {TABLE_ROWS.map(({ name, email, phone, address, issuesReport, status }, index) => (
                <tr key={name} className="even:bg-blue-gray-50/50">
                  <td className="p-4 border-[1px] border-[#DDDDDD]">
                    <>
                      <p className="">
                        {name}
                      </p>
                    </>
                  </td>
                  <td className="p-4 border-[1px] border-[#DDDDDD]">
                    <>
                      <p className="font-[400] text-[15px] leading-[17px]">
                        {email}
                      </p>
                    </>
                  </td>
                  <td className="p-4 border-[1px] border-[#DDDDDD]">
                    <>
                      <p className="font-[400] text-[15px] leading-[17px]">
                        {phone}
                      </p>
                    </>
                  </td>
                  <td className="p-4 border-[1px] border-[#DDDDDD]">
                    <>
                      <p className="font-[400] text-[15px] leading-[17px]">
                        {address}
                      </p>

                    </>
                  </td>
                  <td className="p-4 border-[1px] border-[#DDDDDD]">
                    <>
                      <p className="font-[400] text-[15px] leading-[17px]">
                        {issuesReport}
                      </p>

                    </>
                  </td>
                  <td className="p-4 border-[1px] border-[#DDDDDD]">
                    <>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: status + '%' }}></div>
                      </div>
                    </>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}

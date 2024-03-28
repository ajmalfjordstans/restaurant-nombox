'use client'
import React, { useState } from 'react'
import { Select, Option, Card, Button } from "@material-tailwind/react";
import { DateCalendar } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

export default function Report() {
  const [showFilter, setShowFilter] = useState(false)
  const [date, setDate] = useState(dayjs(new Date()))
  const TABLE_HEAD = ["", "Orders", "Price", "Percentage"];
  const TABLE_ROWS = [
    {
      name: "Cash",
      orders: 15,
      price: 4.50,
      percentage: 30,
    },
    {
      name: "Card",
      orders: 15,
      price: 4.50,
      percentage: 60,
    },
    {
      name: "Card At Shop",
      orders: 15,
      price: 4.50,
      percentage: 10,
    },
    {
      name: "Online",
      orders: 15,
      price: 4.50,
      percentage: 30,
    },
    {
      name: "Online",
      orders: 15,
      price: 4.50,
      percentage: 60,
    },
    {
      name: "Company",
      orders: 15,
      price: 4.50,
      percentage: 60,
    },
    {
      name: "Delivery",
      orders: 15,
      price: 4.50,
      percentage: 30,
    },

  ];

  return (
    <>
      <div className='overflow-hidden h-[100vh] w-full overflow-y-scroll flex relative'>
        <div className='w-full'>
          <div className='flex justify-between fixed top-0 py-[15px] px-[50px] bg-base w-[90%] z-[200]'>
            <div className='flex items-center gap-3 '>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48" >
                <g clipPath="url(#clip0_333_536)">
                  <path
                    fill="#CEE1F2"
                    d="M43.875 37.772A5.063 5.063 0 0136 33.562V17.25a5.063 5.063 0 017.875-4.21 5.057 5.057 0 00-2.25 4.21v16.313c0 1.755.893 3.3 2.25 4.209zM7.5 33.562V28.5c0-1.755.893-3.301 2.25-4.21a5.063 5.063 0 00-7.875 4.21v5.063a5.063 5.063 0 007.875 4.209 5.058 5.058 0 01-2.25-4.21zm17.063 0V6.939c0-1.756.893-3.302 2.25-4.21a5.063 5.063 0 00-7.875 4.21v26.625a5.063 5.063 0 007.875 4.209 5.057 5.057 0 01-2.25-4.21z"
                  ></path>
                  <path
                    fill="#4E2DD8"
                    d="M41.063 40.5a6.945 6.945 0 01-6.938-6.938V17.25a6.945 6.945 0 016.938-6.938A6.945 6.945 0 0148 17.25v16.313a6.945 6.945 0 01-6.938 6.937zm0-26.438a3.191 3.191 0 00-3.188 3.188v16.313a3.191 3.191 0 003.188 3.187 3.191 3.191 0 003.187-3.188V17.25a3.191 3.191 0 00-3.188-3.188zM6.937 40.5A6.945 6.945 0 010 33.562V28.5a6.945 6.945 0 016.938-6.938 6.945 6.945 0 016.937 6.938v5.063A6.945 6.945 0 016.937 40.5zm0-15.188A3.191 3.191 0 003.75 28.5v5.063a3.191 3.191 0 003.188 3.187 3.191 3.191 0 003.187-3.188V28.5a3.191 3.191 0 00-3.188-3.188zM24 40.5a6.945 6.945 0 01-6.938-6.938V6.939A6.945 6.945 0 0124 0a6.945 6.945 0 016.938 6.938v26.625A6.945 6.945 0 0124 40.5zm0-36.75a3.191 3.191 0 00-3.188 3.188v26.625A3.191 3.191 0 0024 36.75a3.191 3.191 0 003.188-3.188V6.939A3.191 3.191 0 0024 3.75z"
                  ></path>
                  <path
                    fill="#FF4BAC"
                    d="M46.125 48H1.875a1.875 1.875 0 110-3.75h44.25a1.875 1.875 0 110 3.75z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_333_536">
                    <path fill="#fff" d="M0 0H48V48H0z"></path>
                  </clipPath>
                </defs>
              </svg>
              <p className='font-sora font-[600] text-[14px] leading-[17px]'>Z-Report Stat</p>
              <div className="w-72 ml-[60px]">
                <Select label="Select Restaurant" className='bg-white'>
                  <Option>Restaurant 1</Option>
                  <Option>Restaurant 2</Option>
                  <Option>Restaurant 3</Option>
                  <Option>Restaurant 4</Option>
                </Select>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute right-10 top-7 cursor-pointer z-[200]"
            onClick={() => { setShowFilter(true) }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <div className='mt-[80px] px-[50px] flex flex-col gap-[12px]'>
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
                  {TABLE_ROWS.map(({ name, orders, price, percentage }, index) => (
                    <tr key={name} className="even:bg-blue-gray-50/50 font-[700] text-black">
                      <td className="p-4 border-[1px] border-[#DDDDDD]">
                        <>
                          <p className="">
                            {name}
                          </p>
                        </>
                      </td>
                      <td className="p-4 border-[1px] border-[#DDDDDD]">
                        <>
                          <p className="text-[15px] leading-[17px]">
                            {orders}
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
                        <>
                          <p className="text-[15px] leading-[17px]">
                            {percentage}%
                          </p>
                        </>
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

            <div className='flex flex-col mt-[30px] gap-10'>
              <div className='flex justify-between'>
                <Button className='bg-second capitalize'>Previous</Button>
                <Button className='bg-third capitalize'>Option</Button>
                <Button className='bg-primary capitalize'>Next</Button>
              </div>
              <p className='font-sora font-[600] text-[14px] leading-[17px] text-primary'>Choose Date to find Daily Report</p>
              <DateCalendar
                defaultValue={date}
                onChange={(newDate) => setDate(newDate)}
              />
              <Button
                className='bg-third rounded-[10px] mt-[20px]'
                onClick={() => alert(date)}
              >Search</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
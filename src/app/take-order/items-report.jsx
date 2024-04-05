import { Card, Option, Select } from '@material-tailwind/react'
import React from 'react'

export default function ItemsReport({ setShowFilter, setShowIconDrawer, showIconDrawer }) {
  const TABLE_HEAD = ["", "Orders", "Price", "Percentage"];
  const TABLE_ROWS = [
    {
      payment: "Card",
      qty: 15,
      price: 20,
      percentage: 30,
    },
    {
      payment: "Cash",
      qty: 15,
      price: 20,
      percentage: 30,
    },
    {
      payment: "Card at Shop",
      qty: 15,
      price: 20,
      percentage: 30,
    },
    {
      payment: "Online",
      qty: 15,
      price: 20,
      percentage: 30,
    },
    {
      payment: "Offline",
      qty: 15,
      price: 20,
      percentage: 30,
    },
    {
      payment: "Company",
      qty: 15,
      price: 20,
      percentage: 30,
    },
    {
      payment: "Delivery",
      qty: 15,
      price: 20,
      percentage: 30,
    },
    {
      payment: "Collection",
      qty: 15,
      price: 20,
      percentage: 30,
    },
    {
      payment: "Waiting",
      qty: 15,
      price: 20,
      percentage: 30,
    },
    {
      payment: "Reject Orders",
      qty: 15,
      price: 20,
      percentage: 30,
    },

  ];
  return (
    <div className='w-full overflow-y-scroll flex'>
      <div className={`w-[100%]`}>
        <div className='flex  justify-between py-[15px] px-[20px] lg:px-[50px] bg-base w-full z-[200] md:h-[15vh] sticky top-0'>
          <div className={`flex items-center gap-5 ${showIconDrawer ? "translate-x-[100px]" : ""} lg:translate-x-[0px] transition-all duration-300`}>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="49" fill="none" viewBox="0 0 53 49"            >
              <path stroke="#1428BF" strokeWidth="4"
                d="M22.517 9.748C5.83 13.913 2.076 31.17 2.284 39.28H50C49.5 18.386 36.017 10.886 29.34 9.748 30.646 6.79 30.253 2 26.134 2c-5.31 0-4.451 5.151-3.617 7.748z"
              ></path>
              <path stroke="#FF4BAC" strokeWidth="2"
                d="M7.793 30.57c.53-3.266 2.926-10.347 8.276-12.543"
              ></path>
              <path stroke="#FF4BAC" strokeWidth="5" d="M2 45.65h48"></path>
            </svg>
            <p className='font-sora font-[600] text-[14px] leading-[17px]'>Items Report</p>
          </div>
          <div className='flex items-center gap-10'>
            <div className='lg:block hidden'>
              <div className="w-72 ml-[60px]">
                <Select label="Choose Payment Type" className='bg-white'>
                  <Option>Card</Option>
                  <Option>Cash</Option>
                </Select>
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
        <div className={`mt-[20px] px-[20px] lg:px-[50px] pb-[60px] flex flex-col gap-[30px]`}>
          <div className='block lg:hidden'>
            <div className="w-full">
              <Select label="Choose Payment Type" className='bg-white'>
                <Option>Card</Option>
                <Option>Cash</Option>
              </Select>
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
                {TABLE_ROWS.map(({ payment, qty, price, percentage }, index) => (
                  <tr key={index} className="even:bg-blue-gray-50/50">
                    <td className="p-4 border-[1px] border-[#DDDDDD]">
                      <>
                        <p className="">
                          {payment}
                        </p>
                      </>
                    </td>
                    <td className="p-4 border-[1px] border-[#DDDDDD]">
                      <>
                        <p className="">
                          {qty}
                        </p>
                      </>
                    </td>
                    <td className="p-4 border-[1px] border-[#DDDDDD]">
                      <>
                        <p className="">
                          {price}
                        </p>
                      </>
                    </td>
                    <td className="p-4 border-[1px] border-[#DDDDDD]">
                      <>
                        <p className="">
                          {percentage}%
                        </p>

                      </>
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

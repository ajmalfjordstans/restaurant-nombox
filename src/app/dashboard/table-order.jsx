import { Option, Select } from '@material-tailwind/react'
import React from 'react'

export function OrderCard() {
  return (
    <div className='p-[15px] md:p-[30px] rounded-[10px] bg-white text-black font-[600] text-[15px]'>
      <table className='w-full'>
        <tr className='flex gap-2'>
          <td>
            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="46" fill="none" viewBox="0 0 51 46" >
              <path
                stroke="#000"
                strokeWidth="2"
                d="M21.517 8.748C4.829 12.913 1.075 30.17 1.283 38.28H49C48.5 17.386 35.016 9.886 28.338 8.748 29.645 5.79 29.253 1 25.133 1c-5.31 0-4.451 5.151-3.616 7.748zM6.793 29.57c.53-3.266 2.926-10.347 8.276-12.543M1 44.65h48"
              ></path>
            </svg>
          </td>
          <td>
            <p>Item Name : Item 1</p>
          </td>
          <td>
            <p>Qty : 1</p>
          </td>
          <td>
            <p>Price : 200</p>
          </td>
          <td>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </td>
        </tr>
      </table>

    </div>
  )
}

export default function TableOrder({ setShowFilter, setShowIconDrawer, showIconDrawer }) {
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
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="37" fill="none" viewBox="0 0 46 37"    >
              <rect width="46" height="4" fill="#4E2DD8" rx="2"></rect>
              <rect
                width="5.531"
                height="31"
                x="11.294"
                y="5.397"
                fill="#FF4BAC"
                rx="2.765"
                transform="rotate(19.63 11.294 5.397)"
              ></rect>
              <rect
                width="5.531"
                height="31"
                fill="#FF4BAC"
                rx="2.765"
                transform="scale(-1 1) rotate(19.629 -32.143 -92.94)"
              ></rect>
              <circle cx="22.5" cy="9.5" r="4.5" fill="#C6E1F2"></circle>
            </svg>
            <p className='font-sora font-[600] text-[14px] leading-[17px]'>Table Order</p>
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
        <div className={`mt-[20px] px-[20px] lg:px-[50px] pb-[60px] flex flex-col gap-[30px] text-white`}>
          <div className="w-full md:w-72">
            <Select label="Table Number" className='bg-white'>
              <Option>Table 1</Option>
              <Option>Table 2</Option>
              <Option>Table 3</Option>
              <Option>Table 4</Option>
            </Select>
          </div>
          <div className='flex flex-col gap-3'>
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </div>
        </div >
      </div>
    </div>
  )
}

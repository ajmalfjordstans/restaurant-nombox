import { Button } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'

export default function EditMenuDrawer() {
  const [days, setDays] = useState([])

  const toggleWorkingDays = (day) => {
    let array = days
    if (array.includes(day)) {
      // If the string is already in the array, remove it
      setDays(array.filter(item => item !== day));
    } else {
      // If the string is not in the array, add it
      setDays([...array, day]);
    }
    console.log(days);
  }
  return (
    <div className='p-[30px] font-sora font-[600] text-[14px] leading-[17px] text-primary'>
      <p className='font-[700] text-[38px] text-center'>LOGO</p>
      <div>
        <p className='mt-[20px]'>Add Category</p>
        <input type="text" placeholder='Category Name' className='bg-base outline-none p-[10px] w-full rounded-[10px] my-[10px]' />
        <div className='flex gap-1'>
          <Button className='bg-second capitalize font-sora' fullWidth>Backround Color</Button>
          <Button className='bg-third capitalize font-sora' fullWidth>Text Color</Button>
        </div>
      </div>
      <div className='mt-[30px] flex flex-col gap-4'>
        <div className='flex justify-between'>
          <p>Available for Delivery</p>
          <div className="inline-flex items-center">
            <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
              <input id="Available for Delivery" type="checkbox"
                className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-second peer-checked:border-second peer-checked:before:bg-second"
              />
              <label htmlFor="Available for Delivery"
                className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-second peer-checked:before:bg-second">
                <div className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                  data-ripple-dark="true"></div>
              </label>
            </div>
          </div>
        </div>
        <div className='flex justify-between'>
          <p>Available for collection</p>
          <div className="inline-flex items-center">
            <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
              <input id="Available for collection" type="checkbox"
                className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-second peer-checked:border-second peer-checked:before:bg-second"
              />
              <label htmlFor="Available for collection"
                className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-second peer-checked:before:bg-second">
                <div className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                  data-ripple-dark="true"></div>
              </label>
            </div>
          </div>
        </div>
        <div className='flex justify-between'>
          <p>Allow Coupon</p>
          <div className="inline-flex items-center">
            <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
              <input id="Allow Coupon" type="checkbox"
                className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-second peer-checked:border-second peer-checked:before:bg-second"
              />
              <label htmlFor="Allow Coupon"
                className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-second peer-checked:before:bg-second">
                <div className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                  data-ripple-dark="true"></div>
              </label>
            </div>
          </div>
        </div>
        <div className='flex justify-between'>
          <p>Vat Charge</p>
          <div className="inline-flex items-center">
            <div className="relative inline-block w-8 h-4 rounded-full cursor-pointer">
              <input id="Vat Charge" type="checkbox"
                className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-second peer-checked:border-second peer-checked:before:bg-second"
              />
              <label htmlFor="Vat Charge"
                className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-second peer-checked:before:bg-second">
                <div className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                  data-ripple-dark="true"></div>
              </label>
            </div>
          </div>
        </div>
        <div>
          <p>Days Available</p>
          <div className='grid grid-cols-7 gap-3 mt-3'>
            <div>
              <div className={`${days.includes('Monday') ? "bg-primary text-white" : "border-primary border-[1px]"} cursor-pointer flex justify-center items-center h-[35px] rounded-[10px]`}
                onClick={() => toggleWorkingDays("Monday")}
              >
                <p>M</p>
              </div>
            </div>
            <div>
              <div className={`${days.includes('Tuesday') ? "bg-primary text-white" : "border-primary border-[1px]"} cursor-pointer flex justify-center items-center h-[35px] rounded-[10px]`}
                onClick={() => toggleWorkingDays("Tuesday")}
              >
                <p>T</p>
              </div>
            </div>
            <div>
              <div className={`${days.includes('Wednesday') ? "bg-primary text-white" : "border-primary border-[1px]"} cursor-pointer flex justify-center items-center h-[35px] rounded-[10px]`}
                onClick={() => toggleWorkingDays("Wednesday")}
              >
                <p>W</p>
              </div>
            </div>
            <div>
              <div className={`${days.includes('Thursday') ? "bg-primary text-white" : "border-primary border-[1px]"} cursor-pointer flex justify-center items-center h-[35px] rounded-[10px]`}
                onClick={() => toggleWorkingDays("Thursday")}
              >
                <p>T</p>
              </div>
            </div>
            <div>
              <div className={`${days.includes('Friday') ? "bg-primary text-white" : "border-primary border-[1px]"} cursor-pointer flex justify-center items-center h-[35px] rounded-[10px]`}
                onClick={() => toggleWorkingDays("Friday")}
              >
                <p>F</p>
              </div>
            </div>
            <div>
              <div className={`${days.includes('Saturday') ? "bg-primary text-white" : "border-primary border-[1px]"} cursor-pointer flex justify-center items-center h-[35px] rounded-[10px]`}
                onClick={() => toggleWorkingDays("Saturday")}
              >
                <p>S</p>
              </div>
            </div>
            <div>
              <div className={`${days.includes('Sunday') ? "bg-primary text-white" : "border-primary border-[1px]"} cursor-pointer flex justify-center items-center h-[35px] rounded-[10px]`}
                onClick={() => toggleWorkingDays("Sunday")}
              >
                <p>S</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex gap-1'>
          <Button className='bg-third capitalize font-sora' fullWidth>Delete</Button>
          <Button className='bg-primary capitalize font-sora' fullWidth onClick={() => alert(days)}>Save</Button>
        </div>
      </div >
    </div >
  )
}

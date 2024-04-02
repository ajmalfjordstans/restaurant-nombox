'use client'
import React, { useState } from 'react'

export default function CardThree({ data }) {
  const [rows, setRows] = useState(data)
  const handleQtyIncrement = (id) => {
    setRows(prevRows => prevRows.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    }));
  }
  const handleQtyDecrement = (id) => {
    setRows(prevRows => prevRows.map(item => {
      if (item.id === id && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }));
  }
  return (
    <div className='w-full rounded-[20px] p-[30px] bg-white flex flex-col gap-3'>
      {rows?.map((data, id) => {
        return (
          <div className='flex justify-between items-center' key={id}>
            <p>{data.name}</p>
            <div className="inline-flex items-center">
              <div className='flex gap-1 justify-center'>
                <div className='bg-third py-[10px] px-[15px] rounded-tl-[10px] rounded-bl-[10px] cursor-pointer'
                  onClick={() => handleQtyIncrement(id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-6 h-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <p className="font-[400] text-[15px] leading-[17px] bg-[#F0EDED] w-[50px] flex items-center justify-center">
                  {data.count}
                </p>
                <div className='bg-third py-[10px] px-[15px] rounded-tr-[10px] rounded-br-[10px] cursor-pointer'
                  onClick={() => handleQtyDecrement(id)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-6 h-6 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )
      })}


    </div>
  )
}

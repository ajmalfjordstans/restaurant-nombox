'use client'
import React, { useState } from 'react'
import { Button } from "@material-tailwind/react";
import Link from 'next/link';

const TABLE_HEAD = ["Items", "Qty", "Price", ""];
const TABLE_ROWS = [
  {
    id: 1,
    items: "Dish 1",
    quantity: 15,
    price: 20,
  },
  {
    id: 2,
    items: "Dish 1",
    quantity: 15,
    price: 20,
  },
  {
    id: 3,
    items: "Dish 1",
    quantity: 15,
    price: 20,
  },
  {
    id: 4,
    items: "Dish 1",
    quantity: 15,
    price: 20,
  },
  {
    id: 5,
    items: "Dish 1",
    quantity: 15,
    price: 20,
  },
];
export default function CartItems({ setShowFilter }) {
  const [rows, setRows] = useState(TABLE_ROWS)
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
  const handleDeleteItem = (id) => {
    const updatedRows = rows.filter(item => item.id !== id);
    setRows(updatedRows);
  };
  return (
    <div className='flex flex-col'>
      <p className='font-[600] text-[25px] leading-[30px] m-[30px]'>Cart Items - (7)</p>
      <table className="w-full min-w-max table-auto text-left font-[700] text-[16px] font-sora">
        <thead className=''>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b bg-[#CCCCCC] p-4 border-[1px] border-[#DDDDDD] ">
                <p
                  className=" leading-[22px] text-black"
                >
                  {head}
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map(({ items, quantity, price, id }, index) => (
            <tr key={items} className="even:bg-blue-gray-50/50">
              <td className="p-4 border-[1px] border-[#DDDDDD]">
                <>
                  <p className="">
                    {items}
                  </p>
                </>
              </td>
              <td className="p-1 border-[1px] border-[#DDDDDD]">
                <div className='flex gap-1 justify-center'>
                  <div className='bg-third py-[10px] px-[15px] rounded-tl-[10px] rounded-bl-[10px] cursor-pointer'
                    onClick={() => handleQtyIncrement(id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-6 h-6 ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </div>
                  <p className="font-[400] text-[15px] leading-[17px] bg-[#F0EDED] w-[50px] flex items-center justify-center">
                    {quantity}
                  </p>
                  <div className='bg-third py-[10px] px-[15px] rounded-tr-[10px] rounded-br-[10px] cursor-pointer'
                    onClick={() => handleQtyDecrement(id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-6 h-6 cursor-pointer">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                  </div>
                </div>
              </td>
              <td className="p-4 border-[1px] border-[#DDDDDD]">
                <>
                  <p className="font-[400] text-[15px] leading-[17px]">
                    ${price}
                  </p>
                </>
              </td>
              <td className="p-4 border-[1px] border-[#DDDDDD]">
                <>
                  <p className="font-[400] text-[15px] leading-[17px] cursor-pointer"
                    onClick={() => handleDeleteItem(id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </p>
                </>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex justify-end gap-5 mt-[30px]'>
        <table>
          <tr className="">
            <td className="px-4 py-2 text-right w-[200px]">
              <p className="font-sora font-[600] leading-[20px]">Total</p>
            </td>
            <td className="px-4 py-2 text-left w-[100px]">
              <p className="">$140</p>
            </td>
          </tr>
          <tr className="">
            <td className="px-4 py-2 text-right w-[200px]">
              <p className="font-sora font-[600] leading-[20px]">Vat</p>
            </td>
            <td className="px-4 py-2 text-left  w-[100px]">
              <p className="">$5</p>
            </td>
          </tr>
          <tr className="">
            <td className="px-4 py-2 text-right w-[200px]">
              <p className="font-sora font-[600] leading-[20px]">Grand Total</p>
            </td>
            <td className="px-4 py-2 text-left  w-[100px]">
              <p className="">$145</p>
            </td>
          </tr>
        </table>
      </div>
      <div className='flex justify-end'>
        <Link href="/take-order?section=customer-details" >
          <Button
            className="bg-primary m-[30px]"
            onClick={() => { setShowFilter(false) }}
          >Checkout</Button>
        </Link>
      </div>
    </div>
  )
}

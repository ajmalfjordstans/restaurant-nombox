import React from 'react'
import { Card } from "@material-tailwind/react";
export default function Invoice() {
  const TABLE_HEAD = ["Items", "Qty", "Price"];
  const TABLE_ROWS = [
    {
      item: "Dish 1",
      qty: 15,
      price: 20,
    },
    {
      item: "Dish 2",
      qty: 15,
      price: 20,
    },
    {
      item: "Dish 3",
      qty: 15,
      price: 20,
    },
    {
      item: "Dish 4",
      qty: 15,
      price: 20,
    },
    {
      item: "Dish 5",
      qty: 15,
      price: 20,
    },
    {
      item: "Dish 6",
      qty: 15,
      price: 20,
    },
    {
      item: "Dish 7",
      qty: 15,
      price: 20,
    },

  ];
  return (
    <div className='p-[30px] font-sora font-[400] text-[20px] leading-[25px] w-full'>
      <div className='flex justify-between font-[700] text-[20px]'>
        <p>Company Name</p>
        <p>12-3-2021</p>
      </div>
      <p className='font-[700] text-[30px] leading-[37px]'>Invoice: 1001</p>
      <div className='flex flex-col gap-3'>
        <div className='flex flex-wrap gap-1 mt-[20px]'>
          <p>Customer Name: </p>
          <p>+12 123126567</p>
        </div>
        <div className='flex flex-wrap gap-1'>
          <p>Payment Type: </p>
          <p>Cash</p>
        </div>
        <div className='flex flex-wrap gap-1'>
          <p>Order Type: </p>
          <p>Takeaway</p>
        </div>
      </div>
      <table className="w-full min-w-max table-auto font-[700] text-[18px] text-center mt-4">
        <thead className=''>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className=" p-2">
                <p
                  className="leading-[22px] text-black"
                >
                  {head}
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ item, qty, price }, index) => (
            <tr key={index} className="even:bg-blue-gray-50/50">
              <td className="p-2">
                <>
                  <p className="font-[400] text-[15px] leading-[17px]">
                    {item}
                  </p>
                </>
              </td>
              <td className="p-2">
                <>
                  <p className="font-[400] text-[15px] leading-[17px]">
                    {qty}
                  </p>
                </>
              </td>
              <td className="p-2">
                <>
                  <p className="font-[400] text-[15px] leading-[17px]">
                    {price}
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
            <td className="px-1 py-2 text-right w-[200px]">
              <p className="font-sora font-[600] leading-[20px]">Total</p>
            </td>
            <td className="px-1 py-2 text-left w-[100px]">
              <p className="">$140</p>
            </td>
          </tr>
          <tr className="">
            <td className="px-1 py-2 text-right w-[200px]">
              <p className="font-sora font-[600] leading-[20px]">Vat</p>
            </td>
            <td className="px-1 py-2 text-left  w-[100px]">
              <p className="">$5</p>
            </td>
          </tr>
          <tr className="">
            <td className="px-1 py-2 text-right w-[200px]">
              <p className="font-sora font-[600] leading-[20px]">Delivery Charges</p>
            </td>
            <td className="px-1 py-2 text-left  w-[100px]">
              <p className="">$0</p>
            </td>
          </tr>
          <tr className="">
            <td className="px-1 py-2 text-right w-[200px]">
              <p className="font-sora font-[600] leading-[20px]">Grand Total</p>
            </td>
            <td className="px-1 py-2 text-left  w-[100px]">
              <p className="">$145</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

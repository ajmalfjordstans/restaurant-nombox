import React from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const POSTCODES = [
  {
    postcode: 1234242,
    data: [
      {
        postcode: 'CC456',
        minOrder: 15,
        charge: 4.50,
        freeAbove: 999,
        deliveryLimit: true
      },
      {
        postcode: 'CC456',
        minOrder: 15,
        charge: 4.50,
        freeAbove: 999,
        deliveryLimit: true
      },
      {
        postcode: 'CC456',
        minOrder: 15,
        charge: 4.50,
        freeAbove: 999,
        deliveryLimit: true
      },
      {
        postcode: 'CC456',
        minOrder: 15,
        charge: 4.50,
        freeAbove: 999,
        deliveryLimit: true
      },
    ]
  },
  {
    postcode: 1234242,
    data: [
      {
        postcode: 'CC456',
        minOrder: 15,
        charge: 4.50,
        freeAbove: 999,
        deliveryLimit: true
      },
      {
        postcode: 'CC456',
        minOrder: 15,
        charge: 4.50,
        freeAbove: 999,
        deliveryLimit: true
      },
      {
        postcode: 'CC456',
        minOrder: 15,
        charge: 4.50,
        freeAbove: 999,
        deliveryLimit: true
      },
      {
        postcode: 'CC456',
        minOrder: 15,
        charge: 4.50,
        freeAbove: 999,
        deliveryLimit: true
      },
    ]
  },
  {
    postcode: 1234242,
    data: [
      {
        postcode: 'CC456',
        minOrder: 15,
        charge: 4.50,
        freeAbove: 999,
        deliveryLimit: true
      },
      {
        postcode: 'CC456',
        minOrder: 15,
        charge: 4.50,
        freeAbove: 999,
        deliveryLimit: true
      },
      {
        postcode: 'CC456',
        minOrder: 15,
        charge: 4.50,
        freeAbove: 999,
        deliveryLimit: true
      },
      {
        postcode: 'CC456',
        minOrder: 15,
        charge: 4.50,
        freeAbove: 999,
        deliveryLimit: true
      },
    ]
  },
  {
    postcode: 1234242,
    data: [
      {
        postcode: 'CC456',
        minOrder: 15,
        charge: 4.50,
        freeAbove: 999,
        deliveryLimit: true
      },
      {
        postcode: 'CC456',
        minOrder: 15,
        charge: 4.50,
        freeAbove: 999,
        deliveryLimit: true
      },
      {
        postcode: 'CC456',
        minOrder: 15,
        charge: 4.50,
        freeAbove: 999,
        deliveryLimit: true
      },
      {
        postcode: 'CC456',
        minOrder: 15,
        charge: 4.50,
        freeAbove: 999,
        deliveryLimit: true
      },
    ]
  },
  {
    postcode: 1234242,
    data: [
      {
        postcode: 'CC456',
        minOrder: 15,
        charge: 4.50,
        freeAbove: 999,
        deliveryLimit: true
      },
      {
        postcode: 'CC456',
        minOrder: 15,
        charge: 4.50,
        freeAbove: 999,
        deliveryLimit: true
      },
      {
        postcode: 'CC456',
        minOrder: 15,
        charge: 4.50,
        freeAbove: 999,
        deliveryLimit: true
      },
      {
        postcode: 'CC456',
        minOrder: 15,
        charge: 4.50,
        freeAbove: 999,
        deliveryLimit: true
      },
    ]
  },
]

function Icon({ id, open }) {
  return (
    <>
      <div className={`${id === open ? "rotate-180" : ""} bg-white rounded-full w-10 h-10 flex justify-center items-center transition-transform`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="inherit" viewBox="0 0 24 24" strokeWidth={1.5} stroke="inherit" className="w-6 h-6 transition-transform rotate-90">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
        </svg>
      </div>
    </>
  );
}

export function ChargeCard({ handleOpen, open, data, id }) {
  return (
    <Accordion open={open === id} icon={<Icon id={id} open={open} />} className="mb-2 rounded-lg  overflow-hidden">
      <AccordionHeader
        onClick={() => open === id ? handleOpen("") : handleOpen(id)}
        className={` transition-colors px-4 text-white hover:text-white rounded-lg ${open === id ? " bg-third" : "bg-second"
          }`}
      >
        POST CODE: 1234242
      </AccordionHeader>
      <AccordionBody className="pt-1 text-base font-normal">
        <table className='font-[700] font-raleway text-[18px] w-full text-black text-center'>
          <thead className='bg-[#C4C4C4] '>
            <tr className='h-[60px]'>
              <td className='border-[1px] border-[#DDDDDD] py-4'>Postcode</td>
              <td className='border-[1px] border-[#DDDDDD] py-4'>Min Order</td>
              <td className='border-[1px] border-[#DDDDDD] py-4'>Charge</td>
              <td className='border-[1px] border-[#DDDDDD] py-4'>Free Above</td>
              <td className='border-[1px] border-[#DDDDDD] py-4'>Delivery Limit</td>
              <td className='border-[1px] border-[#DDDDDD] py-4'></td>
            </tr>
          </thead>
          <tbody>
            {data.data.map((data, id) => {
              return (
                <tr key={id}>
                  <td className='border-[1px] border-[#DDDDDD] py-4'>{data.postcode}</td>
                  <td className='border-[1px] border-[#DDDDDD] py-4'>{data.minOrder}</td>
                  <td className='border-[1px] border-[#DDDDDD] py-4'>{data.charge}</td>
                  <td className='border-[1px] border-[#DDDDDD] py-4'>{data.freeAbove}</td>
                  <td className='border-[1px] border-[#DDDDDD] py-4 '>
                    {data.deliveryLimit ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      : ""}

                  </td>
                  <td className='border-[1px] border-[#DDDDDD] py-4 flex justify-around'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>

                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </AccordionBody>
    </Accordion>
  )
}

export default function DeliveryCharges({ setShowFilter }) {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className='overflow-hidden h-[100vh] w-full overflow-y-scroll flex'>
      <div className={`w-[100%]`}>
        <div className='flex justify-between py-[15px] px-[50px]  bg-base w-full z-[200] h-[15vh] sticky top-0'>
          <div className='flex items-center gap-5 '>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48"    >
              <g clipPath="url(#clip0_200_148)">
                <path
                  fill="#CEE1F2"
                  d="M9.78 37.805L7.538 19.357A6.16 6.16 0 019.1 14.504L8.06 13.22a6.186 6.186 0 00-6.147 6.886l2.017 17.7a9.372 9.372 0 009.312 8.311h5.85v-.001a9.373 9.373 0 01-9.313-8.312z"
                ></path>
                <path
                  fill="#4E2DD8"
                  d="M34.757 47.993H13.243A11.241 11.241 0 012.07 38.02L.052 20.32a8.068 8.068 0 011.995-6.28 8.068 8.068 0 016.013-2.693 1.874 1.874 0 110 3.749 4.258 4.258 0 00-3.216 1.44 4.259 4.259 0 00-1.067 3.36l2.017 17.7a7.494 7.494 0 007.45 6.648h21.513a7.494 7.494 0 007.45-6.649l2.016-17.7a4.258 4.258 0 00-1.067-3.359 4.258 4.258 0 00-3.216-1.44 1.874 1.874 0 110-3.75c2.294 0 4.486.982 6.013 2.694a8.068 8.068 0 011.995 6.28l-2.017 17.7a11.24 11.24 0 01-11.174 9.973zM17.165 26.624V10.597a6.85 6.85 0 016.842-6.842 6.85 6.85 0 016.842 6.842v.75h-8.06a1.874 1.874 0 100 3.749h9.935c1.035 0 1.874-.84 1.874-1.875v-2.624c0-5.84-4.75-10.59-10.59-10.59s-10.592 4.75-10.592 10.59v16.027a1.874 1.874 0 103.75 0z"
                ></path>
                <path
                  fill="#FF4BAC"
                  d="M34.594 32.437c0-2.585-2.313-4.687-5.156-4.687-.909 0-1.594-.403-1.594-.938 0-.517.42-.937.938-.937.666 0 1.476.075 2.883.622a1.875 1.875 0 001.359-3.495 15.06 15.06 0 00-1.617-.532v-.345a1.875 1.875 0 10-3.75 0v.137a4.695 4.695 0 00-3.563 4.55c0 2.672 2.297 4.688 5.344 4.688.792 0 1.406.504 1.406.937 0 .482-.524.938-1.078.938-.392 0-1.73-.128-3.198-.712a1.875 1.875 0 00-1.385 3.485c.858.341 1.71.577 2.474.732v.245a1.875 1.875 0 103.75 0v-.29c1.838-.669 3.187-2.413 3.187-4.398z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_200_148">
                  <path fill="#fff" d="M0 0H48V48H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <p className='font-sora font-[600] text-[14px] leading-[17px]'>Delivery Charges</p>
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
        <div className={`mt-[20px] px-[50px] pb-[60px] flex flex-col gap-[30px]`}>
          {POSTCODES.map((data, id) => {
            return (
              <ChargeCard handleOpen={handleOpen} open={open} data={data} key={id} id={id} />
            )
          })}

        </div >
      </div>
    </div>
  )
}

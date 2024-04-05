'use client'
import React, { useEffect, useState } from 'react'
import CustomerForm from './customer-form';
import { Button, Radio } from "@material-tailwind/react";
import Image from 'next/image';

export function RenderPage({ formData, setFormData, setShowPage, showPage, setShowDrawer }) {
  const [errors, setErrors] = useState([])
  const handleOrderTypeChange = (event) => {
    setFormData({
      ...formData,
      orderType: event.target.value
    });
  };
  const handlePaymentChange = (event) => {
    setFormData({
      ...formData,
      payment: event.target.value
    });
  };
  const handlePayment = () => {
    if (formData.waitingTime === '') {
      setErrors([...errors, 'waitingTime'])
      console.log(errors);
      return;
    } else {
      setErrors([])
      alert('Redirect to payment gateway')
      setShowPage(3)
    }
  }
  if (showPage === 2) {
    return (
      <>
        <p className=''>Add Customer Details</p>
        <div className='font-[400] text-[20px] mt-[15px]'>
          <p>Customer Name: {formData?.name}</p>
          <p>Address: {formData?.address}</p>
          <p>PostCode: {formData?.postcode}</p>
          <p>Phone: {formData?.phone}</p>
        </div>
        <div className='mt-[30px]'>
          <p className=''>Waiting Time</p>
          <div className='flex flex-wrap mt-[10px] gap-3'>
            <div className='h-[157px] w-[156px] rounded-[10px] bg-second text-white flex flex-col justify-center items-center gap-3 cursor-pointer'
              onClick={() => { setFormData({ ...formData, waitingTime: '5 minutes' }) }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-14 h-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p>5 minutes</p>
            </div>
            <div className='h-[157px] w-[156px] rounded-[10px] bg-third text-white flex flex-col justify-center items-center gap-3 cursor-pointer'
              onClick={() => { setFormData({ ...formData, waitingTime: '10 minutes' }) }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-14 h-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p>10 minutes</p>
            </div>
            <div className='h-[157px] w-[156px] rounded-[10px] bg-primary text-white flex flex-col justify-center items-center gap-3 cursor-pointer'
              onClick={() => { setFormData({ ...formData, waitingTime: '15 minutes' }) }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-14 h-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p>15 minutes</p>
            </div>
            <div className='h-[157px] w-[156px] rounded-[10px] bg-second text-white flex flex-col justify-center items-center gap-3 cursor-pointer'
              onClick={() => { setFormData({ ...formData, waitingTime: '20 minutes' }) }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-14 h-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p>20 minutes</p>
            </div>
          </div>
          <p className='mt-3'>Choosen Waiting Time: {formData.waitingTime ? formData?.waitingTime : "Not selected"}</p>
          {errors.includes('waitingTime') && <p className='text-[red] text-[14px]'>Please choose waiting time</p>}
        </div>
        <div className='mt-[30px]'>
          <p className=''>Order Type</p>
          <div className="flex gap-10 mt-3">
            <Radio name="type" label="Takeaway" value="Takeaway" onChange={handleOrderTypeChange} defaultChecked />
            <Radio name="type" label="Table Service" value="Table Service" onChange={handleOrderTypeChange} />
            <Radio name="type" label="Self Service" value="Self Service" onChange={handleOrderTypeChange} />
            <Radio name="type" label="Delivery" value="Delivery" onChange={handleOrderTypeChange} />
          </div>
        </div>
        <div className='mt-[30px]'>
          <p className=''>Payment Method</p>
          <div className="flex gap-10 mt-3">
            <Radio name="payment" label="Cash" value="Cash" onChange={handlePaymentChange} defaultChecked />
            <Radio name="payment" label="Card" value="Card" onChange={handlePaymentChange} />
          </div>
        </div>
        <p className='font-[400] text-right text-[30px] my-[15px]'>Grand Total: <span className='font-[700]'>$145</span></p>
        <div className='w-full flex justify-between mt-[15px]'>
          <Button className='bg-second capitalize font-raleway' onClick={() => setShowPage(1)}>Back</Button>
          <Button className='bg-primary capitalize font-raleway' onClick={handlePayment}>Make Payment</Button>
        </div>
      </>
    )
  } else if (showPage === 3) {
    setShowDrawer('invoice')
    return (
      <div className='text-center flex flex-col items-center gap-5'>
        <p className='font-sora font-[400] text-[30px] leading-[37px]'>Payment Done</p>
        <p className='font-sora font-[700] text-[42px] leading-[60px]'>Successfully</p>
        <Image src={`/images/payment_done.jpg`} height={300} width={250} alt='payment done' className='' />
        <p className='font-[400] text-[30px] my-[15px]'>Grand Total: <span className='font-[700]'>$145</span></p>
        <Button className='py-[25px]  bg-second w-[185px]'>Continue</Button>
      </div>
    )
  } else {
    return (
      <CustomerForm formData={formData} setFormData={setFormData} setShowPage={setShowPage} />
    )
  }
}

export default function CustomerDetails({ setShowFilter, setShowDrawer, setShowIconDrawer, showIconDrawer }) {
  const [formData, setFormData] = useState({
    name: 'Test',
    phone: '9876543210',
    email: 'Test@gmail.com',
    postcode: 'Test',
    address: 'Test',
    waitingTime: '',
    orderType: 'Takeaway',
    payment: 'Card'
  })

  const [showPage, setShowPage] = useState(1)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [showPage])
  // console.log(formData);
  return (
    <div className='overflow-hidden h-[100vh] w-full overflow-y-scroll flex'>
      <div className={`w-[100%]`}>
        <div className='flex justify-between py-[15px] px-[20px] lg:px-[50px]  bg-base w-full z-[200] md:h-[15vh] sticky top-0'>
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
            <svg
              xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="none" viewBox="0 0 55 55"
            >
              <path fill="#CEE1F2" d="M18.37 33.516V20.303c0-2.123-.313-4.205-.902-6.19-5.262-.838-8.283-4.445-8.283-4.445l-.103-.11a21.734 21.734 0 012.842 10.745v13.213c0 5.933 4.81 10.742 10.742 10.742h6.445c-5.932 0-10.742-4.81-10.742-10.742z"
              ></path>
              <path fill="#1428BF" d="M39.315 46.406H22.666c-7.108 0-12.89-5.782-12.89-12.89V20.303a19.545 19.545 0 00-8.81-16.36A2.148 2.148 0 113.331.354a23.879 23.879 0 017.53 7.968c.396.442 3.579 3.816 8.797 3.816h24.74a10.52 10.52 0 018.347 4.075 10.52 10.52 0 011.921 9.088l-2.847 11.35a12.874 12.874 0 01-12.504 9.754zM13.53 15.222c.357 1.65.542 3.352.542 5.08v13.214c0 4.738 3.855 8.593 8.594 8.593h16.65a8.583 8.583 0 008.335-6.502l2.848-11.351a6.25 6.25 0 00-1.142-5.4 6.25 6.25 0 00-4.959-2.42h-24.74c-2.36 0-4.414-.51-6.128-1.214zm8.062 37.093a2.686 2.686 0 10-5.371 0 2.686 2.686 0 005.371 0zm21.377 0a2.686 2.686 0 10-5.371 0 2.686 2.686 0 005.37 0z"
              ></path>
              <path fill="#DE5CEE" d="M44.398 25.03h-23.88a2.148 2.148 0 110-4.297h23.88a2.148 2.148 0 110 4.296z"
              ></path>
            </svg>
            <p className='font-sora font-[600] text-[14px] leading-[17px]'>Checkout</p>
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
          <div className='bg-white rounded-[20px] p-[40px] font-[700] text-[20px] leading-[23px]'>
            <RenderPage formData={formData} setFormData={setFormData} setShowPage={setShowPage} showPage={showPage} setShowDrawer={setShowDrawer} />
          </div >
        </div >
      </div>
    </div>
  )
}

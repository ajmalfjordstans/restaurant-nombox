'use client'
import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'

export default function CompanyInfo({ setShowIconDrawer, showIconDrawer }) {
  const [companyInfo, setCompanyInfo] = useState({
    branchCode: '',
    branchName: '',
    addressLine1: '',
    addressLine2: '',
    town: '',
    country: '',
    pincode: '',
    vatNumber: '',
    phoneNumber: '',
    fax: '',
    email: '',
    refundDays: '',
    headOffice: false,
    noOfTabs: '',
    closingHours: '',
    corporateInformation: '',
    receiptText: '',
    bankAccountDetails: '',
    vatPercentage: [
      { title: '', percentage: '' },
    ],
    nonUKCurrency: false
  })
  return (
    <div className='px-[20px] lg:px-[50px] h-[100vh] w-full overflow-y-scroll'>
      <div className={`flex gap-2 items-center fixed top-0 py-[15px] bg-base w-full ${showIconDrawer ? "translate-x-[100px]" : ""} lg:translate-x-[0px] transition-all duration-300`}>
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
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="none"
          viewBox="0 0 48 48"
        >
          <g clipPath="url(#clip0_333_454)">
            <path
              fill="#CEE1F2"
              d="M7.594 36.75v-25.5a9.375 9.375 0 019.375-9.375H11.25a9.375 9.375 0 00-9.375 9.375v25.5a9.375 9.375 0 009.375 9.375h5.719a9.375 9.375 0 01-9.375-9.375z"
            ></path>
            <path
              fill="#4E2DD8"
              d="M36.75 48h-25.5C5.047 48 0 42.953 0 36.75v-25.5C0 5.047 5.047 0 11.25 0h25.5C42.953 0 48 5.047 48 11.25v25.5C48 42.953 42.953 48 36.75 48zM11.25 3.75c-4.136 0-7.5 3.364-7.5 7.5v25.5c0 4.136 3.364 7.5 7.5 7.5h25.5c4.136 0 7.5-3.364 7.5-7.5v-25.5c0-4.136-3.364-7.5-7.5-7.5h-25.5zm8.531 5.719c0-1.036-.84-1.875-1.875-1.875h-7.875a1.875 1.875 0 000 3.75h7.875c1.036 0 1.875-.84 1.875-1.875zm17.157 21.843c0-1.035-.84-1.875-1.876-1.875H19.407a1.875 1.875 0 100 3.75h15.657c1.035 0 1.874-.839 1.874-1.874zm2.53 7.313c0-1.036-.839-1.875-1.874-1.875h-4.125a1.875 1.875 0 100 3.75h4.125c1.035 0 1.875-.84 1.875-1.875z"
            ></path>
            <path
              fill="#FF4BAC"
              d="M37.875 25.875H24.656a1.875 1.875 0 110-3.75h13.219a1.875 1.875 0 110 3.75zm-4.688-9.094c0-1.035-.839-1.875-1.874-1.875H13.78a1.875 1.875 0 000 3.75h17.532c1.035 0 1.875-.84 1.875-1.875z"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_333_454">
              <path fill="#fff" d="M0 0H48V48H0z"></path>
            </clipPath>
          </defs>
        </svg>
        <p className='font-sora font-[600] text-[14px] leading-[17px]'>Company info</p>
      </div>
      <div className='bg-primary rounded-[20px] mt-[95px] mb-[30px] w-full  text-white p-[30px] font-raleway font-[700] text-[14px] leading-[16px] grid lg:grid-cols-2 gap-5'>
        <div className='flex flex-col gap-5'>
          {/* Branch Code */}
          <div className='flex items-center'>
            <p className='w-[25%]'>Branch Code</p>
            <input type="text" htmlFor="branch code" className="px-3 border rounded-md border-none outline-none w-full h-[40px] text-primary"
              onChange={(e) => {
                setCompanyInfo({
                  ...companyInfo,
                  branchCode: e.target.value
                })
              }}
            />
          </div>
          {/* Branch Name */}
          <div className='flex items-center'>
            <p className='w-[25%]'>Branch Name</p>
            <input type="text" htmlFor="branch name" className="px-3 border rounded-md border-none outline-none w-full h-[40px] text-primary"
              onChange={(e) => {
                setCompanyInfo({
                  ...companyInfo,
                  branchName: e.target.value
                })
              }}
            />
          </div>
          {/* Address Line 1 */}
          <div className='flex items-center'>
            <p className='w-[25%]'>Address Line 1</p>
            <input type="text" htmlFor="addressLine1" className="px-3 border rounded-md border-none outline-none w-full h-[40px] text-primary"
              onChange={(e) => {
                setCompanyInfo({
                  ...companyInfo,
                  addressLine1: e.target.value
                })
              }}
            />
          </div>
          {/* Address Line 2 */}
          <div className='flex items-center'>
            <p className='w-[25%]'>Address Line 2</p>
            <input type="text" htmlFor="addressLine2" className="px-3 border rounded-md border-none outline-none w-full h-[40px] text-primary"
              onChange={(e) => {
                setCompanyInfo({
                  ...companyInfo,
                  addressLine2: e.target.value
                })
              }}
            />
          </div>
          {/* Town */}
          <div className='flex items-center'>
            <p className='w-[25%]'>Town</p>
            <input type="text" htmlFor="town" className="px-3 border rounded-md border-none outline-none w-full h-[40px] text-primary"
              onChange={(e) => {
                setCompanyInfo({
                  ...companyInfo,
                  town: e.target.value
                })
              }}
            />
          </div>
          {/* Country */}
          <div className='flex items-center'>
            <p className='w-[25%]'>Country</p>
            <input type="text" htmlFor="country" className="px-3 border rounded-md border-none outline-none w-full h-[40px] text-primary"
              onChange={(e) => {
                setCompanyInfo({
                  ...companyInfo,
                  country: e.target.value
                })
              }}
            />
          </div>
          {/* PinCode */}
          <div className='flex items-center'>
            <p className='w-[25%]'>PinCode</p>
            <input type="text" htmlFor="pinCode" className="px-3 border rounded-md border-none outline-none w-full h-[40px] text-primary"
              onChange={(e) => {
                setCompanyInfo({
                  ...companyInfo,
                  pinCode: e.target.value
                })
              }}
            />
          </div>
          {/* Vat Number */}
          <div className='flex items-center'>
            <p className='w-[25%]'>Vat Number</p>
            <input type="text" htmlFor="vatNumber" className="px-3 border rounded-md border-none outline-none w-full h-[40px] text-primary"
              onChange={(e) => {
                setCompanyInfo({
                  ...companyInfo,
                  vatNumber: e.target.value
                })
              }}
            />
          </div>
          {/* Phone Number */}
          <div className='flex items-center'>
            <p className='w-[25%]'>Phone Number</p>
            <input type="text" htmlFor="phoneNumber" className="px-3 border rounded-md border-none outline-none w-full h-[40px] text-primary"
              onChange={(e) => {
                setCompanyInfo({
                  ...companyInfo,
                  phoneNumber: e.target.value
                })
              }}
            />
          </div>
          {/* Fax */}
          <div className='flex items-center'>
            <p className='w-[25%]'>Fax</p>
            <input type="text" htmlFor="fax" className="px-3 border rounded-md border-none outline-none w-full h-[40px] text-primary"
              onChange={(e) => {
                setCompanyInfo({
                  ...companyInfo,
                  fax: e.target.value
                })
              }}
            />
          </div>
          {/* Email */}
          <div className='flex items-center'>
            <p className='w-[25%]'>Email</p>
            <input type="text" htmlFor="email" className="px-3 border rounded-md border-none outline-none w-full h-[40px] text-primary"
              onChange={(e) => {
                setCompanyInfo({
                  ...companyInfo,
                  email: e.target.value
                })
              }}
            />
          </div>
          {/* Refund Days */}
          <div className='flex items-center'>
            <p className='w-[25%]'>Refund Days</p>
            <input type="text" htmlFor="refundDays" className="px-3 border rounded-md border-none outline-none w-full h-[40px] text-primary"
              onChange={(e) => {
                setCompanyInfo({
                  ...companyInfo,
                  refundDays: e.target.value
                })
              }}
            />
          </div>
          {/* Head Office */}
          <div className='flex items-center'>
            <p className='w-[25%]'>Head Office</p>
            <input type="radio" htmlFor="headOffice" className=" text-primary"
              onChange={(e) => {
                setCompanyInfo({
                  ...companyInfo,
                  headOffice: e.target.value
                })
              }}
            />
          </div>
          {/* No Of Tabs */}
          <div className='flex items-center'>
            <p className='w-[25%]'>No Of Tabs</p>
            <input type="text" htmlFor="noOfTabs" className="px-3 border rounded-md border-none outline-none w-full h-[40px] text-primary"
              onChange={(e) => {
                setCompanyInfo({
                  ...companyInfo,
                  noOfTabs: e.target.value
                })
              }}
            />
          </div>
          {/* Closing Hours */}
          <div className='flex items-center'>
            <p className='w-[25%]'>Closing Hours</p>
            <input type="text" htmlFor="closingHours" className="px-3 border rounded-md border-none outline-none w-full h-[40px] text-primary"
              onChange={(e) => {
                setCompanyInfo({
                  ...companyInfo,
                  closingHours: e.target.value
                })
              }}
            />
          </div>

        </div>
        <div className='flex flex-col gap-3'>
          {/* Corporate information */}
          <div className='flex flex-col gap-3'>
            <p className=''>Corporate information</p>
            <textarea type="text" htmlFor="corporateInformation" className="p-3 border rounded-md border-none outline-none w-full h-[140px] text-primary"
              onChange={(e) => {
                setCompanyInfo({
                  ...companyInfo,
                  corporateInformation: e.target.value
                })
              }}
            />
          </div>
          {/* Receipt Text */}
          <div className='flex flex-col gap-3'>
            <p className=''>Receipt Text</p>
            <textarea type="text" htmlFor="receiptText" className="p-3 border rounded-md border-none outline-none w-full h-[140px] text-primary"
              onChange={(e) => {
                setCompanyInfo({
                  ...companyInfo,
                  receiptText: e.target.value
                })
              }}
            />
          </div>
          {/* Bank Account Details */}
          <div className='flex flex-col gap-3'>
            <p className=''>Bank Account Details</p>
            <textarea type="text" htmlFor="bankAccountDetails" className="p-3 border rounded-md border-none outline-none w-full h-[140px] text-primary"
              onChange={(e) => {
                setCompanyInfo({
                  ...companyInfo,
                  bankAccountDetails: e.target.value
                })
              }}
            />
          </div>
          {/* Vat Percentage */}
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-3'>
              <p className=''>Vat Percentage</p>
              <div className='grid grid-cols-2 gap-3'>
                <input type="text" htmlFor="title" placeholder='title' className="px-3 border rounded-md border-none outline-none w-full h-[40px] text-primary"
                  onChange={(e) => {
                    setCompanyInfo({
                      ...companyInfo,
                      vatPercentage: e.target.value
                    })
                  }}
                />
                <input type="text" htmlFor="percentage" placeholder='%' className="px-3 border rounded-md border-none outline-none w-full h-[40px] text-primary"
                  onChange={(e) => {
                    setCompanyInfo({
                      ...companyInfo,
                      vatPercentage: e.target.value
                    })
                  }}
                />
              </div>
            </div>
            <div className='flex gap-3 justify-end'>
              <Button className='bg-second'>Add More</Button>
              <Button className='bg-third'>Delete</Button>
            </div>
          </div>
          {/* Company Logo */}
          <div className='flex flex-col gap-3'>
            <p className='w-[25%]'>Company Logo</p>
            <div className='flex'>
              <input type="text" htmlFor="branch code" className="px-3 border rounded-md border-none outline-none w-full h-[40px] text-primary"
                onChange={(e) => {
                  setCompanyInfo({
                    ...companyInfo,
                    branchCode: e.target.value
                  })
                }}
              />
              <Button className='bg-primary w-[200px]'>Browse Logo</Button>
            </div>
          </div>
          {/* Non UK Currency */}
          <div className='flex gap-3'>
            <p className=''>Non UK Currency</p>
            <input type="radio" htmlFor="nonUKCurrency" className=" text-primary"
              onChange={(e) => {
                setCompanyInfo({
                  ...companyInfo,
                  nonUKCurrency: e.target.value
                })
              }}
            />
          </div>
          <div className='flex justify-end'>
            <Button className='bg-third py-[20px] px-[70px]'>Save</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

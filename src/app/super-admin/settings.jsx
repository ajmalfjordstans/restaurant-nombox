'use client'
import React from 'react'
import { Card } from "@material-tailwind/react";

export default function Settings() {
  const TABLE_HEAD = ["", "All", "Report Stat", "Online Banking", 'Billing  System', 'Customer Feedback', "Customer Data"];
  const TABLE_ROWS = [
    {
      name: "Restaurant 1",
      all: '',
      reportStat: '',
      onlineBanking: '',
      billingSystem: '',
      customerFeedback: '',
      customerData: '',
    },
    {
      name: "Restaurant 2",
      all: '',
      reportStat: '',
      onlineBanking: '',
      billingSystem: '',
      customerFeedback: '',
      customerData: '',
    },
    {
      name: "Restaurant 3",
      all: '',
      reportStat: '',
      onlineBanking: '',
      billingSystem: '',
      customerFeedback: '',
      customerData: '',
    },
    {
      name: "Restaurant 4",
      all: '',
      reportStat: '',
      onlineBanking: '',
      billingSystem: '',
      customerFeedback: '',
      customerData: '',
    },
    {
      name: "Restaurant 5",
      all: '',
      reportStat: '',
      onlineBanking: '',
      billingSystem: '',
      customerFeedback: '',
      customerData: '',
    },
    {
      name: "Restaurant 6",
      all: '',
      reportStat: '',
      onlineBanking: '',
      billingSystem: '',
      customerFeedback: '',
      customerData: '',
    },
    {
      name: "Restaurant 7",
      all: '',
      reportStat: '',
      onlineBanking: '',
      billingSystem: '',
      customerFeedback: '',
      customerData: '',
    },
    {
      name: "Restaurant 8",
      all: '',
      reportStat: '',
      onlineBanking: '',
      billingSystem: '',
      customerFeedback: '',
      customerData: '',
    },
    {
      name: "Restaurant 9",
      all: '',
      reportStat: '',
      onlineBanking: '',
      billingSystem: '',
      customerFeedback: '',
      customerData: '',
    },
    {
      name: "Restaurant 10",
      all: '',
      reportStat: '',
      onlineBanking: '',
      billingSystem: '',
      customerFeedback: '',
      customerData: '',
    },
    {
      name: "Restaurant 11",
      all: '',
      reportStat: '',
      onlineBanking: '',
      billingSystem: '',
      customerFeedback: '',
      customerData: '',
    },
    {
      name: "Restaurant 12",
      all: '',
      reportStat: '',
      onlineBanking: '',
      billingSystem: '',
      customerFeedback: '',
      customerData: '',
    },
    {
      name: "Restaurant 13",
      all: '',
      reportStat: '',
      onlineBanking: '',
      billingSystem: '',
      customerFeedback: '',
      customerData: '',
    },
    {
      name: "Restaurant 14",
      all: '',
      reportStat: '',
      onlineBanking: '',
      billingSystem: '',
      customerFeedback: '',
      customerData: '',
    },
    {
      name: "Restaurant 15",
      all: '',
      reportStat: '',
      onlineBanking: '',
      billingSystem: '',
      customerFeedback: '',
      customerData: '',
    },
    {
      name: "Restaurant 16",
      all: '',
      reportStat: '',
      onlineBanking: '',
      billingSystem: '',
      customerFeedback: '',
      customerData: '',
    },
    {
      name: "Restaurant 17",
      all: '',
      reportStat: '',
      onlineBanking: '',
      billingSystem: '',
      customerFeedback: '',
      customerData: '',
    },
  ];
  return (
    <div className=' h-[100vh] w-full overflow-y-scroll'>
      <div className='flex flex-col gap-3 fixed top-0 py-[15px] px-[50px] bg-base w-full z-[200]'>
        <div className='flex items-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48"          >
            <g clipPath="url(#clip0_333_511)">
              <path fill="#CEE1F2" d="M27.75 42.375v-.085c0-.114.008-.228.019-.34a5.62 5.62 0 00-2.026-1.175 9.072 9.072 0 00-1.46-3.59 9.098 9.098 0 00-4.198-3.342 10.561 10.561 0 01-2.783-1.621 9.13 9.13 0 00-4.481-1.95 9.01 9.01 0 00.641-4.81 10.76 10.76 0 01.01-3.033 9.014 9.014 0 00-.611-4.816 9.177 9.177 0 004.5-1.93 10.566 10.566 0 012.72-1.571 9.113 9.113 0 004.195-3.335 9.065 9.065 0 001.458-3.55 5.62 5.62 0 002.04-1.181 3.472 3.472 0 01-.024-.383v-.038a3.75 3.75 0 00-7.5 0c0 1.44-.887 2.725-2.227 3.252a16.204 16.204 0 00-4.167 2.407 3.508 3.508 0 01-3.92.325l-.108-.06a3.766 3.766 0 00-5.122 1.415 3.736 3.736 0 001.421 5.101l.03.017c1.25.71 1.957 2.11 1.749 3.532a16.303 16.303 0 00-.014 4.628 3.471 3.471 0 01-1.736 3.489l-.029.016a3.736 3.736 0 00-1.42 5.102 3.766 3.766 0 005.12 1.415l.006-.003a3.502 3.502 0 013.933.336 16.2 16.2 0 004.263 2.482 3.493 3.493 0 012.221 3.25v.046a3.75 3.75 0 007.5 0z"
              ></path>
              <path fill="#4E2DD8" d="M24 48a5.631 5.631 0 01-5.625-5.625v-.047a1.61 1.61 0 00-1.032-1.504 18.05 18.05 0 01-4.755-2.77 1.621 1.621 0 00-1.83-.162l-.01.006c-2.701 1.522-6.143.57-7.672-2.123a5.57 5.57 0 01-.528-4.268 5.584 5.584 0 012.659-3.393l.023-.014c.57-.323.893-.966.805-1.599a18.281 18.281 0 01.015-5.158c.095-.644-.235-1.299-.819-1.63l-.03-.018a5.58 5.58 0 01-2.653-3.39 5.57 5.57 0 01.528-4.267c1.529-2.693 4.97-3.645 7.672-2.123l.113.064a1.63 1.63 0 001.827-.161 18.057 18.057 0 014.648-2.686 1.616 1.616 0 001.039-1.507A5.631 5.631 0 0124 0a5.631 5.631 0 015.625 5.625v.038c0 .663.404 1.254 1.03 1.504a18.063 18.063 0 014.598 2.679 1.629 1.629 0 001.829.165l.164-.093c2.707-1.525 6.149-.573 7.678 2.12a5.569 5.569 0 01.528 4.267 5.583 5.583 0 01-2.659 3.394l-.128.073c-.573.325-.896.967-.805 1.598a18.268 18.268 0 01.019 5.082 1.61 1.61 0 00.804 1.6l.113.063a5.584 5.584 0 012.656 3.392 5.57 5.57 0 01-.528 4.268c-1.529 2.693-4.97 3.645-7.672 2.123l-.065-.037a1.628 1.628 0 00-1.84.17 18.057 18.057 0 01-4.698 2.758 1.61 1.61 0 00-1.024 1.501v.085A5.631 5.631 0 0124 48zM11.553 33.928c1.204 0 2.4.409 3.392 1.21a14.31 14.31 0 003.769 2.195 5.338 5.338 0 013.41 4.995v.047c0 1.034.842 1.875 1.876 1.875a1.877 1.877 0 001.875-1.875v-.085a5.342 5.342 0 013.385-4.984 14.317 14.317 0 003.724-2.186c1.743-1.415 4.12-1.62 6.054-.52l.06.033a1.89 1.89 0 002.565-.71 1.858 1.858 0 00-.716-2.545l-.116-.066a5.32 5.32 0 01-2.668-5.369 14.565 14.565 0 00-.015-4.036c-.31-2.146.76-4.314 2.665-5.396l.134-.076a1.862 1.862 0 00.716-2.545 1.892 1.892 0 00-2.57-.708l-.16.09c-1.919 1.09-4.283.894-6.024-.499a14.316 14.316 0 00-3.643-2.123 5.349 5.349 0 01-3.391-4.987v-.038A1.877 1.877 0 0024 3.75a1.877 1.877 0 00-1.875 1.875 5.345 5.345 0 01-3.416 4.997 14.313 14.313 0 00-3.685 2.129c-1.738 1.385-4.099 1.577-6.015.489l-.107-.061a1.89 1.89 0 00-2.565.71 1.859 1.859 0 00.71 2.542l.037.021C9 17.541 10.077 19.725 9.76 21.886a14.495 14.495 0 00-.012 4.096 5.315 5.315 0 01-2.667 5.38l-.029.016a1.863 1.863 0 00-.716 2.545 1.892 1.892 0 002.57.708 5.349 5.349 0 012.646-.703z"
              ></path>
              <path fill="#FF4BAC" d="M24 33.844c-5.428 0-9.844-4.416-9.844-9.844 0-5.428 4.416-9.844 9.844-9.844 5.428 0 9.844 4.416 9.844 9.844 0 5.428-4.416 9.844-9.844 9.844zm0-15.938A6.1 6.1 0 0017.906 24 6.1 6.1 0 0024 30.094 6.1 6.1 0 0030.094 24 6.1 6.1 0 0024 17.906z"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_333_511">
                <path fill="#fff" d="M0 0H48V48H0z"></path>
              </clipPath>
            </defs>
          </svg>
          <p className='font-sora font-[600] text-[14px] leading-[17px]'>Settings</p>
        </div>
        <p className='font-[400] font-raleway text-[30px] leading-[35px] mt-[20px]'>Customer Permission Settings</p>
      </div>
      <div className='mt-[150px] px-[50px] pb-[30px] overflow-y-scroll'>
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
              {TABLE_ROWS.map(({ name, all, reportStat, onlineBanking, billingSystem, customerFeedback, customerData }, index) => (
                <tr key={name} className="even:bg-blue-gray-50/50">
                  <td className="p-4 border-[1px] border-[#DDDDDD]">
                    <>
                      <p className="">
                        {name}
                      </p>
                    </>
                  </td>
                  <td className="p-4 border-[1px] border-[#DDDDDD]">
                    <>
                      <input type="radio" />
                    </>
                  </td>
                  <td className="p-4 border-[1px] border-[#DDDDDD]">
                    <>
                      <input type="radio" />

                    </>
                  </td>
                  <td className="p-4 border-[1px] border-[#DDDDDD]">
                    <>
                      <input type="radio" />

                    </>
                  </td>
                  <td className="p-4 border-[1px] border-[#DDDDDD]">
                    <>
                      <input type="radio" />

                    </>
                  </td>
                  <td className="p-4 border-[1px] border-[#DDDDDD]">
                    <>
                      <input type="radio" />

                    </>
                  </td>
                  <td className="p-4 border-[1px] border-[#DDDDDD]">
                    <>
                      <input type="radio" />

                    </>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  )
}

import { Button } from '@material-tailwind/react'
import React from 'react'

export default function ReportIssue() {
  return (
    <div className='overflow-hidden h-[100vh] w-full overflow-y-scroll flex'>
      <div className={`w-[100%]`}>
        <div className='flex justify-between py-[15px] px-[50px]  bg-base w-full z-[200] h-[15vh] sticky top-0'>
          <div className='flex items-center gap-5 '>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48"            >
              <g clipPath="url(#clip0_200_183)">
                <path
                  fill="#CEE1F2"
                  d="M1.875 11.271v.004a4.943 4.943 0 004.943 4.944h5.625A4.943 4.943 0 017.5 11.275v-.004a4.943 4.943 0 013.61-4.76l.015-1.58-5.64 1.58a4.943 4.943 0 00-3.61 4.76z"
                ></path>
                <path
                  fill="#4E2DD8"
                  d="M43.014 4.709L28.245.587a15.934 15.934 0 00-8.585.005L4.978 4.706A6.843 6.843 0 000 11.276a6.826 6.826 0 006.818 6.818h34.364A6.826 6.826 0 0048 11.276a6.84 6.84 0 00-4.986-6.567zm-1.832 9.635H6.818a3.073 3.073 0 01-3.068-3.072c0-1.37.921-2.585 2.24-2.955l14.682-4.115a12.19 12.19 0 016.565-.003l14.77 4.122a3.078 3.078 0 012.243 2.955 3.072 3.072 0 01-3.068 3.068zM27.75 40.5a1.875 1.875 0 01-1.875-1.875V23.532a1.875 1.875 0 113.75 0v15.093c0 1.036-.84 1.875-1.875 1.875zm-7.594 0a1.875 1.875 0 01-1.875-1.875V23.532a1.875 1.875 0 113.75 0v15.093c0 1.036-.84 1.875-1.875 1.875zm-15 .094a1.875 1.875 0 01-1.875-1.875V23.532a1.875 1.875 0 113.75 0v15.187c0 1.036-.84 1.875-1.875 1.875zm7.594-.094a1.875 1.875 0 01-1.875-1.875V23.532a1.875 1.875 0 113.75 0v15.093c0 1.036-.84 1.875-1.875 1.875zm19.312 5.625c0 1.036-.839 1.875-1.875 1.875H1.875a1.875 1.875 0 010-3.75h28.312c1.036 0 1.875.84 1.875 1.875z"
                ></path>
                <path
                  fill="#FF4BAC"
                  d="M48 38.585c0 1.632-.662 3.169-1.864 4.327a6.246 6.246 0 01-3.011 1.616v1.597a1.875 1.875 0 11-3.75 0v-1.732a23.466 23.466 0 01-4.161-1.213 1.875 1.875 0 011.385-3.485c2.126.845 4.321 1.225 5.201 1.225 1.328 0 2.45-1.069 2.45-2.335 0-1.287-1.32-2.334-2.941-2.334-1.94 0-3.634-.582-4.901-1.682a5.726 5.726 0 01-2.002-4.381c0-3.124 2.163-5.63 5.063-6.046v-1.83a1.875 1.875 0 113.75 0v2.052c.94.186 2.037.49 3.304.982a1.875 1.875 0 11-1.359 3.495c-2.304-.896-3.795-1.01-4.837-1.01-1.238 0-2.17 1.013-2.17 2.357 0 1.383 1.266 2.313 3.152 2.313C45 32.5 48 35.23 48 38.585zM24 6.938a2.344 2.344 0 100 4.687 2.344 2.344 0 000-4.687z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_200_183">
                  <path fill="#fff" d="M0 0H48V48H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <p className='font-sora font-[600] text-[14px] leading-[17px]'>Online Banking</p>
          </div>
        </div>

        {/* Main Content */}
        <div className={`mt-[20px] px-[50px] pb-[60px] flex flex-col gap-[30px] text-white`}>
          <div className='bg-primary rounded-[20px] py-[5%] px-[15%] font-[700] text-[18px] leading-[22px] flex flex-col gap-8'>
            <div className='flex gap-5 items-start'>
              <p className='w-[150px]'>Report Issue</p>
              <textarea type="text" className='bg-base rounded-[10px] p-[15px] text-black outline-none w-full min-h-[130px]' />
            </div>
            <div className='flex justify-end'>
              <Button className='bg-third'>Save</Button>
            </div>
          </div>
        </div >
      </div>
    </div>
  )
}

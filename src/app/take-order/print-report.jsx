import Link from 'next/link'
import React from 'react'

export default function PrintReport({ setShowFilter, setShowIconDrawer, showIconDrawer }) {
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
            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" fill="none" viewBox="0 0 51 51"            >
              <g clipPath="url(#clip0_324_4)">
                <path fill="#1428BF" d="M31.076 51H20.122c-6.588 0-11.949-5.36-11.949-11.95v-5.393c0-4.393 3.574-7.966 7.966-7.966h18.92c4.392 0 7.966 3.573 7.966 7.966v5.394c0 6.589-5.36 11.949-11.95 11.949zM16.139 29.674a3.988 3.988 0 00-3.983 3.983v5.394c0 4.392 3.574 7.966 7.966 7.966h10.954c4.392 0 7.966-3.574 7.966-7.966v-5.394a3.988 3.988 0 00-3.983-3.983h-18.92zm26.886-17.725C43.025 5.36 37.665 0 31.075 0H20.123C13.534 0 8.173 5.36 8.173 11.95a1.991 1.991 0 103.983 0c0-4.393 3.574-7.967 7.966-7.967h10.954c4.392 0 7.966 3.574 7.966 7.966a1.991 1.991 0 103.983 0zm7.966 24.795v-7.07c0-6.589-5.36-11.95-11.95-11.95H11.958c-6.589 0-11.95 5.361-11.95 11.95v7.07a1.991 1.991 0 103.984 0v-7.07c0-4.393 3.573-7.966 7.966-7.966h27.085c4.392 0 7.966 3.573 7.966 7.966v7.07a1.991 1.991 0 103.983 0z"
                ></path>
                <path fill="#FF4BAC" d="M29.99 43.039c-1.47 0-2.97-.573-4.349-1.664l-.025-.02-3.028-2.477a2.98 2.98 0 00-3.84.13 1.992 1.992 0 11-2.663-2.96 6.954 6.954 0 018.985-.285l.025.02 3.029 2.477c1.44 1.134 2.568 1.054 3.772-.265a1.991 1.991 0 112.941 2.686c-1.713 1.876-3.48 2.316-4.662 2.355a5.97 5.97 0 01-.184.003z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_324_4">
                  <path fill="#fff" d="M0 0H51V51H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <p className='font-sora font-[600] text-[14px] leading-[17px]'>Print Report</p>
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
        <div className={`mt-[20px] px-[20px] lg:px-[50px] pb-[60px] flex flex-wrap gap-[30px]`}>
          <Link href="/take-order?section=items-report">
            <div className='h-[142px] w-[142px] flex flex-col justify-center items-center gap-3 bg-white rounded-[8px] hover:shadow-md cursor-pointer transition-all duration-300'>
              <svg xmlns="http://www.w3.org/2000/svg" width="53" height="49" fill="none" viewBox="0 0 53 49"            >
                <path stroke="#1428BF" strokeWidth="4"
                  d="M22.517 9.748C5.83 13.913 2.076 31.17 2.284 39.28H50C49.5 18.386 36.017 10.886 29.34 9.748 30.646 6.79 30.253 2 26.134 2c-5.31 0-4.451 5.151-3.617 7.748z"
                ></path>
                <path stroke="#FF4BAC" strokeWidth="2"
                  d="M7.793 30.57c.53-3.266 2.926-10.347 8.276-12.543"
                ></path>
                <path stroke="#FF4BAC" strokeWidth="5" d="M2 45.65h48"></path>
              </svg>
              <p className='font-sora font-[600] text-[14px] leading-[17px]'>Items Report</p>
            </div>
          </Link>
          <div className='h-[142px] w-[142px] flex flex-col justify-center items-center gap-3 bg-white rounded-[8px] hover:shadow-md cursor-pointer transition-all duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="48" fill="none" viewBox="0 0 41 48"            >
              <path fill="#CEE1F2"
                d="M34.492 15.466c-.861.218-1.802.339-2.789.339-4.108 0-7.438-2.081-7.438-4.649 0-2.567 3.33-4.648 7.438-4.648.987 0 1.928.12 2.79.339-2.726.69-4.65 2.359-4.65 4.31 0 1.95 1.924 3.619 4.65 4.309zM7.531 26.218c0-1.951 1.923-3.62 4.648-4.31a11.401 11.401 0 00-2.789-.339c-4.107 0-7.437 2.081-7.437 4.649 0 2.567 3.33 4.648 7.437 4.648.987 0 1.928-.121 2.79-.34-2.726-.689-4.65-2.358-4.65-4.308z"
              ></path>
              <path fill="#1428BF"
                d="M31.703 17.664c-5.213 0-9.297-2.858-9.297-6.508 0-3.649 4.084-6.508 9.297-6.508 5.213 0 9.297 2.86 9.297 6.508 0 3.65-4.084 6.508-9.297 6.508zm0-9.297c-1.619 0-3.177.393-4.274 1.08-.829.517-1.304 1.14-1.304 1.71 0 .568.475 1.191 1.304 1.71 1.097.685 2.655 1.078 4.274 1.078 1.619 0 3.177-.393 4.274-1.078.829-.519 1.304-1.142 1.304-1.71 0-.57-.475-1.193-1.304-1.71-1.097-.687-2.655-1.08-4.274-1.08zm8.435 36.649a1.86 1.86 0 10-2.181-3.012c-3.44 2.492-9.254 2.492-12.694 0a1.86 1.86 0 00-2.181 3.012c2.301 1.667 5.33 2.585 8.528 2.585 3.198 0 6.227-.918 8.528-2.585zm0-7.438a1.86 1.86 0 10-2.181-3.012c-3.44 2.492-9.254 2.492-12.694 0a1.86 1.86 0 00-2.181 3.012c2.301 1.667 5.33 2.585 8.528 2.585 3.198 0 6.227-.918 8.528-2.585zm0-7.53a1.86 1.86 0 00-2.181-3.012c-3.44 2.492-9.254 2.492-12.694 0a1.86 1.86 0 00-2.181 3.012c2.301 1.666 5.33 2.584 8.528 2.584 3.198 0 6.227-.918 8.528-2.584zm0-7.53a1.86 1.86 0 00-2.181-3.013c-3.44 2.492-9.254 2.492-12.694 0a1.86 1.86 0 00-2.181 3.012c2.301 1.667 5.33 2.585 8.528 2.585 3.198 0 6.227-.918 8.528-2.585zM9.39 32.724c-5.213 0-9.297-2.858-9.297-6.508 0-3.649 4.084-6.507 9.297-6.507 5.213 0 9.297 2.858 9.297 6.508 0 3.649-4.084 6.507-9.297 6.507zm0-9.297c-1.619 0-3.177.394-4.274 1.08-.829.517-1.304 1.14-1.304 1.71 0 .568.475 1.192 1.304 1.71 1.098.685 2.655 1.079 4.274 1.079 1.62 0 3.177-.394 4.274-1.08.829-.517 1.304-1.14 1.304-1.71 0-.568-.475-1.192-1.304-1.71-1.097-.685-2.655-1.079-4.274-1.079zm8.436 21.588a1.86 1.86 0 10-2.182-3.012c-3.44 2.492-9.253 2.492-12.694 0A1.86 1.86 0 00.77 45.016C3.07 46.683 6.099 47.6 9.297 47.6c3.198 0 6.227-.918 8.529-2.585zm0-7.438a1.86 1.86 0 10-2.182-3.012c-3.44 2.492-9.253 2.492-12.694 0A1.86 1.86 0 00.77 37.578c2.301 1.667 5.33 2.585 8.528 2.585 3.198 0 6.227-.918 8.529-2.585z"
              ></path>
              <path fill="#FF5CF0"
                d="M3.254 8.553a1.86 1.86 0 01-1.328-3.16l3.669-3.746.011-.012A5.524 5.524 0 019.543 0c1.488 0 2.886.58 3.938 1.635l3.734 3.746a1.86 1.86 0 01-2.634 2.626L10.847 4.26a1.829 1.829 0 00-1.304-.542c-.49 0-.95.19-1.299.537L4.583 7.995a1.854 1.854 0 01-1.329.558zm7.996 6.508V9.204a1.86 1.86 0 10-3.72 0v5.857a1.86 1.86 0 103.72 0z"
              ></path>
            </svg>
            <p className='font-sora font-[600] text-[14px] leading-[17px]'>Sales Report</p>
          </div>
          <Link href="/super-admin?section=customer-info">
            <div className='h-[142px] w-[142px] flex flex-col justify-center items-center gap-3 bg-white rounded-[8px] hover:shadow-md cursor-pointer transition-all duration-300'>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48"            >
                <g clipPath="url(#clip0_325_43)">
                  <path fill="#CEE1F2"
                    d="M7.5 29.25v-18a9.375 9.375 0 019.375-9.375H11.25a9.375 9.375 0 00-9.375 9.375v18a9.375 9.375 0 009.375 9.375h5.625A9.375 9.375 0 017.5 29.25z"
                  ></path>
                  <path fill="#4E2DD8"
                    d="M36.75 40.5h-25.5C5.047 40.5 0 35.453 0 29.25v-18C0 5.047 5.047 0 11.25 0h18a1.875 1.875 0 110 3.75h-18c-4.136 0-7.5 3.364-7.5 7.5v18c0 4.135 3.364 7.5 7.5 7.5h25.5c4.135 0 7.5-3.365 7.5-7.5v-.75a1.875 1.875 0 013.75 0v.75c0 6.203-5.047 11.25-11.25 11.25zm6.959 5.983a11.313 11.313 0 004.027-3.985 1.875 1.875 0 10-3.222-1.918 7.543 7.543 0 01-6.45 3.67H9.937a7.543 7.543 0 01-6.45-3.67 1.875 1.875 0 00-3.222 1.918 11.313 11.313 0 004.028 3.985A11.248 11.248 0 009.937 48h28.127c1.985 0 3.937-.525 5.645-1.517zM25.875 31.125V9.375a1.875 1.875 0 10-3.75 0v21.75a1.875 1.875 0 103.75 0zm-7.5-18.094c0-1.035-.84-1.875-1.875-1.875H9.375a1.875 1.875 0 100 3.75H16.5c1.035 0 1.875-.84 1.875-1.875zm0 7.5c0-1.035-.84-1.875-1.875-1.875H9.375a1.875 1.875 0 000 3.75H16.5c1.035 0 1.875-.84 1.875-1.875zm22.125 7.5c0-1.035-.84-1.875-1.875-1.875H31.5a1.875 1.875 0 100 3.75h7.125c1.035 0 1.875-.84 1.875-1.875zm-22.125 0c0-1.035-.84-1.875-1.875-1.875H9.375a1.875 1.875 0 100 3.75H16.5c1.035 0 1.875-.84 1.875-1.875z"
                  ></path>
                  <path fill="#FF4BAC"
                    d="M39.656 11.25a5.631 5.631 0 01-5.625-5.625A5.631 5.631 0 0139.656 0a5.631 5.631 0 015.625 5.625 5.631 5.631 0 01-5.625 5.625zm0-7.5a1.877 1.877 0 00-1.875 1.875c0 1.034.841 1.875 1.875 1.875a1.877 1.877 0 001.875-1.875 1.877 1.877 0 00-1.875-1.875zM48 21c0-4.239-3.497-7.688-7.796-7.688h-1.096c-4.299 0-7.795 3.449-7.795 7.688a1.875 1.875 0 103.75 0c0-2.171 1.814-3.938 4.045-3.938h1.096c2.231 0 4.046 1.767 4.046 3.938A1.875 1.875 0 0048 21z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_325_43">
                    <path fill="#fff" d="M0 0H48V48H0z"></path>
                  </clipPath>
                </defs>
              </svg>
              <p className='font-sora font-[600] text-[14px] leading-[17px]'>Customer Report</p>
            </div>
          </Link>
          <div className='h-[142px] w-[142px] flex flex-col justify-center items-center gap-3 bg-white rounded-[8px] hover:shadow-md cursor-pointer transition-all duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48"            >
              <g clipPath="url(#clip0_327_1)">
                <path fill="#CEE1F2"
                  d="M16.654 5.985l-3.288-.466a3.24 3.24 0 00-3.645 2.65l-.573 3.273a3.242 3.242 0 01-1.673 2.304l-2.933 1.557a3.243 3.243 0 00-1.393 4.288l1.459 2.985c.439.898.439 1.949 0 2.847L3.149 28.41a3.243 3.243 0 001.393 4.287l2.933 1.558a3.242 3.242 0 011.673 2.303l.573 3.273a3.24 3.24 0 003.645 2.65l3.288-.465c.205-.03.41-.037.612-.027l.174-1.818a2.236 2.236 0 01-2.516-1.83l-1.176-5.672a2.238 2.238 0 00-1.155-1.59l-2.025-1.075a2.239 2.239 0 01-.96-2.96l1.006-2.06a2.24 2.24 0 000-1.966l-1.007-2.061a2.239 2.239 0 01.961-2.96l2.025-1.075a2.238 2.238 0 001.155-1.59l1.13-5.716a2.236 2.236 0 012.516-1.829l.221-1.81c-.314.05-.638.054-.96.009z"
                ></path>
                <path fill="#4E2DD8"
                  d="M24 48c-1.28 0-2.56-.483-3.556-1.448l-2.387-2.31a1.355 1.355 0 00-1.14-.371l-3.288.465a5.09 5.09 0 01-5.754-4.182l-.574-3.273a1.359 1.359 0 00-.705-.971l-2.933-1.558a5.097 5.097 0 01-2.198-6.766l1.459-2.985a1.36 1.36 0 000-1.202l-1.459-2.985a5.097 5.097 0 012.198-6.766l2.933-1.557c.375-.2.632-.554.705-.972l.574-3.273a5.094 5.094 0 015.754-4.182l3.288.465c.42.06.835-.076 1.14-.37l2.387-2.311a5.092 5.092 0 017.112 0l2.387 2.31c.305.295.72.43 1.14.371l3.288-.465a5.094 5.094 0 015.753 4.182l.574 3.273c.074.418.33.772.706.972l2.933 1.557a5.097 5.097 0 012.197 6.766l-1.458 2.985a1.36 1.36 0 000 1.202l1.459 2.985a5.097 5.097 0 01-2.198 6.766l-2.933 1.558a1.358 1.358 0 00-.706.971l-.574 3.273a5.094 5.094 0 01-5.753 4.182l-3.288-.465c-.42-.06-.835.076-1.14.37l-2.387 2.311A5.098 5.098 0 0124 48zm-6.88-7.892c1.317 0 2.58.506 3.544 1.44l2.387 2.31a1.359 1.359 0 001.898 0l2.387-2.31a5.079 5.079 0 014.272-1.389l3.288.466a1.361 1.361 0 001.536-1.118l.574-3.273a5.084 5.084 0 012.64-3.636l2.933-1.557a1.363 1.363 0 00.587-1.81l-1.458-2.985a5.086 5.086 0 010-4.492l1.458-2.986a1.363 1.363 0 00-.587-1.81l-2.933-1.556a5.083 5.083 0 01-2.64-3.636l-.574-3.273a1.36 1.36 0 00-1.536-1.118l-3.288.466a5.081 5.081 0 01-4.273-1.39l-2.386-2.31a1.359 1.359 0 00-1.898 0l-2.387 2.31a5.08 5.08 0 01-4.273 1.39l-3.287-.466a1.36 1.36 0 00-1.536 1.118l-.574 3.273a5.083 5.083 0 01-2.64 3.635L5.421 16.96a1.363 1.363 0 00-.588 1.81l1.459 2.984a5.086 5.086 0 010 4.493l-1.458 2.986a1.363 1.363 0 00.587 1.81l2.933 1.556a5.084 5.084 0 012.64 3.636l.574 3.273a1.36 1.36 0 001.536 1.118l3.288-.466c.243-.034.487-.051.728-.051z"
                ></path>
                <path fill="#FF4BAC"
                  d="M24.094 28.03a1.874 1.874 0 01-1.875-1.874V14.723a1.874 1.874 0 013.749 0v11.433c0 1.035-.84 1.874-1.874 1.874zm0 7.404a2.343 2.343 0 100-4.686 2.343 2.343 0 000 4.686z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_327_1">
                  <path fill="#fff" d="M0 0H48V48H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <p className='font-sora font-[600] text-[14px] leading-[17px]'>Issues Report</p>
          </div>
        </div >
      </div>
    </div>
  )
}

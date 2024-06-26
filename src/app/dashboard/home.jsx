import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DashboardOptions = [
  {
    icon: '/icons/dashboard/z-report.svg',
    title: 'Z-Report Stat',
    link: '/dashboard?section=z-report',
  },
  {
    icon: '/icons/dashboard/settings.svg',
    title: 'Settings',
    link: '/dashboard?section=settings',
  },
  {
    icon: '/icons/dashboard/online_banking.svg',
    title: 'Online Banking',
    link: '/dashboard?section=online-banking',
  },
  {
    icon: '/icons/dashboard/billing_system.svg',
    title: 'Billing System',
    link: '',
  },
  {
    icon: '/icons/dashboard/customer_feedback.svg',
    title: 'Customer Feedback',
    link: '/dashboard?section=customer-feedback',
  },
  {
    icon: '/icons/dashboard/customer_database.svg',
    title: 'Customer Database',
    link: '/dashboard?section=customer-database',
  },
  {
    icon: '/icons/dashboard/check_mail.svg',
    title: 'Check Mail',
    link: '',
  },
  {
    icon: '/icons/dashboard/user_management.svg',
    title: 'User Management',
    link: '/dashboard?section=user-management',
  },
  {
    icon: '/icons/dashboard/drivers_screen.svg',
    title: 'Drivers Screen',
    link: '/dashboard?section=driver-screen',
  },
  {
    icon: '/icons/dashboard/drivers_taking.svg',
    title: 'Drivers Taking',
    link: '/dashboard?section=driver-taking',
  },
  {
    icon: '/icons/dashboard/coupon_code.svg',
    title: 'Coupon Code',
    link: '',
  },
  {
    icon: '/icons/dashboard/advertising_slip.svg',
    title: 'Advertising Slip',
    link: '',
  },
  {
    icon: '/icons/dashboard/current_waiting_time.svg',
    title: 'Current Waiting Time',
    link: '/dashboard?section=waiting-time',
  },
  {
    icon: '/icons/dashboard/edit_menu.svg',
    title: 'Edit Menu',
    link: '/dashboard?section=edit-menu',
  },
  {
    icon: '/icons/dashboard/ban_customers.svg',
    title: 'Ban Customers',
    link: '',
  },
  {
    icon: '/icons/dashboard/delivery_charges.svg',
    title: 'Delivery Charges',
    link: '/dashboard?section=delivery-charges',
  },
  {
    icon: '/icons/dashboard/receipt_message.svg',
    title: 'Receipt Message',
    link: '',
  },
  {
    icon: '/icons/dashboard/order_printer_paper.svg',
    title: 'Order Printer Paper',
    link: '',
  },
  {
    icon: '/icons/dashboard/view_website.svg',
    title: 'View Website ',
    link: '',
  },
  {
    icon: '/icons/dashboard/offer_banner.svg',
    title: 'Offer Banner',
    link: '',
  },
  {
    icon: '/icons/dashboard/close_takeaway.svg',
    title: 'Close Takeaway',
    link: '',
  },
  {
    icon: '/icons/dashboard/report_problem.svg',
    title: 'Report Problem',
    link: '/dashboard?section=report-issue',
  },
  {
    icon: '/icons/dashboard/internet_speed_test.svg',
    title: 'Internet Speed Test',
    link: '',
  },
  {
    icon: '/icons/dashboard/table_order.svg',
    title: 'Table Order',
    link: '/dashboard?section=table-order',
  },
  {
    icon: '/icons/dashboard/logout.svg',
    title: 'Logout',
    link: '',
  },
]

export default function Home({ setShowFilter, setShowIconDrawer, showIconDrawer }) {
  return (
    <div className='overflow-hidden w-full overflow-y-scroll flex'>
      <div className={`w-[100%]`}>
        <div className='flex justify-between py-[15px] px-[20px] lg:px-[50px] bg-base w-full z-[200] md:h-[15vh] sticky top-0'>
          <div className={`flex items-center gap-5  ${showIconDrawer ? "translate-x-[100px]" : ""} lg:translate-x-[0px] transition-all duration-300`}>
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
            <p className='font-sora font-[600] text-[14px] leading-[17px]'>Dashboard</p>
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
        <div className='w-full flex justify-center'>
          <div className={`mt-[20px] px-[20px] lg:px-[50px] pb-[60px] grid grid-cols-2 md:flex flex-wrap gap-[30px]`}>
            {DashboardOptions.map((data, id) => {
              return (
                <Link key={id} href={data.link}>
                  <div className='h-[142px] w-[142px] flex flex-col justify-center items-center gap-3 bg-white rounded-[8px] hover:shadow-md cursor-pointer transition-all duration-300 p-[10px]'

                  >
                    <Image src={data.icon} height={48} width={48} alt='icon' />
                    <p className='font-sora font-[600] text-[14px] leading-[17px] text-center'>{data.title}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

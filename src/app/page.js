import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='container mx-auto text-[20px] px-[10%] py-[100px]'>
      <Link href={`/login`}>
        <p className='cursor-pointer'>
          Login
        </p>
      </Link>
      <Link href={`/super-admin`}>
        <p className='cursor-pointer'>
          Super-admin home
        </p>
      </Link>
      <Link href={`/super-admin?section=subscription`}>
        <p className='cursor-pointer'>
          Subscription plan settings
        </p>
      </Link>
      <Link href={`/subscription-plans`}>
        <p className='cursor-pointer'>
          Subscription plans
        </p>
      </Link>
      <Link href={`/take-order`}>
        <p className='cursor-pointer'>
          Take Order
        </p>
      </Link>
      <Link href={`/dashboard`}>
        <p className='cursor-pointer'>
          Dashboard
        </p>
      </Link>
      
      <Link href={`/take-order?section=customer-details`} className='mt-10'>
        <p className='cursor-pointer mt-10'>
          Take Order - customer details
        </p>
      </Link>
      <Link href={`/take-order?section=print-report`}>
        <p className='cursor-pointer'>
          Take Order - Print Report
        </p>
      </Link>

      <Link href={`/dashboard?section=z-report`}>
        <p className='cursor-pointer mt-10'>
          Dashboard - Z Report
        </p>
      </Link>
      <Link href={`/dashboard?section=edit-menu`}>
        <p className='cursor-pointer'>
          Dashboard - Edit Menu
        </p>
      </Link>
      <Link href={`/dashboard?section=waiting-time`}>
        <p className='cursor-pointer'>
          Dashboard - Waiting Time
        </p>
      </Link>
      <Link href={`/dashboard?section=online-banking`}>
        <p className='cursor-pointer'>
          Dashboard - Online Banking
        </p>
      </Link>
      <Link href={`/dashboard?section=customer-feedback`}>
        <p className='cursor-pointer'>
          Dashboard - Customer Feedback
        </p>
      </Link>
      <Link href={`/dashboard?section=customer-database`}>
        <p className='cursor-pointer'>
          Dashboard - Customer Database
        </p>
      </Link>
      <Link href={`/dashboard?section=user-management`}>
        <p className='cursor-pointer'>
          Dashboard - User Management
        </p>
      </Link>
      <Link href={`/dashboard?section=driver-screen`}>
        <p className='cursor-pointer'>
          Dashboard - Driver Screen
        </p>
      </Link>
      <Link href={`/dashboard?section=driver-taking`}>
        <p className='cursor-pointer'>
          Dashboard - Driver Taking
        </p>
      </Link>
      <Link href={`/dashboard?section=report-issue`}>
        <p className='cursor-pointer'>
          Dashboard - Report Issue
        </p>
      </Link>
      <Link href={`/dashboard?section=table-order`}>
        <p className='cursor-pointer'>
          Dashboard - Table Order
        </p>
      </Link>
      <Link href={`/dashboard?section=delivery-charges`}>
        <p className='cursor-pointer'>
          Dashboard - Delivery Charges
        </p>
      </Link>
      <Link href={`/dashboard?section=settings`}>
        <p className='cursor-pointer'>
          Dashboard - Settings
        </p>
      </Link>
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='container mx-auto text-[20px] p-[10%]'>
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
      <Link href={`/take-order?section=customer-details`}>
        <p className='cursor-pointer'>
          Take Order - customer details
        </p>
      </Link>
      <Link href={`/take-order?section=print-report`}>
        <p className='cursor-pointer'>
          Take Order - Print Report
        </p>
      </Link>
      <Link href={`/dashboard`}>
        <p className='cursor-pointer'>
          Dashboard
        </p>
      </Link>
      <Link href={`/dashboard?section=z-report`}>
        <p className='cursor-pointer'>
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
    </div>
  )
}

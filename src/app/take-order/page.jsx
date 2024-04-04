'use client'
import SideMenuCommon from '@/components/sidemenu-common'
import { useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect, useState } from 'react'
import Home from './home'
import DrawerRight from '@/components/drawerRight'
import CartItems from '@/components/drawer/cartItems'
import CustomerDetails from './customer-details'
import Invoice from '@/components/drawer/invoice'
import PrintReport from './print-report'
import PrintReportDrawer from '@/components/drawer/print-report'
import ItemsReport from './items-report'
import ItemsReportDrawer from '@/components/drawer/items-report'

function RenderPage({ setActive, setShowFilter, setShowDrawer, setShowIconDrawer, showIconDrawer }) {
  const section = useSearchParams().get('section')
  useEffect(() => {
    switch (section) {
      case 'settings':
        setActive('settings')
        break;
      case 'customer-details':
        setActive('cart')
        break;
      case 'print-report':
        setActive('print')
        setShowDrawer('print')
        break;
      case 'items-report':
        setActive('print')
        setShowDrawer('items')
        break;
      default:
        setActive('cart')
        setShowDrawer('cart')
        break;
    }
  }, [section, setActive, setShowDrawer, setShowFilter]);

  switch (section) {
    case 'settings':
      return <div></div>
    case 'customer-details':
      return <CustomerDetails setShowFilter={setShowFilter} setShowDrawer={setShowDrawer} setShowIconDrawer={setShowIconDrawer} showIconDrawer={showIconDrawer} />
    case 'print-report':
      return <PrintReport setShowFilter={setShowFilter} setShowDrawer={setShowDrawer} setShowIconDrawer={setShowIconDrawer} showIconDrawer={showIconDrawer} />
    case 'items-report':
      return <ItemsReport setShowFilter={setShowFilter} setShowDrawer={setShowDrawer} setShowIconDrawer={setShowIconDrawer} showIconDrawer={showIconDrawer} />
    default:
      return <Home setShowFilter={setShowFilter} setShowDrawer={setShowDrawer} setShowIconDrawer={setShowIconDrawer} showIconDrawer={showIconDrawer} />
  }
}

function RenderDrawer({ showDrawer }) {
  if (showDrawer === 'cart') {
    return (
      <CartItems />
    )
  }
  else if (showDrawer === 'invoice') {
    return (
      <Invoice />
    )
  }
  else if (showDrawer === 'print') {
    return (
      <PrintReportDrawer />
    )
  }
  else if (showDrawer === 'items') {
    return (
      <ItemsReportDrawer />
    )
  }
  else {
    return (
      <CartItems setShowFilter={setShowFilter} />
    )
  }
}

export default function Page() {
  const [active, setActive] = useState('')
  const [showFilter, setShowFilter] = useState(false) //Default True
  const [showDrawer, setShowDrawer] = useState('cart')
  const [showIconDrawer, setShowIconDrawer] = useState('true')
  useEffect(() => {
    // Function to update state based on screen size
    const updateScreenSize = () => {
      setShowIconDrawer(window.innerWidth < 770 ? false : true); // Example threshold for small screen
    };

    // Add event listener for window resize
    window.addEventListener('resize', updateScreenSize);

    // Initial call to update screen size state
    updateScreenSize();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);
  return (
    <div className='flex w-[100vw] overflow-y-hidden h-[100vh] overflow-hidden'>
      <SideMenuCommon active={active} showIconDrawer={showIconDrawer} />
      {/* <Layout setShowFilter={setShowFilter}>
      </Layout> */}
      <Suspense fallback={<div className='w-full h-full flex justify-center items-center'>Loading...</div>}>
        <RenderPage setActive={setActive} setShowFilter={setShowFilter} setShowDrawer={setShowDrawer} setShowIconDrawer={setShowIconDrawer} showIconDrawer={showIconDrawer} />
      </Suspense>
      {/* Right side menu */}
      <DrawerRight showFilter={showFilter} setShowFilter={setShowFilter}>
        <RenderDrawer showDrawer={showDrawer} />
      </DrawerRight>
    </div>
  )
}

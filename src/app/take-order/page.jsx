'use client'
import SideMenuCommon from '@/components/sidemenu-common'
import { useSearchParams } from 'next/navigation'
import React, { Suspense, useState } from 'react'
import Home from './home'
import DrawerRight from '@/components/drawerRight'
import CartItems from '@/components/drawer/cartItems'
import CustomerDetails from './customer-details'
import Invoice from '@/components/drawer/invoice'
import PrintReport from './print-report'
import PrintReportDrawer from '@/components/drawer/print-report'
import ItemsReport from './items-report'
import ItemsReportDrawer from '@/components/drawer/items-report'

function RenderPage({ setActive, setShowFilter, setShowDrawer }) {
  const section = useSearchParams().get('section')
  if (section === 'settings') {
    setActive('settings')
    return (
      <div></div>
    )
  }
  else if (section === 'customer-details') {
    setActive('cart')
    return (
      <CustomerDetails setShowFilter={setShowFilter} setShowDrawer={setShowDrawer} />
    )
  }
  else if (section === 'print-report') {
    setActive('print')
    setShowDrawer('print')
    return (
      <PrintReport setShowFilter={setShowFilter} />
    )
  }
  else if (section === 'items-report') {
    setActive('print')
    setShowDrawer('items')
    return (
      <ItemsReport setShowFilter={setShowFilter} />
    )
  }
  else {
    setActive('cart')
    return (
      <Home setShowFilter={setShowFilter} />
    )
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
      <CartItems />
    )
  }
}

export default function Page() {
  const [active, setActive] = useState('')
  const [showFilter, setShowFilter] = useState(true) //Default True
  const [showDrawer, setShowDrawer] = useState('cart')

  return (
    <div className='flex w-[100vw] overflow-y-hidden h-[100vh] overflow-hidden'>
      <SideMenuCommon active={active} />
      {/* <Layout setShowFilter={setShowFilter}>
      </Layout> */}
      <Suspense fallback={<div>Loading...</div>}>
        <RenderPage setActive={setActive} setShowFilter={setShowFilter} setShowDrawer={setShowDrawer} />
      </Suspense>
      {/* Right side menu */}
      <DrawerRight showFilter={showFilter} setShowFilter={setShowFilter}>
        <RenderDrawer showDrawer={showDrawer} />
      </DrawerRight>
    </div>
  )
}

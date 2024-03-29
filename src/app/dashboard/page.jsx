'use client'
import DrawerRight from '@/components/drawerRight'
import SideMenuCommon from '@/components/sidemenu-common'
import { useSearchParams } from 'next/navigation'
import React, { Suspense, useState } from 'react'
import Home from './home'
import DrawerOne from './drawer_one'

import CartItems from '@/components/drawer/cartItems' // Delete Later
function RenderPage({ setActive, setShowFilter, setShowDrawer }) {
  const section = useSearchParams().get('section')
  if (section === 'settings') {
    setActive('settings')
    return (
      <Home setShowFilter={setShowFilter} />
    )
  }
  else if (section === 'customer-details') {
    setActive('cart')
    return (
      <Home setShowFilter={setShowFilter} />
    )
  }
  else {
    setActive('settings')
    setShowDrawer('dashboard-home')
    return (
      <Home setShowFilter={setShowFilter} />
    )
  }
}

function RenderDrawer({ showDrawer }) {
  if (showDrawer === 'dashboard-home ') {
    return (
      <DrawerOne />
    )
  }
  else if (showDrawer === 'invoice') {
    return (
      <div>1</div>
    )
  }
  else {
    return (
      <DrawerOne />
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

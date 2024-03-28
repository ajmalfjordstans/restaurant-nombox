'use client'
import SideMenuCommon from '@/components/sidemenu-common'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import Home from './home'
import DrawerRight from '@/components/drawerRight'
import CartItems from '@/components/cartItems'
import CustomerDetails from './customer-details'

function RenderPage({ setActive, setShowFilter }) {
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
      <CustomerDetails setShowFilter={setShowFilter} />
    )
  }
  else {
    setActive('cart')
    return (
      <Home setShowFilter={setShowFilter} />
    )
  }
}

export default function Page() {
  const [active, setActive] = useState('')
  const [showFilter, setShowFilter] = useState(true)
  return (
    <div className='flex'>
      <SideMenuCommon active={active} />
      {/* <Layout setShowFilter={setShowFilter}>
      </Layout> */}
      <RenderPage setActive={setActive} setShowFilter={setShowFilter} />
      {/* Right side menu */}
      <DrawerRight showFilter={showFilter} setShowFilter={setShowFilter}>
        <CartItems />
      </DrawerRight>
    </div>
  )
}

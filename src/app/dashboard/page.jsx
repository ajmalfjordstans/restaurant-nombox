'use client'
import DrawerRight from '@/components/drawerRight'
import SideMenuCommon from '@/components/sidemenu-common'
import { useSearchParams } from 'next/navigation'
import React, { Suspense, useState } from 'react'
import Home from './home'
import DrawerOne from './drawer_one'
import ZReport from './z-report'
import ZReportDrawer from '@/components/drawer/z-report'
import EditMenu from './edit-menu'
import EditMenuDrawer from '@/components/drawer/edit-menu'
import WaitingTime from './waiting-time'
function RenderPage({ setActive, setShowFilter, setShowDrawer }) {
  const section = useSearchParams().get('section')
  if (section === 'edit-menu') {
    setActive('settings')
    setShowDrawer('edit-menu')
    return (
      <EditMenu setShowFilter={setShowFilter} />
    )
  }
  else if (section === 'z-report') {
    setActive('settings')
    setShowDrawer('report')
    return (
      <ZReport setShowFilter={setShowFilter} />
    )
  }
  else if (section === 'waiting-time') {
    setActive('settings')
    setShowDrawer('waiting-time')
    return (
      <WaitingTime setShowFilter={setShowFilter} />
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
  if (showDrawer === 'edit-menu') {
    return (
      <EditMenuDrawer />
    )
  }
  else if (showDrawer === 'report') {
    return (
      <ZReportDrawer />
    )
  }
  else if (showDrawer === 'waiting-time') {
    return (
      <ZReportDrawer />
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

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
import OnlineBanking from './online-banking'
import CustomerFeedback from './customer-feedback'
import WaitingTimeDrawer from '@/components/drawer/waiting-time'
import CustomerFeedbackDrawer from '@/components/drawer/customer-feedback'
import CustomerDatabase from './customer-database'
import CustomerDatabaseDrawer from '@/components/drawer/customer-database'
import TableOrderDrawer from '@/components/drawer/table-order'
import UserManagement from './user-management'
import DriverScreen from './driver-screen'
import DriverScreenDrawer from '@/components/drawer/driver-screen'
import DriverTaking from './driver-taking'
import ReportIssue from './report-issue'
import TableOrder from './table-order'
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
  else if (section === 'online-banking') {
    setActive('settings')
    setShowDrawer('online-banking')
    setShowFilter(false)
    return (
      <OnlineBanking setShowFilter={setShowFilter} />
    )
  }
  else if (section === 'customer-feedback') {
    setActive('settings')
    setShowDrawer('customer-feedback')
    return (
      <CustomerFeedback setShowFilter={setShowFilter} />
    )
  }
  else if (section === 'customer-database') {
    setActive('settings')
    setShowDrawer('customer-database')
    return (
      <CustomerDatabase setShowFilter={setShowFilter} />
    )
  }
  else if (section === 'user-management') {
    setActive('settings')
    setShowDrawer('user-management')
    return (
      <UserManagement setShowFilter={setShowFilter} />
    )
  }
  else if (section === 'driver-screen') {
    setActive('settings')
    setShowDrawer('driver-screen')
    return (
      <DriverScreen setShowFilter={setShowFilter} />
    )
  }
  else if (section === 'driver-taking') {
    setActive('settings')
    setShowDrawer('driver-taking')
    return (
      <DriverTaking setShowFilter={setShowFilter} />
    )
  }
  else if (section === 'report-issue') {
    setShowFilter(false)
    setActive('settings')
    setShowDrawer('report-issue')
    return (
      <ReportIssue setShowFilter={setShowFilter} />
    )
  }
  else if (section === 'table-order') {
    setActive('settings')
    setShowDrawer('table-order')
    return (
      <TableOrder setShowFilter={setShowFilter} />
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
      <WaitingTimeDrawer />
    )
  }
  else if (showDrawer === 'online-banking') {
    return
  }
  else if (showDrawer === 'customer-feedback') {
    return (
      <CustomerFeedbackDrawer />
    )
  }
  else if (showDrawer === 'customer-database') {
    return (
      <CustomerDatabaseDrawer />
    )
  }
  else if (showDrawer === 'user-management') {
    return (
      <CustomerDatabaseDrawer />
    )
  }
  else if (showDrawer === 'driver-screen') {
    return (
      <DriverScreenDrawer />
    )
  }
  else if (showDrawer === 'driver-taking') {
    return (
      <DriverScreenDrawer />
    )
  }
  else if (showDrawer === 'table-order') {
    return (
      <TableOrderDrawer />
    )
  }
  else if (showDrawer === 'report-issue') {
    return
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
        <RenderDrawer showDrawer={showDrawer} setShowFilter={setShowFilter} />
      </DrawerRight>
    </div>
  )
}

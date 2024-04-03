'use client'
import SideMenu from '@/components/sidemenu'
import Link from 'next/link'
import React, { Suspense, useEffect, useState } from 'react'
import Home from './home'
import { useSearchParams } from 'next/navigation'
import CompanyInfo from './company-info'
import Settings from './settings'
import Customer from './customer'
import Issues from './issues'
import Report from './report'
import SubscriptionPlan from './subscription-plan'
import DrawerRight from '@/components/drawerRight'
import ZReportDrawer from '@/components/drawer/z-report'
import ReportIssues from '@/components/drawer/report-issues'
import SubscriptionDrawer from '@/components/drawer/subscription'

function RenderPage({ setActive, setShowFilter, setShowDrawer }) {
  const section = useSearchParams().get('section')
  useEffect(() => {
    switch (section) {
      case 'report':
        setActive('report')
        setShowDrawer('report')
        break;
      case 'settings':
        setActive('settings')
        break;
      case 'customer-info':
        setActive('customer')
        break;
      case 'company-info':
        setActive('info')
        break;
      case 'issues':
        setActive('issues')
        setShowDrawer('issues')
        break;
      case 'subscription':
        setActive('settings')
        setShowDrawer('subscription')
        break;
      default:
        setActive('')
        break;
    }
  }, [section, setActive, setShowDrawer, setShowFilter])
  // Render the appropriate component based on the section
  switch (section) {
    case 'report':
      return <Report setShowFilter={setShowFilter} />
    case 'settings':
      return <Settings />
    case 'customer-info':
      return <Customer />
    case 'company-info':
      return <CompanyInfo setShowFilter={setShowFilter} />
    case 'issues':
      return <Issues setShowFilter={setShowFilter} />
    case 'subscription':
      return <SubscriptionPlan setShowFilter={setShowFilter} />
    default:
      return <Home />
  }
}

function RenderDrawer({ showDrawer }) {
  if (showDrawer === 'edit-menu') {
    return (
      <ZReportDrawer />
    )
  }
  else if (showDrawer === 'issues') {
    return (
      <ReportIssues />
    )
  }
  else if (showDrawer === 'subscription') {
    return (
      <SubscriptionDrawer />
    )
  }
  else {
    return (
      <ZReportDrawer />
    )
  }
}

export default function Page() {
  const [active, setActive] = useState('')
  const [showFilter, setShowFilter] = useState(false) //Default True if drawer to be shown always
  const [showDrawer, setShowDrawer] = useState('')
  return (
    <div className='flex w-[100vw] overflow-y-hidden h-[100vh] overflow-hidden'>
      <SideMenu active={active} />
      <Suspense fallback={<div>Loading...</div>}>
        <RenderPage setActive={setActive} setShowFilter={setShowFilter} setShowDrawer={setShowDrawer} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <DrawerRight showFilter={showFilter} setShowFilter={setShowFilter}>
          <RenderDrawer showDrawer={showDrawer} setShowFilter={setShowFilter} />
        </DrawerRight>
      </Suspense>
    </div>
  )
}

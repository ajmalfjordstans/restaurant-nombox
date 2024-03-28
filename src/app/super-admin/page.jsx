'use client'
import SideMenu from '@/components/sidemenu'
import Link from 'next/link'
import React, { useState } from 'react'
import Home from './home'
import { useSearchParams } from 'next/navigation'
import CompanyInfo from './company-info'
import Settings from './settings'
import Customer from './customer'
import Issues from './issues'
import Report from './report'
import SubscriptionPlan from './subscription-plan'

function RenderPage({ setActive }) {
  const section = useSearchParams().get('section')
  if (section === 'report') {
    setActive('report')
    return (
      <Report />
    )
  }
  else if (section === 'settings') {
    setActive('settings')
    return (
      <Settings />
    )
  }
  else if (section === 'customer-info') {
    setActive('customer')
    return (
      <Customer />
    )
  }
  else if (section === 'company-info') {
    setActive('info')
    return (
      <CompanyInfo />
    )
  }
  else if (section === 'issues') {
    setActive('issues')
    return (
      <Issues />
    )
  }
  else if (section === 'subscription') {
    setActive('settings')
    return (
      <SubscriptionPlan />
    )
  }
  else {
    setActive('')
    return (
      <Home />
    )
  }
}

export default function Page() {
  const [active, setActive] = useState('')
  return (
    <div className='flex'>
      <SideMenu active={active} />
      <RenderPage setActive={setActive} />
    </div>
  )
}

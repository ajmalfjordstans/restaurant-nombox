'use client'
import DrawerRight from '@/components/drawerRight'
import SideMenuCommon from '@/components/sidemenu-common'
import { useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect, useState } from 'react'
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
import DeliveryCharges from './delivery-charges'
import DeliveryChargesDrawer from '@/components/drawer/delivery-charges'
import Settings from './settings'

function RenderPage({ setActive, setShowFilter, setShowDrawer, setShowIconDrawer, showIconDrawer }) {
  const section = useSearchParams().get('section');

  useEffect(() => {
    setActive('settings');

    switch (section) {
      case 'edit-menu':
        setShowDrawer('edit-menu');
        break;
      case 'z-report':
        setShowDrawer('report');
        break;
      case 'waiting-time':
        setShowDrawer('waiting-time');
        break;
      case 'online-banking':
        setShowDrawer('online-banking');
        setShowFilter(false);
        break;
      case 'customer-feedback':
        setShowDrawer('customer-feedback');
        break;
      case 'customer-database':
        setShowDrawer('customer-database');
        break;
      case 'user-management':
        setShowDrawer('user-management');
        break;
      case 'driver-screen':
        setShowDrawer('driver-screen');
        break;
      case 'driver-taking':
        setShowDrawer('driver-taking');
        break;
      case 'report-issue':
        setShowDrawer('C');
        setShowFilter(false);
        break;
      case 'table-order':
        setShowDrawer('table-order');
        break;
      case 'delivery-charges':
        setShowDrawer('delivery-charges');
        break;
      case 'settings':
        setShowDrawer('settings');
        break;
      default:
        setShowDrawer('dashboard-home');
        break;
    }
  }, [section, setActive, setShowDrawer, setShowFilter]);

  // Render the appropriate component based on the section
  switch (section) {
    case 'edit-menu':
      return <EditMenu setShowFilter={setShowFilter} setShowIconDrawer={setShowIconDrawer} showIconDrawer={showIconDrawer}/>;
    case 'z-report':
      return <ZReport setShowFilter={setShowFilter} setShowIconDrawer={setShowIconDrawer} showIconDrawer={showIconDrawer}/>;
    case 'waiting-time':
      return <WaitingTime setShowFilter={setShowFilter} setShowIconDrawer={setShowIconDrawer} showIconDrawer={showIconDrawer}/>;
    case 'online-banking':
      return <OnlineBanking setShowFilter={setShowFilter} setShowIconDrawer={setShowIconDrawer} showIconDrawer={showIconDrawer}/>;
    case 'customer-feedback':
      return <CustomerFeedback setShowFilter={setShowFilter} setShowIconDrawer={setShowIconDrawer} showIconDrawer={showIconDrawer}/>;
    case 'customer-database':
      return <CustomerDatabase setShowFilter={setShowFilter} setShowIconDrawer={setShowIconDrawer} showIconDrawer={showIconDrawer}/>;
    case 'user-management':
      return <UserManagement setShowFilter={setShowFilter} setShowIconDrawer={setShowIconDrawer} showIconDrawer={showIconDrawer}/>;
    case 'driver-screen':
      return <DriverScreen setShowFilter={setShowFilter} setShowIconDrawer={setShowIconDrawer} showIconDrawer={showIconDrawer}/>;
    case 'driver-taking':
      return <DriverTaking setShowFilter={setShowFilter} setShowIconDrawer={setShowIconDrawer} showIconDrawer={showIconDrawer}/>;
    case 'report-issue':
      return <ReportIssue setShowFilter={setShowFilter} setShowIconDrawer={setShowIconDrawer} showIconDrawer={showIconDrawer}/>;
    case 'table-order':
      return <TableOrder setShowFilter={setShowFilter} setShowIconDrawer={setShowIconDrawer} showIconDrawer={showIconDrawer}/>;
    case 'delivery-charges':
      return <DeliveryCharges setShowFilter={setShowFilter} setShowIconDrawer={setShowIconDrawer} showIconDrawer={showIconDrawer}/>;
    case 'settings':
      return <Settings setShowFilter={setShowFilter} setShowIconDrawer={setShowIconDrawer} showIconDrawer={showIconDrawer}/>;
    default:
      return <Home setShowFilter={setShowFilter} setShowIconDrawer={setShowIconDrawer} showIconDrawer={showIconDrawer}/>;
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
  else if (showDrawer === 'delivery-charges') {
    return (
      <DeliveryChargesDrawer />
    )
  }
  else if (showDrawer === 'settings') {
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
  const [showFilter, setShowFilter] = useState(true) //Default True if drawer to be shown always
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
      <SideMenuCommon active={active} showIconDrawer={showIconDrawer} setShowIconDrawer={setShowIconDrawer}/>
      <Suspense fallback={<div className='w-full h-full flex justify-center items-center'>Loading...</div>}>
        <RenderPage setActive={setActive} setShowFilter={setShowFilter} setShowDrawer={setShowDrawer} setShowIconDrawer={setShowIconDrawer} showIconDrawer={showIconDrawer} />
      </Suspense>
      {/* Right side menu */}
      <Suspense fallback={<div className='w-full h-full flex justify-center items-center'>Loading...</div>}>
        <DrawerRight showFilter={showFilter} setShowFilter={setShowFilter}>
          <RenderDrawer showDrawer={showDrawer} setShowFilter={setShowFilter} />
        </DrawerRight>
      </Suspense>
    </div>
  )
}

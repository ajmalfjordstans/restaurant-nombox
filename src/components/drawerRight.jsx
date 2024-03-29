import React from 'react'

export default function DrawerRight({ children, showFilter, setShowFilter }) {
  return (
    <div className={`${showFilter ? 'w-[533px] bg-white block' : 'translate-x-[100%] w-0'} h-full z-[300] transition-all duration-300  relative`}>
      <div className='static bg-white h-[100vh] overflow-y-scroll w-full'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer m-[30px]"
          onClick={() => { setShowFilter(false) }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        {children}
      </div>
    </div>
  )
}

import React from 'react'

export default function CustomerDatabase({setShowFilter}) {
  const TABLE_HEAD = ["Name", "Phone", "Address", "Postcode", "Subscribed", "Email"];
  const TABLE_ROWS = [
    {
      name: "Test",
      phone: 1234567890,
      address: "Address Here",
      postcode: 123456,
      subscribe: false,
      email: '',
    },
    {
      name: "Test",
      phone: 1234567890,
      address: "Address Here",
      postcode: 123456,
      subscribe: false,
      email: '',
    },
    {
      name: "Test",
      phone: 1234567890,
      address: "Address Here",
      postcode: 123456,
      subscribe: false,
      email: '',
    },
    {
      name: "Test",
      phone: 1234567890,
      address: "Address Here",
      postcode: 123456,
      subscribe: false,
      email: '',
    },
    {
      name: "Test",
      phone: 1234567890,
      address: "Address Here",
      postcode: 123456,
      subscribe: false,
      emai: '',
    },
    {
      name: "Test",
      phone: 1234567890,
      address: "Address Here",
      postcode: 123456,
      subscribe: false,
      emai: '',
    },
    {
      name: "Test",
      phone: 1234567890,
      address: "Address Here",
      postcode: 123456,
      subscribe: false,
      emai: '',
    },
    {
      name: "Test",
      phone: 1234567890,
      address: "Address Here",
      postcode: 123456,
      subscribe: false,
      emai: '',
    },
    {
      name: "Test",
      phone: 1234567890,
      address: "Address Here",
      postcode: 123456,
      subscribe: false,
      emai: '',
    },
    {
      name: "Test",
      phone: 1234567890,
      address: "Address Here",
      postcode: 123456,
      subscribe: false,
      emai: '',
    },
    {
      name: "Test",
      phone: 1234567890,
      address: "Address Here",
      postcode: 123456,
      subscribe: false,
      emai: '',
    },
    {
      name: "Test",
      phone: 1234567890,
      address: "Address Here",
      postcode: 123456,
      subscribe: false,
      emai: '',
    },
  ]
  return (
    <div className='overflow-hidden h-[100vh] w-full overflow-y-scroll flex'>
      <div className={`w-[100%]`}>
        <div className='flex justify-between py-[15px] px-[50px]  bg-base w-full z-[200] h-[15vh] sticky top-0'>
          <div className='flex items-center gap-5 '>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48"    >
              <g clipPath="url(#clip0_200_178)">
                <path
                  fill="#CEE1F2"
                  d="M7.5 29.25v-18a9.375 9.375 0 019.375-9.375H11.25a9.375 9.375 0 00-9.375 9.375v18a9.375 9.375 0 009.375 9.375h5.625A9.375 9.375 0 017.5 29.25z"
                ></path>
                <path
                  fill="#4E2DD8"
                  d="M36.75 40.5h-25.5C5.047 40.5 0 35.453 0 29.25v-18C0 5.047 5.047 0 11.25 0h18a1.875 1.875 0 110 3.75h-18c-4.136 0-7.5 3.365-7.5 7.5v18c0 4.136 3.364 7.5 7.5 7.5h25.5c4.135 0 7.5-3.364 7.5-7.5v-.75a1.875 1.875 0 113.75 0v.75c0 6.203-5.047 11.25-11.25 11.25zm6.959 5.983a11.312 11.312 0 004.027-3.985 1.875 1.875 0 10-3.222-1.918 7.543 7.543 0 01-6.45 3.67H9.937a7.543 7.543 0 01-6.45-3.67 1.875 1.875 0 10-3.222 1.918A11.248 11.248 0 009.937 48h28.127c1.985 0 3.937-.525 5.645-1.517zM25.875 31.125V9.375a1.875 1.875 0 10-3.75 0v21.75a1.875 1.875 0 103.75 0zm-7.5-18.094c0-1.035-.84-1.875-1.875-1.875H9.375a1.875 1.875 0 100 3.75H16.5c1.035 0 1.875-.839 1.875-1.875zm0 7.5c0-1.035-.84-1.875-1.875-1.875H9.375a1.875 1.875 0 100 3.75H16.5c1.035 0 1.875-.84 1.875-1.875zm22.125 7.5c0-1.035-.84-1.875-1.875-1.875H31.5a1.875 1.875 0 000 3.75h7.125c1.035 0 1.875-.84 1.875-1.875zm-22.125 0c0-1.035-.84-1.875-1.875-1.875H9.375a1.875 1.875 0 000 3.75H16.5c1.035 0 1.875-.84 1.875-1.875z"
                ></path>
                <path
                  fill="#FF4BAC"
                  d="M39.656 11.25a5.631 5.631 0 01-5.625-5.625A5.631 5.631 0 0139.656 0a5.631 5.631 0 015.625 5.625 5.631 5.631 0 01-5.625 5.625zm0-7.5a1.877 1.877 0 00-1.875 1.875c0 1.034.841 1.875 1.875 1.875a1.877 1.877 0 001.875-1.875 1.877 1.877 0 00-1.875-1.875zM48 21c0-4.239-3.497-7.687-7.796-7.687h-1.096c-4.299 0-7.795 3.448-7.795 7.687a1.875 1.875 0 103.75 0c0-2.171 1.814-3.937 4.045-3.937h1.096c2.231 0 4.046 1.766 4.046 3.937A1.875 1.875 0 1048 21z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_200_178">
                  <path fill="#fff" d="M0 0H48V48H0z"></path>
                </clipPath>
              </defs>
            </svg>
            <p className='font-sora font-[600] text-[14px] leading-[17px]'>Customer Database</p>
          </div>
          <div className='flex items-center gap-10'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer z-[200]"
              onClick={() => {
                setShowFilter(true)
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </div>


        {/* Main Content */}
        <div className={`mt-[20px] px-[50px] pb-[60px] flex flex-col gap-[30px]`}>
          <table className="w-full min-w-max table-auto text-left font-[700] text-[18px] rounded-[10px] overflow-hidden">
            <thead className=''>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b bg-second p-4 border-[1px] border-[#DDDDDD] ">
                    <p
                      className=" leading-[22px] text-white"
                    >
                      {head}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ name, phone, address, postcode, subscribe, email }, index) => (
                <tr key={index} className="even:bg-blue-gray-50/50">
                  <td className="p-4 border-[1px] border-[#DDDDDD]">
                    <>
                      <p className="">
                        {name}
                      </p>
                    </>
                  </td>
                  <td className="p-4 border-[1px] border-[#DDDDDD]">
                    <>
                      <p className="">
                        {phone}
                      </p>
                    </>
                  </td>
                  <td className="p-4 border-[1px] border-[#DDDDDD]">
                    <>
                      <p className="">
                        {address}
                      </p>
                    </>
                  </td>
                  <td className="p-4 border-[1px] border-[#DDDDDD]">
                    <>
                      <p className="">
                        {postcode}
                      </p>
                    </>
                  </td>
                  <td className="p-4 border-[1px] border-[#DDDDDD]">
                    <>
                      <p className="">
                        {subscribe ? "Yes" : "No"}
                      </p>
                    </>
                  </td>
                  <td className="p-4 border-[1px] border-[#DDDDDD]">
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                      </svg>
                    </>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div >
      </div>
    </div>
  )
}

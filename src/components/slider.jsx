import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';

export default function Slider({ data, isAdmin }) {
  const swiperRef = useRef(null);
  const handleNextClick = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slideNext();
    }
  };
  const handlePrevClick = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slidePrev();
    }
  };
  return (
    <div>
      <div className='flex w-full justify-between'>
        <p className='capitalize font-[700] text-[20px] leading-[23px]'>{data.name}</p>
        <div className='flex justify-between items-center gap-10'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={handlePrevClick}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={handleNextClick}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          540: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className='mt-[30px]'
      >
        {isAdmin &&
          <SwiperSlide>
            <div className={`bg-white flex flex-col justify-center items-center rounded-[10px] h-[167px] text-white gap-5 cursor-pointer shadow-lg`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#DDDDDD" className="w-14 h-14">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </SwiperSlide>
        }
        {data.items.map((data, id) => {
          return (
            <SwiperSlide key={id}>
              <div className={`bg-[#07074D] flex flex-col justify-center items-center rounded-[10px] h-[167px] text-white gap-5 relative shadow-lg cursor-pointer`}>
                <Image src={data.icon} height={48} width={48} alt='icon' />
                <p>{data.name}</p>
                {isAdmin &&
                  <div className='bg-white rounded-full h-[30px] w-[30px] absolute bottom-3 right-3 cursor-pointer flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </div>
                }
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

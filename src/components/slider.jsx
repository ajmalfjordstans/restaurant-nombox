import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Slider({ data }) {
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
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className='mt-[30px]'
      >
        {data.items.map((data, id) => {
          return (
            <SwiperSlide key={id}>
              <div className={`bg-[#07074D] flex flex-col justify-center items-center rounded-[10px] h-[167px] text-white gap-5`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="46" fill="none" F viewBox="0 0 51 46"
                >
                  <path
                    stroke="#fff"
                    strokeWidth="2"
                    d="M21.517 8.748C4.83 12.913 1.076 30.17 1.284 38.28H49C48.5 17.386 35.017 9.886 28.34 8.748 29.646 5.79 29.253 1 25.134 1c-5.31 0-4.451 5.151-3.617 7.748zM6.793 29.57c.53-3.266 2.926-10.347 8.276-12.543M1 44.65h48"
                  ></path>
                </svg>
                <p>{data.name}</p>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

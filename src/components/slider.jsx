import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Slider({ data }) {
  return (
    <div>
      <p className='capitalize font-[700] text-[20px] leading-[23px]'>{data.name}</p>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
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

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css'



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
          <div>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='bag1' >
        Slide 1
        </SwiperSlide>
        <SwiperSlide className='bag2' >
        Slide 2
        </SwiperSlide>
        <SwiperSlide className='bag3'>
        Slide 3
        </SwiperSlide>
        <SwiperSlide className='bag4' >
            Slide 4
        </SwiperSlide>
        <SwiperSlide className='bag5' >
            Slide 5
        </SwiperSlide>
        <SwiperSlide className='bag6' >
            Slide 6
        </SwiperSlide>
        <SwiperSlide className='bag7'>
            Slide 7
        </SwiperSlide>
        
      </Swiper>
            
        </div>
        <img className='w-full'  src="https://i.ibb.co/ts1KtRK/wave1.png" alt="" />
        </div>
    );
};

export default Banner;
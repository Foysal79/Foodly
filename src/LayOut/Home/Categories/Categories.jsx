import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


import DynamicTitle from "../../../Share/DainamicTitle/DynamicTitle";
import './Categories.css'


const Categories = () => {
    return (
        <div className="my-14" >

            <DynamicTitle subHeading={"Recently added our store"} heading={"Our Hottest Categories"} ></DynamicTitle>

            <div className='w-11/12 mx-auto' >
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide className='box' >Honey</SwiperSlide>
        <SwiperSlide className='box' >Nuts</SwiperSlide>
        <SwiperSlide className='box' >vegetable</SwiperSlide>
        <SwiperSlide className='box' >Oil</SwiperSlide>
        <SwiperSlide className='box' >Fruits</SwiperSlide>
        <SwiperSlide className='box' >Sessional Food</SwiperSlide>
        <SwiperSlide className='box' >Cooking</SwiperSlide>
        
      </Swiper>
                

            </div>

            
        </div>
    );
};

export default Categories;
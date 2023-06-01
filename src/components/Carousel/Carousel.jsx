import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import banner1 from '../../assets/banner/1.avif'
import banner2 from '../../assets/banner/1.jpg'
import banner3 from '../../assets/banner/2.avif'

const Carousel = () => {
    return (
        <>
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
                <SwiperSlide>
                    <img className="w-full h-96" src={banner1} alt="banner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-96" src={banner2} alt="banner" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-96" src={banner3} alt="banner" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Carousel;
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import banner1 from '../../assets/banner/1.avif'
import banner2 from '../../assets/banner/1.jpg'
import banner3 from '../../assets/banner/2.avif'

const Carousel = () => {
    return (
        <>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="h-96 w-full" src={banner1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-96 w-full" src={banner2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-96 w-full" src={banner3} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Carousel;
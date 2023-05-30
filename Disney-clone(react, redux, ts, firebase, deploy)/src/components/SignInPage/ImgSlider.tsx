import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper';
import 'swiper/css';

const styleSlide = 'w-[100%] md:max-h-[384px] min-h-[150px] h-[100%] shadow-my rounded-[12px]'
const slide = 'px-[5%] py-[2%] cursor-pointer h-full w-full mb-[30px]'
export default  function ImgSlider() {
  return ( 
    <div>
      <Swiper
      modules= {[Autoplay]} 
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{delay:2500}}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      className='w-[100%] md:min-h-auto min-h-[150px]'
    >
      <SwiperSlide className={slide} data-swiper-autoplay="2000">
        <img src="./images/slider-badag.jpg" alt="slide" className={styleSlide} />
      </SwiperSlide>
      <SwiperSlide className={slide} data-swiper-autoplay="2000">
        <img src="./images/slider-scale.jpg" alt="slide" className={styleSlide} />
      </SwiperSlide>
      <SwiperSlide className={slide} data-swiper-autoplay="2000">
        <img src="./images/slider-badging.jpg" alt="slide" className={styleSlide} />
      </SwiperSlide>
      <SwiperSlide className={slide} data-swiper-autoplay="2000">
        <img src="./images/slider-scales.jpg" alt="slide" className={styleSlide} />
      </SwiperSlide>
    </Swiper>
    </div>
  );
}


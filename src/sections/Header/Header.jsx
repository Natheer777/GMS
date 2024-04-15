import './Header.css'
// Import Swiper React components
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import { useTranslation } from 'react-i18next';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { useTranslation } from 'react-i18next';

export default function Header() {
  const [t] = useTranslation()
  return (
    <>
      <div className="container">
        <div className="title  d-flex justify-content-center align-items-center">
          <h1 className="position-absolute left">{t("Header-h")}</h1>
        </div>
        <div className="Main-img">

     
        <Swiper
        dir='ltr'
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
        <SwiperSlide><div className='img1'></div></SwiperSlide>
        <SwiperSlide><div className='img2'></div></SwiperSlide>
        <SwiperSlide><div className='img3'></div></SwiperSlide>
        <SwiperSlide><div className='img4'></div></SwiperSlide>
        <SwiperSlide><div className='img5'></div></SwiperSlide>
</Swiper>
        </div>       
      </div>
    </>
  )
}

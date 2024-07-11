
import "./Home.css";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay,Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import banner1 from "../../images/banner1.jpg"
import banner2 from "../../images/banner2.jpg"
import banner3 from "../../images/banner3.jpg"
import banner4 from "../../images/banner4.jpg"

const HomeHeader = () => {
    return (
        <div>
           <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
       
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper lg:h-[100vh] h-[40vh] w-full"
      >
        <SwiperSlide><img src={banner1} alt=""/></SwiperSlide>
        <SwiperSlide><img src={banner2} alt=""/></SwiperSlide>
        <SwiperSlide><img src={banner3} alt=""/></SwiperSlide>
        <SwiperSlide><img src={banner4} alt=""/></SwiperSlide>
       
      </Swiper>
        </div>
    );
};

export default HomeHeader;
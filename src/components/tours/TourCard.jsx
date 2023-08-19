import './TourCard.css'
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import TourCardBox from "./TourCardBox";


// Swiper JS 
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";




const TourCard = () => {
    const { hotels, activeCategory } = useContext(AuthContext);

    console.log(hotels)

    
  return (
    <div className="">
      <div className="xl:max-w-[1100px] md:max-w-[765px] md:px-[16px] max-w-[343px] px-[0px] xl:px-[0px]   mx-auto">
        <Swiper
          id="customSwiper"
          slidesPerView={"auto"}
          centeredSlides={false}
          spaceBetween={0}
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 640px
            200: {
              width: 200,
              slidesPerView: 1.3,
            },
            375: {
              width: 375,
              slidesPerView: 1.3,
            },
            480: {
              width: 480,
              slidesPerView: 1.3,
            },
            768: {
              width: 768,
              slidesPerView: 2.9,
            },
          }}
        >
          {hotels.map((item) => (
            <SwiperSlide
              key={item.rpredi}
              className="swiper-slide-margin flex flex-col customWrapper w-min-[279px] h-[205px]"
            >
              <TourCardBox hotel={item}></TourCardBox>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default TourCard
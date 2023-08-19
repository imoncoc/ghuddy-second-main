
import './TourCard.css'

import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper , SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const TourCardBox = ({hotel}) => {
  let {
    property_name,
    class_rating,
    short_address,
    display_facilities,
    discount_percent,
    black_price,
    red_price,
    images,
    rpredi,
  } = hotel;

  // const [isItemInCart, setIsItemInCart] = useState(isInCart(rpredi));




  return (
    <div className="my-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.slice(0, 7).map((img, indx) => (
          <SwiperSlide key={indx} className="">
            <div className='bg-bg-warning'>
              <img className="bg-cover object-cover h-[205px] w-full" src={img} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TourCardBox
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banier from "../assets/images/banier.jpg";
import banier1 from "../assets/images/banier-1.jpg";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

const BanierCarouselComponent = () => {
  return (
    <div className="row">
      <div className="col-12 px-0 banier-container">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          //navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="img-swiper"
              style={{ backgroundImage: `url(${banier})` }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="img-swiper"
              style={{ backgroundImage: `url(${banier1})` }}
            >
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BanierCarouselComponent;

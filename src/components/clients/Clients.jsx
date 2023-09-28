import clients from "./clients-data";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "./clients.css";

const Clients = () => {
  return (
    <div className="container client-container">
      <p>
        LQS (Life Quality Service) strives to offer excellent and affordable
        home care services to individuals and families in and around West
        Sussex.
      </p>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        grabCursor={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            sliderPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        pagination={false}
        modules={[Autoplay]}
      >
        <div className="clients">
          {clients.map(({ id, client }) => {
            return (
              <SwiperSlide className="client" key={id}>
                <img src={client} alt="Clients" />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default Clients;

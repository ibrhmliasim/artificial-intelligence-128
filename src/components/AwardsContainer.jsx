import React from 'react'
import './AwardsContainer.css'
import Award from './Award'

import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import maplanacakMelumatlar from "../mukafatmelumatlari.json"

const AwardsContainer = () => {
  return (
    <div className='awards-container'>

      <Swiper
        slidesPerView={5}
        spaceBetween={5}
        className=""
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1180: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1320: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
        modules={[Autoplay]}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}>

        {
            maplanacakMelumatlar.map(birmelumat => (
              <SwiperSlide>

                  <Award
                    meqaleninBashligi={birmelumat.bashliq}
                    meqaleninIconu={birmelumat.ikon}
                    meqaleninMetni={birmelumat.paraqraf}
                  />

              </SwiperSlide>
            ))
        }

        </Swiper>

    </div>
  )
}



export default AwardsContainer
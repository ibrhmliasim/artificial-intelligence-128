

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

import shirketlerMelumati from "../shirketlerHaqqinda.json"
import PartnerCompany from './PartnerCompany'
import '../components/PartnerCompany.css'

const PartnerContainer = () => {
  return (
    <div className='shirketler-divi'>

    <Swiper slidesPerView={4}  className="mySwiper"
            spaceBetween={180}

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
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1180: {
                  slidesPerView: 4,
                  spaceBetween: 60,
                },
                1380: {
                  slidesPerView: 5,
                  spaceBetween: 80,
                },

              }}

            modules={[Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}>
        {
            shirketlerMelumati.map(birShirketMelumati=>(
                <SwiperSlide> <PartnerCompany shirketinLogosu={birShirketMelumati.img} shirketinAdi={birShirketMelumati.shirket_adi}/> </SwiperSlide>

            ))
        }
    </Swiper>
    </div>
  )
}

export default PartnerContainer
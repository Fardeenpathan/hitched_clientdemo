
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function CoupleMessage() {
  return (
    <>
      <div className="md:bg-[url('/assets/couple_bgt.png')] bg-[url('/assets/desktop_couple_bg.jpg')] bg-cover bg-no-repeat">
        <div className="lg:h-850 md:h-350 h-560 pt-2 flex flex-col  items-center">
          <h1 className="lg:text-[40px] md:text-3xl text-[32px] text-center text-[#FFF5B9] lg:pt-36 pt-12 font-Cormorant-upright px-6 leading-12">
            A message from the couple
          </h1>
          <h2 className="lg:text-[30px] text-[18px]  text-center text-[#FFF5B9] lg:px-60 px-6 lg:mt-28 mt-12 font-Cormorant-upright lg:leading-8 md:leading-8 leading-6">
            From different traditions to one beautiful journey, join us as we
            celebrate love, laughter, and forever. This moment wouldn’t be the
            same without the people we love most. Thank you for your love,
            blessings, and for making our journey even more special, we’re so
            excited to celebrate together!
          </h2>
          <div className="w-full md:w-3/4 md:mt-32 mt-12">
            <Swiper
              effect={"coverflow"}
              centeredSlides={true}
              // slidesPerView={5}
              breakpoints={{
                0: {
                  slidesPerView: 1.5,
                },
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={-60}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              speed={1200}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 300,
                modifier: 2,
                slideShadows: false,
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="/assets/couple_img_1.webp" className="rounded-4xl border-6 border-amber-400"/>
              </SwiperSlide>

               <SwiperSlide>
                <img src="/assets/couple_img_2.webp" className="rounded-4xl border-6 border-amber-400"/>
              </SwiperSlide>

               <SwiperSlide>
                <img src="/assets/couple_img_3.webp" className="rounded-4xl border-6 border-amber-400"/>
              </SwiperSlide>

               <SwiperSlide>
                <img src="/assets/couple_img_4.webp" className="rounded-4xl border-6 border-amber-400"/>
              </SwiperSlide>

               <SwiperSlide>
                <img src="/assets/couple_img_5.webp" className="rounded-4xl border-6 border-amber-400"/>
              </SwiperSlide>

               <SwiperSlide>
                <img src="/assets/couple_img_1.webp" className="rounded-4xl border-6 border-amber-400"/>
              </SwiperSlide>

               <SwiperSlide>
                <img src="/assets/couple_img_1.webp" className="rounded-4xl border-6 border-amber-400"/>
              </SwiperSlide>

          
            </Swiper>
          </div>

          <h1 className=" lg:text-[100px] text-[60px] md:text-3xl text-center text-[#FFF5B9] lg:pt-32 pt-12 font-Cormorant-upright">
            Things to <br /> know
          </h1>
          <h2 className="lg:text-[30px] text-[18px] text-center text-[#FFF5B9] lg:pt-6 lg:px-60 px-6 lg:mt-4 mt-2 font-cormorant">
            To help you feel at ease and enjoy every moment of the celebrations,
            we’ve gathered a few thoughtful details we’d love for you to know
            before the big day.
          </h2>
          <div className="flex justify-center mt-20 pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-24 gap-10 sm:gap-16">
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src="/assets/weather_h.png"
                  alt="weather"
                  className="lg:h-20 lg:w-24 h-26 w-32 "
                />
                <h2 className="lg:text-[32px] text-[50px] text-[#FFF5B9] mt-2 font-Cormorant-upright">
                  Weather
                </h2>
                <p className="md:text-[18px] text-[14px] text-[#FFF5B9] mt-1 font-cormorant md:leading-5">
                 Clouds may drop by uninvited, <br/>but so will great vibes and better dance moves.<br/>
A little rain never stopped a good celebration anyway.
                </p>
              </div>
             
              <div className="flex flex-col items-center justify-center text-center">
                <img
                  src="/assets/car_h.png"
                  alt="car"
                  className="lg:h-20 lg:w-24 h-26 w-32 "
                />
                <h2 className="lg:text-[32px] text-[50px] text-[#FFF5B9] mt-2 font-Cormorant-upright">
                  Parking
                </h2>
                <p className="md:text-[18px] text-[14px] md:leading-5 text-[#FFF5B9] mt-1 font-cormorant">
                  Valet parking for all our <br />
                  guests will be available <br />
                  at the venue.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center lg:mt-20 lg:ml-140 ml-34">
            <h2 className="lg:text-5xl text-[22px] text-center text-[#FFF5B9] lg:pt-63 pt-12 font-Cormorant-upright md:leading-12 leading-6">
              Looking Forward to <br /> Seeing You
            </h2>
            <div className="flex flex-col-1 md:gap-4 gap-2 justify-center items-center md:not-first:mt-4 ">
              <a href="https://wa.link/5ad8dn" target="_blank">
                <img src="/assets/whatsapp.png" alt="" className="lg:h-10 lg:w-10 h-6 w-6" />
              </a>
              <h2 className="lg:text-3xl text-[18px] text-center text-[#FFF5B9]  font-Cormorant-upright">
                Click the Link to RSVP
              </h2>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
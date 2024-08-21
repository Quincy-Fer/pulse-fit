"use client";

import Image from "next/image";

//  import swiper components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { TESTIMONIALS } from "@/constants";
import { FaQuoteLeft } from "react-icons/fa6";
import SwiperNavButtons from "./SwiperNavButtons";

const Testimonials = () => {
  return (
    <section className="mx-auto max-w-[1440px]">
      <div className="p-8 mx-auto flex flex-col justify-center">
        <h2 className="text-5xl tracking-tight  text-center leading-tight ">
          Real Stories, Real Results
        </h2>
        <p className="tracking-[3px] text-center mt-2 text">
          Read why our members love being a part of PulseFit:
        </p>
      </div>
      <Swiper
        className="h-[550px]"
        slidesPerView={1}
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {TESTIMONIALS.map((item) => {
          return (
            <SwiperSlide key={item.key} className="">
              <div className="flex flex-col  justify-center">
                <div className="h-[200px] w-[200px] mt-8 self-center">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="bg-cover w-full h-full border border-gray-500 rounded-full"
                  />
                </div>
                <div className="flex flex-col justify-center p-4">
                  <FaQuoteLeft className="self-center mt-2 text-4xl text-accent" />
                  <p className="text-gray-800 text-center p-2 leading-relaxed">{item.text}</p>
                  <p className="self-center mt-4 font-bold tracking-[3px]">
                    {item.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <SwiperNavButtons
          containerStyles="absolute top-20  w-full z-50 flex lg:justify-between "
          btnStyles=" bg-accent text-white w-[56px] h-[56px] flex justify-center items-center 
        hover:bg-black transition-all duration-300"
          iconStyles="text-4xl"
        />
      </Swiper>
    </section>
  );
};

export default Testimonials;

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

const Testimonials = () => {
  return (
    <section className="mx-auto max-w-[1440px]">
      <div className="p-8 mx-auto flex flex-col justify-center">
        <h2 className="text-5xl tracking-tight  text-center leading-tight ">
          Real Stories, Real Results
        </h2>
        <p className="tracking-[3px] text-center mt-2 font-bold">
          Read why our members love being a part of PulseFit:
        </p>
      </div>
      <Swiper
        className="h-[700px]"
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
            <SwiperSlide key={item.key} className="h-full">
             
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

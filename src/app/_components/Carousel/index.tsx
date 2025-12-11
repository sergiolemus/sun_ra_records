"use client";

import { useState } from "react";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { NavButtons } from "./NavButtons";
import { Box } from "@mui/material";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type CarouselProps = {
  items: React.JSX.Element[];
};

export const Carousel = ({ items }: CarouselProps) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <Box
      sx={{
        flex: 3,
        width: "75%",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 20,
          depth: 20,
          modifier: 30,
          slideShadows: true,
        }}
        onSwiper={setSwiper}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
      <NavButtons swiper={swiper} />
    </Box>
  );
};

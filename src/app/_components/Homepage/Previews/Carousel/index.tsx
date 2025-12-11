"use client";

import { useState } from "react";
import { EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { NavButtons } from "./NavButtons";
import { Box, Card, CardContent, Typography } from "@mui/material";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type CarouselProps = {
  items: {
    title: string;
    artist: string;
    src: string;
  }[];
  activeIndex?: number;
  setActiveIndex?: (index: number) => void;
};

export const Carousel = ({
  items,
  activeIndex: parentActiveIndex,
  setActiveIndex: parentSetActiveIndex,
}: CarouselProps) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const index = parentActiveIndex ?? activeIndex;

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
          slideShadows: false,
        }}
        onSwiper={setSwiper}
        onSlideChange={({ realIndex }) => {
          if (parentSetActiveIndex) {
            parentSetActiveIndex(realIndex);
            return;
          }

          setActiveIndex(realIndex);
        }}
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
            <Card
              variant="outlined"
              key={index}
              sx={{
                display: "flex",
                border: "none",
                borderRadius: 8,
                width: "75%",
              }}
            >
              <Box
                component="img"
                src={item.src}
                alt={`${item.artist} ${item.title}`}
                sx={{ width: "100%" }}
              />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mx: 12,
          justifyContent: "space-between",
        }}
      >
        <Card elevation={0} sx={{ background: "transparent", color: "white" }}>
          <CardContent>
            <Typography variant="h4" fontWeight="bold" fontSize={20} pb={0.5}>
              {items[index].title}
            </Typography>
            <Typography variant="body1" fontSize={16}>
              {items[index].artist}
            </Typography>
          </CardContent>
        </Card>
        <NavButtons swiper={swiper} />
      </Box>
    </Box>
  );
};
